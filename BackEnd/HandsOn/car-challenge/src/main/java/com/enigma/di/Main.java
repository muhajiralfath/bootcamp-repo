package com.enigma.di;

public class Main {
    public static void main(String[] args) {
        Engine engineGasoline = new EngineGasoline();
        Car gasolineCar = new Car("Innova", "Black", "Toyota", engineGasoline);

        System.out.print(gasolineCar.getName() + " : ");
        gasolineCar.startEngine();

        Engine engineElectric = new EngineElectric();
        Car electricCar = new Car("Ionic", "White","Hyundai", engineElectric);

        System.out.print(electricCar.getName() + " : ");
        electricCar.startEngine();
    }
}
