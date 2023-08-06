package com.enigma.tokonyadia.service.impl;

import com.enigma.tokonyadia.entity.Address;
import com.enigma.tokonyadia.repository.AddressRepository;
import com.enigma.tokonyadia.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;

    @Autowired
    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public Address create(Address address) {
        return addressRepository.save(address);

    }
}
