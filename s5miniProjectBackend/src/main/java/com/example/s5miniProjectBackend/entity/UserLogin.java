package com.example.s5miniProjectBackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name="user_login")
public class UserLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String password;

    public UserLogin(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public UserLogin() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
