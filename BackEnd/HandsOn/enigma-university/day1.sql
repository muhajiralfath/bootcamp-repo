create database enigma_university;

create table m_student
(
    id int PRIMARY KEY ,
    name varchar (50),
    birth_place varchar(30),
    birth_date date,
    gender varchar(1)
);

-- cara pertama untuk insert data ke table
insert into m_student values (1, 'Tony Blank', 'Jakarta', '1945-08-17', 'M');

-- cara kedua unutk insert data ke table

insert into m_student (gender, birth_date, birth_place, name, id) values ('M', '1971-06-28', 'Jakarta', 'Elon Musk', 2);

-- DQL
select name as nama, birth_place as tempat_lahir from m_student where gender = 'M'  and name = 'Elon Musk';

--delete
DELETE FROM m_student where id = 1;

-- update data
update m_student set birth_date = '1971-06-29', birth_place = 'Cianjur' where id = 2;

-- String Function
-- CONCAT (Menggabungkan string)
-- SUBSTRING (Mengambil beberapa karakter dari sebuah string)
-- REPLACE (Menggganti data string yang sudah ada ke yang baru)
-- UPER (Merubah string menjadi UPPERCASE)
-- LOWER (Merubah string menjadi lowercase)
-- LENGTH
-- TRIM



SELECT concat('Rifqi', ' ', 'Ramadhan') as nama;
SELECT concat(name, ' - ', birth_place) nama_tempat_lahir from m_student;
select substr(name, 1, 4) from m_student;
select replace(name, 'E', 'Budi') FROM m_student;
select replace('089892', '0', '+62');
SELECT length(name) from m_student;
select trim(trailing '0' from '0001023000');
select 1;
select date('2023-06-24');
select current_date;
select date_part('year', age(current_date, '1999-04-07')) as age;

select concat(substring(name, 1, 4), ' - ', birth_place) from m_student where id = 1;

create database enigmat_shop;
create table produt
(
  id int primary key ,
  name varchar(100),
  price bigint,
  stock int
);

--refining seelction (filteringdata)
-- operator perbandingan : <, >, <=, >=, <> (!=)
select * from m_produt where price <> 50000;

-- Operator logika : ADD, OR, NOT
select * from m_produt where not name = 'Topi';

-- FUNGSI LIKE : % (Mencari data yang mirip)
select * from m_produt where name like '%u%';
select * from m_produt where lower(name) like 'b%';
select * from m_produt where lower(name) like 'b%u';

-- FUNGSI IN (seperti array)
select * from m_produt where name in ('Sepatu', 'Baju');

-- FUNGSI BETWEEN
select * from m_produt where price between 50000 and 150000;

-- FUNGSI DISTINCT
select distinct name from m_produt;

-- ORDER BY -- Mengurutkan berdasarkan ASC (defaultnya) dan DESC;
select * from m_produt order by name;
select * from m_produt order by name desc ;


-- PAGINATION - untuk mengambil data sesuai dengan banyaknya yang kita mau
-- LIMIT & OFFSET
--


-- Halaman 1
select * from m_produt limit 3;
select * from m_produt limit 3 offset 2;

-- Buat pagination dinamis, Halaman 2
-- jadi parameter pertama dalam offset disesuaikan dengan nomor halaman
-- SIZE
-- Halaman 1
SELECT * FROM m_produt order by id LIMIT 2 OFFSET (1 - 1) * 2;
SELECT * FROM m_produt order by id LIMIT 2 OFFSET (2 - 1) * 2;
SELECT * FROM m_produt order by id LIMIT 2 OFFSET (3 - 1) * 2;

-- Agregat Function
-- COUNT, SUM, AVG, MIN, MAX

-- Count digunakan untuk menghitung jumlah baris di table
select count(id) from m_produt;

-- Sum digunakan untuk menjumlahkan data
select sum(price) from m_produt;

-- Avg digunakan untuk mencari nilai rata2
select avg(price) from m_produt;

-- Min digunakan untuk mencari nilai terendah
select min(price) from m_produt;

-- Max digunakan untuk mencari nilai tertinggi
select max(price) from m_produt;


-- HAVING Clause digunakan untuk memfilter data berdasarkan fungsi agragate

SELECT * FROM m_produt GROUP BY id HAVING avg(price) > 50000;
SELECT name, price, stock, avg(price) as rata_rata FROM m_produt GROUP BY id, name, price, stock HAVING avg(price) > 100000;












