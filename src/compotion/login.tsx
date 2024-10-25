import { useState } from "react";

import "/src/assets/css/style.css";
import { userLogin } from "../sevies/user";
import { UserLogin } from "../interface/user";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await userLogin({
      email: email,
      password: password,
    } as UserLogin);
    if (!user) {
      toast.warning(user);
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user: user.userdata,
          token: user.token,
        })
      );
      toast.success(
        "Bạn đã đăng nhập thành công vui lòng đơi 3s để chuyển trang"
      );
      setTimeout(() => {
        window.location.href = "/admin";
      }, 3000);
      console.log(user);
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
                <h2 className="my-4">Đăng nhập vào Exclusive</h2>
                <span>Enter your details below</span>
              </div>
              <form className="form" onSubmit={handleLogin}>
                <div className="email my-3 ">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom "
                    name=""
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email or Phone Number"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="mat_khau my-2">
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
                <div className="row my-3 ">
                  <div className="col-6">
                    <button type="submit" className="btn btn-danger">
                      Login
                    </button>
                  </div>
                  <div className="col-6">
                    <a className="btn text-danger " href="/register">
                      Đăng kí tài khoản
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

export default Login;
