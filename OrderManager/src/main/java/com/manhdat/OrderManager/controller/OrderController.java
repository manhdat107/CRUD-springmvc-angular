package com.manhdat.OrderManager.controller;

import java.util.List;
import java.util.Optional;

import com.manhdat.OrderManager.Result.Results;
import com.manhdat.OrderManager.model.User;
import com.manhdat.OrderManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.manhdat.OrderManager.model.Order;
import com.manhdat.OrderManager.repository.OrderRepository;
import com.manhdat.OrderManager.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderRepository orderRepository;


    @GetMapping("/all")
    public List<Order> showall() {
        return orderService.showOrder();
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/add")
    public Results add(@RequestBody Order order) {
        orderRepository.save(order);
        return Results.create("Success roi nhe");
    }

    @GetMapping("/{id}")
    public Optional<Order> findById(@PathVariable int id) {
        return orderRepository.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        orderRepository.deleteById(id);
    }

    @PostMapping("/save")
    public void save(@RequestBody Order order) {
        orderRepository.save(order);
    }


}
