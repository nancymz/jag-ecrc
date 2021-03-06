import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import "../page.css";
import Header from "../../base/header/Header";
import Footer from "../../base/footer/Footer";
import { Button } from "../../base/button/Button";

export default function Error({ page: { header, error } }) {
  const [toHome, setToHome] = useState(false);

  const homeButton = {
    label: "Home",
    buttonStyle: "btn ecrc_go_btn",
    buttonSize: "btn",
    type: "submit"
  };

  if (toHome) {
    return <Redirect to="/" />;
  }

  let errorContent;

  if (error === "session expired") {
    errorContent = (
      <div>
        <h1>Your session has expired.</h1>
        <br />
        <p>Please return to the home page and begin your session again.</p>
      </div>
    );
  } else {
    errorContent = (
      <div>
        <h1>An unknown error has occurred.</h1>
        <br />
        <p>
          The error description is below. If this error persists, please try
          again later.
          <br />
          <br />
          {error}
        </p>
      </div>
    );
  }

  return (
    <main>
      <Header header={header} />
      <div className="page">
        <div className="content col-md-8">
          {errorContent}
          <div className="buttons">
            <Button button={homeButton} onClick={() => setToHome(true)} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

Error.propTypes = {
  page: PropTypes.shape({
    error: PropTypes.string.isRequired,
    header: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
