import React from "react";
import { Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          mt: "6rem",
          color: "black",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            my: "2rem",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          About Us
        </Typography>
        <Typography variant="body" sx={{ px: "2rem", fontSize: "20px" }}>
          <span color="primary">
            <a href="https://www.getorganizely.com/">Organizely</a>
          </span>{" "}
          is an AI-powered web app that helps people learn and grow in their
          careers. It curates and suggests templates, e-guides, and tutorials on
          a wide range of topics, so people can take control of their own
          learning and skill development.
        </Typography>
      </Stack>
    </>
  );
}

export default About;
