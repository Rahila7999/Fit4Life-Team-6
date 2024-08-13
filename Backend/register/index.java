import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

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

    // Method to add a user to the User table
    public void addUser(User user) {
        String INSERT_USER_SQL = "INSERT INTO User (userId, userName, userEmail) VALUES (?, ?, ?)";

        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USER_SQL)) {

            preparedStatement.setString(1, user.getUserId());
            preparedStatement.setString(2, user.getUserName());
            preparedStatement.setString(3, user.getUserEmail());

            int rowAffected = preparedStatement.executeUpdate();

            if (rowAffected > 0) {
                System.out.println("User added successfully!");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Main method to test the addUser method
    public static void main(String[] args) {
        UserRepository userRepository = new UserRepository();

        User newUser = new User("1", "John Doe", "john.doe@example.com");
        userRepository.addUser(newUser);
    }
}
