package com.enigma.lambda_stream;

import com.enigma.lambda_stream.lambda.SimpleAction;
import com.enigma.lambda_stream.stream.Product;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {


    List<Product> products = List.of(
            new Product("Case Wibu", 100_000),
            new Product("Tas Wibu", 150_000),
            new Product("Action Figure Wibu", 600_000),
            new Product("Bantal Wibu", 100_000),
            new Product("Selimut Wibu", 180_000),
            new Product("Sprei Wibu", 120_000),
            new Product("Pacar Wibu", 1000_000)
    );

//        Stream<Object> productWibu = products.stream().map(
//                product -> {
//                    product.setName(product.getName().toUpperCase());
//                    return product;
//                });
//
//        productWibu.forEach(o -> System.out.println(o));


//        Stream<Product> filteredProduct = products.stream()
//                .map(product -> {
//                    product.setName(product.getName().toUpperCase());
//                    return product;
//                })
//                .filter(product -> product.getPrice() > 200_000)
//                .map(product -> {
//                    product.setName(product.getName() + " Bagus");
//                    return product;
//                });
//
//        filteredProduct.forEach(product -> System.out.println("Hasil Akhir \n" + product));

        Optional<Product> max = products.stream().max(Comparator.comparing(product -> product.getPrice()));

        max.ifPresent(product -> System.out.println(product));

    }
}


//        // Cara membuat stream
////        Stream<Integer> numbers = Stream.of(1,2,3,4,5,6,7);
//        List<Integer> numbers = List.of(1,2,3,4,5,6,7);
//
//        Stream<String> numbersString = numbers.stream().map(number -> String.valueOf(number + 1));
//
//        numbersString.forEach(s -> System.out.println(s));
//
//
//        // cara membuat stream dengan array
//        Stream<Integer> streams = Arrays.stream(new Integer[]{1,2,3,4,5,6});
//
//        // Cara membuat stream dengan List
//        List<Integer> numberList = List.of(1,2,3,4,5,6);
//        Stream<Integer> listStream = numberList.stream();


//        // Lambda void function degngan 1 parameter
//        Consumer<String> consumer = name -> {
//            System.out.println("Cieee");
//            System.out.println(name);
//        };
//
//        consumer.accept("edy");
//
//        // Lamba Function dari java
//        Function<String, Boolean> function = name -> name.equals("Edy");
//        String nameStudents = "Edoy";
//
//        Boolean chekName = function.apply(nameStudents);
//        System.out.println(chekName);

//        // Statement Lambda
//        SimpleAction simpleAction1 = (name) -> {
//          return "Halo nama saya " + name;
//        };
//
//        // Expression Lambda
//        SimpleAction simpleAction2 = name -> "Halo Nama Saya " + name;
//
//        String alfath = simpleAction2.action("Alfath");
//        System.out.println(alfath);