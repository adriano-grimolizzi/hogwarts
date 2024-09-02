package com.grimolizzi.demo.wizards;

import com.grimolizzi.demo.houses.House;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.util.Date;
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
@Table(name = "wizard")
public class Wizard {

  @Id @GeneratedValue private UUID id;

  @NonNull
  @Column(name = "first_name")
  private String firstName;

  @NonNull
  @Column(name = "last_name")
  private String lastName;

  @Column(name = "birthDate")
  private Date birthDate;

  @Column(name = "email")
  private String email;

  @ManyToOne(
      fetch = FetchType.LAZY,
      cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
  @JoinColumn(name = "house_id")
  private House house;
}
