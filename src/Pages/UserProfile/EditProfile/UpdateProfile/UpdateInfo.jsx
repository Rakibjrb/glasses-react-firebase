import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const UpdateInfo = () => {
  const { changePassword } = useContext(AuthContext);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const oldPassword = e.target.oldPassword.value;
    const newPassword = e.target.newPassword.value;
    const repeatPassword = e.target.repeatPassword.value;

    console.log(oldPassword, newPassword === repeatPassword);

    if (oldPassword !== newPassword && newPassword === repeatPassword) {
      changePassword(repeatPassword)
        .then(() => {
          toast.success("Password changed.....");
          e.target.reset();
        })
        .catch(() => {
          toast.error("something went wrong !!!");
          setTimeout(() => {
            toast.error("Please log in again .... ");
          }, 2000);
        });
    } else if (newPassword !== repeatPassword) {
      toast.error("New password & Repeat password not matched !!!");
    } else {
      toast.error("Old password & New password matched !!!");
      setTimeout(() => {
        toast.error("Please enter different password .... ");
      }, 2000);
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-center font-bold text-3xl">
        Change Your Account Password
      </h2>
      <form onSubmit={handlePasswordChange} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Current Password </span>
          </label>
          <input
            type="password"
            placeholder="Enter your current password"
            className="input input-bordered"
            name="oldPassword"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Password </span>
          </label>
          <input
            type="password"
            placeholder="Enter your new password"
            className="input input-bordered"
            name="newPassword"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Repeat Password </span>
          </label>
          <input
            type="password"
            placeholder="Enter your new password"
            className="input input-bordered"
            name="repeatPassword"
            required
          />
        </div>
        <div className="form-control mt-6 p-0">
          <button type="submit" className="btn btn-neutral">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateInfo;
