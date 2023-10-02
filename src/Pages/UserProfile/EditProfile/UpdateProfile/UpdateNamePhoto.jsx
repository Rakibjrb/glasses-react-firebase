import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { sendEmailVerification } from "firebase/auth";

const UpdateNamePhoto = () => {
  const { user, updateNameAndPhoto, auth } = useContext(AuthContext);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photolink = e.target.imglink.value;
    updateNameAndPhoto(name, photolink)
      .then(() => {
        toast.success("Profile Updated Successfull....");
        e.target.reset();
      })
      .catch(() => toast.error("something went wrong !!!"));
  };

  const handleVerifyUserEmail = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!(user.email === email)) {
      toast.error("Please enter valid mail");
      return;
    }

    sendEmailVerification(auth.currentUser).then(() =>
      toast.success("Check your mail and verify....")
    );

    e.target.reset();
  };

  return (
    <>
      <div className="p-10 w-full">
        <h2 className="text-center font-bold text-3xl">Update User Profile</h2>
        <form onSubmit={handleProfileUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Photo Link</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo link"
              className="input input-bordered"
              name="imglink"
              required
            />
          </div>
          <div className="form-control mt-6 p-0">
            <button type="submit" className="btn btn-neutral">
              Update
            </button>
          </div>
        </form>

        <br />

        <h2 className="text-center font-bold text-3xl">Verify your email</h2>
        <form onSubmit={handleVerifyUserEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your current email here </span>
            </label>
            <input
              type="email"
              placeholder="Enter your new email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control mt-6 p-0">
            <button type="submit" className="btn btn-neutral">
              Verify Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateNamePhoto;
