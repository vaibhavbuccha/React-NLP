import React, { useState } from "react";
import Title from "../Header/Title";
import Body from "../Layout/Body";
import Input from "../Header/Input";
import nlp from "compromise";
import {
  Grid,
  Button,
  Typography,
  CardContent,
  Card,
  Divider,
} from "@mui/material";
import CardWrapper from "./CardWrapper";

const Main = () => {
  const [sentence, setSentence] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [present, setpresent] = useState("");
  const [past, setPast] = useState("");
  const [future, setFuture] = useState("");
  const [negative, setNegative] = useState("");
  const [positive, setPositive] = useState("");
  const [verbs, setVerbs] = useState("");

  const getPresent = () => {
    let doc = nlp(sentence);
    doc = doc.sentences().toPresentTense();
    doc = doc.text();
    setpresent(doc);
  };

  const getPast = () => {
    let doc = nlp(sentence);
    doc = doc.sentences().toPastTense();
    doc = doc.text();
    setPast(doc);
  };

  const getFuture = () => {
    let doc = nlp(sentence);
    doc = doc.sentences().toFutureTense();
    doc = doc.text();
    setFuture(doc);
  };

  const getNegative = () => {
    let doc = nlp(sentence);
    doc = doc.sentences().toNegative().text();
    setNegative(doc);
  };

  const getPositive = () => {
    let doc = nlp(sentence);
    doc = doc.sentences().toPositive().text();
    setPositive(doc);
  };

  const getVerbs = () => {
    let doc = nlp(sentence);
    doc = doc.verbs().out("array");
    setVerbs(doc.join(", "));
  };

  const clickHandler = () => {
    setIsShow(true);
    getPresent();
    getPast();
    getFuture();
    getNegative();
    getPositive();
    getVerbs();
  };
  return (
    <Body>
      <Grid container spacing={3} justifyContent="center" p={3}>
        <Grid item xs={12}>
          <Title />
        </Grid>
        <Grid item xs={12}>
          <Input setSentence={setSentence} />
        </Grid>
        <Grid item xs={12} align="center">
          <Button onClick={clickHandler} variant="outlined" size="large">
            Get Results
          </Button>
        </Grid>
      </Grid>
      <Divider />

      {/* Result area */}
      {isShow && (
        <Grid container spacing={3} p={3}>
          <Grid xs={12} sm={12} md={4} lg={3} key={1} p={1}>
            <CardWrapper title="Present tense" result={present} />
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={3} key={1} p={1}>
            <CardWrapper title="Past tense" result={past} />
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={3} key={2} p={1}>
            <CardWrapper title="Future tense" result={future} />
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={3} key={3} p={1}>
            <CardWrapper title="Negative" result={negative} />
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={3} key={3} p={1}>
            <CardWrapper title="Positive" result={positive} />
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={3} key={3} p={1}>
            <CardWrapper title="Verbs" result={verbs} />
          </Grid>
        </Grid>
      )}
    </Body>
  );
};

export default Main;
