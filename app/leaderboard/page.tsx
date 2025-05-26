"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Medal, User, MapPin, Battery, Award, Filter } from "lucide-react"

// Mock leaderboard data
const leaderboardData = {
  global: [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Seattle, WA",
      score: 12500,
      batteries: 320,
      badges: 8,
      rank: 1,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      score: 10800,
      batteries: 275,
      badges: 7,
      rank: 2,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Austin, TX",
      score: 9600,
      batteries: 245,
      badges: 6,
      rank: 3,
    },
    {
      id: 4,
      name: "David Kim",
      location: "Chicago, IL",
      score: 8900,
      batteries: 230,
      badges: 5,
      rank: 4,
    },
    {
      id: 5,
      name: "Olivia Williams",
      location: "Portland, OR",
      score: 8200,
      batteries: 210,
      badges: 6,
      rank: 5,
    },
    {
      id: 6,
      name: "James Taylor",
      location: "Denver, CO",
      score: 7800,
      batteries: 200,
      badges: 5,
      rank: 6,
    },
    {
      id: 7,
      name: "Sophia Martinez",
      location: "Miami, FL",
      score: 7200,
      batteries: 185,
      badges: 4,
      rank: 7,
    },
    {
      id: 8,
      name: "Ethan Brown",
      location: "Boston, MA",
      score: 6900,
      batteries: 175,
      badges: 4,
      rank: 8,
    },
    {
      id: 9,
      name: "Ava Garcia",
      location: "Los Angeles, CA",
      score: 6500,
      batteries: 165,
      badges: 3,
      rank: 9,
    },
    {
      id: 10,
      name: "Noah Wilson",
      location: "New York, NY",
      score: 6200,
      batteries: 160,
      badges: 3,
      rank: 10,
    },
  ],
  monthly: [
    {
      id: 1,
      name: "Emma Rodriguez",
      location: "Austin, TX",
      score: 3200,
      batteries: 82,
      badges: 2,
      rank: 1,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Seattle, WA",
      score: 2900,
      batteries: 75,
      badges: 2,
      rank: 2,
    },
    {
      id: 3,
      name: "David Kim",
      location: "Chicago, IL",
      score: 2700,
      batteries: 70,
      badges: 1,
      rank: 3,
    },
    {
      id: 4,
      name: "Michael Chen",
      location: "San Francisco, CA",
      score: 2500,
      batteries: 65,
      badges: 1,
      rank: 4,
    },
    {
      id: 5,
      name: "James Taylor",
      location: "Denver, CO",
      score: 2300,
      batteries: 60,
      badges: 1,
      rank: 5,
    },
    {
      id: 6,
      name: "Olivia Williams",
      location: "Portland, OR",
      score: 2100,
      batteries: 55,
      badges: 1,
      rank: 6,
    },
    {
      id: 7,
      name: "Noah Wilson",
      location: "New York, NY",
      score: 1900,
      batteries: 50,
      badges: 1,
      rank: 7,
    },
    {
      id: 8,
      name: "Sophia Martinez",
      location: "Miami, FL",
      score: 1700,
      batteries: 45,
      badges: 0,
      rank: 8,
    },
    {
      id: 9,
      name: "Ethan Brown",
      location: "Boston, MA",
      score: 1500,
      batteries: 40,
      badges: 0,
      rank: 9,
    },
    {
      id: 10,
      name: "Ava Garcia",
      location: "Los Angeles, CA",
      score: 1300,
      batteries: 35,
      badges: 0,
      rank: 10,
    },
  ],
  cities: [
    {
      id: 1,
      name: "Seattle, WA",
      participants: 1250,
      totalBatteries: 32000,
      avgScore: 7800,
      rank: 1,
    },
    {
      id: 2,
      name: "San Francisco, CA",
      participants: 1100,
      totalBatteries: 28000,
      avgScore: 7200,
      rank: 2,
    },
    {
      id: 3,
      name: "Portland, OR",
      participants: 950,
      totalBatteries: 24000,
      avgScore: 6900,
      rank: 3,
    },
    {
      id: 4,
      name: "Austin, TX",
      participants: 850,
      totalBatteries: 21000,
      avgScore: 6500,
      rank: 4,
    },
    {
      id: 5,
      name: "Boston, MA",
      participants: 800,
      totalBatteries: 19000,
      avgScore: 6200,
      rank: 5,
    },
    {
      id: 6,
      name: "Denver, CO",
      participants: 750,
      totalBatteries: 18000,
      avgScore: 5900,
      rank: 6,
    },
    {
      id: 7,
      name: "Chicago, IL",
      participants: 700,
      totalBatteries: 17000,
      avgScore: 5600,
      rank: 7,
    },
    {
      id: 8,
      name: "New York, NY",
      participants: 650,
      totalBatteries: 16000,
      avgScore: 5300,
      rank: 8,
    },
    {
      id: 9,
      name: "Los Angeles, CA",
      participants: 600,
      totalBatteries: 15000,
      avgScore: 5000,
      rank: 9,
    },
    {
      id: 10,
      name: "Miami, FL",
      participants: 550,
      totalBatteries: 14000,
      avgScore: 4700,
      rank: 10,
    },
  ],
}

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("global")
  const [sortBy, setSortBy] = useState("score")

  // Get the appropriate data based on the active tab
  const getLeaderboardData = () => {
    if (activeTab === "cities") return leaderboardData.cities

    const data = activeTab === "global" ? leaderboardData.global : leaderboardData.monthly

    // Sort data based on selected criteria
    if (sortBy === "score") {
      return [...data].sort((a, b) => b.score - a.score)
    } else if (sortBy === "batteries") {
      return [...data].sort((a, b) => b.batteries - a.batteries)
    } else {
      return [...data].sort((a, b) => b.badges - a.badges)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">Recycling Leaderboard</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          See who's leading the charge in battery recycling. Compete with others, earn badges, and make a difference for
          our environment.
        </p>
      </motion.div>

      <Card className="battery-card overflow-hidden border-green-900/30">
        <CardContent className="p-0">
          <Tabs defaultValue="global" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-green-900/30 bg-black/30 p-4 md:flex-row">
              <TabsList className="bg-black/50">
                <TabsTrigger value="global" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                  Global
                </TabsTrigger>
                <TabsTrigger
                  value="monthly"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
                >
                  This Month
                </TabsTrigger>
                <TabsTrigger value="cities" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                  By City
                </TabsTrigger>
              </TabsList>

              {activeTab !== "cities" && (
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white">
                      <SelectItem value="score">Eco Score</SelectItem>
                      <SelectItem value="batteries">Batteries Recycled</SelectItem>
                      <SelectItem value="badges">Badges Earned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <TabsContent value="global" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <LeaderboardTable data={getLeaderboardData()} type="individual" />
            </TabsContent>

            <TabsContent value="monthly" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <LeaderboardTable data={getLeaderboardData()} type="individual" />
            </TabsContent>

            <TabsContent value="cities" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <LeaderboardTable data={getLeaderboardData()} type="city" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="battery-card border-green-900/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-900/30 p-2">
                <Trophy className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">How to Climb the Ranks</h3>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-400" />
                Take the battery recycling quiz regularly
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-400" />
                Make and fulfill recycling pledges
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-400" />
                Log your recycled batteries in your profile
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-400" />
                Complete monthly challenges
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="battery-card border-green-900/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-900/30 p-2">
                <Award className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Available Badges</h3>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Badge className="justify-center bg-gray-500 text-white">Eco Rookie</Badge>
              <Badge className="justify-center bg-blue-500 text-white">Green Learner</Badge>
              <Badge className="justify-center bg-yellow-500 text-black">Recycling Pro</Badge>
              <Badge className="justify-center bg-green-500 text-black">Battery Guardian</Badge>
              <Badge className="justify-center bg-purple-500 text-white">Eco Warrior</Badge>
              <Badge className="justify-center bg-red-500 text-white">Master Recycler</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="battery-card border-green-900/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-900/30 p-2">
                <Battery className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Global Impact</h3>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-md bg-black/30 p-3">
                <p className="text-sm text-gray-400">Total Batteries Recycled</p>
                <p className="text-xl font-bold text-green-400">1,250,000+</p>
              </div>
              <div className="rounded-md bg-black/30 p-3">
                <p className="text-sm text-gray-400">CO₂ Emissions Prevented</p>
                <p className="text-xl font-bold text-green-400">750+ tons</p>
              </div>
              <div className="rounded-md bg-black/30 p-3">
                <p className="text-sm text-gray-400">Active Participants</p>
                <p className="text-xl font-bold text-green-400">25,000+</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface LeaderboardTableProps {
  data: any[]
  type: "individual" | "city"
}

function LeaderboardTable({ data, type }: LeaderboardTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-green-900/30 bg-black/30">
            <th className="p-4 text-left text-sm font-medium text-gray-400">Rank</th>
            <th className="p-4 text-left text-sm font-medium text-gray-400">
              {type === "individual" ? "Name" : "City"}
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-400">
              {type === "individual" ? "Location" : "Participants"}
            </th>
            <th className="p-4 text-right text-sm font-medium text-gray-400">
              {type === "individual" ? "Eco Score" : "Avg. Score"}
            </th>
            <th className="p-4 text-right text-sm font-medium text-gray-400">Batteries Recycled</th>
            {type === "individual" && <th className="p-4 text-right text-sm font-medium text-gray-400">Badges</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <motion.tr
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: item.rank * 0.05 }}
              className="border-b border-green-900/20 hover:bg-green-900/10"
            >
              <td className="p-4">
                {item.rank <= 3 ? (
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      item.rank === 1
                        ? "bg-yellow-500 text-black"
                        : item.rank === 2
                          ? "bg-gray-400 text-black"
                          : "bg-amber-700 text-white"
                    }`}
                  >
                    <Medal className="h-4 w-4" />
                  </div>
                ) : (
                  <span className="text-gray-400">{item.rank}</span>
                )}
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  {type === "individual" ? (
                    <>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900/30 text-green-400">
                        <User className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-white">{item.name}</span>
                    </>
                  ) : (
                    <>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900/30 text-green-400">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-white">{item.name}</span>
                    </>
                  )}
                </div>
              </td>
              <td className="p-4 text-gray-300">
                {type === "individual" ? item.location : `${item.participants.toLocaleString()} recyclers`}
              </td>
              <td className="p-4 text-right font-medium text-green-400">
                {type === "individual" ? item.score.toLocaleString() : item.avgScore.toLocaleString()}
              </td>
              <td className="p-4 text-right text-gray-300">
                {type === "individual" ? item.batteries : item.totalBatteries.toLocaleString()}
              </td>
              {type === "individual" && (
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">{item.badges}</span>
                  </div>
                </td>
              )}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
