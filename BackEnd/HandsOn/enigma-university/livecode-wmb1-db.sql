create database wmb;

create table m_customer
(
    id serial primary key not null ,
    name varchar(50) not null ,
    phone_number varchar(15) not null,
    member int not null ,
    discount decimal(5,2)
);

ALTER TABLE m_customer
    ALTER COLUMN member TYPE INT USING member::INT,
    ALTER COLUMN member SET NOT NULL,
    ADD CONSTRAINT member CHECK (member >= 0);

create table transaction
(
  id serial primary key not null ,
  no_inv varchar(50) not null ,
  id_customer int not null ,
  table_id int not null ,
  grand_total bigint not null ,
  foreign kcreate table ey (id_customer) references m_customer (id),
  foreign key (table_id) references m_table_number
);

create table m_prduct
(
    id serial primary key not null ,
    name varchar(50) not null
);

create table m_product_price
(
    id serial primary key not null ,
    product_id int not null,
    date date not null ,
    price bigint check ( price > 0 ),
    foreign key (product_id) references m_prduct (id)
);

create table detail_transaction
(
    id serial primary key not null ,
    transaction_id int not null ,
    product_price_id int not null ,
    foreign key (transaction_id) references transaction (id),
    foreign key (product_price_id) references m_product_price (id)
);

create table table_number
(
  id serial primary key not null ,
  name varchar(10) not null
);

SELECT COUNT(*) AS total_customers
FROM m_customer;

SELECT count(Price) AS trans_sabtu_minggu
FROM m_product_price
WHERE Date IN ('2022-06-04', '2022-06-05');

SELECT *
FROM m_customer
ORDER BY Member DESC, Name;

SELECT *
FROM m_product_price
WHERE m_product_price.price > 10000;

SELECT *
FROM transaction
ORDER BY grand_total DESC
LIMIT 1;

SELECT CONCAT('+62', SUBSTRING(phone_number, 2)) AS "Nomor telepon"
FROM m_customer;

SELECT
    name,
    CASE WHEN member = 0 THEN 'Bukan Member' ELSE 'Member' END AS "Status Member"
FROM m_customer;

SELECT
    count(CASE WHEN table_id IN (1, 2, 3, 4) THEN grand_total ELSE 0 END) AS "Total Makan di Tempat",
    count(CASE WHEN table_id = 5 THEN grand_total ELSE 0 END) AS "Total Dibungkus"
FROM transaction;

SELECT
    COUNT(CASE WHEN table_id = 5 THEN 1 END) AS dibungkus,
    COUNT(CASE WHEN table_id < 5 THEN 1 END) AS makan_ditempat
FROM transaction;









