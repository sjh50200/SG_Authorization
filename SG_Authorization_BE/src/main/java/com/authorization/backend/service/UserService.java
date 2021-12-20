package com.authorization.backend.service;

import com.authorization.backend.entity.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final MemberRepository memberRepository;

    public String loadUserRoleByUsername (String username) {
        return memberRepository.findByUsername(username).get().getRole();
    }
}
