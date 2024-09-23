package com.example.s5miniProjectBackend.service;

import com.example.s5miniProjectBackend.entity.UserForm;
import com.example.s5miniProjectBackend.entity.UserRegister;
import com.example.s5miniProjectBackend.repository.ApprovedListRepository;
import com.example.s5miniProjectBackend.repository.UserFormRepository;
import com.example.s5miniProjectBackend.repository.UserRegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service{
    @Autowired
    public UserFormRepository userFormRepository;

    @Autowired
    public UserRegisterRepository userRegisterRepository;
    @Autowired
    public ApprovedListRepository approvedListRepository;

    @Override
    public UserForm savedetails(UserForm userForm) {
        return userFormRepository.save(userForm);
    }

    public UserRegister registerUser(UserRegister userRegister) {
        return userRegisterRepository.save(userRegister);
    }

    @Override
    public List<UserForm> getAllUserDetails() {
        return userFormRepository.findAll();
    }

    // New method to check if a user is already registered
    @Override
    public boolean checkIfUserExists(String email) {
        // Check if a user with the given email exists in the UserRegister repository
        return userRegisterRepository.findByEmail(email) != null;
    }

    @Override
    public UserForm addApprovedList(UserForm userForm) {
        return approvedListRepository.save(userForm);
    }
}
