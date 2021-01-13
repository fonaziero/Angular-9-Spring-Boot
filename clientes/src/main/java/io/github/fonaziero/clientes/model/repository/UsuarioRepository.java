package io.github.fonaziero.clientes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.fonaziero.clientes.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
	
}
