import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../imgs/logo.png';
import { INIT_STATE } from '../../_redux/types';
import "./Header.scss";

function Header() {
    const userRole = useSelector((state) => state.user.auth);

    return (
        <div className="headerLayout">
            <div className="logoLayout">
                <NavLink to="/" style={{ width: '400px' }}>
                    <img className="logo" src={logo} />
                </NavLink>
            </div>
            <div className="loginMenu">
            {
                (userRole === INIT_STATE.auth) ?
                    (<Link to="login">
                        로그인
                    </Link>) :
                    <Link to="MyPage">
                        마이페이지
                    </Link>
            }
            </div>
        </div>
    )
}

export default Header;
