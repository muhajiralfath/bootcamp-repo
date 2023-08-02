import java.sql.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        Driver postgreDriver = new org.postgresql.Driver();
        try {
//            DriverManager.registerDriver(postgreDriver);
            Class.forName("org.postgresql.Driver");

            try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/tokonyadia_db", "postgres", "qpwoeiru")) {
                System.out.println("Koneksi Berhasil");

//                 Menambah data (Insert)
//                try (Statement statement = connection.createStatement()) {
//                    // Query Insert
//                    String sql = "INSERT INTO m_customer (name, mobile_phone, address, email) VALUES ('Haifa', '02923103', 'Babelan, Bekasi', 'haifa@gmail.com')";
//                    // Execute Query DML
//                    int result = statement.executeUpdate(sql);
//                    if (result >= 1){
//                        System.out.println("Berhasil menambah baru");
//                    } else {
//                        System.out.println("Gagal menambah");
//                    }
//
//                } catch (SQLException e) {
//                    System.out.println(e.getMessage());
//                }

                // Query Select
//                Statement statement = connection.createStatement();
//                String sql = "SELECT * FROM m_customer";
//                ResultSet resultSet = statement.executeQuery(sql);
//
//                while (resultSet.next()){
//                    int id = resultSet.getInt("id");
//                    String name = resultSet.getString("name");
//                    String mobilePhone = resultSet.getString("mobile_phone");
//                    String address = resultSet.getString("address");
//                    String email = resultSet.getString("email");
//
//                    System.out.printf("Id: %d, Nama: %s, Nomor Telp: %s, Alamat: %s, Email: %s \n", id, name, mobilePhone, address,email);
//                }
//
//                resultSet.close();
//                statement.close();

                // Delete record data
//                Scanner scanner = new Scanner(System.in);
//                System.out.print("Masukkan id yang ingin dihapus: ");
//                int id = scanner.nextInt();
//                scanner.nextLine();
//
//                Statement statement = connection.createStatement();
//                String sql = "DELETE FROM m_customer WHERE id =" + id;
//                int result = statement.executeUpdate(sql);
//
//                if(result >= 1){
//                    System.out.println("Berhasil dihapus");
//                } else {
//                    System.out.println("Gagal dihapus");
//                }
//
//                statement.close();

                Scanner scanner = new Scanner(System.in);
                Statement statement = connection.createStatement();

                System.out.print("Masukkan id data yang ingin ditampilan dah diedit: ");
                int id = scanner.nextInt();
                scanner.nextLine();
                String name, mobilePhone, address, email;
                String sql = "SELECT * FROM m_customer WHERE id =" + id;
                String sqlView = "SELECT * FROM m_customer";

                ResultSet resultSet = statement.executeQuery(sql);

                while (resultSet.next()){
                    id = resultSet.getInt("id");
                    name = resultSet.getString("name");
                    mobilePhone = resultSet.getString("mobile_phone");
                    address = resultSet.getString("address");
                    email = resultSet.getString("email");

                    System.out.printf("Id: %d, Nama: %s, Nomor Telp: %s, Alamat: %s, Email: %s \n", id, name, mobilePhone, address,email);
                }
                System.out.println("=".repeat(20));
                System.out.println("Masukkan data baru");
                System.out.println("=".repeat(20));

                System.out.print("Nama: ");
                String newName = scanner.nextLine();
                System.out.print("Nomor Telp: ");
                String newPhone = scanner.nextLine();
                System.out.print("Alamat: ");
                String newAddress = scanner.nextLine();
                System.out.print("Email: ");
                String newEmail = scanner.nextLine();

                String sqlUpdate = "UPDATE m_customer set name = ?, mobile_phone = ?, address = ?, email = ? WHERE id = ?";
                PreparedStatement preparedStatement = connection.prepareStatement(sqlUpdate);

                preparedStatement.setString(1, newName);
                preparedStatement.setString(2, newPhone);
                preparedStatement.setString(3, newAddress);
                preparedStatement.setString(4, newEmail);
                preparedStatement.setInt(5, id);

                int result = preparedStatement.executeUpdate();

                if (result >= 1){
                    System.out.println("Berhasil diubah");
                } else {
                    System.out.println("Gagal diubah");
                }

                System.out.println("=".repeat(20));
                System.out.println("Data Terbaru");
                System.out.println("=".repeat(20));

                resultSet = statement.executeQuery(sqlView);

                while (resultSet.next()){
                    id = resultSet.getInt("id");
                    name = resultSet.getString("name");
                    mobilePhone = resultSet.getString("mobile_phone");
                    address = resultSet.getString("address");
                    email = resultSet.getString("email");

                    System.out.printf("Id: %d, Nama: %s, Nomor Telp: %s, Alamat: %s, Email: %s \n", id, name, mobilePhone, address,email);
                }

                scanner.close();
                resultSet.close();
                statement.close();

            } catch (SQLException e){
                System.out.println(e.getMessage());
            }
        } catch (ClassNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}