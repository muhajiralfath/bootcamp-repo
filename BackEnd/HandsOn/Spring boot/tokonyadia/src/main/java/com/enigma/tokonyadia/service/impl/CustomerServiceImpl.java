package com.enigma.tokonyadia.service.impl;

import com.enigma.tokonyadia.entity.Address;
import com.enigma.tokonyadia.entity.Customer;
import com.enigma.tokonyadia.repository.CustomerRepository;
import com.enigma.tokonyadia.service.AddressService;
import com.enigma.tokonyadia.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    private CustomerRepository customerRepository;
    private AddressService addressService;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository, AddressService addressService) {
        this.customerRepository = customerRepository;
        this.addressService = addressService;
    }

//    @Transactional(rollbackOn = RuntimeException.class)
    @Override
    public Customer createCustomer(Customer customer) {
//        Address address = addressService.create(customer.getAddress());
//        customer.setAddress(address);
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> createBulkCustomers(List<Customer> customers) {
        return customerRepository.saveAll(customers);
    }

    @Override
    public Customer getById(String id) {
        Optional<Customer> byId = customerRepository.findById(id);
        return byId.orElse(null);
    }

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public List<Customer> getAllByNameOrPhoneOrEmail(String name, String mobilePhone, String email) {
        return customerRepository.findAll().stream().filter(c -> c.getName().toLowerCase().contains(name.toLowerCase())
        && c.getMobilePhone().contains(mobilePhone)
        && c.getEmail().contains(email))
                .collect(Collectors.toList());
    }

    @Override
    public Customer update(Customer customer) {
        return customerRepository.saveAndFlush(customer);
    }

    @Override
    public void deleteById(String id) {
        customerRepository.deleteById(id);
    }
}
