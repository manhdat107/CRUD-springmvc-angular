package com.manhdat.OrderManager.controller;

import com.manhdat.OrderManager.Result.Results;
import com.manhdat.OrderManager.model.Order;
import com.manhdat.OrderManager.model.User;
import com.manhdat.OrderManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {
        System.out.print(userRepository.findByUsernameOrPassword(user.getUsername(), user.getPassword()));
        if (userRepository.findByUsernameOrPassword(user.getUsername(), user.getPassword()).isPresent()) {
            return true;
        }
        return false;
    }

    @PostMapping("/create")
    public Results createuser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return Results.create("Email Avaiable!! ");
        } else if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return Results.create("Username  Avaiable !! ");
        } else {
            userRepository.save(user);
            return Results.create("Create Success@!!!");
        }

    }

}
