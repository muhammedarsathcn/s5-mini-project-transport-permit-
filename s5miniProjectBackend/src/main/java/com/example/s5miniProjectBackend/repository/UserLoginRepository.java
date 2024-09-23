package com.example.s5miniProjectBackend.repository;

import com.example.s5miniProjectBackend.entity.UserLogin;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLoginRepository extends JpaRepository<UserLogin,Long> {

}
