package com.enigma.tokonyadia;

import com.enigma.tokonyadia.entity.Product;
import com.enigma.tokonyadia.repository.ProductRepository;
import com.enigma.tokonyadia.repository.impl.ProcutRepositoryImpl;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.List;
import java.util.Optional;

public class Main {
    public static void main(String[] args) {


        ProductRepository productRepository = new ProcutRepositoryImpl();

        //

        // Delete
        Optional<Product> product = productRepository.findById(1);
        Product product1 = product.orElse(new Product());
        productRepository.delete(product1);

//         findAll
        List<Product> allProduct = productRepository.findAll();
        System.out.println(allProduct);

        // Find By id
        Optional<Product> byId = productRepository.findById(1);
        System.out.println(byId);
    }
}


//        Configuration configuration = new Configuration();
//        configuration.configure("hibernate.cfg.xml");
//        SessionFactory sessionFactory = configuration.buildSessionFactory();
//
//        Session session = sessionFactory.openSession();
//
//        Transaction transaction = session.beginTransaction();
//        // insert data
////        Product product = new Product(null, "Gelang Wibu", "Gelang Wibu bagus");
////
////        session.persist(product);
//
//        // Todo : Cari Object Product
//        Product product = session.find(Product.class, 13);
//
//        if (product != null){
//            session.remove(product);
//        }
//
//        transaction.commit();
//
//
//
//
//        session.close();
//        sessionFactory.close();