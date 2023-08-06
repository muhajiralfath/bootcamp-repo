import java.util.Arrays;

public class ArrayIrisan {
    public static void main(String[] args) {
        Integer [] numbers = {1,2,3,4,5,6};
        Integer [] anotherNumbers = {4,5,6,7,8,9,10};
        /* taruh code disini*/



        for (Integer number: numbers){
            for (Integer anotheNumber: anotherNumbers){
                if (number.equals(anotheNumber)){
                    System.out.println(number);
                }
            }
        }

//        for (int i = 0; i < numbers.length; i++){
//            for (int j = 0; j < anotherNumbers.length; j++){
//                if (numbers[i] == anotherNumbers[j]){
//                    System.out.println(numbers[i]);
//                }
//            }
//        }



    }
}