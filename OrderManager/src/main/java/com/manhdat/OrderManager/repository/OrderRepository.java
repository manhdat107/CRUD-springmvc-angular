package com.manhdat.OrderManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manhdat.OrderManager.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

}
