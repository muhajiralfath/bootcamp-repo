package com.enigma;

import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorServiceImplTest {

    private CalculatorService calculatorService;

    @BeforeEach
    public void setUp() throws Exception{
        calculatorService = new CalculatorServiceImpl();
    }

    @org.junit.jupiter.api.Test
    void sum() {
        // Given
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.sum(a, b);
        assertEquals(20, actual);

    }

    @org.junit.jupiter.api.Test
    void sub() {
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.sub(a, b);
        assertEquals(0, actual);

    }

    @org.junit.jupiter.api.Test
    void multiply() {
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.multiply(a, b);
        assertEquals(100, actual);
    }

    @org.junit.jupiter.api.Test
    void divide() {
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.divide(a, b);
        assertEquals(1, actual);
    }

    
}