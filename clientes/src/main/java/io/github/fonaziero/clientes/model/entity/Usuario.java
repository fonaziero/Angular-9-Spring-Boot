package io.github.fonaziero.clientes.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotEmpty(message = "{campo.login.obrigatorio}")
	@Column(unique = true, name = "username")
	private String username;
	
	@NotEmpty(message = "{campo.senha.obrigatorio}")
	@Column(name = "password")
	private String password;
}
