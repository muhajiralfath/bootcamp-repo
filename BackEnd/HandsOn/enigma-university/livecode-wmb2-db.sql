-- -------------------------------------------------------------
-- TablePlus 4.7.1(428)
--
-- https://tableplus.com/
--
-- Database: smm2
-- Generation Time: 2022-06-22 15:07:30.0550
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."m_customer";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."m_customer" (
                                       "id" int8 NOT NULL,
                                       "customer_name" varchar(50) NOT NULL,
                                       "mobile_phone_no" varchar(20) NOT NULL,
                                       "is_member" bool,
                                       PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."m_customer_discount";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS public.m_customer_discount_id_seq;

-- Table Definition
CREATE TABLE "public"."m_customer_discount" (
                                                "id" int4 NOT NULL DEFAULT nextval('public.m_customer_discount_id_seq'::regclass),
                                                "disc_id" int8,
                                                "customer_id" int8,
                                                PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."m_discount";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS public.m_discount_id_seq;

-- Table Definition
CREATE TABLE "public"."m_discount" (
                                       "id" int4 NOT NULL DEFAULT nextval('public.m_discount_id_seq'::regclass),
                                       "disc_desciption" varchar(50),
                                       "pct" int4,
                                       PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."m_menu";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."m_menu" (
                                   "id" int8 NOT NULL,
                                   "menu_name" varchar(100) NOT NULL,
                                   PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."m_menu_price";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS public.m_menu_price_id_seq;

-- Table Definition
CREATE TABLE "public"."m_menu_price" (
                                         "id" int4 NOT NULL DEFAULT nextval('public.m_menu_price_id_seq'::regclass),
                                         "menu_id" int8 NOT NULL,
                                         "price" float4 NOT NULL,
                                         PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."m_table";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."m_table" (
                                    "id" int4 NOT NULL,
                                    "table_name" bpchar(3) NOT NULL,
                                    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."m_trans_type";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."m_trans_type" (
                                         "trans_type_id" varchar(3) NOT NULL,
                                         "description" varchar(50),
                                         PRIMARY KEY ("trans_type_id")
);

DROP TABLE IF EXISTS "public"."t_bill";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."t_bill" (
                                   "id" int8 NOT NULL,
                                   "trans_date" date NOT NULL,
                                   "customer_id" int8 NOT NULL,
                                   "table_id" int4,
                                   "trans_type" varchar(3) NOT NULL,
                                   PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."t_bill_detail";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."t_bill_detail" (
                                          "id" int8 NOT NULL,
                                          "bill_id" int8 NOT NULL,
                                          "menu_price_id" int4 NOT NULL,
                                          "qty" float4 NOT NULL,
                                          PRIMARY KEY ("id")
);

INSERT INTO "public"."m_customer" ("id", "customer_name", "mobile_phone_no", "is_member") VALUES
                                                                                              (1, 'Kadir', '0877123333', 'f'),
                                                                                              (2, 'Basuki', '0812399123', 'f'),
                                                                                              (3, 'Munaroh', '0888901920', 't'),
                                                                                              (4, 'Adinda', '0815343411', 'f'),
                                                                                              (5, 'Rozak', '0857129823', 'f'),
                                                                                              (6, 'Devi', '0877745983', 't'),
                                                                                              (7, 'Qibil', '0821834583', 'f'),
                                                                                              (8, 'Nurman', '0877567211', 'f');

INSERT INTO "public"."m_customer_discount" ("id", "disc_id", "customer_id") VALUES
                                                                                (1, 1, 3),
                                                                                (2, 1, 6);

INSERT INTO "public"."m_discount" ("id", "disc_desciption", "pct") VALUES
    (1, 'Discount 10%', 10);

INSERT INTO "public"."m_menu" ("id", "menu_name") VALUES
                                                      (1, 'Nasi Putih'),
                                                      (2, 'Sayur Sop'),
                                                      (3, 'Tahu'),
                                                      (4, 'Es Teh Tawar'),
                                                      (5, 'Sayur Lodeh'),
                                                      (6, 'Tempe'),
                                                      (7, 'Nasi Goreng'),
                                                      (8, 'Telor Ceplok'),
                                                      (9, 'Nasi Goreng Spesial'),
                                                      (10, 'Sayur Kangkung'),
                                                      (11, 'Telor Dadar'),
                                                      (12, 'Kopi Kapal Api'),
                                                      (13, 'Aneka Gorengan'),
                                                      (14, 'Indomie Goreng Telor'),
                                                      (15, 'Es Ovaltine'),
                                                      (16, 'Telor Balado'),
                                                      (17, 'Sayur Buncis'),
                                                      (18, 'Es Teh Manis'),
                                                      (19, 'Tempe Orek'),
                                                      (20, 'Sayur Tahu'),
                                                      (21, 'Indomie Kari Ayam Telor');

INSERT INTO "public"."m_menu_price" ("id", "menu_id", "price") VALUES
                                                                   (1, 1, 3000),
                                                                   (2, 2, 2000),
                                                                   (3, 3, 2000),
                                                                   (4, 4, 1500),
                                                                   (5, 5, 2500),
                                                                   (6, 6, 2000),
                                                                   (7, 7, 12000),
                                                                   (8, 8, 5000),
                                                                   (9, 9, 25000),
                                                                   (10, 10, 1500),
                                                                   (11, 11, 5000),
                                                                   (12, 12, 4000),
                                                                   (13, 13, 2000),
                                                                   (14, 14, 10000),
                                                                   (15, 15, 6000),
                                                                   (16, 16, 4000),
                                                                   (17, 17, 3000),
                                                                   (18, 18, 1500),
                                                                   (19, 19, 3000),
                                                                   (20, 20, 3000),
                                                                   (21, 21, 10000),
                                                                   (22, 1, 4000);

INSERT INTO "public"."m_table" ("id", "table_name") VALUES
                                                        (1, 'T01'),
                                                        (2, 'T02'),
                                                        (3, 'T03'),
                                                        (4, 'T04');

INSERT INTO "public"."m_trans_type" ("trans_type_id", "description") VALUES
                                                                         ('EI', 'Eat In'),
                                                                         ('TA', 'Take Away');

INSERT INTO "public"."t_bill" ("id", "trans_date", "customer_id", "table_id", "trans_type") VALUES
                                                                                                (1, '2022-06-01', 1, 1, 'EI'),
                                                                                                (2, '2022-06-01', 2, 2, 'EI'),
                                                                                                (3, '2022-06-01', 3, 1, 'EI'),
                                                                                                (4, '2022-06-02', 4, NULL, 'TA'),
                                                                                                (5, '2022-06-03', 2, 1, 'EI'),
                                                                                                (6, '2022-06-03', 5, 2, 'EI'),
                                                                                                (7, '2022-06-03', 6, 3, 'EI'),
                                                                                                (8, '2022-06-03', 7, 2, 'EI'),
                                                                                                (9, '2022-06-03', 8, 4, 'EI'),
                                                                                                (10, '2022-06-04', 2, 1, 'EI'),
                                                                                                (11, '2022-06-04', 5, 4, 'EI'),
                                                                                                (12, '2022-06-05', 5, NULL, 'TA');

INSERT INTO "public"."t_bill_detail" ("id", "bill_id", "menu_price_id", "qty") VALUES
                                                                                   (1, 1, 1, 1),
                                                                                   (2, 1, 2, 1),
                                                                                   (3, 1, 3, 2),
                                                                                   (4, 1, 4, 1),
                                                                                   (5, 2, 1, 1),
                                                                                   (6, 2, 5, 1),
                                                                                   (7, 2, 6, 2),
                                                                                   (8, 2, 4, 1),
                                                                                   (9, 3, 7, 1),
                                                                                   (10, 3, 8, 1),
                                                                                   (11, 4, 9, 1),
                                                                                   (12, 5, 1, 1),
                                                                                   (13, 5, 10, 1),
                                                                                   (14, 5, 11, 1),
                                                                                   (15, 5, 4, 1),
                                                                                   (16, 6, 12, 1),
                                                                                   (17, 6, 13, 5),
                                                                                   (18, 7, 14, 1),
                                                                                   (19, 7, 15, 1),
                                                                                   (20, 8, 1, 0.5),
                                                                                   (21, 8, 16, 1),
                                                                                   (22, 8, 17, 1),
                                                                                   (23, 8, 13, 2),
                                                                                   (24, 8, 18, 1),
                                                                                   (25, 9, 1, 1),
                                                                                   (26, 9, 19, 1),
                                                                                   (27, 9, 20, 1),
                                                                                   (28, 9, 4, 1),
                                                                                   (29, 10, 22, 1),
                                                                                   (30, 10, 5, 1),
                                                                                   (31, 10, 6, 1),
                                                                                   (32, 10, 18, 1),
                                                                                   (33, 11, 21, 1),
                                                                                   (34, 11, 18, 1),
                                                                                   (35, 12, 13, 15);

ALTER TABLE "public"."m_customer_discount" ADD FOREIGN KEY ("disc_id") REFERENCES "public"."m_discount"("id");
ALTER TABLE "public"."m_customer_discount" ADD FOREIGN KEY ("customer_id") REFERENCES "public"."m_customer"("id");
ALTER TABLE "public"."m_menu_price" ADD FOREIGN KEY ("menu_id") REFERENCES "public"."m_menu"("id");
ALTER TABLE "public"."t_bill" ADD FOREIGN KEY ("customer_id") REFERENCES "public"."m_customer"("id");
ALTER TABLE "public"."t_bill" ADD FOREIGN KEY ("trans_type") REFERENCES "public"."m_trans_type"("trans_type_id");
ALTER TABLE "public"."t_bill" ADD FOREIGN KEY ("table_id") REFERENCES "public"."m_table"("id");
ALTER TABLE "public"."t_bill_detail" ADD FOREIGN KEY ("menu_price_id") REFERENCES "public"."m_menu_price"("id");
ALTER TABLE "public"."t_bill_detail" ADD FOREIGN KEY ("bill_id") REFERENCES "public"."t_bill"("id");


-- Nomor 1

SELECT tb.id AS bill_id, trans_date, mc.customer_name, mt.table_name, tb.trans_type, SUM(mmp.price * tbd.qty) AS subtotal
FROM t_bill tb
         JOIN m_customer mc ON mc.id = tb.customer_id
         LEFT JOIN m_table mt ON mt.id = tb.table_id
         JOIN t_bill_detail tbd ON tbd.bill_id = tb.id
         JOIN m_menu_price mmp ON mmp.id = tbd.menu_price_id
GROUP BY tb.id, trans_date, mc.customer_name, mt.table_name, tb.trans_type
ORDER BY tb.id;

-- Nomor 2
SELECT tb.trans_date                                        AS trans_date,
       mm.menu_name                                         AS menu_name,
       SUM(mmp.price * tbd.qty)                             AS sub_total,
       daily_total.total                                    AS grand_total,
       (SUM(mmp.price * tbd.qty) / daily_total.total) * 100 AS sales_contribution
FROM t_bill tb
         JOIN t_bill_detail tbd ON tb.id = tbd.bill_id
         JOIN m_menu_price mmp ON tbd.menu_price_id = mmp.id
         JOIN m_menu mm ON mmp.menu_id = mm.id
         JOIN (SELECT tb.trans_date            AS trans_date,
                      SUM(mmp.price * tbd.qty) AS total
               FROM t_bill tb
                        JOIN t_bill_detail tbd ON tb.id = tbd.bill_id
                        JOIN m_menu_price mmp ON tbd.menu_price_id = mmp.id
               GROUP BY tb.trans_date) AS daily_total ON tb.trans_date = daily_total.trans_date
GROUP BY tb.trans_date,
         mm.menu_name,
         daily_total.total
ORDER BY tb.trans_date,
         sub_total DESC;


-- Nomor 3
SELECT
    mm.menu_name AS menu_name,
    SUM(mmp.price * tbd.qty) AS sub_total,
    total_all.total AS grand_total,
    (SUM(mmp.price * tbd.qty) / total_all.total) * 100 AS sales_contribution
FROM
    t_bill tb
        JOIN t_bill_detail tbd ON tb.id = tbd.bill_id
        JOIN m_menu_price mmp ON tbd.menu_price_id = mmp.id
        JOIN m_menu mm ON mmp.menu_id = mm.id
        CROSS JOIN (
        SELECT
            SUM(mmp.price * tbd.qty) AS total
        FROM
            t_bill tb
                JOIN t_bill_detail tbd ON tb.id = tbd.bill_id
                JOIN m_menu_price mmp ON tbd.menu_price_id = mmp.id
    ) AS total_all
GROUP BY
    mm.menu_name, total_all.total
ORDER BY
    sub_total DESC;

-- Nomor 4 mencari MAX nya sesuai soal
SELECT COUNT(mmp.menu_id) AS max
FROM t_bill_detail tbd
         JOIN t_bill tb ON tb.id = tbd.bill_id
         JOIN m_menu_price mmp ON mmp.id = tbd.menu_price_id
GROUP BY trans_date
HAVING COUNT(mmp.menu_id) = (
    SELECT MAX(total_transaction)
    FROM (
             SELECT COUNT(mmp.menu_id) AS total_transaction
             FROM t_bill_detail tbd
                      JOIN t_bill tb ON tb.id = tbd.bill_id
                      JOIN m_menu_price mmp ON mmp.id = tbd.menu_price_id
             GROUP BY trans_date
         ) AS subquery
);



-- Nomor 5
SELECT
    SUM(CASE WHEN trans_date = '2022-06-04' OR trans_date = '2022-06-05' THEN subtotal ELSE 0 END) AS weekend,
    SUM(CASE WHEN trans_date = '2022-06-01' OR trans_date = '2022-06-02' OR trans_date = '2022-06-03' THEN subtotal ELSE 0 END) AS weekday
FROM (
         SELECT
             trans_date,
             SUM(mmp.price * tbd.qty) AS subtotal
         FROM
             t_bill_detail tbd
                 JOIN t_bill tb ON tb.id = tbd.bill_id
                 JOIN m_menu_price mmp ON mmp.id = tbd.menu_price_id
         WHERE
                 trans_date IN ('2022-06-01', '2022-06-02', '2022-06-03', '2022-06-04', '2022-06-05')
         GROUP BY
             trans_date
     ) AS daily_total;

--
-- Another  Way
-- 4.
SELECT max(total_transaction)
FROM (SELECT count(tb.trans_date) as total_transaction
      FROM t_bill_detail as tbd
               JOIN t_bill tb on tbd.bill_id = tb.id
      GROUP BY tb.trans_date) as subquery;


-- 5.
SELECT sum(weekend) as weekend,
       sum(weekday) as weekday
FROM (SELECT DISTINCT trans_date,
                      sum(mmp.price * qty) filter (where extract(isodow from trans_date) IN (6, 7))          as weekend,
                      sum(mmp.price * qty) filter (where extract(isodow from trans_date) IN (1, 2, 3, 4, 5)) as weekday
      FROM t_bill as tb
               JOIN t_bill_detail tbd on tb.id = tbd.bill_id
               JOIN m_menu_price mmp on tbd.menu_price_id = mmp.id
      GROUP BY trans_date) as subquery;


















