package com.grimolizzi.demo.houses;

import com.grimolizzi.demo.generics.GenericController;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/houses")
@CrossOrigin(origins = "http://localhost:3000")
public class HouseController extends GenericController<House> {

  private final HouseService houseService = (HouseService) super.service;

  @Autowired
  public HouseController(HouseService service) {
    super(service);
  }

  @GetMapping("/name/{name}")
  public Optional<House> findByName(@PathVariable String name) {
    return this.houseService.findByName(name);
  }
}
