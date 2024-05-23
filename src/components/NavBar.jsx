import React from "react";
import {
  AppBar,
  Stack,
  Box,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#fff",
          borderRadius: "100px",
          my: "1rem",
          mx: "auto",
          width: "95%",
        }}
        position="sticky"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#3b82f6",
          }}
        >
          <Stack direction="row" spacing={2}>
            <i className="bx bx-md bxs-color" sx={{ color: "#3b82f6" }}></i>
            <Typography sx={{ fontSize: "24px" }}>Organizely</Typography>
          </Stack>

          {/* Mobile Navbar */}
          <Stack
            sx={{
              "@media (max-width: 768px)": {
                display: "block",
              },
              "@media (min-width: 769px)": {
                display: "none",
              },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon sx={{ color: "#3b82f6" }} />
            </IconButton>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                py={2}
                mt={3}
                width="250px"
                role="presentation"
                sx={{
                  backgroundColor: "#fff",
                  color: "#3b82f6",
                  height: "100vh",
                }}
              >
                <Link to="/home">
                  <Typography
                    sx={{
                      my: "3px",
                      p: "8px",
                      fontSize: "20px",
                      fontWeight: "500",
                      "&:hover": {
                        backgroundColor: "#3b82f6",
                        color: "white",
                      },
                    }}
                  >
                    <i class="bx bxs-home"></i> Home
                  </Typography>
                </Link>
                <Link to="/about">
                  <Typography
                    sx={{
                      my: "3px",
                      p: "8px",
                      fontSize: "20px",
                      fontWeight: "500",
                      "&:hover": {
                        backgroundColor: "#3b82f6",
                        color: "white",
                      },
                    }}
                  >
                    <i class="bx bxs-search-alt-2"></i> About
                  </Typography>
                </Link>
                <Link to="/contact">
                  <Typography
                    sx={{
                      my: "3px",
                      p: "8px",
                      fontSize: "20px",
                      fontWeight: "500",
                      "&:hover": {
                        backgroundColor: "#3b82f6",
                        color: "white",
                      },
                    }}
                  >
                    <i class="bx bx-phone"></i> Contact
                  </Typography>
                </Link>
              </Box>
            </Drawer>
          </Stack>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}
          >
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default NavBar;
