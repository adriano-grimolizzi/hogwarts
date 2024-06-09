package com.grimolizzi.demo.wizards;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class WizardServiceTests {

  @Autowired WizardService service;
  @Autowired WizardRepository repository;

  @BeforeEach
  void deleteAll() {
    repository.deleteAll();
  }

  @Test
  void shouldFindAll() {
    repository.saveAll(
        List.of(
            new Wizard(null, "Harry", "Potter", null),
            new Wizard(null, "Ronald", "Weasley", null),
            new Wizard(null, "Hermione", "Granger", null)));

    var result = service.findAll();
    assertEquals(3, result.size());
    assertEquals("Harry", result.get(0).getFirstName());
    assertEquals("Ronald", result.get(1).getFirstName());
    assertEquals("Hermione", result.get(2).getFirstName());
  }

  @Test
  void shouldFindById() {
    var saved = repository.save(new Wizard(null, "Percy", "Weasley", null));
    var result = service.findById(saved.getId());

    assertTrue(result.isPresent());
    assertEquals("Percy", result.get().getFirstName());
  }

  @Test
  void shouldSave() {
    var saved = service.save(new Wizard(null, "Penelope", "Clearwater", null));
    var result = repository.findById(saved.getId());

    assertTrue(result.isPresent());
    assertEquals("Penelope", result.get().getFirstName());
  }
}
