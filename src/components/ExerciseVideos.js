import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material//Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  // console.log(exerciseVideos);
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }}>
      <Typography variant="h3" mb="33px" sx={{ textAlign: "center" }}>
        Watch
        <span
          style={{
            color: " #ff2625",
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          {` ${name} `}
        </span>
        exercise related videos
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row", md: "row", xs: "column" },
          gap: { lg: "30px", md: "20px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <Card
            key={index}
            color="#ff2625"
            orientation="vertical"
            size="md"
            variant="outlined"
            sx={{ height: "340px", width: "387px" }}
          >
            <CardMedia>
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  width="100%;"
                  height="90%;"
                  styles={{ alignItems: "center" }}
                />
              </a>
            </CardMedia>
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography variant="body1" textColor="#fff">
                {item.video.title}
              </Typography>
              <Typography
                startDecorator={<LocationOnRoundedIcon />}
                textColor="neutral.300"
                variant="body2"
              >
                {item.video.channelName}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
