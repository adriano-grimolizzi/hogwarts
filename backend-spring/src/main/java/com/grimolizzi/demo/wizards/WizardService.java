package com.grimolizzi.demo.wizards;

import com.grimolizzi.demo.generics.GenericService;
import com.grimolizzi.demo.houses.HouseRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WizardService extends GenericService<Wizard> {

  private final WizardRepository wizardRepository;
  private final HouseRepository houseRepository;

  @Autowired
  public WizardService(WizardRepository wizardRepository, HouseRepository houseRepository) {
    super(wizardRepository);
    this.wizardRepository = wizardRepository;
    this.houseRepository = houseRepository;
  }

  public Optional<List<Wizard>> findByHouse(String houseName) {
    return this.houseRepository
        .findByNameIgnoreCase(houseName)
        .map(this.wizardRepository::findByHouse);
  }

  @Transactional
  public Optional<Wizard> save(WizardDto wizardDto) {
    return this.houseRepository
        .findByNameIgnoreCase(wizardDto.house())
        .map(house -> this.wizardRepository.save(new Wizard(wizardDto, house)));
  }
}
