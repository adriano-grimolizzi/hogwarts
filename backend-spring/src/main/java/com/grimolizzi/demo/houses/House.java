package com.grimolizzi.demo.houses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grimolizzi.demo.wizards.Wizard;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "house")
public class House {

  @Id @GeneratedValue private UUID id;

  @NonNull
  @Column(name = "name")
  private String name;

  @JsonIgnore
  @OneToMany(
      mappedBy = "house",
      cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
  private List<Wizard> wizards;

  public void add(Wizard wizard) {
    if (wizards == null) {
      wizards = new ArrayList<>();
    }
    wizards.add(wizard);
    wizard.setHouse(this);
  }
}
