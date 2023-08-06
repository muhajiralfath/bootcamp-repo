public class Day4Array {
    public static void main(String[] args) {
        String[] days = {
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jum'at",
                "Sabtu",
                "Minggu"
        };

        int i = 0;
//        Menggunakan while
        while (i < days.length){
            System.out.println("Hari " + days[i]);
            i++;
        }

        // menggunakan do while
//        do {
//            System.out.println("Hari " + days[i]);
//            i++;
//        } while (i < days.length );

        // menggunakan for
//        for (String day : days){
//            System.out.println("Hari : " + day);
//        }


//        System.out.println("Hari Ketiga adalah : " + days[3]);
//
//        days[3] = "Rabu";
//
//        System.out.println("Hari Ketiga adalah : " + days[3]);

    }
}
