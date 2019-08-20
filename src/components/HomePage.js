import React from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText("#0069d9"),
    backgroundColor: "#0069d9",
    "&:hover": {
      backgroundColor: "#3b5998"
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Link to="view" style={{ textDecoration: "none" }}>
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          View latest statistics
        </ColorButton>
      </Link>
      <Link to="add" style={{ textDecoration: "none" }}>
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Post new statistics
        </ColorButton>
      </Link>
    </div>
  );
}
export default HomePage;
