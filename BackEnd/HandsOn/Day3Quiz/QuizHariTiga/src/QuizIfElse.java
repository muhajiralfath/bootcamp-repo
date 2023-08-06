import java.util.Scanner;

public class QuizIfElse {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String nama;
        String peran;

        nama = scan.nextLine();
        peran = scan.nextLine();

        if (nama.length()>0 && peran.length()>0){
            if (peran.equals("Superhero")){
                System.out.println("Selamat Datang Superhero "+ nama + ", Kalahkan Semua Monster Di Muka Bumi");
            } else if (peran.equals("Monster")) {
                System.out.println("Selamat Datang Monster "+ nama + ", Hancurkan Semua Superhero Yang Ada");
            } else {
                System.out.println("Selamat Datang "+ nama +", Pilih Peranmu Untuk Melanjutkan Game Ini");
            }
        } else if (nama.length() < 1 && peran.length() > 0) {
            System.out.println("Nama Harus Di Isi");
        } else if (peran.length() < 1 && nama.length() > 0) {
            System.out.println("Peran Harus Di Isi");
        } else {
            System.out.println("Nama dan Peran Harus Di Isi");
        }

    }
}


// Soluli portal

//import java.util.Scanner;
//public class Answer{
//    public static void main(String[] args){
//        Scanner scanner = new Scanner(System.in);
//        String nama = scanner.nextLine();
//        String peran = scanner.nextLine();
//
//        if(nama.isEmpty() & peran.isEmpty()){
//            System.out.print("Nama dan Peran Harus Di Isi");
//        }else if(peran.isEmpty()){
//            System.out.print("Peran Harus Di Isi");
//        }
//        else if(peran.equals("Superhero")){
//            System.out.print("Selamat Datang Superhero " +nama+", Kalahkan Semua Monster Di Muka Bumi");
//        }else if(peran.equals("Monster")){
//            System.out.print("Selamat Datang Monster "+nama+", Hancurkan Semua Superhero Yang Ada");
//        }else if(!peran.equals("Superhero") & !peran.equals("Monster")){
//            System.out.print("Selamat Datang "+nama+", Pilih Peranmu Untuk Melanjutkan Game Ini");
//        }
//    }
//}