import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./CharacterCard.css";

const CharacterCard = (props : any) => {
  const decideId = () => {
    if (props.selectedValue === "Rick") {
      return 1;
    } else if (props.selectedValue === "Morty") {
      return 2;
    } else {
      if (props.name.includes("Rick")) {
        return 1;
      } else {
        return 2;
      }
    }
  };

  return (
    <Card className="CharacterCard" sx={{ display: "flex", width: "40%" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.image}
        alt=""
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            #Id: {decideId()}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Name : {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Location : {props.locationName}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CharacterCard;
