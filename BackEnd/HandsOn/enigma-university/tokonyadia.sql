create table public.m_store
(
    id           serial
        primary key,
    name         varchar(50) not null,
    no_siup      varchar(20)
        unique,
    address      varchar(100),
    mobile_phone varchar(15)
);

alter table public.m_store
    owner to postgres;

create table public.m_customer
(
    id           serial
        primary key,
    name         varchar(50) not null,
    mobile_phone varchar(15) not null
        unique,
    address      varchar(100),
    email        varchar(50) not null
        constraint m_customer_email_unique
            unique
);

alter table public.m_customer
    owner to postgres;

create table public.m_category
(
    id   varchar(100) not null
        primary key,
    name varchar(100) not null
        constraint m_category_name_unique
            unique
);

alter table public.m_category
    owner to postgres;

create table public.m_product
(
    id          serial
        primary key,
    name        varchar(100) not null,
    description varchar(100) not null,
    category_id varchar(100)
        constraint fk_category_id
            references public.m_category
);

alter table public.m_product
    owner to postgres;

create index m_product_name_search
    on public.m_product using gin (to_tsvector('indonesian'::regconfig, name::text));

create table public.m_product_price
(
    id         serial
        primary key,
    product_id integer not null
        references public.m_product,
    price      bigint
        constraint m_product_price_price_check
            check (price > 0),
    stock      integer
        constraint m_product_price_stock_check
            check (stock >= 0),
    store_id   integer not null
        references public.m_store
);

alter table public.m_product_price
    owner to postgres;

create table public.m_wishlist
(
    id         serial not null
        constraint wishlist_pkey
            primary key,
    product_id integer
        constraint fk_product_id
            references public.m_product
);

alter table public.m_wishlist
    owner to postgres;

create table t_transaction
(
    id          serial primary key,
    customer_id int not null,
    trans_date  date default (current_date),
    CONSTRAINT "fk_customer_id" foreign key (customer_id) references m_customer (id)
);

create table t_transaction_detail
(
    product_price_id int not null,
    transaction_id   int not null,
    quantity         int,
    CONSTRAINT "pk_product_price_id_transaction_id" PRIMARY KEY (product_price_id, transaction_id),
    CONSTRAINT "fk_product_price_id" FOREIGN KEY (product_price_id) references m_product_price (id),
    CONSTRAINT "fk_transaction_id" FOREIGN KEY (transaction_id) references t_transaction (id)
);


insert into m_customer (name, mobile_phone, address, email)
values ('Alfath', '08998929483', 'Babelan, Bekasi', 'muhajiralfath@gmail.com'),
       ('Tiwi', '08998929489', 'Banyumanik, Semarang', 'tiwi@gmail.com');

select *
from m_customer;

insert into m_store (name, no_siup, address, mobile_phone)
values ('tokobahagia', '23142o459', 'Jl. H. Mabrur', '0210099203'),
       ('tokosejahtera', '3412o459', 'Jl. Samawa', '0230022120');

select *
from m_store;

insert into m_product (name, description, category_id)
values ('Wafer Tango', 'Cemilan wafer', 'CT003'),
       ('Beras', 'Beras bermutu baik', 'CT001'),
       ('Baju Wibu', 'Baju super keren', 'CT002'),
       ('Topi Wibu', 'Topi buat ganteng', 'CT002');

insert into m_product_price (product_id, price, stock, store_id)
values (1, 15000, 20, 1),
       (1, 14000, 15, 2),
       (2, 24000, 10, 1),
       (2, 25000, 30, 2),
       (3, 200000, 5, 1),
       (4, 250000, 10, 2);

select *
from m_product_price;

insert into t_transaction (customer_id, trans_date)
values (1, '2023-06-25'),
       (1, '2023-06-26'),
       (2, '2023-06-26');

insert into t_transaction_detail (product_price_id, transaction_id, quantity)
values (1, 1, 5),
       (3, 1, 4),
       (2, 2, 2),
       (5, 3, 1);

select ms.name as nama_toko, mp.name as nama_produk, mpp.price as harga_produk, mp.description as deskrpsi, mpp.stock
from m_store ms
          join m_product_price mpp on mpp.store_id = ms.id
          join m_product mp on mp.id = mpp.product_id
order by ms.name;



select mc.name                   as customer_name,
       mp.name                   as product_name,
       td.quantity,
       (mpp.price * td.quantity) as subtotal,
       t.trans_date
from t_transaction t
         join m_customer mc on mc.id = t.customer_id
         join t_transaction_detail td on t.id = td.transaction_id
         join m_product_price mpp on td.product_price_id = mpp.id
         join m_product mp on mp.id = mpp.product_id;

select mc.name, count(distinct (mp.id)) as jenis_produk_dibeli
from t_transaction t
          join m_customer mc on mc.id = t.customer_id
          join t_transaction_detail td on t.id = td.transaction_id
          join m_product_price mpp on td.product_price_id = mpp.id
          join m_product mp on mp.id = mpp.product_id
group by mc.name;

select mc.name, sum(td.quantity) as total_unit_dibeli
from t_transaction t
          join m_customer mc on mc.id = t.customer_id
          join t_transaction_detail td on t.id = td.transaction_id
          join m_product_price mpp on td.product_price_id = mpp.id
group by mc.name;

select ms.name, sum(mpp.stock) as banyak_produk_dijual
from m_store ms
          join m_product_price mpp on mpp.store_id = ms.id
          join m_product mp on mp.id = mpp.product_id
group by ms.name;

select ms.name, sum(ttd.quantity) as banyak_produk_terjual
    from t_transaction_detail ttd
    join m_product_price mpp on  mpp.id= ttd.product_price_id
    join m_store ms on ms.id = mpp.store_id group by ms.name;


select distinct (mp.name) AS produk_belum_terjual
from m_product mp
    left join m_product_price mpp
    join t_transaction_detail ttd ON mpp.id = ttd.product_price_id
    on mp.id = mpp.product_id
where ttd.product_price_id IS NULL;


-- menggunakan sub query
SELECT DISTINCT(mp.name) as produk_belum_terjual
FROM m_product mp
WHERE mp.id NOT IN (
    SELECT mpp.product_id
    FROM m_product_price mpp
             JOIN t_transaction_detail ttd ON mpp.id = ttd.product_price_id
);

select mc.name, sum(mpp.price * td.quantity) total_bayar
from t_transaction t
         join m_customer mc on mc.id = t.customer_id
         join t_transaction_detail td on t.id = td.transaction_id
         join m_product_price mpp on td.product_price_id = mpp.id
         join m_product mp on mp.id = mpp.product_id
group by mc.name order by total_bayar desc limit 1;





