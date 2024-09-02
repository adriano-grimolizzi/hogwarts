package com.grimolizzi.demo.wizards;

import com.grimolizzi.demo.generics.GenericService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WizardService extends GenericService<Wizard, WizardRepository> {

  @Autowired
  public WizardService(WizardRepository wizardRepository) {
    super(wizardRepository);
  }

  public List<Wizard> findByHouse(String house) {
    return super.repository.findByHouseNameIgnoreCase(house);
  }
}
