package util;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;

public class FileUtil {

    private final static Path path = Path.of("books");

    public static void saveObject(Object o) {
        try (OutputStream stream = Files.newOutputStream(path);
             ObjectOutputStream oos = new ObjectOutputStream(stream)) {
            oos.writeObject(o);
            oos.flush();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static Object readObject() {
        try (InputStream stream = Files.newInputStream(path);
             ObjectInputStream ois = new ObjectInputStream(stream)) {
            return ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }


}
