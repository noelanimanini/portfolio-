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
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function HomeLayout() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={180}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader
              component="div"
              style={{ fontSize: "30px", fontFamily: "'Raleway', sans-serif;" }}
            >
              projects
            </ListSubheader>
          </GridListTile>
          {projects.map((tile) => (
            <GridListTile key={tile.img}>
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
