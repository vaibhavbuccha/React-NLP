import React from "react";
import { Typography } from "@mui/material";
import "./index.css";
const Profile = () => {
  return (
    <div className="footer" align="center">
      <Typography>Made By </Typography>
      <br />
      <Typography component="div" variant="h5" className="name">
        Vaibhav buccha
      </Typography>
      <br />
      <a href="https://github.com/vaibhavbuccha" target="_blank">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          width={50}
        />
      </a>
    </div>
  );
};

export default Profile;
