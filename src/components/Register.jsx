import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";

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
          .catch(err => alert("There is already a user with this email"));
          
      };
//alert(`Welcome ${userName.value} to dimension C-137. Please enter your email and password again`)
    return (
        <section className="top">
          <div className="container h-50" >
            <div className="row d-flex justify-content-center align-items-center h-50">
              <div className="col-12 col-sm-9 col-sm-7 col-xl-6">
                <div className="card cardColor" style={{borderRadius: "15px"}}>
                  <div className="card-body p-4">
                    <h2 className="text-uppercase text-center ">Create an account</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-2">

                        <input 
                        {...userName}
                        type="text" 
                        id="form3Example1cg" 
                        className="form-control form-control-sm" />
                        <label className="form-label textCard" >Your Name</label>

                      </div>
      
                      <div className="form-outline mb-2">

                        <input 
                        {...email}
                        type="email" 
                        id="form3Example3cg" 
                        className="form-control form-control-sm" />
                        <label className="form-label textCard" >Your Email</label>

                      </div>
      
                      <div className="form-outline mb-2">

                        <input 
                        {...password}
                        type="password" 
                        id="form3Example4cg" 
                        className="form-control form-control-sm" />
                        <label className="form-label textCard" >Password</label>

                      </div>
      
                      <div className="form-check d-flex justify-content-center mb-2">

                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="form2Example3cg"
                        />
                        <label className="form-check-label textCard" >I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a></label>

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
              </div>
            </div>
          </div>
   
      </section>
    )

}

export default Register;