import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
        Connection connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
        return connection;
    }

    // Method to select a user by userId
    public User selectUser(String userId) {
        User user = null;
        String SELECT_USER_SQL = "SELECT * FROM User WHERE userId = ?";

        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(SELECT_USER_SQL)) {

            preparedStatement.setString(1, userId);

            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                String id = rs.getString("userId");
                String name = rs.getString("userName");
                String email = rs.getString("userEmail");
                // Populate user object with data from the result set
                user = new User(id, name, email);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return user;
    }

    // Main method to test the selectUser method
    public static void main(String[] args) {
        UserRepository userRepository = new UserRepository();

        // Example: Fetch user with userId "123"
        User user = userRepository.selectUser("123");

        if (user != null) {
            System.out.println(user);
        } else {
            System.out.println("User not found!");
        }
    }
}
