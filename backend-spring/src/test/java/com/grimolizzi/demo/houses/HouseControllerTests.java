package com.grimolizzi.demo.houses;

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
import java.util.List;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest
@ContextConfiguration(classes = HouseController.class)
public class HouseControllerTests {

  private static final String URL_TEMPLATE = "/api/v1/houses";

  @Autowired private MockMvc mockMvc;
  @MockBean private HouseService houseService;

  private final ArgumentCaptor<House> argumentCaptor = ArgumentCaptor.forClass(House.class);

  private static final House gryffindor = new House("Gryffindor");
  private static final House ravenclaw = new House("Ravenclaw");

  @Test
  void shouldGetAll() throws Exception {
    when(houseService.findAll()).thenReturn(List.of(gryffindor, ravenclaw));

    this.mockMvc
        .perform(get(URL_TEMPLATE))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(2)))
        .andExpect(jsonPath("$[0].name", equalTo("Gryffindor")))
        .andExpect(jsonPath("$[1].name", equalTo("Ravenclaw")));
  }

  @Test
  void shouldSave() throws Exception {
    var jsonBody = new ObjectMapper().writeValueAsString(gryffindor);
    this.mockMvc
        .perform(post(URL_TEMPLATE).content(jsonBody).contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isCreated());

    verify(this.houseService).save(argumentCaptor.capture());
    assertEquals("Gryffindor", argumentCaptor.getValue().getName());
  }
}
