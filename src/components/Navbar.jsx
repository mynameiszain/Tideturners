import React from "react";
import TTsite_TTHeader_text from "../assets/TTsite/TTsite_TTHeader_text.png";
import { Link } from "react-router-dom";
import { TTmenuItems } from "../api/api";

const Navbar = ({ items }) => {
  return (
    <nav className="h-20 flex flex-col justify-center items-center">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img
              className="cursor-pointor"
              width={150}
              src={TTsite_TTHeader_text}
              alt="Tide Turners"
            />
          </Link>
        </div>
        <ul className="flex flex-wrap items-center justify-end gap-x-8 text-xl font-Verdana tracking-wide">
          {items.map((item) => (
            <li key={item.text} className="font-semibold cursor-pointer">
              {item.link ? (
                <Link to={item.link}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
