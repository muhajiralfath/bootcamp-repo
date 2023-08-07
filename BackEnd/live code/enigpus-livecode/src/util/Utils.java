package util;

import entity.Book;
import entity.Magazine;
import entity.Novel;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

public class Utils {

    public static String inputString(String info) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.printf("%-5s: ", info);
            String input = scanner.nextLine();
            if (input.isEmpty() || input.isBlank()) continue;
            return input;
        }
    }

    public static String inputStringEmpty(String info) {
        Scanner scanner = new Scanner(System.in);
        System.out.printf("%-5s: ", info);
        return scanner.nextLine();
    }

    public static Integer inputIntEmpty(String info) {
        Scanner scanner = new Scanner(System.in);

        System.out.printf("%-5s: ", info);
        int inputInt;
        try {
            String input = scanner.nextLine();
            inputInt = Integer.parseInt(input);
        } catch (Exception e) {
            return null;
        }
        return inputInt;
    }

    public static int inputInt(String info) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.printf("%-5s: ", info);
            int inputInt;
            try {
                String input = scanner.nextLine();
                inputInt = Integer.parseInt(input);
            } catch (Exception e) {
                continue;
            }
            return inputInt;
        }
    }

    private static int countMagazine(List<Book> books) {
        if (books == null) return 0;
        List<Magazine> magazines = new ArrayList<>();
        for (Book book : books) {
            if (book instanceof Magazine) {
                magazines.add((Magazine) book);
            }
        }

        return magazines.size();
    }

    private static int countNovel(List<Book> books) {
        if (books == null) return 0;
        List<Novel> novels = new ArrayList<>();
        for (Book book : books) {
            if (book instanceof Novel) {
                novels.add((Novel) book);
            }
        }

        return novels.size();
    }

    private static String generateId(int count) {
        if (count < 10 && count > 0) {
            return String.format("000%d", count);
        } else if (count < 100) {
            return String.format("00%d", count);
        } else if (count < 1000) {
            return String.format("0%d", count);
        } else {
            return String.format("%d", count);
        }
    }

    public static String generateBookCode(Book book) {
        List<Book> books = null;
        try {
            books = (List<Book>) FileUtil.readObject();
        } catch (Exception ignored) {
        }

        if (book instanceof Novel) {
            Novel novel = (Novel) book;
            int countNovel = countNovel(books);
            return String.format("A-%d-%s", novel.getPublicationYear(), generateId(countNovel + 1));
        } else {
            Magazine magazine = (Magazine) book;
            int countMagazine = countMagazine(books);
            return String.format("A-%d-%s", magazine.getPublicationYear(), generateId(countMagazine + 1));
        }
    }

}
