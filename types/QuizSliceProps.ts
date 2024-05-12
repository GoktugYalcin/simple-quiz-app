import { AnswersProps } from "@/types/AnswerProps";

export type QuestionProps = {
  userId: number;
  id: number;
  title: string;
  body: string[];
};

export interface QuizSliceProps {
  questions: QuestionProps[];
  answers: AnswersProps[];
  currentQuestion: number;
}
