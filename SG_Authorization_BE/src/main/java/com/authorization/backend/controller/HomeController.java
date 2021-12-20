package com.authorization.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class HomeController {
    @PostMapping("/test")
    public ResponseEntity<?> test(@RequestBody AuthenticationController.Request request) {
        return ResponseEntity.ok(request);
    }
}
