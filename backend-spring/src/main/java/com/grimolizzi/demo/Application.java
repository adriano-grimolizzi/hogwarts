package com.grimolizzi.demo;

import com.grimolizzi.demo.houses.House;
import com.grimolizzi.demo.wizards.Wizard;
import com.grimolizzi.demo.wizards.WizardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(WizardRepository wizardRepo) {
        return (_ -> {
            var gryffindor = new House(null, "Gryffindor", null);

            wizardRepo.saveAll(List.of(
                    new Wizard(null, "Harry", "Potter", new Date(1980, Calendar.JULY, 31), "harry.potter@hogwarts.edu", gryffindor),
                    new Wizard(null, "Ronald", "Wesley", new Date(1980, Calendar.MARCH, 1), "ronald.weasley@hogwarts.edu", gryffindor),
                    new Wizard(null, "Hermione", "Granger", new Date(1980, Calendar.SEPTEMBER, 19), "hermione.granger@hogwarts.edu", gryffindor)
            ));
        });
    }
}
