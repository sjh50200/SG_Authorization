package com.authorization.backend.controller;

import com.authorization.backend.entity.Member;
import com.authorization.backend.entity.MemberRepository;
import com.authorization.backend.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class MemberController {
    private final UserService userService;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    //회원가입을 하면 사용자의 정보가 저장된다. 이 때, Bcrypt 암호화 -> success 문자열 반환하면 /authenticate로 접근하게
    @PostMapping("/api/user")
    public ResponseEntity<?> save(@RequestBody MemberDto memberDto) {
        return ResponseEntity.ok(memberRepository.save(Member.createMember(memberDto.getUsername(), passwordEncoder.encode(memberDto.getPassword()))));
    }

    @GetMapping("/api/user/{id}")
    public ResponseEntity<?> check(@PathVariable String username) {
        boolean check = memberRepository.existsByUsername(username);
        if(check == false)
            return new ResponseEntity(HttpStatus.OK);
        else if(check == true)
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        else return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Data
    public static class MemberDto {
        private String username;
        private String password;
    }
}
