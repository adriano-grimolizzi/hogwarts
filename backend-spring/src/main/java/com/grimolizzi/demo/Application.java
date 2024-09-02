package com.grimolizzi.demo;

import com.grimolizzi.demo.houses.House;
import com.grimolizzi.demo.houses.HouseRepository;
import com.grimolizzi.demo.wizards.Wizard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Autowired HouseRepository houseRepository;

  @Override
  public void run(String... strings) {

    var gryffindor = new House("Gryffindor");

    gryffindor.add(new Wizard("Harry", "Potter"));
    gryffindor.add(new Wizard("Ronald", "Wesley"));
    gryffindor.add(new Wizard("Hermione", "Granger"));

    houseRepository.save(gryffindor);
  }
}
