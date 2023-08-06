package com.enigma.tokonyadia.service;

import com.enigma.tokonyadia.entity.Product;

import java.util.List;

public interface ProductService {
    Product createProduct(Product product);
    List<Product> createBulkProduct(List<Product> products);
    Product getById(String id);
    List<Product> getAll();
    List<Product> getAllByName(String name);
    Product update(Product product);
    void deleteById(String id);


}
