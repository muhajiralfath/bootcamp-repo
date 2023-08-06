package com.enigma.di.bean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Computer {
    private String name;

    private Processor processor;

    public Computer(String name,Processor processor) {
        this.name = name;
        this.processor = processor;
    }

    public Computer() {
    }
    @Autowired
    public Computer( @Qualifier("intel")  Processor processor) {
        this.processor = processor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Processor getProcessor() {
        return processor;
    }

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    public void speed(){
        processor.speed();
    }

    @Override
    public String toString() {
        return "Computer{" +
                "name='" + name + '\'' +
                ", processor=" + processor +
                '}';
    }
}
