import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "..";
import swal from "sweetalert";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        setUser(res.data);
        navigate("/upcomingMovies");
      })
      .catch((err) =>
        swal({
          title: "Sorry!",
          text: "The email or password does not match, please try again",
          icon: "error",
          button: false,
          timer: 2000,
        })
      );
  };

  //intento de autenticacion con google
  /*  const handleClick = () => {
      axios
        .get("/api/login/google")
        .then(res => console.log(res))
   } */

  return (
    <section className="top">
      <div class="background-container">
        <circle className="shape"></circle>
        <circle className="shape1"></circle>
      </div>

      <div className="social-media-container">
        <div className="p-4">
          <h2 className="login text-center text-uppercase">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-2">
              <label className="form-label textCard">Your Email</label>
              <input
                {...email}
                type="email"
                id="form3Example3cg"
                className="form-control form-control-sm"
              />
            </div>

            <div className="form-outline mb-2">
              <label className="form-label textCard">Password</label>
              <input
                {...password}
                type="password"
                id="form3Example4cg"
                className="form-control form-control-sm"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn botonColor btn-success btn-block btn-lg gradient-custom-4 "
              >
                Login
              </button>
            </div>

            {/* <a href=""  onClick={handleClick} class="button">Sign in with Google</a> */}

            <p className="text-center textCard mt-5 mb-0">
              You do not have an account?
              <Link to={"/user/register"}>
                <u className="textGeneral"> Register here</u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
