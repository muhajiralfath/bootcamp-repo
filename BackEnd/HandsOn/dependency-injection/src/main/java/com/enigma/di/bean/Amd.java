package com.enigma.di.bean;

import org.springframework.stereotype.Component;

@Component
public class Amd implements Processor{
    @Override
    public void speed() {
        System.out.println("Kencang dan sedang");
    }
}
