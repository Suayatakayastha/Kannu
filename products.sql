CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE products (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

INSERT INTO products (id, name, category, price, image) VALUES
('b1', 'Book One', 'Books', 10.99, 'book.jpg'),
('e1', 'Electronic One', 'Electronics', 199.99, 'electronic.jpg'),
('p1', 'Perfume One', 'Perfume', 49.99, 'perfume.jpg');