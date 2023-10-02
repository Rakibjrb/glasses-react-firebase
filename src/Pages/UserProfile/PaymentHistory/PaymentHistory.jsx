import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const PaymentHistory = () => {
  const { changeMail, user } = useContext(AuthContext);

  const handleMailChange = (e) => {
    e.preventDefault();
    const currentMail = e.target.currentMail.value;
    const newMail = e.target.newMail.value;
    if (currentMail === user.email) {
      changeMail(newMail)
        .then(() => {
          toast.success("Email changed....");
          e.target.reset();
        })
        .catch((err) => {
          toast.error("Email change system is off....");
          console.log(err);
        });
    } else {
      console.log(user.email);
      toast.error("please enter valid current mail !!!");
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-center font-bold text-3xl">Change Your Mail</h2>
      <form onSubmit={handleMailChange} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Current Email </span>
          </label>
          <input
            type="email"
            placeholder="Enter your current email"
            className="input input-bordered"
            name="currentMail"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Email </span>
          </label>
          <input
            type="email"
            placeholder="Enter your new email"
            className="input input-bordered"
            name="newMail"
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

export default PaymentHistory;
