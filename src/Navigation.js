import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <a
          className="navbar-brand text-muted"
          href="https://cristianjuarezz.github.io"
          target="_blank"
        >
          About Me
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
