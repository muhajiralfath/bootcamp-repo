package com.enigma;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.Assert.*;

public class PersonRepositoryTest {

    private PersonRepository personRepository;


    @Before
    public void setUp() throws Exception {
        personRepository = new PersonRepository();
    }


    @Test
    public void shouldReturnPersonWhenSave() {
        Person person = new Person("1", "Edy", 17);

        Person actual = personRepository.save(person);

        Assert.assertEquals("1", actual.getId());


    }

    @Test
    public void findById() {
        String id = "1";
        Person person = new Person("1", "Edy", 17);
        personRepository.save(person);

        Optional<Person> personOptional = personRepository.findById(id);

        Assert.assertNotNull(personOptional.get());
    }


    @Test
    public void shoulReturnExeptionWhenNotFound(){
        String id = "0";
        Person person = new Person("1", "Edy", 17);
        personRepository.save(person);

        Optional<Person> personOptional = personRepository.findById(id);

        Assert.assertThrows(NoSuchElementException.class, () ->
                personOptional.get()
                );
    }
}