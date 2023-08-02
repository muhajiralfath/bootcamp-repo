import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Collection
//        Collection<Integer> numbers = new ArrayList<>();
//        numbers.add(1);
//        numbers.add(2);
//        for (int num : numbers){
//            System.out.println(num);
//        }
//
//        //Iterable
//        Iterable<Integer> nilai = List.of(1, 2,3,4,5,6,7);
//
//        for (Integer nil : nilai){
//            System.out.println(nil);
//        }
//
//        // Cara Looping jaman dulu
//        Iterator<Integer> iterator = nilai.iterator();
//
//        while (iterator.hasNext()){
//            Integer name = iterator.next();
//            System.out.println(name);
//        }

//        List<String> names = new ArrayList<>();
//
//        names.add("Rudi");
//        names.add("Ari");
//        names.add("Daniel");
//        names.add("Fauzan");
//
//        System.out.println("Sebelum diedit");
//
//        for (String name : names) {
//            System.out.print(name);
//            System.out.print(",");
//
//        }
//        System.out.println();
//
//        Scanner scan = new Scanner(System.in);
//        System.out.print("Masukkan nama yang ingin diedit : ");
//        String namaSebelum = scan.nextLine();
//
//        int getIndexNama = names.indexOf(namaSebelum);
//
//        System.out.print("Masukkan nama baru : ");
//        String namaSesudah = scan.nextLine();
//
//        names.set(getIndexNama, namaSesudah);
//
//
//        System.out.println();
//        System.out.println("Sesudah diedit");
//        for (String name : names) {
//            System.out.print(name);
//            System.out.print(",");
//
//        }

//        Set<String> programmingLanguages = new HashSet<>();
//        programmingLanguages.add("java");
//        programmingLanguages.add("halo");
//        programmingLanguages.add("java");
//        programmingLanguages.add("itu");
//
//        System.out.println(programmingLanguages);
//
//        List<String> listHobbies = Arrays.asList("Coding", "Makan");
//        Set<String> hobbies =   new HashSet<>(listHobbies);
//        System.out.println(hobbies);
//
////        for (String hobby : hobbies) {
////
////        }
//        Set<Person> people = new HashSet<>();
//        people.add(new Person("Budi"));
//        people.add((new Person("Budi")));
//        System.out.println(people);

        Map<String, String> countries = new HashMap<>();
        // menambah data
        countries.put("Jakarta", "Indonesia");
        countries.put("Kuala Lumpur", "Malaisya");
        //mendapatkan berdasasrkan key
        String capitalCity = countries.get("Indoenisa");
        System.out.println(capitalCity);

        // boleh
         countries.forEach((key, value) -> {
            System.out.println("Key "+ key );
             System.out.println("Value " + value);
        });

    ;
        // ;

        System.out.println();

    }

}
