package com.enigma;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorServiceImplTest {

    private CalculatorService calculatorService;

    @Before
    public void setUp() throws Exception{
        calculatorService = new CalculatorServiceImpl();
    }

    @Test
    public void sum() {
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.sum(a, b);
        Assert.assertEquals(20, actual);
    }

    @Test
    public void sub() {
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.sub(a, b);
        Assert.assertEquals(0, actual);
    }

    @Test
    public void multiply() {
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.multiply(a, b);
        Assert.assertEquals(100, actual);
    }

    @Test
    public void divide() {
        int a = 10;
        int b = 10;

        //when
        int actual = calculatorService.divide(a, b);
        Assert.assertEquals(1, actual);
    }

    @Test
    public void shouldReturnExeptionWhenDevideByZero(){
        int a = 20;
        int b = 0;

        Assert.assertThrows(ArithmeticException.class, () -> {
            calculatorService.divide(a, b);
        });
    }
}