import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserProfile = ({ children }) => {
  return (
    <div className="flex mb-3 flex-col md:flex-row">
      <div className="md:w-72 h-auto pt-5 bg-gray-100">
        <h2 className="text-center font-bold text-2xl">User Profile</h2>
        <ul className="space-y-5 mt-5 bg-gray-400 py-5 px-4">
          <li>
            <Link to="/user/update-profile" className="text-white">
              Update Profile
            </Link>
          </li>
          <li>
            <Link to="/user/change-password" className="text-white">
              Change Password
            </Link>
          </li>
          <li>
            <Link to="/user/change-email" className="text-white">
              Change email
            </Link>
          </li>
          <li>
            <Link to="/user/orders" className="text-white">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/user/reviews" className="text-white">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

UserProfile.propTypes = {
  children: PropTypes.node,
};

export default UserProfile;
