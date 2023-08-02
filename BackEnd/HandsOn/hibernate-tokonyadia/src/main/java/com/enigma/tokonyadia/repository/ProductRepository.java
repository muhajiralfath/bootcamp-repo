package com.enigma.tokonyadia.repository;

import com.enigma.tokonyadia.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {
    Product save (Product product);
    Optional<Product> findById (Integer id);
    List<Product> findAll();
    Product update (Product product);
    void delete (Product product);
}
