package com.manhdat.OrderManager.model;

import javax.persistence.*;

@Entity
@Table(name = "tbl_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "ordername")
    private String ordername;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "price")
    private String price;

    @Column(name = "phone")
    private Integer phone;

    public Order() {
    }

    public Order(Integer id, String ordername, String price, int quantity, Integer phone) {
        this.id = id;
        this.ordername = ordername;
        this.quantity = quantity;
        this.price = price;
        this.phone = phone;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOrdername() {
        return ordername;
    }

    public void setOrdername(String ordername) {
        this.ordername = ordername;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

