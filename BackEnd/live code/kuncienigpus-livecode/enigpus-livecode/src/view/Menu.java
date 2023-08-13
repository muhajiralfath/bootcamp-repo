package view;

import constant.PublishingPeriod;
import entity.Book;
import entity.Magazine;
import entity.Novel;
import service.InventoryService;
import service.InventoryServiceImpl;
import util.Utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Menu {

    private final InventoryService inventoryService = new InventoryServiceImpl();

    public void showMenu() {
        System.out.println("=".repeat(100));
        System.out.println("\t\t\t\t\t\t\t Selamat Datang di Aplikasi Enigpus ");
        System.out.println("=".repeat(100));

        while (true) {
            System.out.println("1. Tambah Buku");
            System.out.println("2. Lihat Semua isi Buku");
            System.out.println("3. Cari Buku");
            System.out.println("4. Ubah Buku");
            System.out.println("5. Hapus Buku");
            System.out.println("X. Keluar Aplikasi");
            System.out.println("=".repeat(100));
            switch (Utils.inputString("Pilih Menu")) {
                case "1":
                    addBook();
                    break;
                case "2":
                    viewBook();
                    break;
                case "3":
                    searchBook();
                    break;
                case "4":
                    updateBook();
                    break;
                case "5":
                    deleteBook();
                    break;
                case "X":
                case "x":
                    System.out.println("Terika Kasih~");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Menu tidak ditemukan!");
            }
            System.out.println();
        }
    }

    private void addBook() {
        while (true) {
            System.out.println("=".repeat(100));
            System.out.println("1. Tambah Novel");
            System.out.println("2. Tambah Majalah");
            System.out.println("X. Kembali ke menu awal");
            System.out.println("=".repeat(100));
            switch (Utils.inputString("Pilih Menu")) {
                case "1":
                    addNovel();
                    return;
                case "2":
                    addMagazine();
                    return;
                case "x":
                case "X":
                    return;
                default:
                    System.out.println("Menu tidak ditemukan!");
            }
            System.out.println();
        }
    }

    private void addNovel() {
        Novel novel = new Novel(
                Utils.inputString("Inputkan Judul"),
                Utils.inputString("Inputkan Penerbit"),
                Utils.inputInt("Inputkan Tahun Terbit")
        );
        try {
            System.out.println("Sukses Tambah Novel");
            inventoryService.addBook(novel);
        } catch (Exception exception) {
            System.out.println("Gagal Tambah Novel");
        }
    }

    private void addMagazine() {
        String title = Utils.inputString("Inputkan Judul");

        int publishingPeriod;
        do {
            publishingPeriod = Utils.inputInt("1. Mingguan\n2. Bulanan\nInputkan Periode Terbit");
        } while (publishingPeriod < 0 || publishingPeriod > 1);

        int publicationYear = Utils.inputInt("Inputkan Tahun Terbit");
        Magazine magazine = new Magazine(title, PublishingPeriod.values()[publishingPeriod - 1], publicationYear);

        try {
            inventoryService.addBook(magazine);
            System.out.println("Sukses Tambah Majalah");
        } catch (Exception exception) {
            System.out.println("Gagal Tambah Majalah");
        }

    }

    private void viewBook() {
        System.out.printf("%-25s Daftar Buku %-25s\n", "=".repeat(44), "=".repeat(45));

        List<Book> books = inventoryService.getAllBook();

        if (books.isEmpty()) {
            throw new RuntimeException("Buku Kosong");
        }

        printBooks(books);
    }

    private static void printBooks(List<Book> books) {
        List<Novel> novels = new ArrayList<>();
        List<Magazine> magazines = new ArrayList<>();

        for (Book book : books) {
            if (book instanceof Novel) {
                novels.add((Novel) book);
            } else {
                magazines.add((Magazine) book);
            }
        }

        if (!novels.isEmpty()) {
            System.out.printf("%-25s Daftar Novel %-25s\n", "-".repeat(44), "-".repeat(45));
            System.out.printf("%-15s %-50s %-25s %s\n", "Kode", "Judul", "Penerbit", "Tahun Terbit");
            System.out.println("-".repeat(100));
            for (Novel novel : novels) {
                System.out.printf("%-15s %-50s %-25s %d\n", novel.getCode(), novel.getTitle(), novel.getPublisher(), novel.getPublicationYear());
            }
        }

        if (!magazines.isEmpty()) {
            System.out.printf("%-25s Daftar Majalah %-25s\n", "-".repeat(44), "-".repeat(45));
            System.out.printf("%-15s %-50s %-25s %s\n", "Kode", "Judul", "Periode Terbit", "Tahun Terbit");
            System.out.println("-".repeat(100));
            for (Magazine magazine : magazines) {
                System.out.printf("%-15s %-50s %-25s %d\n", magazine.getCode(), magazine.getTitle(), magazine.getPeriod().getName(), magazine.getPublicationYear());
            }
        }
    }

    private void searchBook() {
        while (true) {
            System.out.println("".repeat(100));
            System.out.println("Cari Buku Berdasarkan:");
            System.out.println("1. Kode Buku");
            System.out.println("2. Kode Judul Buku");
            System.out.println("".repeat(100));
            switch (Utils.inputString("Pilih Menu")) {
                case "1":
                    searchBookByCode();
                    return;
                case "2":
                    searchBookByTitle();
                    return;
                default:
                    System.out.println("Menu tidak ditemukan!");
            }
        }
    }

    private void searchBookByCode() {
        try {
            viewBook();
        } catch (Exception exception) {
            return;
        }

        String code = Utils.inputString("Inputkan Kode Buku yang ingin dicari");
        Book book = inventoryService.searchBookById(code);

        if (book == null) {
            System.out.println("Buku tidak ditemukan");
            return;
        }

        if (book instanceof Novel) {
            printNovel((Novel) book);
        }

        if (book instanceof Magazine) {
            printMagazine((Magazine) book);
        }
    }

    private void searchBookByTitle() {
        try {
            viewBook();
        } catch (Exception exception) {
            return;
        }

        String title = Utils.inputString("Inputkan Judul Buku yang ingin dicari");

        List<Book> books = inventoryService.searchBookByTitle(title);
        if (books.isEmpty()) {
            System.out.println("Buku tidak ditemukan");
            return;
        }

        printBooks(books);
    }

    private static void printMagazine(Magazine magazine) {
        System.out.printf("%-25s Daftar Majalah %-25s\n", "-".repeat(44), "-".repeat(45));
        System.out.printf("%-15s %-50s %-25s %s\n", "Kode", "Judul", "Periode Terbit", "Tahun Terbit");
        System.out.println("-".repeat(100));
        System.out.printf("%-15s %-50s %-25s %d\n", magazine.getCode(), magazine.getTitle(), magazine.getPeriod().getName(), magazine.getPublicationYear());
    }

    private static void printNovel(Novel novel) {
        System.out.printf("%-25s Daftar Novel %-25s\n", "-".repeat(44), "-".repeat(45));
        System.out.printf("%-15s %-50s %-25s %s\n", "Kode", "Judul", "Penerbit", "Tahun Terbit");
        System.out.println("-".repeat(100));
        System.out.printf("%-15s %-50s %-25s %d\n", novel.getCode(), novel.getTitle(), novel.getPublisher(), novel.getPublicationYear());
    }

    private void updateBook() {
        try {
            viewBook();
        } catch (Exception exception) {
            return;
        }

        String code = Utils.inputString("Inputkan Kode Buku yang ingin dicari");
        Book book = inventoryService.searchBookById(code);

        if (book == null) {
            System.out.println("Buku tidak ditemukan");
            return;
        }

        if (book instanceof Novel) {
            updateNovel((Novel) book);
            return;
        }

        if (book instanceof Magazine) {
            updateMagazine((Magazine) book);
        }

    }

    private void updateNovel(Novel book) {
        String title = Utils.inputStringEmpty("Input Judul Buku | Enter jika tidak ingin dirubah");
        String publisher = Utils.inputStringEmpty("Input Penerbit Buku | Enter jika tidak ingin dirubah");
        Integer publicationYear = Utils.inputIntEmpty("Input Tahun Terbit Buku | Enter jika tidak ingin dirubah");

        Novel novel = new Novel(
                book.getCode(),
                title.isEmpty() ? book.getTitle() : title,
                publisher.isEmpty() ? book.getPublisher() : publisher,
                Objects.isNull(publicationYear) ? book.getPublicationYear() : publicationYear
        );
        inventoryService.updateBook(novel);
    }

    private void updateMagazine(Magazine book) {
        String title = Utils.inputStringEmpty("Inputkan Judul | Enter jika tidak ingin dirubah");

        Integer publishingPeriod;
        PublishingPeriod period = null;
        do {
            publishingPeriod = Utils.inputIntEmpty("1. Mingguan\n2. Bulanan\nInputkan Periode Terbit | Enter jika tidak ingin dirubah");
            if (Objects.isNull(publishingPeriod)) break;
        } while (publishingPeriod < 0 || publishingPeriod > 1);

        if (!Objects.isNull(publishingPeriod)) {
            period = PublishingPeriod.values()[publishingPeriod - 1];
        }

        Integer publicationYear = Utils.inputIntEmpty("Inputkan Tahun Terbit | Enter jika tidak ingin dirubah");
        Magazine magazine = new Magazine(
                book.getCode(),
                title.isEmpty() ? book.getTitle() : title,
                publishingPeriod == null ? book.getPeriod() : period,
                publicationYear == null ? book.getPublicationYear() : publicationYear
        );
        inventoryService.updateBook(magazine);
    }

    private void deleteBook() {
        viewBook();
        String code = Utils.inputString("Inputkan Kode Buku yang ingin dihapus");
        try {
            inventoryService.deleteBookById(code);
            System.out.println("Berhasil Hapus Buku");
        } catch (Exception exception) {
            System.out.println("Gagal Hapus Buku");
        }
    }

}
