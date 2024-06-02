package com.grimolizzi.demo;

import com.grimolizzi.demo.wizards.Wizard;
import com.grimolizzi.demo.wizards.WizardRepository;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Bean
  public CommandLineRunner commandLineRunner(WizardRepository wizardRepository) {
    return (args -> {
      var harry = new Wizard("Harry", "Potter");
      var ron = new Wizard("Ronald", "Wesley");
      var hermione = new Wizard("Hermione", "Granger");

      wizardRepository.saveAll(List.of(harry, ron, hermione));
    });
  }
}
