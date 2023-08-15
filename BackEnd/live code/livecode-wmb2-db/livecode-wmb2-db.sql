
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

SELECT
    tb.trans_date AS trans_date,
    mm.menu_name AS menu_name,
    SUM(mmp.price * tbd.qty) AS sub_total,
    daily_total.total AS grand_total,
    (SUM(mmp.price * tbd.qty) / daily_total.total) * 100 AS sales_contribution
FROM
    t_bill tb
        JOIN t_bill_detail tbd ON tb.id = tbd.bill_id
        JOIN m_menu_price mmp ON tbd.menu_price_id = mmp.id
        JOIN m_menu mm ON mmp.menu_id = mm.id
        JOIN (
        SELECT
            tb.trans_date AS trans_date,
            SUM(mmp.price * tbd.qty) AS total
        FROM
            t_bill tb
                JOIN t_bill_detail tbd ON tb.id = tbd.bill_id
                JOIN m_menu_price mmp ON tbd.menu_price_id = mmp.id
        GROUP BY
            tb.trans_date
    ) AS daily_total ON tb.trans_date = daily_total.trans_date
GROUP BY
    tb.trans_date,
    mm.menu_name,
    daily_total.total
ORDER BY
    tb.trans_date,
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
