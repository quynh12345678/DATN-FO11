import React, { useState } from "react";
import { userRegister } from "../sevies/user";
import { UserRegister } from "../interface/user";

import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setPassword_confirmation] =
    useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await userRegister({
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    } as UserRegister);
    // alert("Bạn đã đăng kí thành công");
    console.log(user);
    if (!user) {
      setMessage(user);
      toast.warning(message);
    } else {
      toast.success("Bạn đã đăng kí thành công");
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }
  };

  return (
    <>

      <div className="container my-5">
        <div className="row">
          <div className="col-8">
            <img src="src/images/Side Image.png" alt="" width={"100%"} />
          </div>
          <div className="col-4 d-flex align-items-center my-4">
            <div className="login">
              <div className="tile">
                <h2 className="my-4">Đăng Ký vào Exclusive</h2>
                <span>Enter your details below</span>
              </div>
              <form className="form" onSubmit={handleRegister}>
                <div className="email my-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    name=""
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="email my-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    name=""
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email or Phone Number"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="pass my-2">
                  <input
                    type="password"
                    className="form-control border-0 border-bottom"
                    name=""
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="pass my-2">
                  <input
                    type="password_confirmation"
                    className="form-control border-0 border-bottom"
                    name=""
                    id="password"
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    placeholder="password_confirmation"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="row my-3">
                  <div className="col-6">
                    <button type="submit" className="btn btn-danger">
                      Register
                    </button>
                  </div>
                  <div className="col-6">
                    <a className="btn text-danger " href="">
                      Login
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <ToastContainer />
    </>
  );
};

export default Register;
