package com.authorization.backend.entity;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "member_id")
    private Long id;

    @Column(unique = true, length = 15)
    @NotNull
    private String username;
    @Column(length = 60)
    @NotNull
    private String password;
    @Column(length = 10)
    @NotNull
    private String role;


    public Member(String username, String password) {
        this.username = username;
        this.password = password;

        if(username.equals("jhyeonseong")) role = Role.ADMIN.getValue();
        else role = Role.USER.getValue();
    }

    public static Member createMember(String username, String password) {
        return new Member(username,password);
    }
}
