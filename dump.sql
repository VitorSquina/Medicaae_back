CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS paciente (
  id_user INT NOT NULL,
  idPaciente SERIAL NOT NULL,
  nomePaciente VARCHAR(45) NOT NULL,
  idadePaciente INT NOT NULL,
  genero VARCHAR(9) NOT NULL,
  numContato INT,
  cpf VARCHAR(45),
  alergia VARCHAR(100),
  statusAlta BOOLEAN,
  PRIMARY KEY (idPaciente),
  CONSTRAINT fk_tratamento_has_paciente
    FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS medicamento (
  id_med SERIAL NOT NULL,
  nome VARCHAR(100) NOT NULL,
  dose VARCHAR(45) NOT NULL,
  descricao VARCHAR(145),
  PRIMARY KEY (id_med)
);

CREATE TABLE IF NOT EXISTS estoque (
    id_user INT NOT NULL,
    idEstoque SERIAL NOT NULL,
    qtdMedicamento INT NOT NULL DEFAULT 1,
    idMed INT,
    PRIMARY KEY (idEstoque),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (idMed) REFERENCES medicamento(id_med)
);
CREATE TABLE IF NOT EXISTS tratamento (
  id_tratamento SERIAL PRIMARY KEY,
  id_paciente INT NOT NULL,
  id_medicamento INT NOT NULL,  
  nome_paciente VARCHAR(255) NOT NULL,
  dosagem VARCHAR(255) NOT NULL,
  intervalo VARCHAR(255) NOT NULL,
  data_inicial DATE NOT NULL,
  duracao VARCHAR(255),
  data_final DATE NOT NULL,
  observacao TEXT,
  status VARCHAR(255) NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (id_paciente) REFERENCES paciente(idPaciente),
  CONSTRAINT fk_medicamento FOREIGN KEY (id_medicamento) REFERENCES medicamento(id_med)
);

CREATE TABLE IF NOT EXISTS cronograma (
  id_tratamento INT NOT NULL, 
  id SERIAL PRIMARY KEY,
  id_paciente VARCHAR(255) NOT NULL,
  horario VARCHAR(255) NOT NULL,
  descricao TEXT,
  status VARCHAR(255) NOT NULL,
  CONSTRAINT fk_cronograma_has_tratamento FOREIGN KEY (id_tratamento) REFERENCES tratamento(id_tratamento)
);

CREATE TABLE IF NOT EXISTS novidades (
  email VARCHAR(100) PRIMARY KEY
);

INSERT INTO medicamento (nome, dose, descricao)
VALUES
('Paracetamol', '500mg', 'Analgésico e antitérmico'),
('Ibuprofeno', '400mg', 'Anti-inflamatório e analgésico'),
('Amoxicilina', '500mg', 'Antibiótico de largo espectro'),
('Dipirona', '1g', 'Analgésico e antitérmico potente'),
('Omeprazol', '20mg', 'Inibidor de bomba de prótons, usado para gastrite e úlceras'),
('Losartana', '50mg', 'Anti-hipertensivo'),
('Aspirina', '100mg', 'Antiplaquetário e analgésico'),
('Metformina', '850mg', 'Tratamento para diabetes tipo 2'),
('Cetirizina', '10mg', 'Antialérgico'),
('Clonazepam', '2mg', 'Ansiolítico e anticonvulsivante');
