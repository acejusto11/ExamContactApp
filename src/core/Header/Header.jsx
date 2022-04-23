import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    minHeight: "80px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleHomeClick = () => history.push({ pathname: "/" });
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={handleHomeClick}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Cloud Company
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
