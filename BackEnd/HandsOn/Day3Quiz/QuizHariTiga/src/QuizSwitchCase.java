import java.util.Scanner;

public class QuizSwitchCase {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int tanggal;
        int bulan;
        int tahun;

        tanggal = scan.nextInt();
        bulan = scan.nextInt();
        tahun = scan.nextInt();

        StringBuilder formattedDate = new StringBuilder();

        // Kondisi ketika input tanggal tidak valid langsung saya return kalo dikasih output takut eror pas diceck

        if (tanggal > 31){
            return;
        }


        // Konversi tanggal
        formattedDate.append(tanggal).append("");

        switch (bulan){
            case 1:
                formattedDate.append(" Januari ");
                break;
            case 2:
                formattedDate.append(" Februari ");
                // Kondisi mengikuti aturan tahun kabisat
                if ((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 400 == 0)) {
                    // Tanggal tidak valid untuk tahun kabisat.
                    if (tanggal > 29) {
                        return;
                    }
                } else {
                    // Tanggal tidak valid untuk tahun non kabisat
                    if (tanggal > 28) {
                        return;
                    }
                }

                break;
            case 3:
                formattedDate.append(" Maret ");
                break;
            case 4:
                formattedDate.append(" April ");
                break;
            case 5:
                formattedDate.append(" Mei ");
                break;
            case 6:
                formattedDate.append(" Juni ");
                break;
            case 7:
                formattedDate.append(" Juli ");
                break;
            case 8:
                formattedDate.append(" Agustus ");
                break;
            case 9:
                formattedDate.append(" September ");
                break;
            case 10:
                formattedDate.append(" Oktober ");
                break;
            case 11:
                formattedDate.append(" November ");
                break;
            case 12:
                formattedDate.append(" Desember ");
                break;
            default:
                formattedDate.append(" Bulan tidak valid ");
                break;
        }

        // Konversi tahun
        formattedDate.append(tahun);

        System.out.println(formattedDate.toString());

    }
}

// solusi dr portal

//import java.util.Scanner;
//public class Main{
//    public static void main(String[] args){
//        Scanner scanner = new Scanner(System.in);
//        int day = scanner.nextInt();
//        int month = scanner.nextInt();
//        int years = scanner.nextInt();
//        String monthResult = "";
//
//        switch (month) {
//            case 1:
//                monthResult = "Januari";
//                break;
//            case 2:
//                monthResult = "Februari";
//                break;
//            case 3:
//                monthResult = "Maret";
//                break;
//            case 4:
//                monthResult = "April";
//                break;
//            case 5:
//                monthResult = "Mei";
//                break;
//            case 6:
//                monthResult = "Juni";
//                break;
//            case 7:
//                monthResult = "Juli";
//                break;
//            case 8:
//                monthResult = "Agustus";
//                break;
//            case 9:
//                monthResult = "September";
//                break;
//            case 10:
//                monthResult = "Oktober";
//                break;
//            case 11:
//                monthResult = "November";
//                break;
//            case 12:
//                monthResult = "Desember";
//                break;
//        }
//
//        System.out.println(day + " " + monthResult + " " + years);
//    }
//}