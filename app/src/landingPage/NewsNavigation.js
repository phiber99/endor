import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewsCard from "./../news/NewsCard";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#bbb",
    padding: "1vw",
    maxWidth: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: "max(16px, 1vw)",
    textAlign: "left",
    fontFamily: 'GT America Mono",Arial,sans-serif',
  },
  test: {
    width: "540px",
    minWidth: "340px",
    backgroundColor: "#ccc",
  },
});

export default function NewsNavigation() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.text}>
        <h3 style={{ marginTop: 0, marginBottom: 0 }}>By the Stream</h3>
        <h4 style={{ marginTop: 2, marginBottom: 10 }}>
          by Paul Laurence Dunbar
        </h4>
        By the stream I dream in calm delight,<br/>
        and watch as in a glass, <br/>
        How the clouds like crowds of snowy-hued and white-robed maidens pass, <br/>
        And the water into ripples breaks and sparkles as it spreads, <br/>
        Like a host of armored knights with silver helmets on their heads. <br/>
        And I deem the stream an emblem fit of human life may go,<br/>
        For I find a mind may sparkle much and yet but shallows show,<br/>
        And a soul may glow with myriad lights and wondrous mysteries,<br/>
        When it only lies a dormant thing and mirrors what it sees.<br/>
        <br/>
      </div>
      <NewsCard
        title="news"
        url="/news"
        created="-5000000"
        thumbnail="./pictures/ddt.jpg"
        favicon="https://www.google.com/s2/favicons?domain=https://ehp.niehs.nih.gov"
        summary="DDT is unique among the dirty dozen compounds banned under the Stockholm
Convention on Persistent Organic Pollutants because specific exceptions are made for the
indoor spraying of this pesticide to control the mosquitoes that spread malaria. DDT is a
cheap, effective weapon against the spread of this disease, which infects nearly 250
million people each year and kills nearly 1 million. However, little is known about the
long-term human health effects of exposure to DDT in the context of indoor spraying."
      />
    </Container>
  );
}
