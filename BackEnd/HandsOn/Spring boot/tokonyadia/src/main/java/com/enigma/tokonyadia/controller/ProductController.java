package com.enigma.tokonyadia.controller;

import com.enigma.tokonyadia.entity.Customer;
import com.enigma.tokonyadia.entity.Product;
import com.enigma.tokonyadia.service.ProductService;
import com.enigma.tokonyadia.service.impl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class ProductController {


    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // tambah satu product
    @PostMapping(path = "/products")
    public Product createNewProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    //tambah banyak product sekaligus
    @PostMapping(path = "products/bulk")
    public List<Product> createBulkProduct(@RequestBody List<Product> products) {
        return productService.createBulkProduct(products);
    }

    // get all product dan juga search berdasarkan nama
    @GetMapping(path = "/products")
    public List<Product> getAllProducts(@RequestParam(name = "name", required = false) String name) {
        if (name != name){
            return productService.getAllByName(name);
        }
        return productService.getAll();
    }

    @GetMapping(path = "/produtcs/{id}")
    public Product getById(@PathVariable(name = "id") String id){
        return productService.getById(id);
    }

    @DeleteMapping(path = "/products/{id}")
    public String deleteProdutc(@PathVariable(name = "id") String id) {
        Product byId = getById(id);
        if (byId != null){
            productService.deleteById(id);
            return "Berhasil dihapus";
        }
        return "Product tidak ada";

    }

    // PutMapping dengan path variable
    /*@PutMapping(path = "/products/{id}")
    public Product updateProductWithParams(
            @RequestBody Product product,
            @PathVariable String id
    ) {

        // dengan looping biasa
        *//*for (int i = 0; i < products.size(); i++) {
            Product p = products.get(i);
            if (p.getId().equals(id)){
                product.setId(id);
                products.set(i, product);
                return product;
            }
        }
        *//*
        // dengan lambda dan stream
        *//*Optional<Product> optionalProduct = products.stream().filter(p -> p.getId().equals(id)).findFirst();

        if (optionalProduct.isPresent()) {
            int index = products.indexOf(optionalProduct.get());
            product.setId(id);
            products.set(index, product);
            return product;
        }*//*
        return null;
    }*/

    // PutMapping dengan req Body atau tanpa pathVariable
    @PutMapping(path = "/products")
    public Product updateProduct(
            @RequestBody Product product
    ) {
        return productService.update(product);
    }


}

// menggabungkan 2 list (List itu bertipe collection)
// this.products.addAll(products);
