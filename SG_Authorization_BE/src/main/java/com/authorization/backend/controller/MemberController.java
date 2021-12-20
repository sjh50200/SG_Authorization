package com.authorization.backend.controller;

import com.authorization.backend.entity.Member;
import com.authorization.backend.entity.MemberRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class MemberController {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    //회원가입을 하면 사용자의 정보가 저장된다. 이 때, Bcrypt 암호화 -> success 문자열 반환하면 /authenticate로 접근하게
    @PostMapping("/api/user")
    public ResponseEntity<?> save(@RequestBody MemberDto memberDto) {
        return ResponseEntity.ok(memberRepository.save(Member.createMember(memberDto.getUsername(), passwordEncoder.encode(memberDto.getPassword()))));
    }


    @Data
    public static class MemberDto {
        private String username;
        private String password;
    }
}
