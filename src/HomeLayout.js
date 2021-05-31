import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";

import projects from "./projects.js";

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
  },
}));

function HomeLayout() {
  const classes = useStyles();

  return (
    <div>
      <h2
        style={{
          fontFamily: "LemonMelon",
          fontSize: "35px",
        }}
      >
        Projects
      </h2>

      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {projects.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.image} alt={tile.title} />
              <GridListTileBar title={tile.name} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default HomeLayout;
