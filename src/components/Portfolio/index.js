import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Portfolio() {
  const portfolioProjects = [
    {
      title: "Black Mamba",
      technology: "JavaScript, Handlebars, Foundation",
      image: "screenshot2 copy.png",
      description:
        "This app is helps you search for NBA players' statistics and news stories!!",
      repo: "https://github.com/ellysecarter/black-mamba",
      app: "https://ellysecarter.github.io/black-mamba/",
    },
    {
      title: "Aimless Travel",
      technology: "SQL, Express, Node, Handlebars",
      image: "screenshotgroup2.png",
      description:
        "The app is a simple quiz that can help you choose your next travel destination!",
      repo: "https://github.com/StephenWDickey/destination-quiz",
      app: "https://blooming-escarpment-07246.herokuapp.com/",
    },
    {
      title: "nourishMe",
      technology: "JavaScript, HTML, CSS",
      image: "screenshot2.png",
      description:
        "A site that not only gives you the recipe, but provides the nutritional breakdown of each ingredient..",
      repo: "https://github.com/ellysecarter/nourish-me",
      app: "https://ellysecarter.github.io/nourish-me/",
    },
    {
      title: "Workday Assistant",
      technology: "Javascript, Node, Express",
      image: "screenshot.png",
      description:
        "An easy to use scheduler for your 9-5 workday!",
      repo: "https://github.com/ellysecarter/PencilMeIn",
      app: "https://ellysecarter.github.io/workdayassistant/",
    },
    {
      title: "Password Generator",
      technology: "HTML, JQuery",
      image: "passwordgen.png",
      description:
        "A website to help you create unique passwords!",
      repo: "https://github.com/ellysecarter/specialcharacter",
      app: "https://ellysecarter.github.io/specialcharacter/",
    },
    {
      title: "Timed Quiz",
      technology: "JavaScript",
      image: "codingguru.png",
      description:
        "A short timed quiz to test your coding knowledge",
      repo: "https://github.com/ellysecarter/codingguru",
      app: "https://ellysecarter.github.io/codingguru/",
    },
  ];

  return (
    <>
      <Container style={{ padding: "20px 0" }} maxWidth="lg">
        <Grid
          container
          spacing={4}
          style={{
            paddingBottom: "20px",
            paddingLeft: "15px",
            paddingRight: "15px",
            minHeight: "85vh",
          }}
        >
          {portfolioProjects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#3E5C76",
                  color: "#F0EBD8",
                }}
              >
                <CardMedia
                  component="img"
                  title={project.title.default}
                  src={project.image}
                />
                <CardContent style={{ flexGrow: "1" }}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {project.technology}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => window.open(project.repo, "_blank")}
                  >
                    <GitHubIcon sx={{ color: "#F0EBD8" }} />{" "}
                  </Button>
                  <Button
                    sx={{ color: "#F0EBD8" }}
                    size="small"
                    onClick={() => window.open(project.app, "_blank")}
                  >
                    View Application
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Portfolio;
