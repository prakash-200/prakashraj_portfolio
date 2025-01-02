import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/HeaderStyles.css";

function Header() {
  return (
    <div className="row header">
      <div className="col">
        <p className="header-name p-3">JP</p>
      </div>
      <div className="col text-start p-4">
        <Link to="/" className="header-arrow text-dark p-2 rounded-5 bg-white">
          <FontAwesomeIcon className="header-arrow" icon={faArrowLeft} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
