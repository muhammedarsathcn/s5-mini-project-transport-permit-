package com.example.s5miniProjectBackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name="user_register")
public class UserRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String number;
    private String email;
    private String password;

    public UserRegister() {
    }

    public UserRegister(Long id, String name, String number, String email, String password) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
