import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

// User class representing the user data
class User {
    private String userId;
    private String userName;
    private String userEmail;

    // Constructor
    public User(String userId, String userName, String userEmail) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
    }

    // Getters and Setters
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Override
    public String toString() {
        return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + "]";
    }
}

// UserRepository class to handle database operations
public class UserRepository {
    // Database connection details
    private String jdbcURL = "jdbc:mysql://localhost:3306/yourDatabaseName";
    private String jdbcUsername = "yourUsername";
    private String jdbcPassword = "yourPassword";

    // Method to get a database connection
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
    }

    // Method to retrieve all users from the User table
    public List<User> getAllUser() {
        List<User> users = new ArrayList<>();
        String SELECT_ALL_USERS_SQL = "SELECT * FROM User";

        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(SELECT_ALL_USERS_SQL)) {

            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                String userId = rs.getString("userId");
                String userName = rs.getString("userName");
                String userEmail = rs.getString("userEmail");
                // Add more fields as per your table structure

                User user = new User(userId, userName, userEmail);
                users.add(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return users;
    }

    // Main method to test the getAllUser method
    public static void main(String[] args) {
        UserRepository userRepository = new UserRepository();

        List<User> users = userRepository.getAllUser();

        for (User user : users) {
            System.out.println(user);
        }
    }
}
