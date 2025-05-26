"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Award, Clock, CheckCircle, XCircle, AlertTriangle, Trophy, ArrowRight } from "lucide-react"

// Quiz questions data
const quizQuestions = [
  {
    id: 1,
    question: "Which battery type contains highly toxic cadmium and should never be thrown in regular trash?",
    options: [
      { id: "a", text: "Alkaline" },
      { id: "b", text: "Nickel-Cadmium (Ni-Cd)" },
      { id: "c", text: "Zinc-Carbon" },
      { id: "d", text: "Nickel-Metal Hydride (NiMH)" },
    ],
    correctAnswer: "b",
    explanation:
      "Nickel-Cadmium (Ni-Cd) batteries contain cadmium, which is highly toxic and carcinogenic. They must be recycled at specialized facilities and never thrown in regular trash or incinerated.",
  },
  {
    id: 2,
    question: "Approximately how long does it take to recycle a lithium-ion battery?",
    options: [
      { id: "a", text: "1-2 weeks" },
      { id: "b", text: "1-2 months" },
      { id: "c", text: "6-8 months" },
      { id: "d", text: "2-3 years" },
    ],
    correctAnswer: "c",
    explanation:
      "Lithium-ion batteries typically take 6-8 months to recycle. The process involves disassembly, shredding, and hydrometallurgical processes to recover valuable materials like lithium, cobalt, and nickel.",
  },
  {
    id: 3,
    question: "What should you do with the terminals of lithium batteries before recycling them?",
    options: [
      { id: "a", text: "Clean them with alcohol" },
      { id: "b", text: "Leave them exposed" },
      { id: "c", text: "Tape them to prevent short circuits" },
      { id: "d", text: "Cut them off" },
    ],
    correctAnswer: "c",
    explanation:
      "You should tape the terminals of lithium batteries before recycling to prevent short circuits, which could cause fires during transport or storage. Clear tape over the positive (+) terminal is recommended.",
  },
  {
    id: 4,
    question: "Which of these battery types has the longest decomposition time if not recycled?",
    options: [
      { id: "a", text: "Alkaline" },
      { id: "b", text: "Zinc-Carbon" },
      { id: "c", text: "Lead-Acid" },
      { id: "d", text: "Lithium-Ion" },
    ],
    correctAnswer: "d",
    explanation:
      "Lithium-ion batteries have one of the longest decomposition times at 500+ years. Lead-acid batteries also never fully decompose, but lithium-ion batteries contain materials that persist longer in the environment.",
  },
  {
    id: 5,
    question: "What percentage of a lead-acid car battery can typically be recycled?",
    options: [
      { id: "a", text: "About 50%" },
      { id: "b", text: "About 70%" },
      { id: "c", text: "About 85%" },
      { id: "d", text: "About 98%" },
    ],
    correctAnswer: "d",
    explanation:
      "Lead-acid batteries are highly recyclable with about 98% of components able to be reused. The lead, plastic, and acid can all be recovered and used to manufacture new batteries.",
  },
  {
    id: 6,
    question: "Which of these is NOT a safe way to store used batteries before recycling?",
    options: [
      { id: "a", text: "In a plastic container with a lid" },
      { id: "b", text: "In a metal container" },
      { id: "c", text: "In clear plastic bags" },
      { id: "d", text: "In their original packaging" },
    ],
    correctAnswer: "b",
    explanation:
      "Metal containers are not safe for storing used batteries as the battery terminals could come into contact with the metal, potentially causing short circuits or fires. Always use non-conductive containers like plastic.",
  },
  {
    id: 7,
    question: "How long does it typically take for an alkaline battery to decompose in a landfill?",
    options: [
      { id: "a", text: "10 years" },
      { id: "b", text: "50 years" },
      { id: "c", text: "100 years" },
      { id: "d", text: "500 years" },
    ],
    correctAnswer: "c",
    explanation:
      "Alkaline batteries typically take about 100 years to decompose in a landfill. During this time, they can leach harmful chemicals into soil and groundwater, which is why recycling is important.",
  },
  {
    id: 8,
    question: "Which battery type is commonly used in electric vehicles?",
    options: [
      { id: "a", text: "Alkaline" },
      { id: "b", text: "Zinc-Carbon" },
      { id: "c", text: "Lithium-Ion" },
      { id: "d", text: "Nickel-Cadmium" },
    ],
    correctAnswer: "c",
    explanation:
      "Lithium-ion batteries are commonly used in electric vehicles due to their high energy density, longer lifespan, and ability to be recharged many times. They're also lighter than other rechargeable battery types.",
  },
]

// Badge levels based on score
const badgeLevels = [
  { min: 0, max: 2, name: "Eco Rookie", color: "bg-gray-500" },
  { min: 3, max: 4, name: "Green Learner", color: "bg-blue-500" },
  { min: 5, max: 6, name: "Recycling Pro", color: "bg-yellow-500" },
  { min: 7, max: 8, name: "Battery Guardian", color: "bg-green-500" },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [timerActive, setTimerActive] = useState(true)

  // Timer effect
  useEffect(() => {
    if (!timerActive) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          if (!selectedOption && !showExplanation) {
            handleAnswer(null)
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timerActive, selectedOption, showExplanation])

  // Reset timer when moving to next question
  useEffect(() => {
    if (!showExplanation) {
      setTimeLeft(30)
      setTimerActive(true)
    } else {
      setTimerActive(false)
    }
  }, [currentQuestion, showExplanation])

  const handleAnswer = (optionId: string | null) => {
    const question = quizQuestions[currentQuestion]
    setTimerActive(false)
    setSelectedOption(optionId)
    setShowExplanation(true)

    // Update score and answers
    if (optionId === question.correctAnswer) {
      setScore((prev) => prev + 1)
    }
    setAnswers((prev) => ({ ...prev, [question.id]: optionId || "timeout" }))
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setShowExplanation(false)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowExplanation(false)
    setScore(0)
    setAnswers({})
    setQuizCompleted(false)
    setTimeLeft(30)
    setTimerActive(true)
  }

  // Get current badge based on score
  const getCurrentBadge = () => {
    return badgeLevels.find((badge) => score >= badge.min && score <= badge.max) || badgeLevels[0]
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">Battery Recycling Quiz</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Test your knowledge about battery recycling and earn badges based on your performance. Learn about proper
          disposal methods and environmental impact.
        </p>
      </motion.div>

      {!quizCompleted ? (
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-yellow-500" />
                <span className={timeLeft < 10 ? "text-red-400" : "text-gray-400"}>Time left: {timeLeft}s</span>
              </div>
            </div>
            <Progress
              value={((currentQuestion + 1) / quizQuestions.length) * 100}
              className="h-2 bg-gray-700"
              indicatorClassName="bg-green-500"
            />
          </div>

          <Card className="battery-card overflow-hidden border-green-900/30">
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="mb-6 text-2xl font-bold text-white">{quizQuestions[currentQuestion].question}</h2>

                  {!showExplanation ? (
                    <RadioGroup
                      value={selectedOption || ""}
                      onValueChange={(value) => setSelectedOption(value)}
                      className="space-y-4"
                    >
                      {quizQuestions[currentQuestion].options.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center rounded-lg border border-green-900/30 bg-black/30 p-4 transition-colors hover:bg-green-900/10"
                        >
                          <RadioGroupItem
                            value={option.id}
                            id={`option-${option.id}`}
                            className="border-green-500 text-green-500"
                            onClick={() => handleAnswer(option.id)}
                          />
                          <Label
                            htmlFor={`option-${option.id}`}
                            className="ml-3 flex-grow cursor-pointer text-gray-300"
                          >
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  ) : (
                    <div className="space-y-6">
                      <div className="rounded-lg bg-black/30 p-6">
                        <div className="mb-4 flex items-center gap-2">
                          {selectedOption === quizQuestions[currentQuestion].correctAnswer ? (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-500" />
                          )}
                          <h3 className="text-lg font-semibold text-white">
                            {selectedOption === quizQuestions[currentQuestion].correctAnswer
                              ? "Correct!"
                              : selectedOption === null
                                ? "Time's up!"
                                : "Incorrect"}
                          </h3>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-gray-400">Correct answer:</p>
                          <p className="text-green-400">
                            {
                              quizQuestions[currentQuestion].options.find(
                                (o) => o.id === quizQuestions[currentQuestion].correctAnswer,
                              )?.text
                            }
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">Explanation:</p>
                          <p className="text-gray-300">{quizQuestions[currentQuestion].explanation}</p>
                        </div>
                      </div>

                      <Button
                        onClick={handleNextQuestion}
                        className="w-full bg-green-500 text-black hover:bg-green-400"
                      >
                        {currentQuestion < quizQuestions.length - 1 ? (
                          <span className="flex items-center gap-2">
                            Next Question <ArrowRight className="h-4 w-4" />
                          </span>
                        ) : (
                          "See Results"
                        )}
                      </Button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="battery-card overflow-hidden border-green-900/30">
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-3xl font-bold text-white">Quiz Completed!</h2>
                <p className="text-gray-300">
                  You scored {score} out of {quizQuestions.length} questions correctly.
                </p>
              </div>

              <div className="mb-8 flex flex-col items-center justify-center">
                <div
                  className={`mb-4 flex h-24 w-24 items-center justify-center rounded-full ${
                    getCurrentBadge().color
                  } p-6`}
                >
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-white">{getCurrentBadge().name}</h3>
                <p className="text-gray-400">Badge Earned</p>
              </div>

              <div className="mb-8 rounded-lg bg-black/30 p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">Question Summary</h3>
                <div className="space-y-3">
                  {quizQuestions.map((question, index) => (
                    <div key={question.id} className="flex items-center gap-3">
                      {answers[question.id] === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                      ) : answers[question.id] === "timeout" ? (
                        <AlertTriangle className="h-5 w-5 shrink-0 text-yellow-500" />
                      ) : (
                        <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                      )}
                      <p className="text-gray-300">
                        <span className="font-medium text-white">Q{index + 1}:</span>{" "}
                        {question.question.substring(0, 60)}
                        {question.question.length > 60 ? "..." : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button onClick={restartQuiz} className="flex-1 bg-green-500 text-black hover:bg-green-400">
                  Take Quiz Again
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-green-500 text-green-400 hover:bg-green-900/20 hover:text-green-300"
                >
                  <span className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    View All Badges
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
