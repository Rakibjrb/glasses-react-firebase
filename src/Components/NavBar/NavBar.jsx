import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Menus = () => {
  const links = ["products", "about", "contact", "blog"];

  return (
    <>
      <li>
        <Link to="/" className="btn btn-sm  btn-ghost">
          HOME
        </Link>
      </li>
      {links.map((link) => (
        <li key={link}>
          <Link to={`/${link}`} className="btn btn-sm  btn-ghost">
            {link}
          </Link>
        </li>
      ))}
    </>
  );
};
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    <Navigate to="/"></Navigate>;
    logOut()
      .then(() => toast.success("User Logoout Success...."))
      .catch(() => toast.error("something went wrong !!!"));
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Menus />
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost font-bold normal-case text-3xl">
            GLASSES
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Menus />
          </ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://lh3.googleusercontent.com/a/ACg8ocJLTrmI3qoKI-dvm1-OFFZrxNc7lEG0zLW7lmDj5EyWLXI=s96-c"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/user/update-profile"
                    className="btn btn-sm  btn-ghost"
                  >
                    {user?.displayName ? user?.displayName : "User194"}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm  btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
