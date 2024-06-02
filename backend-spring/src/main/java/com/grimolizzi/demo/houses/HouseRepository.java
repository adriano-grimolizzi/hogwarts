package com.grimolizzi.demo.houses;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends JpaRepository<House, UUID> {

  Optional<House> findByNameIgnoreCase(String name);
}
