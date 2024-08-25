package com.grimolizzi.demo.generics;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

public class GenericController<
    E, //
    R extends JpaRepository<E, UUID>,
    S extends GenericService<E, R>> {

  protected final S service;

  @Autowired
  public GenericController(S service) {
    this.service = service;
  }

  @GetMapping
  public List<E> getAll() {
    return this.service.findAll();
  }

  @GetMapping("/id/{id}")
  public Optional<E> getById(@PathVariable UUID id) {
    return this.service.findById(id);
  }

  @PostMapping
  @ResponseStatus(value = HttpStatus.CREATED)
  public E save(@RequestBody E entity) {
    return this.service.save(entity);
  }

  @DeleteMapping("/id/{id}")
  public void delete(@PathVariable UUID id) {
    this.service.delete(id);
  }
}
