package com.example.hamsterback;

import com.example.Subscription.Subscription;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
public class HamsterBackController {
    private final List<Subscription> subscriptions = new ArrayList<Subscription>();

    @PostMapping("/subscribe")
    public String subscribe(@RequestBody Subscription subscription) {
        subscriptions.add(subscription);
        return "Subscription successful for user: " + subscription.getEmail();
    }
}
