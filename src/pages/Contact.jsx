import { Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import React from "react";

function Contact() {
  return (
    <>
      <NavBar />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: "8rem",
          gap: "3",
          fontWeight: "medium",
          color: "black",
          textAlign: "center",
          "@media (min-width: 768px)": {
            flexDirection: "row",
          },
        }}
      >
        <Typography variant="h4">Hey there🙋🏾‍♀️</Typography>
        <Typography variant="h5" py={3}>
          You can contact the organization here!
        </Typography>
      </Stack>
    </>
  );
}

export default Contact;
