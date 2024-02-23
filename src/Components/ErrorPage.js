import React from "react";

import {  useNavigate } from "react-router-dom";






const ErrorPage = ({isGlobal }) => {
  const navigate = useNavigate();
  return (
    <div className="">
     This is an error page
      {isGlobal ? <button type="button" onClick={() => navigate("/")}>Go back</button> : <button type="button" onClick={() => navigate("/login")}>Go back</button>}
    </div>
  );
};

export default ErrorPage;


