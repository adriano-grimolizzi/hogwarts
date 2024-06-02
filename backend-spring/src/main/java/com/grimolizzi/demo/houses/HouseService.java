package com.grimolizzi.demo.houses;

import com.grimolizzi.demo.generics.GenericService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HouseService extends GenericService<House> {

  private final HouseRepository houseRepository;

  @Autowired
  public HouseService(HouseRepository repository) {
    super(repository);
    this.houseRepository = repository;
  }

  public Optional<House> findByName(String name) {
    return this.houseRepository.findByNameIgnoreCase(name);
  }
}
