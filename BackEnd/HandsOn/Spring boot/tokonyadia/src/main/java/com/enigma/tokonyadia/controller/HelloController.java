package com.enigma.tokonyadia.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController

public class HelloController {

    //	@RequestMapping(value = "/", method = RequestMethod.GET) hasil sama , beda cara aja
    @GetMapping
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/hobbies")
    public String[] hobbies() {
        return new String[]{"Tidur", "Ibadah"};
    }

    @GetMapping("/person")
    public Map<String, Object> getPerson() {
        Map<String, Object> person = new HashMap<>();

        person.put("name", "Edy");
        person.put("age", 17);
        person.put("isMarried", false);

        String[] hobbies = new String[]{"Tidur", "Ibadah"};
        person.put("hobbies", hobbies);

        Map<String, String> address = new HashMap<>();

        address.put("rt", "08");
        address.put("rw", "04");
        address.put("street", "JL. H. Dahlan");
        person.put("address", address);

        person.put("mobile_phone", null);

        return person;
    }

    //PathVariabel
    @GetMapping("/person/{id}")
    public String getPersonId(@PathVariable(name = "id") String id) {
        return "Person " + id;
    }

    // menggunakan request parang dimana di browser menggunakan tanda ?
    /*@GetMapping("/products")
    public String getProductByNameAndPrice(@RequestParam(required = false, defaultValue = "baju") String name, @RequestParam(required = false, defaultValue = "10000") Integer price) {
        return name + " " + price;
    }*/

}
