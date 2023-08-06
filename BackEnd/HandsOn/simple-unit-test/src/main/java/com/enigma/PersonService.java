package com.enigma;

public class PersonService {
    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }
    public Person create(Person person){
        return personRepository.save(person);
    }

    public Person getById (String id){
        return personRepository.findById(id).orElseThrow(() -> new RuntimeException("Not Found"));
    }

    public Person update(Person person){
        getById(person.getId());
        return personRepository.update(person);
    }


}
