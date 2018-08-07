package com.manhdat.OrderManager.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manhdat.OrderManager.DAO.OrderDAO;
import com.manhdat.OrderManager.model.Order;

@Service
@Transactional
public class OrderService {
	@Autowired
	private OrderDAO orderDAO;

	public List<Order> showOrder() {
		return orderDAO.showOrder();
	}

	public void addOrder(Order order) {
		orderDAO.addOrder(order);
	}

}
