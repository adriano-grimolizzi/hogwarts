package com.grimolizzi.demo.wizards;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface WizardMapper {

  WizardMapper INSTANCE = Mappers.getMapper(WizardMapper.class);

  @Mapping(source = "house.name", target = "house")
  WizardSummary toSummary(Wizard wizard);
}
