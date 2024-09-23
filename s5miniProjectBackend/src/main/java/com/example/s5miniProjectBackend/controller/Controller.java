package com.example.s5miniProjectBackend.controller;

import com.example.s5miniProjectBackend.dto.UserLoginRequest;
import com.example.s5miniProjectBackend.dto.UserLoginResponse;
import com.example.s5miniProjectBackend.entity.UserRegister;
import com.example.s5miniProjectBackend.repository.UserRegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.s5miniProjectBackend.entity.UserForm;
import com.example.s5miniProjectBackend.service.Service;

import java.util.List;

@RestController
@RequestMapping("/transportpermit")
@CrossOrigin
public class Controller {

    @Autowired
    public Service service;

    @Autowired
    public UserRegisterRepository userRegisterRepository;


/*
User login code
 */

    @PostMapping("/user-login")
    public UserLoginResponse login(@RequestBody UserLoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Query the register table
        UserRegister user = userRegisterRepository.findByEmailAndPassword(email, password);
        if (user != null) {

            if (user.getEmail().equalsIgnoreCase(email) && user.getPassword().equalsIgnoreCase(password)) {
                // Login successful
                return new UserLoginResponse(true, "Login successful");
            } else {

                return new UserLoginResponse(false, "Incorrect email and password");
            }
        } else {
            // if not registered
            return new UserLoginResponse(false, "User not registered");
        }
    }

    /*
    USER REGISTER CODE
     */
    @PostMapping("/user-register")
    public ResponseEntity<String> register(@RequestBody UserRegister register) {
        // Check if the user already exists in the database by email or another unique field
        boolean userExists = service.checkIfUserExists(register.getEmail());

        if (userExists) {
            // If the user is already registered, return an appropriate message
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already registered");
        }

        // If user is not registered, proceed with registration
        service.registerUser(register);
        return ResponseEntity.status(HttpStatus.OK).body("Registration successful");
    }
/*
ADD USER FORM CODE
 */
    @PostMapping("/add-user-form")
    public String add(@RequestBody UserForm userForm) {
        service.savedetails(userForm);
        return "User Details Added Successfully!!!";
    }

    /*
    GET USER FORM CODE
     */
    @GetMapping("/get-all-userdetails")
    public List<UserForm> getAllDetails()
    {
        return service.getAllUserDetails();
    }

    @PostMapping("/add-to-approval-list")
    public String addApprovedList(@RequestBody UserForm userForm)
    {
        service.addApprovedList(userForm);
        return "SuccesFull";
    }

}
