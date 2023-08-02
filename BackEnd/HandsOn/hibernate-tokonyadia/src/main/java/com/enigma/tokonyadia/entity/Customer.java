package com.enigma.tokonyadia.entity;

import jakarta.persistence.*;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.GenericGenerators;

@Entity
@Table(name = "m_customer")
public class Customer {

    @Id
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @GeneratedValue(generator = "uuid")
    @Column(name = "id")
    private String id;
    @Column(name = "name", length = 50)
    private String name;
    @Column(name = "mobile_phone", length = 16, unique = true)
    private String mobilePhone;
    @Column(name = "address")
    private String address;
    @Column(name = "email", length = 30, unique = true)
    private String email;

    public Customer() {
    }

    public Customer(String id, String name, String mobilePhone, String address, String email) {
        this.id = id;
        this.name = name;
        this.mobilePhone = mobilePhone;
        this.address = address;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
