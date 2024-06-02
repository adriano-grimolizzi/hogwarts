package com.grimolizzi.demo.generics;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

public class GenericController<T> {

  protected final GenericService<T> service;

  @Autowired
  public GenericController(GenericService<T> service) {
    this.service = service;
  }

  @GetMapping
  public List<T> findAll() {
    return this.service.findAll();
  }

  @GetMapping("/{id}")
  public Optional<T> findById(@PathVariable UUID id) {
    return this.service.findById(id);
  }

  @PostMapping
  @ResponseStatus(value = HttpStatus.CREATED)
  public T save(@RequestBody T t) {
    return this.service.save(t);
  }
}
