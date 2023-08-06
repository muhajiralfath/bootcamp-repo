import java.util.Scanner;

public class Palindrom {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();

        input = input.toLowerCase();

        for (int i = 0; i < input.length() / 2; i++){
            if (input.charAt(i) != input.charAt(input.length() - 1 - i)){
                System.out.println("false");
                return;
            }
        }

        System.out.println("true");
    }
}
