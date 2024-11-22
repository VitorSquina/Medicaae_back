create database medicaae;

CREATE TABLE IF NOT EXISTS medicamento (
    id_med SERIAL NOT NULL,
    nome VARCHAR(100) NOT NULL,
    dose VARCHAR(45) NOT NULL,
	descricao VARCHAR(145),
    tipo BOOLEAN NOT NULL,
    PRIMARY KEY (id_med)
);

CREATE TABLE IF NOT EXISTS tratamento (
    id_tratamento SERIAL NOT NULL,
	dosagem INT NOT NULL,
	hora_admin TIMESTAMP NOT NULL,
	intervalo TIMESTAMP NOT NULL,
	duracao INT NOT NULL,
	nomeMed VARCHAR(145),
	descricao VARCHAR(145),
	idmed INT,
	PRIMARY KEY (id_tratamento),
	CONSTRAINT fk_tratamentp_has_medicamento
		FOREIGN KEY (idmed) REFERENCES medicamento(id_med)
);

CREATE TABLE IF NOT EXISTS paciente (
    idPaciente SERIAL NOT NULL,
    nomePaciente VARCHAR(45) NOT NULL,
    idadePaciente INT NOT NULL,
    genero BOOLEAN NOT NULL,
    numContato INT,
    cpf VARCHAR(45),
    alergia VARCHAR(100),
    statusAlta BOOLEAN,
	idtratamento INT,
    PRIMARY KEY (idPaciente),
	CONSTRAINT fk_tratamento_has_paciente
		FOREIGN KEY (idtratamento) REFERENCES tratamento(id_tratamento)
);

CREATE TABLE IF NOT EXISTS usuario (
    idUsuario SERIAL NOT NULL,
    email VARCHAR(45) NOT NULL,
	senha VARCHAR(45),
	nomeUsuario VARCHAR(45) NOT NULL,
    PRIMARY KEY (idUsuario)
);

CREATE TABLE IF NOT EXISTS estoque (
	idEstoque SERIAL NOT NULL,
	qtdMedicamento INT NOT NULL DEFAULT '1',
	idMed INT,
	PRIMARY KEY (idEstoque)
);

CREATE TABLE IF NOT EXISTS novidades (
	email VARCHAR(100)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);



//INSERTS

INSERT INTO medicamento (nome, dose, descricao, tipo)
VALUES
('Paracetamol', '500mg', 'Analgésico e antitérmico', TRUE),
('Ibuprofeno', '400mg', 'Anti-inflamatório e analgésico', TRUE),
('Amoxicilina', '500mg', 'Antibiótico de largo espectro', TRUE),
('Dipirona', '1g', 'Analgésico e antitérmico potente', TRUE),
('Omeprazol', '20mg', 'Inibidor de bomba de prótons, usado para gastrite e úlceras', TRUE),
('Losartana', '50mg', 'Anti-hipertensivo', TRUE),
('Aspirina', '100mg', 'Antiplaquetário e analgésico', TRUE),
('Metformina', '850mg', 'Tratamento para diabetes tipo 2', TRUE),
('Cetirizina', '10mg', 'Antialérgico', TRUE),
('Clonazepam', '2mg', 'Ansiolítico e anticonvulsivante', TRUE);