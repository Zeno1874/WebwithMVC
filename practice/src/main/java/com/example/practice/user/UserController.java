package com.example.practice.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("users")
public class UserController {

    @GetMapping
    public List<User> getAllUsers() {
        return List.of(
                new User(UUID.randomUUID(),"cc@gmail.com"),
                new User(UUID.randomUUID(),"xxy@yahoo.com")
        );
    }
}
