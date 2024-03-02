import React from "react";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";

interface TestResultProps {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

const TestResult: React.FC<TestResultProps> = ({
  score,
  correctAnswers,
  wrongAnswers,
}) => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography fontWeight={700}>You finished the Quiz</Typography>
        Your results:
        <Typography>Score:{score}</Typography>
        <Typography>Correct answers:{correctAnswers}</Typography>
        <Typography>Wrong answers:{wrongAnswers}</Typography>
      </CardContent>
    </Card>
  );
};

export default TestResult;
