package com.grimolizzi.demo;

import com.grimolizzi.demo.houses.House;
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
  public CommandLineRunner commandLineRunner(WizardRepository wizardRepo) {
    return (_ -> {
      var gryffindor = new House(null, "Gryffindor", null);

      var harry = new Wizard(null, "Harry", "Potter", gryffindor);
      var ron = new Wizard(null, "Ronald", "Wesley", gryffindor);
      var hermione = new Wizard(null, "Hermione", "Granger", gryffindor);

      wizardRepo.saveAll(List.of(harry, ron, hermione));
    });
  }
}
