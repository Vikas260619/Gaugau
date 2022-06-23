import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { LOGINURL } from "../api/constants";
import axios from 'axios'
import { Button } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onSubmitFun = (e) => {
    e.preventDefault();
    axios({
      url: LOGINURL,
      method: 'post',
      headers: '',
      data: {
        email, password
      }
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem("token", res.data.Token);
        if (email === res.data.data.email) {
          navigate(PATHS.dashboard, { replace: true });
        }
      }).catch(err => {
        console.log(err)
      })

  }

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 hidden md:block  bg-gaugauLoginBanner bg-cover bg-center"></div>
      <div className="w-full md:w-1/2 h-screen flex justify-center items-center">
        <form
          className="flex flex-col gap-5 w-full mx-44"
        >
          <h1 className="text-center text-2xl text-primaryBlue">
            Gaugau Admin
          </h1>
          <div className="flex flex-col gap-5">
            Email
            <input
              label="Email"
              className="border border-primaryBlack px-3 py-2 focus:border-primaryBlue outline-none w-full "
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            Password
            <input
              label="Password"
              className="border border-primaryBlack px-3 py-2 focus:border-primaryBlue outline-none w-full "
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              className="px-3 w-full py-2 text-primaryWhite bg-primaryBlue mt-4"
              onClick={onSubmitFun}
            >Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
