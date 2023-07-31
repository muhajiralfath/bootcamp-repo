package com.enigma.di;

public class Car {
    private String name;
    private String Color;
    private String brand;
    private Engine engine;

    public Car(String name, String color, String brand, Engine engine) {
        this.name = name;
        Color = color;
        this.brand = brand;
        this.engine = engine;
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

}
