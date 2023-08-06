package com.enigma.di;

import com.enigma.di.bean.Car;
import com.enigma.di.bean.EngineElectric;
import com.enigma.di.bean.EngineGasoline;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.enigma.di")
public class AplicationConfiguration {



   /* @Bean
    public EngineGasoline engineGasoline (){
        return new EngineGasoline();
    }
    @Bean
    public EngineElectric engineElectric(){
        return new EngineElectric();
    }

    @Bean (name = "Ayla")
    public Car ayla(){
        return new Car("Ayla", "Daihatsu", "white", engineGasoline());
    }*/
}
