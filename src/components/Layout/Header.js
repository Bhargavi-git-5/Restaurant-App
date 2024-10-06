import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Logo from "../../images/logo.svg";
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="200" />
        {/* <svg width="64" height="64" viewBox="30 0 200 200">
  <image href="https://upload.wikimedia.org/wikipedia/he/a/a7/React-icon.svg"/>
</svg> */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}><HomeIcon  sx={{ mx:3, justifyContent: "left" }}/>
            Home   
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}><WidgetsIcon color=""  sx={{ mx:3, justifyContent: "left" }}/>Menu </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}><InfoIcon  color="" sx={{ mx:3, justifyContent: "left" }}/>About </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}><ShoppingCartIcon color="" sx={{mx:3, justifyContent: "left" }}/>Cart </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}><ContactPhoneIcon color=""  sx={{ mx:3, justifyContent: "left" }}/>Contact</NavLink>
        </li>
        
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}><HomeIcon  sx={{ mx:1, justifyContent: "left" }}/>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/menu"}><WidgetsIcon color=""  sx={{ mx:1, justifyContent: "left" }}/>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}><InfoIcon  color="" sx={{ mx:1, justifyContent: "left" }}/>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}><ContactPhoneIcon color=""  sx={{ mx:1, justifyContent: "left" }}/>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/cart"}><ShoppingCartIcon color="" sx={{mx:1, justifyContent: "left" }}/>Cart</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
