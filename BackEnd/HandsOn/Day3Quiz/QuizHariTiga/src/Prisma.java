import java.util.Scanner;

public class Prisma {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int input = scan.nextInt();

        for (int i = 1; i <= (input * 2) - 1; i++) {
            int j = 1;
            if (i <= input) {
                while (j <= i) {
                    System.out.print("*");
                    j++;
                }
            } else {
                // buat bintang kebawah
                while (j <= ((input * 2) - i)) {
                    System.out.print("*");
                    j++;
                }
            }
            System.out.println();
        }
    }
}

// Solusi di portal
//import java.util.Scanner;
//
//public class SwitchCase {
//    public static void main(String[] args) {
//        Scanner scan = new Scanner(System.in);
//        int number = scan.nextInt();
//        int i = 1;
//        boolean up = true;
//        while(i>0){
//            for (int j = 1; j <= i ; j++) {
//                System.out.print("*");
//            }
//            System.out.println();
//            if(i == number){
//                up = false;
//            }
//            if(up){
//                i++;
//            }
//            else{
//                i--;
//            }
//        }
//    }
//}
