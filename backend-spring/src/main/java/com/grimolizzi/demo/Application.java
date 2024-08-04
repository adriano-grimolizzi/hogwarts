package com.grimolizzi.demo;

import com.grimolizzi.demo.houses.House;
import com.grimolizzi.demo.houses.HouseRepository;
import com.grimolizzi.demo.wizards.Wizard;
import com.grimolizzi.demo.wizards.WizardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.List;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(WizardRepository wizardRepo, HouseRepository houseRepo) {
        return (_ -> {
            var gryffindor = new House(null, "Gryffindor", null);

            wizardRepo.saveAll(List.of(
                    new Wizard(null, "Harry", "Potter", gryffindor),
                    new Wizard(null, "Ronald", "Wesley", gryffindor),
                    new Wizard(null, "Hermione", "Granger", gryffindor)
            ));
        });
    }
}
