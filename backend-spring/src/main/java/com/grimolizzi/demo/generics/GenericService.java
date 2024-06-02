package com.grimolizzi.demo.generics;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract class GenericService<T> {

  protected final JpaRepository<T, UUID> repository;

  @Autowired
  public GenericService(JpaRepository<T, UUID> repository) {
    this.repository = repository;
  }

  public List<T> findAll() {
    return this.repository.findAll();
  }

  public Optional<T> findById(UUID id) {
    return this.repository.findById(id);
  }

  @Transactional
  public T save(T t) {
    return this.repository.save(t);
  }
}
