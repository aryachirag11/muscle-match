import React from "react";
import { Stack, Typography } from "@mui/material";
// import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "full",
            cursor: "pointer",
            gap: "47px",
            padding: "10px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "full",
            cursor: "pointer",
            gap: "40px",
            padding: "10px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img
      src={`/${item}.jpeg`}
      alt={`${item} logo`}
      // loading="lazy"
      // width={300}
      // height={300}
      style={{
        width: "250px",
        height: "250px",
        borderRadius: "20px",
        backgroundSize: "contain",
      }}
    />
    <Typography
      fontSize="22px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
