package com.manhdat.OrderManager.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.manhdat.OrderManager.model.Order;
import com.manhdat.OrderManager.repository.OrderRepository;

@Repository
public class OrderDAO {
	@Autowired
	private OrderRepository orderRepository;

	public List<Order> showOrder() {
		return orderRepository.findAll();
	}

	public void addOrder(Order order) {
		orderRepository.save(order);
	}

}
