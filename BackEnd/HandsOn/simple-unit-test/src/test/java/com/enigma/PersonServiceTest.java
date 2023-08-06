package com.enigma;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class PersonServiceTest {

    private PersonRepository personRepository;
    private PersonService personService;

    @Before
    public void setUp() throws Exception {
        personRepository = mock(PersonRepository.class);
        personService = new PersonService(personRepository);
    }

    @Test
    public void shouldReturnPersonWhenCreateNew() {
        // Given
        Person person = new Person("1", "edy", 17);

        //when
        when(personRepository.save(person)).thenReturn(person);

        Person actual = personService.create(person);

        // Then
        Assert.assertNotNull(actual);

    }

    @Test
    public void shouldReturnPersonWhenUpdate(){
        Person personUpdate = new Person("1", "Edy", 17);

        // when
        when(personRepository.findById(personUpdate.getId()))
                .thenReturn(Optional.of(personUpdate));
        when(personRepository.update(personUpdate)).thenReturn(personUpdate);
        Person actual = personService.update(personUpdate);

        //then
        Assert.assertEquals("Edy", actual.getName());
    }

    @Test
    public void shouldReturnPersonWhenGetById() {
        Person personFind = new Person("1", "Edy", 17);
        when(personRepository.findById(personFind.getId()))
                .thenReturn(Optional.of(personFind));
        Person actual = personService.getById(personFind.getId());

        //then
        Assert.assertEquals("Edy", actual.getName());


    }

    @Test
    public void shouldThrowRuntimeExeptionWhenGetByIdNull(){
        String id = "0";
        when(personRepository.findById(id))
                .thenReturn(Optional.empty());
        Assert.assertThrows(RuntimeException.class, () -> personService.getById(id));
    }

}