package com.grimolizzi.demo.wizards;

import com.grimolizzi.demo.generics.GenericController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/wizards")
@CrossOrigin(origins = "http://localhost:3000")
public class WizardController extends GenericController<Wizard, WizardRepository, WizardService> {

  private static final WizardMapper mapper = WizardMapper.INSTANCE;

  @Autowired
  public WizardController(WizardService service) {
    super(service);
  }

  @GetMapping("/summary")
  public List<WizardSummary> get() {
    return super.getAll().stream().map(mapper::toSummary).toList();
  }

  @GetMapping("/house/{houseName}")
  public List<Wizard> findByHouse(@PathVariable String houseName) {
    return super.service.findByHouse(houseName);
  }
}
