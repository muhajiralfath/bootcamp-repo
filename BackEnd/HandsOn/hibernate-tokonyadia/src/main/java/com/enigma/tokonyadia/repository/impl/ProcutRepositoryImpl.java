package com.enigma.tokonyadia.repository.impl;

import com.enigma.tokonyadia.config.HibernateUtil;
import com.enigma.tokonyadia.entity.Product;
import com.enigma.tokonyadia.repository.ProductRepository;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.List;
import java.util.Optional;

public class ProcutRepositoryImpl implements ProductRepository {
    @Override
    public Product save(Product product) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            session.persist(product);
            session.flush();
            transaction.commit();
            return product;
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<Product> findById(Integer id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            Product productFound = session.find(Product.class, id);
            transaction.commit();
            return Optional.ofNullable(productFound);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public List<Product> findAll() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM Product ", Product.class).getResultList();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Product update(Product product) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            Product mergeUpdate = session.merge(product);
            transaction.commit();
            return  mergeUpdate;
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void delete(Product product) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            session.remove(product);
            transaction.commit();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
