"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Battery,
  Award,
  FileText,
  BarChart3,
  Clock,
  Calendar,
  CheckCircle,
  PlusCircle,
  LogIn,
} from "lucide-react"

// Mock user data
const userData = {
  name: "Alex Johnson",
  location: "Portland, OR",
  joinDate: "January 2023",
  totalBatteries: 145,
  ecoScore: 5800,
  badges: [
    { id: 1, name: "Eco Rookie", color: "bg-gray-500", date: "Jan 15, 2023" },
    { id: 2, name: "Green Learner", color: "bg-blue-500", date: "Mar 22, 2023" },
    { id: 3, name: "Recycling Pro", color: "bg-yellow-500", date: "Jul 10, 2023" },
    { id: 4, name: "Battery Guardian", color: "bg-green-500", date: "Nov 5, 2023" },
  ],
  quizResults: [
    { id: 1, date: "Jan 10, 2023", score: "5/8", percentage: 62.5 },
    { id: 2, date: "Mar 15, 2023", score: "6/8", percentage: 75 },
    { id: 3, date: "Jun 20, 2023", score: "7/8", percentage: 87.5 },
    { id: 4, date: "Oct 30, 2023", score: "8/8", percentage: 100 },
  ],
  pledges: [
    {
      id: 1,
      date: "Jan 5, 2023",
      message: "I pledge to recycle all my household batteries this year",
      status: "Completed",
      batteries: 45,
    },
    {
      id: 2,
      date: "Apr 12, 2023",
      message: "I will collect batteries from my neighborhood for proper recycling",
      status: "Completed",
      batteries: 78,
    },
    {
      id: 3,
      date: "Sep 8, 2023",
      message: "I pledge to educate 10 people about battery recycling",
      status: "In Progress",
      batteries: 22,
    },
  ],
  monthlyProgress: [
    { month: "Jan", batteries: 12 },
    { month: "Feb", batteries: 8 },
    { month: "Mar", batteries: 15 },
    { month: "Apr", batteries: 22 },
    { month: "May", batteries: 18 },
    { month: "Jun", batteries: 10 },
    { month: "Jul", batteries: 14 },
    { month: "Aug", batteries: 9 },
    { month: "Sep", batteries: 12 },
    { month: "Oct", batteries: 16 },
    { month: "Nov", batteries: 9 },
    { month: "Dec", batteries: 0 },
  ],
  nextMilestone: { name: "Eco Warrior", batteries: 200, current: 145 },
}

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">User Dashboard</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Track your recycling progress, view earned badges, and manage your pledges.
          </p>
        </motion.div>

        <div className="mx-auto max-w-md">
          <Card className="battery-card border-green-900/30">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-900/30">
                <User className="h-10 w-10 text-green-400" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white">Sign In Required</h2>
              <p className="mb-6 text-gray-300">
                Please sign in to view your recycling dashboard, track your progress, and manage your pledges.
              </p>
              <Button onClick={() => setIsLoggedIn(true)} className="w-full bg-green-500 text-black hover:bg-green-400">
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">Your Recycling Dashboard</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Track your recycling progress, view earned badges, and manage your pledges.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="battery-card sticky top-24 border-green-900/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-white">Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-col items-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-900/30">
                  <User className="h-12 w-12 text-green-400" />
                </div>
                <h2 className="mb-1 text-2xl font-bold text-white">{userData.name}</h2>
                <p className="flex items-center gap-1 text-gray-400">
                  <Calendar className="h-4 w-4" /> Joined {userData.joinDate}
                </p>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm text-gray-400">Total Batteries Recycled</p>
                    <p className="font-bold text-green-400">{userData.totalBatteries}</p>
                  </div>
                  <Progress value={userData.totalBatteries / 2} className="h-2 bg-gray-700" />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm text-gray-400">Eco Score</p>
                    <p className="font-bold text-green-400">{userData.ecoScore.toLocaleString()}</p>
                  </div>
                  <Progress value={userData.ecoScore / 100} className="h-2 bg-gray-700" />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm text-gray-400">Next Milestone</p>
                    <p className="text-sm text-gray-400">
                      {userData.nextMilestone.current}/{userData.nextMilestone.batteries}
                    </p>
                  </div>
                  <Progress
                    value={(userData.nextMilestone.current / userData.nextMilestone.batteries) * 100}
                    className="h-2 bg-gray-700"
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    {userData.nextMilestone.batteries - userData.nextMilestone.current} more batteries until{" "}
                    {userData.nextMilestone.name} badge
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Award className="h-4 w-4 text-green-400" /> Earned Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                  {userData.badges.map((badge) => (
                    <Badge key={badge.id} className={`${badge.color} text-white`}>
                      {badge.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4 bg-black/50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                Overview
              </TabsTrigger>
              <TabsTrigger value="pledges" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                Pledges
              </TabsTrigger>
              <TabsTrigger value="quizzes" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                Quizzes
              </TabsTrigger>
              <TabsTrigger value="badges" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                Badges
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="battery-card border-green-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-white">
                      <BarChart3 className="h-5 w-5 text-green-400" /> Monthly Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full">
                      <div className="flex h-full items-end justify-between gap-1">
                        {userData.monthlyProgress.map((month, index) => (
                          <div key={index} className="flex flex-1 flex-col items-center">
                            <div
                              className="w-full rounded-t-sm bg-green-500"
                              style={{ height: `${(month.batteries / 25) * 100}%`, minHeight: "4px" }}
                            ></div>
                            <p className="mt-2 text-xs text-gray-400">{month.month}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="battery-card border-green-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-white">
                      <Battery className="h-5 w-5 text-green-400" /> Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.pledges.slice(0, 2).map((pledge) => (
                        <div key={pledge.id} className="rounded-lg bg-black/30 p-3">
                          <div className="mb-1 flex items-center justify-between">
                            <p className="font-medium text-white">Pledge Completed</p>
                            <Badge
                              variant={pledge.status === "Completed" ? "default" : "outline"}
                              className={pledge.status === "Completed" ? "bg-green-500 text-black" : ""}
                            >
                              {pledge.status}
                            </Badge>
                          </div>
                          <p className="mb-1 text-sm text-gray-300">"{pledge.message}"</p>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>{pledge.date}</span>
                            <span>{pledge.batteries} batteries recycled</span>
                          </div>
                        </div>
                      ))}

                      {userData.quizResults.slice(0, 1).map((quiz) => (
                        <div key={quiz.id} className="rounded-lg bg-black/30 p-3">
                          <div className="mb-1 flex items-center justify-between">
                            <p className="font-medium text-white">Quiz Completed</p>
                            <span className="text-green-400">{quiz.score}</span>
                          </div>
                          <div className="mb-1">
                            <Progress value={quiz.percentage} className="h-1.5 bg-gray-700" />
                          </div>
                          <div className="text-xs text-gray-400">{quiz.date}</div>
                        </div>
                      ))}

                      <Button
                        variant="outline"
                        className="w-full border-green-900/50 text-green-400 hover:bg-green-900/20 hover:text-green-300"
                      >
                        View All Activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="battery-card mt-6 border-green-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-white">
                    <PlusCircle className="h-5 w-5 text-green-400" /> Log New Recycling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <Button className="h-auto flex-col gap-2 bg-black/30 p-6 hover:bg-green-900/30">
                      <Battery className="h-8 w-8 text-green-400" />
                      <span>Log Batteries</span>
                    </Button>
                    <Button className="h-auto flex-col gap-2 bg-black/30 p-6 hover:bg-green-900/30">
                      <FileText className="h-8 w-8 text-green-400" />
                      <span>Make a Pledge</span>
                    </Button>
                    <Button className="h-auto flex-col gap-2 bg-black/30 p-6 hover:bg-green-900/30">
                      <Award className="h-8 w-8 text-green-400" />
                      <span>Take Quiz</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pledges" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="battery-card border-green-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-white">
                    <FileText className="h-5 w-5 text-green-400" /> Your Pledges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.pledges.map((pledge) => (
                      <div key={pledge.id} className="rounded-lg bg-black/30 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-medium text-white">Recycling Pledge</h3>
                          <Badge
                            variant={pledge.status === "Completed" ? "default" : "outline"}
                            className={pledge.status === "Completed" ? "bg-green-500 text-black" : ""}
                          >
                            {pledge.status}
                          </Badge>
                        </div>
                        <p className="mb-3 text-gray-300">"{pledge.message}"</p>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {pledge.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Battery className="h-4 w-4" /> {pledge.batteries} batteries recycled
                          </span>
                        </div>
                      </div>
                    ))}

                    <Button className="w-full bg-green-500 text-black hover:bg-green-400">
                      <PlusCircle className="mr-2 h-4 w-4" /> Make a New Pledge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quizzes" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="battery-card border-green-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-white">
                    <Award className="h-5 w-5 text-green-400" /> Quiz Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.quizResults.map((quiz) => (
                      <div key={quiz.id} className="rounded-lg bg-black/30 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-medium text-white">Battery Recycling Quiz</h3>
                          <span className="text-lg font-bold text-green-400">{quiz.score}</span>
                        </div>
                        <div className="mb-2">
                          <Progress value={quiz.percentage} className="h-2 bg-gray-700" />
                          <p className="mt-1 text-right text-sm text-gray-400">{quiz.percentage}%</p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {quiz.date}
                          </span>
                          {quiz.percentage === 100 && (
                            <span className="flex items-center gap-1 text-green-400">
                              <CheckCircle className="h-4 w-4" /> Perfect Score
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

                    <Button className="w-full bg-green-500 text-black hover:bg-green-400">Take Another Quiz</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="badges" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="battery-card border-green-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-white">
                    <Award className="h-5 w-5 text-green-400" /> Your Badges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {userData.badges.map((badge) => (
                      <div key={badge.id} className="rounded-lg bg-black/30 p-4 text-center">
                        <div
                          className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full ${badge.color}`}
                        >
                          <Award className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="mb-1 font-medium text-white">{badge.name}</h3>
                        <p className="flex items-center justify-center gap-1 text-xs text-gray-400">
                          <Clock className="h-3 w-3" /> Earned {badge.date}
                        </p>
                      </div>
                    ))}

                    <div className="rounded-lg border border-dashed border-green-900/30 p-4 text-center">
                      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-black/50">
                        <Award className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="mb-1 font-medium text-gray-400">Eco Warrior</h3>
                      <p className="text-xs text-gray-500">
                        Recycle {userData.nextMilestone.batteries - userData.nextMilestone.current} more batteries
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
