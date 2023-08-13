package service;

import entity.Book;

import java.util.List;

public interface InventoryService {

    void addBook(Book book);
    List<Book> searchBookByTitle(String title);
    List<Book> getAllBook();
    Book searchBookById(String id);
    void updateBook(Book book);
    void deleteBookById(String id);

}
