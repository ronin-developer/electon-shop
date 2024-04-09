import React from "react";
import { Link } from "react-router-dom";

import HeadingComponent from "./HeadingComponent";
//logo
import logo from "../assets/images/logo.png";
// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

function NavbarComponent() {
  const navItems = [
    {
      icon: <CiUser />,
      title: "SignIn",
      path: "/",
    },
    {
      icon: <CiHeart />,
      title: "Favorite",
      path: "/",
      count: 0,
    },
    {
      icon: <CiShoppingCart />,
      title: "Cart",
      path: "/",
      count: 0,
    },
  ];

  return (
    <div className="">
      <HeadingComponent />
      <nav className="bg-primaryBlue h-[100px]">
        <div className="container mx-auto flex items-center h-full justify-between">
          {/* logo */}
          <img src={logo} alt="logo" />

          {/* search bar */}
          <div className="bg-textWhite rounded-[20px]">
            <input
              type="text"
              placeholder="Search products"
              className="bg-transparent outline-none px-4 py-2 rounded-[20px]"
            />
            {/* button */}
            <button className="text-textWhite bg-secondaryYelow px-[25px] py-[17px] rounded-[20px]">
              Search
            </button>
          </div>

          {/* links */}
          <div>
            <ul className="flex-center gap-[20px]">
              <li className="flex-center">
                <CiUser color="white" size={25} />
                <Link to={"/"} className="text-textWhite">
                  SignIn
                </Link>
              </li>
              <li className="flex-center gap-10px">
                <div className="flex-center">
                  <CiHeart color="white" size={25} />
                  <span className="badge">0</span>
                  <Link to={"/"} className="text-textWhite">
                    Favorite
                  </Link>
                </div>
              </li>
              <li className="flex-center gap-[10px]">
                <div className="flex-center">
                  <CiShoppingCart color="white" size={25} />
                  <span className="badge">0</span>
                </div>
                <Link to={"/cart"} className="text-textWhite">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
