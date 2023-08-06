package com.enigma;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class PersonRepository {
    private final List<Person> people;


    public PersonRepository() {
        this.people = new ArrayList<>();
    }

    public Person save(Person person) {
        people.add(person);
        return person;
    }

    public Optional<Person> findById(String id) {
        return people.stream().filter(person -> person.getId().equals(id))
                .findFirst();
    }

    public Person update(Person person){
        Optional<Person> personOptional = findById(person.getId());

        if (personOptional.isPresent()){
            int index = people.indexOf(personOptional.get());
            people.set(index, person);
        }
        return person;
    }
}
