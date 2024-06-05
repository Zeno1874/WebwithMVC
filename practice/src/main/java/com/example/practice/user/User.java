package com.example.practice.user;

import java.util.UUID;

public class User {

    private final UUID userID;
    private final String username;
    private final String email;

    public User(UUID userID, String email) {
        this.userID = userID;
        this.email = email;
        this.username = email.split("@")[0];
    }

    public UUID getUserID() {
        return userID;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }
}
