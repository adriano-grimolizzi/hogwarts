package com.grimolizzi.demo.wizards;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grimolizzi.demo.houses.House;
import java.util.List;
import java.util.UUID;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest
@ContextConfiguration(classes = WizardController.class)
public class WizardControllerTests {

  private static final String URL_TEMPLATE = "/api/v1/wizards";

  @Autowired private MockMvc mockMvc;
  @MockBean private WizardService wizardService;

  private final ArgumentCaptor<WizardDto> argumentCaptor = ArgumentCaptor.forClass(WizardDto.class);

  private static final House gryffindor = new House(null, "Gryffindor", null);
  private static final Wizard harry = new Wizard(UUID.randomUUID(), "Harry", "Potter", gryffindor);
  private static final Wizard ron = new Wizard(UUID.randomUUID(), "Ronald", "Weasley", gryffindor);

  @Test
  void shouldGetAll() throws Exception {
    when(wizardService.findAll()).thenReturn(List.of(harry, ron));

    this.mockMvc
        .perform(get(URL_TEMPLATE))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(2)))
        .andExpect(jsonPath("$[0].firstName", equalTo("Harry")))
        .andExpect(jsonPath("$[1].firstName", equalTo("Ronald")));
  }

  @Test
  void shouldSave() throws Exception {
    var dto = new WizardDto(UUID.randomUUID(), "Luna", "Lovegood", "Ravenclaw");
    var jsonBody = new ObjectMapper().writeValueAsString(dto);
    this.mockMvc
        .perform(
            post(STR."\{URL_TEMPLATE}/withHouse")
                .content(jsonBody)
                .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isCreated());

    verify(this.wizardService).save(argumentCaptor.capture());
    assertEquals("Luna", argumentCaptor.getValue().firstName());
  }
}
