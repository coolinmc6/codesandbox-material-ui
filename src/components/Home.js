import React from "react";

// import Fab from '@material-ui/core'
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Home = () => (
  <div>
    <Button color="primary" variant="contained">
      Do Stuff
    </Button>

    <Avatar>H{/* <LockOutlinedIcon /> */}</Avatar>
    <LockIcon />
    <LockOutlinedIcon />
  </div>
);

export { Home };
