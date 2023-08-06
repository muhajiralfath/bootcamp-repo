package com.enigma.di;

import com.enigma.di.bean.ApplicationConfigurationComputer;
import com.enigma.di.bean.Car;
import com.enigma.di.bean.Computer;
import com.enigma.di.bean.Engine;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {


        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(ApplicationConfigurationComputer.class);

        Computer computer = (Computer) applicationContext.getBean("computer");
        computer.setName("Dell Latitude");

        System.out.println(computer);
        computer.speed();


        /*ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AplicationConfiguration.class);

        String[] beanDefinitionNames = applicationContext.getBeanDefinitionNames();

        for (String beanDefinitionName : beanDefinitionNames) {
            System.out.println(beanDefinitionName);
        }

        System.out.println();

        Engine engineGasoline = (Engine) applicationContext.getBean("engineGasoline");

        Car ayla = new Car("Ayla", "Daihatsu", "White", engineGasoline);
        ayla.startEngine();*/


        /* ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext("para-beans.xml");
        Car ayla = (Car) classPathXmlApplicationContext.getBean("ayla");
        Car ayla2 = (Car) classPathXmlApplicationContext.getBean("ayla");
        Car ayla3 = (Car) classPathXmlApplicationContext.getBean("ayla");
        Car ayla4 = (Car) classPathXmlApplicationContext.getBean("ayla");

        // default dari Spring container adalah singleton
        System.out.println(ayla);
        System.out.println(ayla2);
        System.out.println(ayla3);
        System.out.println(ayla4);

        Engine electricEngine = (Engine) classPathXmlApplicationContext.getBean("electricEngine");

        Car car = new Car("Testla", "Tesla", "Black", electricEngine);
        car.startEngine();*/

    }
}