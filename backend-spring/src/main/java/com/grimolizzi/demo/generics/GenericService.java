package com.grimolizzi.demo.generics;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

public class GenericService<E, R extends JpaRepository<E, UUID>> {

  protected final R repository;

  @Autowired
  public GenericService(R repository) {
    this.repository = repository;
  }

  public List<E> findAll() {
    return this.repository.findAll();
  }

  public Optional<E> findById(UUID id) {
    return this.repository.findById(id);
  }

  @Transactional
  public E save(E entity) {
    return this.repository.save(entity);
  }
}
