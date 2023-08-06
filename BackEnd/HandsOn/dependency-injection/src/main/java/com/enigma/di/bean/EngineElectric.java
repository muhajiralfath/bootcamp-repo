package com.enigma.di.bean;

import org.springframework.stereotype.Component;

@Component
public class EngineElectric implements Engine {

    @Override
    public void start() {
        System.out.println("Sssssttt...");
    }

    @Override
    public String toString() {
        return "EngineElectric{}";
    }
}
