import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const { signUpWithEmailAndPassword, auth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!(password.length >= "8")) {
      toast.error("Password must be at least 8 charecters");
      return;
    }

    signUpWithEmailAndPassword(email, password)
      .then(() => {
        toast.success("User Creation Successfull....");
        sendEmailVerification(auth.currentUser).then(() =>
          toast.success("Check your mail and verify....")
        );
      })
      .catch(() => {
        toast.error("something went wrong !!!");
        toast.error("Please Try again later!!!");
      });

    e.target.reset();
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button type="submit" className="btn btn-neutral">
                  Register
                </button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
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

export default Register;
