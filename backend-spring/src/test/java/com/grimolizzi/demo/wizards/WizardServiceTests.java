package com.grimolizzi.demo.wizards;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = WizardService.class)
@DisplayName("Wizard Service")
public class WizardServiceTests {

  @Autowired WizardService service;
  @Autowired WizardRepository repository;

  @BeforeEach
  void deleteAll() {
    repository.deleteAll();
  }

  @Test
  @DisplayName("should find all wizards")
  void shouldFindAll() {
    repository.saveAll(
        List.of(
            new Wizard("Harry", "Potter"),
            new Wizard("Ronald", "Weasley"),
            new Wizard("Hermione", "Granger")));

    var result = service.findAll();
    assertEquals(3, result.size());
    assertEquals("Harry", result.get(0).getFirstName());
    assertEquals("Ronald", result.get(1).getFirstName());
    assertEquals("Hermione", result.get(2).getFirstName());
  }

  @Test
  @DisplayName("should find wizard by ID")
  void shouldFindById() {
    var saved = repository.save(new Wizard("Percy", "Weasley"));
    var result = service.findById(saved.getId());

    assertTrue(result.isPresent());
    assertEquals("Percy", result.get().getFirstName());
  }

  @Test
  @DisplayName("should save wizard")
  void shouldSave() {
    var saved = service.save(new Wizard("Penelope", "Clearwater"));
    var result = repository.findById(saved.getId());

    assertTrue(result.isPresent());
    assertEquals("Penelope", result.get().getFirstName());
  }
}
