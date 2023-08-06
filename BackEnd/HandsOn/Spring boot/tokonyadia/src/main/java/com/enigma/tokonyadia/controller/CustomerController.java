package com.enigma.tokonyadia.controller;

import com.enigma.tokonyadia.entity.Customer;
import com.enigma.tokonyadia.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping(path = "/customers")
    public Customer createNewCustomer(@RequestBody Customer customer){

        return customerService.createCustomer(customer);
    }

    @PostMapping(path = "/customers/bulk")
    public List<Customer> createCustomerBulk(@RequestBody List<Customer> customers){
        return customerService.createBulkCustomers(customers);
    }

    @GetMapping(path = "/customers/{id}")
    public Customer getById(@PathVariable(name = "id") String id){
        return customerService.getById(id);
    }

    @GetMapping(path = "/customers")
    public List<Customer> getAllCustomers(@RequestParam (name = "name", required = false, defaultValue = "") String name,
                                          @RequestParam(name = "mobilePhone", required = false, defaultValue = "") String mobilePhone,
                                          @RequestParam(name = "email", required = false, defaultValue = "") String email){

        if (name.equals("") || mobilePhone.equals("") || email.equals("")) {
            return customerService.getAllByNameOrPhoneOrEmail(name, mobilePhone, email);
        }
        return customerService.getAll();

    }

    @PutMapping(path = "/customers")
    public String updateCustomer(@RequestBody Customer customer){

        Customer byId = customerService.getById(customer.getId());

        if (byId != null){
            customerService.update(customer);
            return "Data berhasil dirubah";
        }
        return "Perubahan gagal, data tidak ditemukan";
    }

    @DeleteMapping(path = "/customers/{id}")
    public String deleteById(@PathVariable(name = "id") String id){
        Customer byId = getById(id);
        if (byId != null){
            customerService.deleteById(id);
            return "Hapus Data Berhasil";
        }
        return "Data Tidak Ditemukan";
    }


}
