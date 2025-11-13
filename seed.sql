CREATE DATABASE cantina;
\c cantina;

-- Criação das tabelas
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL,
    tipo VARCHAR(20) NOT NULL DEFAULT 'user'
);

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    estoque INTEGER DEFAULT 0
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pendente',
    total DECIMAL(10,2) DEFAULT 0,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE itens_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id) ON DELETE CASCADE,
    food_id INTEGER REFERENCES foods(id),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL
);

INSERT INTO usuarios (nome, email, senha, tipo) VALUES
('Admin', 'admin@cantina.com', '123', 'admin'),
('Fulano', 'fulano@cantina.com', '223', 'user');

INSERT INTO foods (name, descricao, preco, estoque) VALUES
('Coxinha', 'Coxinha de frango', 5.00, 50),
('Pastel', 'Pastel de carne', 7.50, 40),
('Suco', 'Suco natural de laranja', 3.00, 100);

-- Exemplo de pedido do usuário Fulano (id=2)
INSERT INTO pedidos (usuario_id, status) VALUES (2, 'completo');

INSERT INTO itens_pedido (pedido_id, food_id, quantidade, preco_unitario, subtotal) VALUES
(1, 1, 2, 5.00, 10.00),
(1, 3, 1, 3.00, 3.00),
(1, 2, 3, 7.50, 22.50);

UPDATE pedidos SET total = (SELECT SUM(subtotal) FROM itens_pedido WHERE pedido_id = 1) WHERE id = 1;

-- Atualiza estoque conforme pedidos
UPDATE foods SET estoque = estoque - COALESCE((
    SELECT SUM(quantidade) 
    FROM itens_pedido 
    WHERE food_id = foods.id
), 0);

    
   