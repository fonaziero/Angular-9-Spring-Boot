package io.github.fonaziero.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.fonaziero.clientes.model.entity.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Integer>{

}
