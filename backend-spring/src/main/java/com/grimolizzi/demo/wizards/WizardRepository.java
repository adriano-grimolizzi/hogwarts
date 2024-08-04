package com.grimolizzi.demo.wizards;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WizardRepository extends JpaRepository<Wizard, UUID> {

  List<Wizard> findByHouseName(String house);
}
