CREATE TABLE tienda (id INTEGER PRIMARY KEY, name TEXT, stock INTEGER, pmenor INTEGER,  pmayor INTEGER);

INSERT INTO tienda VALUES (1, "remera roja", 4, 100, 100);
INSERT INTO tienda VALUES (2, "remera verde", 1, 150, 100);
INSERT INTO tienda VALUES (3, "remera azul", 2, 200, 150);
INSERT INTO tienda VALUES (4, "remera negra", 4, 250, 200);
INSERT INTO tienda VALUES (5, "remera blanca", 1, 300, 250);
INSERT INTO tienda VALUES (6, "sueter rojo", 2, 350, 300);
INSERT INTO tienda VALUES (7, "sueter azul", 4, 400, 350);
INSERT INTO tienda VALUES (8, "sueter verde", 1, 450, 400);
INSERT INTO tienda VALUES (9, "sueter negro", 2, 500, 450);
INSERT INTO tienda VALUES (10, "sueter blanco", 4, 550, 500);
INSERT INTO tienda VALUES (11, "gorra verde", 1, 125, 100);
INSERT INTO tienda VALUES (12, "gorra blanca", 2, 225, 200);
INSERT INTO tienda VALUES (13, "gorra azul", 4, 325, 300);
INSERT INTO tienda VALUES (14, "gorra roja", 1, 425, 400);
INSERT INTO tienda VALUES (15, "gorra negra", 2, 525, 500);

SELECT * FROM tienda;

SELECT * FROM tienda WHERE pmenor > 0 ORDER BY pmenor;

SELECT stock, MIN(stock) FROM tienda;
