package com.example.s5miniProjectBackend.service;

import com.example.s5miniProjectBackend.entity.UserForm;
import com.example.s5miniProjectBackend.entity.UserRegister;
import com.example.s5miniProjectBackend.repository.UserFormRepository;
import org.apache.catalina.User;

import java.util.List;

public interface Service {
    UserForm savedetails(UserForm userForm);
    public UserRegister registerUser(UserRegister userRegister);

    List <UserForm>getAllUserDetails();

    boolean checkIfUserExists(String email);

    UserForm addApprovedList(UserForm userForm);
}
