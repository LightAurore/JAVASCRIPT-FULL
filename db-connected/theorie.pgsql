/* ---------------------------------
SQL
----------------------------------*/
---- 
SELECT
FROM
WHERE
ORDER BY
---- 
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY

-- WHERE nom_col (=|<|<=|>|>=|<>|BETWEEN x AND y|LIKE '__s%'|IN()|ILIKE|AND|OR|IS NULL|NOT(LIKE,IN,BETWEEN))

### WHERE
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;

### NOT
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
### OR
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
### AND
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;

### ORDER BY
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;

### INSERT INTO
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO table_name
VALUES (value1, value2, value3, ...);

### NULL | IS NULL
SELECT column_names
FROM table_name
WHERE column_name IS NULL;

SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;

### UPDATE  The UPDATE statement is used to modify the existing records in a table.
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

### DELETE
DELETE FROM table_name WHERE condition;

### SELECT
SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;

### LIMIT
SELECT * FROM customers
LIMIT 20 OFFSET 40;

SELECT * FROM customers
LIMIT 20;

/*   MAX()   MIN()  */
### 
SELECT MAX(price)
FROM products;

SELECT MIN(price)
FROM products;


### COUNT
SELECT COUNT(customer_id)
FROM customers;

SELECT COUNT(customer_id)
FROM customers
WHERE city = 'London';

### SUM
SELECT SUM(quantity)
FROM order_details;

### AVG
SELECT AVG(price)
FROM products;

### LIKE & ILIKE
SELECT * FROM customers
WHERE customer_name LIKE '%A%';

SELECT * FROM customers
WHERE city LIKE 'L_nd__';

SELECT * FROM customers
WHERE customer_name ILIKE '%A%';


### IN
SELECT * FROM customers
WHERE country IN ('Germany', 'France', 'UK');

SELECT * FROM customers
WHERE country NOT IN ('Germany', 'France', 'UK');

SELECT * FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);

SELECT * FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);

### BETWEEN
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 15;

SELECT * FROM Products
WHERE product_name BETWEEN 'Pavlova' AND 'Tofu';

SELECT * FROM Products
WHERE product_name BETWEEN 'Pavlova' AND 'Tofu'
ORDER BY product_name;

SELECT * FROM orders
WHERE order_date BETWEEN '2023-04-12' AND '2023-05-05';

### AS
SELECT customer_id id
FROM customers;

SELECT product_name || unit AS product
FROM products; 


/*
    Jointure
*/
### JOIN
SELECT product_id, product_name, category_name
FROM products
INNER JOIN categories ON products.category_id = categories.category_id;

### INNER JOIN
SELECT testproduct_id, product_name, category_name
FROM testproducts
INNER JOIN categories ON testproducts.category_id = categories.category_id;

### LEFT JOIN
SELECT testproduct_id, product_name, category_name
FROM testproducts
LEFT JOIN categories ON testproducts.category_id = categories.category_id;

### RIGHT JOIN
SELECT testproduct_id, product_name, category_name
FROM testproducts
RIGHT JOIN categories ON testproducts.category_id = categories.category_id;

### FULL JOIN
SELECT testproduct_id, product_name, category_name
FROM testproducts
FULL JOIN categories ON testproducts.category_id = categories.category_id;

### CROSS JOIN
SELECT testproduct_id, product_name, category_name
FROM testproducts
CROSS JOIN categories;

### UNION & UNION ALL
SELECT product_id, product_name
FROM products
UNION
SELECT testproduct_id, product_name
FROM testproducts
ORDER BY product_id;

SELECT product_id
FROM products
UNION ALL
SELECT testproduct_id
FROM testproducts
ORDER BY product_id;


### GROUP BY
SELECT COUNT(customer_id), country
FROM customers
GROUP BY country;

SELECT customers.customer_name, COUNT(orders.order_id)
FROM orders
LEFT JOIN customers ON orders.customer_id = customers.customer_id
GROUP BY customer_name;

### HAVING
SELECT COUNT(customer_id), country
FROM customers
GROUP BY country
HAVING COUNT(customer_id) > 5;

SELECT order_details.order_id, SUM(products.price)
FROM order_details
LEFT JOIN products ON order_details.product_id = products.product_id
GROUP BY order_id
HAVING SUM(products.price) > 400.00;

SELECT customers.customer_name, SUM(products.price)
FROM order_details
LEFT JOIN products ON order_details.product_id = products.product_id
LEFT JOIN orders ON order_details.order_id = orders.order_id
LEFT JOIN customers ON orders.customer_id = customers.customer_id
GROUP BY customer_name
HAVING SUM(products.price) > 1000.00;

### EXISTS
SELECT customers.customer_name
FROM customers
WHERE EXISTS (
  SELECT order_id
  FROM orders
  WHERE customer_id = customers.customer_id
);

SELECT customers.customer_name
FROM customers
WHERE NOT EXISTS (
  SELECT order_id
  FROM orders
  WHERE customer_id = customers.customer_id
);

### ANY
SELECT product_name
FROM products
WHERE product_id = ANY (
  SELECT product_id
  FROM order_details
  WHERE quantity > 120
);

### ALL
SELECT product_name
FROM products
WHERE product_id = ALL (
  SELECT product_id
  FROM order_details
  WHERE quantity > 10
);

### CASE
SELECT product_name,
CASE
  WHEN price < 10 THEN 'Low price product'
  WHEN price > 50 THEN 'High price product'
ELSE
  'Normal product'
END
FROM products;

SELECT product_name,
CASE
  WHEN price < 10 THEN 'Low price product'
  WHEN price > 50 THEN 'High price product'
ELSE
  'Normal product'
END AS "price category"
FROM products;

/*


*/
### Create Table
CREATE TABLE cars (
  brand VARCHAR(255),
  model VARCHAR(255),
  year INT
);

### Insert Into
INSERT INTO cars (brand, model, year)
VALUES ('Ford', 'Mustang', 1964);

INSERT INTO cars (brand, model, year)
VALUES
  ('Volvo', 'p1800', 1968),
  ('BMW', 'M1', 1978),
  ('Toyota', 'Celica', 1975);

### ADD
ALTER TABLE cars
ADD color VARCHAR(255);

### UPDATE
UPDATE cars
SET color = 'red'
WHERE brand = 'Volvo';

### ALTER TABLE
ALTER TABLE cars
ALTER COLUMN year TYPE VARCHAR(4);

### ALTER TABLE
ALTER TABLE cars
DROP COLUMN color;

### DELETE
DELETE FROM cars
WHERE brand = 'Volvo';

### DROP TABLE
DROP TABLE cars;

### INSERT INTO

### INSERT INTO


### INSERT INTO


