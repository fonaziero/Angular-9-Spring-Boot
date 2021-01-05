package io.github.fonaziero.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.fonaziero.clientes.model.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

}
