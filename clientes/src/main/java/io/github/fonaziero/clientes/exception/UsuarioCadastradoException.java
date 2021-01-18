package io.github.fonaziero.clientes.exception;

public class UsuarioCadastradoException extends RuntimeException {
	
	public UsuarioCadastradoException(String login) {
		super("Usuario já cadastrado " + login);
	}
	
}
