package com.enigma.di.bean;

import org.springframework.stereotype.Component;

@Component
public class Intel implements Processor{
    @Override
    public void speed() {
        System.out.println("Super kencang");
    }
}
