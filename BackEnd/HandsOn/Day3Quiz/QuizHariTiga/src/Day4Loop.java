public class Day4Loop {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++){
            System.out.println("Looping ke " + i + " dimulai");

            if (i == 0) continue; // akan menyelesaikan satu perulangan, kalo break menyelesaikan semua perulangan

            System.out.println("Looping ke " + i + " diakhiri");
            break;

        }
    }
}
