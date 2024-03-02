"use client";

import styles from "./page.module.css";
import { Box, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import TestResult from "@/components/TestResult";

const quizData = [
  {
    question: "what is the capital of great Britain",
    variants: ["London", "Berlin", "Moscow"],
    index: 0,
    answer: "London",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    variants: ["const", "var", "let", "constant"],
    index: 1,
    answer: "const",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Python?",
    variants: ["console.log()", "print()", "document.write()"],
    index: 2,
    answer: "print()",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Python?",
    variants: ["stringify()", "json()", "convert()", "None of the above"],
    index: 3,
    answer: "json()",
  },
  {
    question: "Who is the CEO of Tesla Motors?",
    variants: ["Bill Gates", "Steve Jobs", "Elon Musk"],
    index: 4,
    answer: "Elon Musk",
  },
  {
    question: "Name World's Richest Man?",
    variants: ["Jeff Bezo", "Bill Gates", "Mark Zuckerberg"],
    index: 5,
    answer: "Mark Zuckerberg",
  },
];

export default function Home() {
  const [activeQuestion, setCurrentQuestion] = useState<number>(0);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const currentQuiz = quizData[activeQuestion];

  const handleUpdateQuiz = () => {
    if (activeQuestion !== quizData.at(-1)?.index)
      setCurrentQuestion((prev) => prev + 1);

    if (activeQuestion === quizData.at(-1)?.index) {
      setIsShowResult(true);
    }

    if (isShowResult && activeQuestion === quizData.at(-1)?.index) {
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setIsShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  const onSelectAnswer = (answer: string) => {
    if (answer === currentQuiz.answer) {
      setResult((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
      }));
      handleUpdateQuiz();
    } else {
      setResult((prevState) => ({
        ...prevState,
        wrongAnswers: prevState.wrongAnswers + 1,
      }));
      handleUpdateQuiz();
    }
  };

  return (
    <main className={styles.main}>
      <Box display="flex" flexDirection="column" width="700px" gap="16px">
        {!isShowResult ? (
          <Box display="flex">
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography fontWeight={700}>
                  Вопрос {currentQuiz.index + 1} / {quizData.length}
                </Typography>
                <Typography>{currentQuiz.question}</Typography>
                <Box display="flex" flexDirection="column" gap={1} mt={1}>
                  {currentQuiz.variants.map((variant) => (
                    <Button
                      color="secondary"
                      variant="contained"
                      key={variant}
                      sx={{ justifyContent: "start" }}
                      onClick={() => onSelectAnswer(variant)}
                    >
                      {variant}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ) : (
          <TestResult
            score={result.score}
            correctAnswers={result.correctAnswers}
            wrongAnswers={result.wrongAnswers}
          />
        )}
        <Box width="100%" display="flex" justifyContent="end">
          <Button
            variant="contained"
            sx={{ alignSelf: "end" }}
            onClick={handleUpdateQuiz}
          >
            Next
          </Button>
        </Box>
      </Box>
    </main>
  );
}
