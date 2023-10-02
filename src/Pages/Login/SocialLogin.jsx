import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => toast.success("User Creation Successfull...."))
      .catch(() => toast.error("something went wrong"));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-primary btn-circle btn-outline"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
