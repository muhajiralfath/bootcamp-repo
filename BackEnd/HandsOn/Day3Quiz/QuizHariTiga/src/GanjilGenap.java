import java.util.Scanner;

public class GanjilGenap {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int input = scan.nextInt();
        int ganjil = 0;
        int genap = 0;
        int bantu = 2;


        if (input < 0){
            return;
        }

        for (int i = 0; i < input; i++){
            if (i % 2 != 0){
                ganjil += i;
            }
        }


        for (int i = 0; i < input; bantu++){
            if (bantu % 2 == 0){
                genap += bantu;
                i++;
            }
        }

//        for (int i = 2; i <= 2 * input; i += 2) {
//            genap += i;
//        }

        System.out.println(ganjil);
        System.out.println(genap);
    }
}




// solusi di portal
//import java.util.Scanner;
//public class Main{
//    public static void main(String[] args){
//        Scanner scanner = new Scanner(System.in);
//        int angka = scanner.nextInt();
//        int ctr = 1;
//        int total = 0;
//        while (true){
//            if(ctr >= angka){
//                break;
//            } if( ctr % 2 == 1){
//                total = total + ctr;
//            }
//            ctr++;
//        }
//        System.out.println(total);
//
//        ctr = 2;
//        int i = 0;
//        total = 0;
//        while (true){
//            if(i >= angka){
//                break;
//            }if(ctr % 2 == 0){
//                total = total + ctr;
//                i++;
//            }
//            ctr++;
//        }
//        System.out.println(total);
//    }
//}