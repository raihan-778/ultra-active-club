import React from "react";
import "./Header.css";

const Header = () => {
  const img =
    "https://previews.123rf.com/images/wikagraphic/wikagraphic2011/wikagraphic201130562/159405373-initial-letter-js-logotype-company-name-colored-blue-swoosh-design-concept-vector-logo-for-business-.jpg";

  return (
    <div className="header">
      <img src={img} alt="" />
      <h2>To-Be-A-Web-Developer-Journey</h2>
    </div>
  );
};

export default Header;
