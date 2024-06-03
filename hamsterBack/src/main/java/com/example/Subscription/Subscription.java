package com.example.Subscription;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Subscription {

    private String username;
    private String email;

    // Constructors, getters, and setters
    public Subscription() {}

    public Subscription(String email) {
        this.username = email.substring(0,email.indexOf('@'));
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
