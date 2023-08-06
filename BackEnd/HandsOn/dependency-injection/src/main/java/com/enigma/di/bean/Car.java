package com.enigma.di.bean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Car {
    private String name;
    private String Color;
    private String brand;
    @Autowired
    @Qualifier(value = "gasolineEngine")
    private Engine engine;


    public Car(String name, String color, String brand, Engine engine) {
        this.name = name;
        Color = color;
        this.brand = brand;
        this.engine = engine;
    }

    public Car(Engine engine) {
        this.engine = engine;
    }

    public Car() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return Color;
    }

    public void setColor(String color) {
        Color = color;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Engine getEngine() {
        return engine;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public void startEngine(){
        engine.start();
    }

    @Override
    public String toString() {
        return "Car{" +
                "name='" + name + '\'' +
                ", Color='" + Color + '\'' +
                ", brand='" + brand + '\'' +
                ", engine=" + engine +
                '}';
    }
}
