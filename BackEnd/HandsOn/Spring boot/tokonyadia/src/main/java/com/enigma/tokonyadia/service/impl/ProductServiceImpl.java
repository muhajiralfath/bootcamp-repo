package com.enigma.tokonyadia.service.impl;

import com.enigma.tokonyadia.entity.Product;
import com.enigma.tokonyadia.repository.ProductRepository;
import com.enigma.tokonyadia.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;
    @Autowired
    public ProductServiceImpl(ProductRepository producRepository) {
        this.productRepository = producRepository;
    }


    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> createBulkProduct(List<Product> products) {
        return productRepository.saveAll(products);
    }

    @Override
    public Product getById(String id) {
        Optional<Product> byId = productRepository.findById(id);
        return byId.orElse(null);
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getAllByName(String name) {

        return null;

    }

    @Override
    public Product update(Product product) {
        return productRepository.saveAndFlush(product);
    }



    @Override
    public void deleteById(String id) {
        productRepository.deleteById(id);
    }
}
