import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ReactPlayer from "react-player";
import homeVideo from "../../assets/home.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "50vh",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <ReactPlayer
        url={homeVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        />
      </div>
    </section>
  );
};

export default Banner;
