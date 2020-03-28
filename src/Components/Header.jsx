import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "@reach/router";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
}));

const Drawer_grp = ({ open, setOpen }) => {
  console.log("drawer froup called");
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem
            button
            component={Link}
            to="/resume"
            onClick={() => setOpen(false)}
          >
            <ListItemText>Resume</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/t"
            onClick={() => setOpen(false)}
          >
            <ListItemText>Grudge List</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/t"
            onClick={() => setOpen(false)}
          >
            <ListItemText component={Link} to="/contact">
              contact
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

const RightButtons = () => {
  return (
    <>
      <ButtonGroup
        component={Box}
        display={{ xs: "none", sm: "block" }}
        size="large"
        variant="text"
        aria-label="large outlined primary button group"
      >
        <Button component={Link} to="/t" color="inherit">
          Resume
        </Button>
        <Button component={Link} to="/" color="inherit">
          Grudge List
        </Button>
        <Button color="inherit">Contact</Button>
      </ButtonGroup>
    </>
  );
};

const Header = () => {
  const classes = useStyles();
  const [clickPosition, setclickPosition] = useState(null);
  const [open, setOpen] = useState(false);
  const closeMenu = () => setclickPosition(null);
  return (
    <>
      <AppBar className="headerBG">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer_grp open={open} setOpen={setOpen} />

          <Typography
            component={Link}
            to="/"
            color="inherit"
            className={classes.flex}
          >
            Masooria
          </Typography>
          <RightButtons />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
