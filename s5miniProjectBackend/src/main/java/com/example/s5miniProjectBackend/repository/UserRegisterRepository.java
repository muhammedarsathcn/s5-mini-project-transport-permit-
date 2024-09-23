package com.example.s5miniProjectBackend.repository;

import com.example.s5miniProjectBackend.entity.UserRegister;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRegisterRepository extends JpaRepository<UserRegister,Long> {
     UserRegister findByEmailAndPassword(String email, String password);

    UserRegister findByEmail(String email);
}
