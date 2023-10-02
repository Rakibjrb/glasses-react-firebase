import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { logIn, forgotPassword } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.userEmail.value;
    const password = e.target.userPassword.value;

    logIn(email, password)
      .then(() => {
        toast.success("User logged in");
        navigate("/");
      })
      .catch(() => toast.error("something went wrong please try again !!!"));
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const emailforreset = emailRef.current.value;
    if (emailforreset) {
      forgotPassword(emailforreset)
        .then(() => {
          toast.success("forgot password email sent to your mail.....");
        })
        .catch(() => toast.error("something went wrong !!!"));
    } else {
      toast.error("Please enter valid email !!!");
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="userEmail"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="userPassword"
                  required
                />
                <label className="label">
                  <button onClick={handleForgotPassword}>
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </button>
                </label>
              </div>
              <div className="form-control mt-6 p-0">
                <button type="submit" className="btn btn-neutral">
                  Login
                </button>
              </div>
              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
