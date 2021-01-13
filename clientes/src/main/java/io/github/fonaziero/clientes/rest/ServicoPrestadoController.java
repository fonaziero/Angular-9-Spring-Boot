package io.github.fonaziero.clientes.rest;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.fonaziero.clientes.model.entity.Cliente;
import io.github.fonaziero.clientes.model.entity.ServicoPrestado;
import io.github.fonaziero.clientes.model.repository.ClienteRepository;
import io.github.fonaziero.clientes.model.repository.ServicoPrestadoRepository;
import io.github.fonaziero.clientes.rest.dto.ServicoPrestadoDTO;
import io.github.fonaziero.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/servico-prestado")
public class ServicoPrestadoController {
	
	private final ClienteRepository clienteRepository;
	private final ServicoPrestadoRepository repository;
	private final BigDecimalConverter bigDecimal;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ServicoPrestado salvar(@RequestBody @Valid ServicoPrestadoDTO dto) {
		
		LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
		
		Integer idCliente = dto.getIdCliente();
		
		ServicoPrestado servicoPrestado = new ServicoPrestado();
		
		Cliente cliente = 
				clienteRepository
						.findById(idCliente)
						.orElseThrow(() -> 
							new ResponseStatusException(
									HttpStatus.BAD_REQUEST, "Cliente não existe"));
		
		
		servicoPrestado.setDescricao(dto.getDescricao());
		servicoPrestado.setData(data);
		servicoPrestado.setCliente(cliente);
		servicoPrestado.setValor(bigDecimal.converter(dto.getPreco()));
		
		return repository.save(servicoPrestado);
		
	}

	@GetMapping
	public List<ServicoPrestado> pesquisar(
			@RequestParam(value = "nome", required = false, defaultValue = "") String nome,
			@RequestParam(value = "mes", required = false) Integer mes
			){
		
		return repository.findByClienteAndMes(nome = "%" + nome + "%", mes);
	}
}
