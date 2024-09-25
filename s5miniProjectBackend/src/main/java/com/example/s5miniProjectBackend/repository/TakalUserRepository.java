package com.example.s5miniProjectBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.s5miniProjectBackend.entity.TakalUser;

@Repository
public interface TakalUserRepository extends JpaRepository<TakalUser, Integer> {

}