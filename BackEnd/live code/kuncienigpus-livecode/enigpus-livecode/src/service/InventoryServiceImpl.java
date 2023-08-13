package service;

import entity.Book;
import exception.NotFoundException;
import util.FileUtil;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class InventoryServiceImpl implements InventoryService {

    @Override
    public void addBook(Book book) {
        List<Book> books = getAllBook();
        if (books.size() >= 1) {
//            List<Book> testBook = new ArrayList<>(books);
//            testBook.add(book);
            books.add(book);
            FileUtil.saveObject(books);
            return;
        }
        FileUtil.saveObject(Collections.singletonList(book));
    }

    @Override
    public List<Book> searchBookByTitle(String title) {
        List<Book> books = getAllBook();

        if (books.isEmpty()) throw new NotFoundException("Buku kosong");

        List<Book> tempBooks = new ArrayList<>();
        for (Book book : books) {
            if (book.getTitle().toLowerCase().contains(title.toLowerCase())) {
                tempBooks.add(book);
            }
        }

        return tempBooks;
    }

    @Override
    public List<Book> getAllBook() {
        try {
            return new ArrayList<>((List<Book>) FileUtil.readObject());
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    @Override
    public Book searchBookById(String id) {
        List<Book> books = getAllBook();

        if (books.isEmpty()) throw new NotFoundException("Buku kosong");

        for (Book book : books) {
            if (book.getCode().equalsIgnoreCase(id)) {
                return book;
            }
        }

        throw new NotFoundException("Buku tidak ditemukan");
    }

    @Override
    public void updateBook(Book book) {
        List<Book> books = getAllBook();

        if (books.isEmpty()) throw new NotFoundException("Buku kosong");

        for (Book currentBook : books) {
            if (currentBook.getCode().equalsIgnoreCase(book.getCode())) {
                books.set(books.indexOf(currentBook), book);
                break;
            }
        }

        FileUtil.saveObject(books);
    }

    @Override
    public void deleteBookById(String id) {
        List<Book> books = getAllBook();

        if (books.isEmpty()) throw new NotFoundException("Buku kosong");

        for (Book currentBook : books) {
            if (currentBook.getCode().equalsIgnoreCase(id)) {
                books.remove(currentBook);
                break;
            }
        }
        FileUtil.saveObject(books);
    }
}
