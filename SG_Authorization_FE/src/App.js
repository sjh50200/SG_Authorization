import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage.js/LoginPage";
import MyPage from "./components/MyPage/MyPage";
import SignUp from "./components/SignUp/SignUp";
import Auth from "./hoc/Auth";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={Auth(HomePage, null)}/>
                <Route path='login' element={Auth(LoginPage, null)}/>
                <Route path='signup' element={<SignUp />}/>
                <Route path='myPage' element={<MyPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
