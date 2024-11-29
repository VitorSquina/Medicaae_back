create database medicaae;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS paciente (
    id_user NOT NULL,
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
		FOREIGN KEY (id_user) REFERENCES users(id)
        FOREIGN KEY (idtratamento) REFERENCES tratamento(id_tratamento)
);

CREATE TABLE IF NOT EXISTS medicamento (
    id_med SERIAL NOT NULL,
    nome VARCHAR(100) NOT NULL,
    dose VARCHAR(45) NOT NULL,
	descricao VARCHAR(145),
    qtdMedicamento INT NOT NULL DEFAULT '1',
    PRIMARY KEY (id_med)
);

CREATE TABLE IF NOT EXISTS tratamento (
    id_tratamento SERIAL PRIMARY KEY,
    id_paciente VARCHAR(255) NOT NULL,
    id_medicamento VARCHAR(255) NOT NULL,
    nome_paciente VARCHAR(255) NOT NULL,
    dosagem VARCHAR(255) NOT NULL,
    intervalo VARCHAR(255) NOT NULL,
    data_inicial DATE NOT NULL,
    duracao VARCHAR(255),
    data_final DATE NOT NULL,
    observacao TEXT,
    status VARCHAR(255) NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (id_paciente) REFERENCES paciente(idadePaciente),  
    CONSTRAINT fk_medicamento FOREIGN KEY (id_medicamento) REFERENCES medicamentos(id)
);

CREATE TABLE IF NOT EXISTS cronograma (
    id_tratamento NOT NULL,
    id SERIAL PRIMARY KEY,
    id_paciente VARCHAR(255) NOT NULL,
    horario VARCHAR(255) NOT NULL,
    descricao TEXT,
    status VARCHAR(255) NOT NULL
    CONSTRAINT fk_cronograma_has_tratamento
    FOREIGN KEY (id_tratamento) REFERENCES tratamento(id_tratamento)
);

CREATE TABLE IF NOT EXISTS novidades (
	email VARCHAR(100)
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