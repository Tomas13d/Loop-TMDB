import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
    const userName = useInput();
    const email = useInput();
    const password = useInput();
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/api/register", {
            userName: (userName.value).toLowerCase(),
            email: email.value,
            password: password.value,
          })
          .then(res => {
            navigate("/user/login");
          })
          .catch(err => swal({
            title: "Sorry!",
            text: "There is already a user with this email",
            icon: "error",
            button: false,
            timer: 2000
          }));
          
      };
//alert(`Welcome ${userName.value} to dimension C-137. Please enter your email and password again`)
    return (
        <section className="top">
           <div class="background-container">
        <circle className="shape"></circle>
        <circle className="shape1"></circle>
      </div>
      <div className="social-media-container">
                  <div className="p-4">
                    <h2 className="text-uppercase text-center text-white">Create an account</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-2">

                        <label className="form-label textCard" >Your Name</label>
                        <input 
                        {...userName}
                        type="text" 
                        id="form3Example1cg" 
                        className="form-control form-control-sm" />

                      </div>
      
                      <div className="form-outline mb-2">

                        <label className="form-label textCard" >Your Email</label>
                        <input 
                        {...email}
                        type="email" 
                        id="form3Example3cg" 
                        className="form-control form-control-sm" />

                      </div>
      
                      <div className="form-outline mb-2">

                        <label className="form-label textCard" >Password</label>
                        <input 
                        {...password}
                        type="password" 
                        id="form3Example4cg" 
                        className="form-control form-control-sm" />

                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 botonColor">Register</button>
                      </div>

                      <p className="text-center textCard mt-5 mb-0">Have already an account? 
                        <Link  to={"/user/login"}><u className="textGeneral"> Login here</u> </Link>
                      </p>
      
                    </form>
      
                  </div>
          </div>
      </section>
    )

}

export default Register;