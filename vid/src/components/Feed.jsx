import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Stack from '@mui/material/Stack';
import { Stack, Typography, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos , setVideos] = useState(null)

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <div>
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright 2021 JSM Media
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            varient="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategory}
            <span
              style={{
                color: "#03f315",
                marginLeft:'10px'
              }}
            >
              
            </span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </div>
  );
};

export default Feed;
