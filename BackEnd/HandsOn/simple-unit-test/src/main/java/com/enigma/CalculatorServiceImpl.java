package com.enigma;

public class CalculatorServiceImpl implements CalculatorService{
    @Override
    public int sum(int a, int b) {
        return  a + b;

    }

    @Override
    public int sub(int a, int b) {
        return a - b;
    }

    @Override
    public int multiply(int a, int b) {
        return a * b;
    }

    @Override
    public int divide(int a, int b) {
        return a / b;
    }
}
