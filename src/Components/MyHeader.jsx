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
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

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

const MenuItems = ({ closeMenu }) => {
  return (
    <>
      <MenuItem component={Link} to="/t" onClick={closeMenu}>
        Resume
      </MenuItem>
      <MenuItem component={Link} to="/" onClick={closeMenu}>
        Grudge List
      </MenuItem>
      <MenuItem onClick={closeMenu}>Contact</MenuItem>
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
  const closeMenu = () => setclickPosition(null);
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={e => setclickPosition(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={clickPosition}
            open={Boolean(clickPosition)}
            onClose={closeMenu}
          >
            <MenuItems closeMenu={closeMenu} />
          </Menu>
          <Typography
            component={Link}
            to="/"
            variant="title"
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
