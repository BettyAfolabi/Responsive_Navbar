import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <Box sx={{ backgroundColor: "#bfdbfe", height: "100vh" }}>
      <NavBar />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: "40px",
          mt: "8rem",
          "@media (min-width: 768px)": {
            px: "0",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#3b82f6",
            border: "1px solid #3b82f6",
            py: "10px",
            px: "9px",
            mb: "20px",
            fontSize: "18px",
            borderRadius: "30px",
            textAlign: "center",
            "@media (max-width: 768px)": {
              fontSize: "14px",
              px: "5px",
              py: "10px",
              borderRadius: "20px",
              mb: "2rem",
            },
          }}
        >
          Introducing an A.I.-Powered Marketplace for Today’s Workforce.
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "30px",
            textAlign: "center",
            "@media (min-width: 768px)": {
              py: "16px",
              mt: "20px",
              fontSize: "48px",
              fontWeight: "bold",
            },
          }}
        >
          A better way to productize
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "30px",
            textAlign: "center",
            "@media (min-width: 768px)": {
              py: "5px",
              mb: "20px",
              fontSize: "48px",
              fontWeight: "bold",
            },
          }}
        >
          your skills
        </Typography>
        <Typography
          variant="body"
          sx={{
            fontWeight: "semi-bold",
            fontSize: "20px",
            textAlign: "center",
            mt: "20px",
            py: "10px",
          }}
        >
          The premier digital marketplace
          <span
            style={{
              textDecoration: "underline",
              paddingLeft: "6px",
              fontWeight: "600",
            }}
          >
            exclusively for work and job-based content.
          </span>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Home;
