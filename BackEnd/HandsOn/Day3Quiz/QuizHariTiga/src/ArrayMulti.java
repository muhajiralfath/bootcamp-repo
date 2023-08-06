public class ArrayMulti {
    public static void main(String[] args) {
            String[][] tableTrainee = new String[3][3];

            // dim 1 menunjukkan individu trainee
           // dimensi 2 untuk menampung data dari masing2 trainee
        //dimensi 2 index 0 menampung nama
        // dim 2 indx 1 menampung alamat
        // dim 2 indx 2 menampung gender

        tableTrainee[0][0] = "Chris";
        tableTrainee[0][1] = "Jakarta";
        tableTrainee[0][2] = "Female";

        tableTrainee[1][0] = "Jhon";
        tableTrainee[1][1] = "Ambon";
        tableTrainee[1][2] = "Male";

        tableTrainee[2][0] = "Doni";
        tableTrainee[2][1] = "Surabaya";
        tableTrainee[2][2] = "Male";

         /*
         [
            [chris, jakarta, female],
            [jhon, Ambon, Male],
            [Doni, Surabaya, Male]
         ]
          */

        for (int i = 0; i < tableTrainee.length; i++){
//            System.out.println("Peserta " + (i + 1));
            for (int j = 0; j <= i; j++){
                
                System.out.println(tableTrainee[i][j]);
            }
        }

        System.out.println();


        for (int i = 0; i < tableTrainee.length; i++){
            System.out.println("Peserta " + (i + 1));
            System.out.println("Nama: " + tableTrainee[i][0]);
            System.out.println("Kota: " + tableTrainee[i][1]);
            System.out.println("Jenis kelamin: " + tableTrainee[i][2]);
            System.out.println();
        }



    }
}
