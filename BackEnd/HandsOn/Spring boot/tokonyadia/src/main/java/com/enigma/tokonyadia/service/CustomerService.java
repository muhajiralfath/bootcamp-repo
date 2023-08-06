package com.enigma.tokonyadia.service;

import com.enigma.tokonyadia.entity.Customer;


import java.util.List;

public interface CustomerService {
    Customer createCustomer(Customer customer);
    List<Customer> createBulkCustomers(List<Customer> customers);
    Customer getById(String id);
    List<Customer> getAll();
    List<Customer> getAllByNameOrPhoneOrEmail(String name, String mobilePhone, String email);
    Customer update(Customer customer);
    void deleteById(String id);
}
