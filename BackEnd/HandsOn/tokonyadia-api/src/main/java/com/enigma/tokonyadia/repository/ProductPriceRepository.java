package com.enigma.tokonyadia.repository;

import com.enigma.tokonyadia.entity.ProductPrice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductPriceRepository extends JpaRepository<ProductPrice, String> {
    Optional<ProductPrice> findByProduct_IdAndIsActive(String productId, Boolean active);
}
