import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Navbar from "../Navbar/Navbar";

import { useNavigate } from "react-router-dom";

function PricingContent() {
  const navigate = useNavigate();

  const tiers = [
    {
      title: "Free",
      price: "0",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Take free trial",
      buttonVariant: "outlined",
      onClick: () => navigate("/home"),
    },
    {
      title: "Pro",
      subheader: "Most popular",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "Enterprise",
      price: "30",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Contact us",
      buttonVariant: "outlined",
    },
  ];

  const styles = {
    backgroundImage:
      "url(" +
      "https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_960_720.jpg" +
      ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={styles}>
      <Navbar />

      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="HighlightText"
          gutterBottom
        >
          Pricing
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="HighlightText"
          component="p"
        >
          This is price section
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                      padding: 10
                      
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        margin={1}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
