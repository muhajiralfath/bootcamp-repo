package com.enigma.di.bean;

import org.springframework.stereotype.Component;

@Component
public class EngineGasoline implements Engine{

    @Override
    public void start() {
        System.out.println("Mbrummmm...");
    }

    @Override
    public String toString() {
        return "EngineGasoline{}";
    }
}
