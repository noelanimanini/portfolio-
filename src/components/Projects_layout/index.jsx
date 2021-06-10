import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import projects from "../../projects.js";
import project from "./projectstyle.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridList: {
    width: 500,
    height: 450,
    padding: "20px",
  },
}));

function index() {
  return (
    <div>
      <Link to="/" className="backbtn2">
        <button>back</button>
      </Link>
      {projects.map((x) => (
        <div>{x.name}</div>
      ))}
    </div>
  );
}

export default index;
