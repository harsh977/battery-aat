"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, User, Users, Building2, Send, Award } from "lucide-react"

// Recent pledges data
const recentPledges = [
  {
    id: 1,
    name: "Alex Johnson",
    location: "Portland, OR",
    message: "I pledge to recycle all my household batteries this year!",
    date: "2 hours ago",
  },
  {
    id: 2,
    name: "Maria Garcia",
    location: "Austin, TX",
    message: "Our office will set up a battery collection point for employees.",
    date: "5 hours ago",
  },
  {
    id: 3,
    name: "James Wilson",
    location: "Chicago, IL",
    message: "I'll educate my community about proper battery disposal methods.",
    date: "1 day ago",
  },
  {
    id: 4,
    name: "Sarah Ahmed",
    location: "Seattle, WA",
    message: "I pledge to recycle 100 batteries from my neighborhood this month.",
    date: "2 days ago",
  },
]

export default function PledgePage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    city: "",
    pledgeMessage: "",
    pledgeLevel: "",
    wantsChallenges: false,
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, pledgeLevel: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, wantsChallenges: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the data to an API
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">Make a Recycling Pledge</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Join thousands of others committed to proper battery recycling. Make a pledge today and help protect our
          environment for future generations.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {!formSubmitted ? (
            <Card className="battery-card overflow-hidden border-green-900/30">
              <CardContent className="p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-white">Your Pledge Details</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-gray-300">
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formState.fullName}
                        onChange={handleInputChange}
                        required
                        className="border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-gray-300">
                        City
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Your city"
                        value={formState.city}
                        onChange={handleInputChange}
                        required
                        className="border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pledgeLevel" className="text-gray-300">
                        Pledge Level
                      </Label>
                      <Select value={formState.pledgeLevel} onValueChange={handleSelectChange} required>
                        <SelectTrigger
                          id="pledgeLevel"
                          className="border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500"
                        >
                          <SelectValue placeholder="Select your pledge level" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 text-white">
                          <SelectItem value="personal">
                            <span className="flex items-center gap-2">
                              <User className="h-4 w-4 text-green-400" /> Personal
                            </span>
                          </SelectItem>
                          <SelectItem value="community">
                            <span className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-green-400" /> Community
                            </span>
                          </SelectItem>
                          <SelectItem value="business">
                            <span className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-green-400" /> Business
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pledgeMessage" className="text-gray-300">
                      Your Pledge Message
                    </Label>
                    <Textarea
                      id="pledgeMessage"
                      name="pledgeMessage"
                      placeholder="Describe your commitment to battery recycling..."
                      value={formState.pledgeMessage}
                      onChange={handleInputChange}
                      required
                      className="min-h-[120px] border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="wantsChallenges"
                      checked={formState.wantsChallenges}
                      onCheckedChange={handleCheckboxChange}
                      className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-black"
                    />
                    <Label htmlFor="wantsChallenges" className="text-gray-300">
                      I want to receive monthly recycling challenges and updates
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-green-500 text-black hover:bg-green-400">
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Submit My Pledge
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="battery-card overflow-hidden border-green-900/30">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-white">Thank You for Your Pledge!</h2>
                  <p className="mb-6 text-gray-300">
                    Your commitment to battery recycling has been recorded. Together, we can make a significant impact
                    on our environment.
                  </p>

                  <div className="mb-8 rounded-lg bg-black/30 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-white">Your Pledge Summary</h3>
                    <div className="space-y-2 text-left">
                      <p className="text-gray-300">
                        <span className="font-medium text-white">Name:</span> {formState.fullName}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium text-white">Location:</span> {formState.city}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium text-white">Pledge Level:</span>{" "}
                        {formState.pledgeLevel.charAt(0).toUpperCase() + formState.pledgeLevel.slice(1)}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium text-white">Message:</span> {formState.pledgeMessage}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                      className="flex-1 border-green-500 text-green-400 hover:bg-green-900/20 hover:text-green-300"
                    >
                      Make Another Pledge
                    </Button>
                    <Button className="flex-1 bg-green-500 text-black hover:bg-green-400">
                      <span className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        View Your Badge
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        <div>
          <Card className="battery-card sticky top-24 border-green-900/30">
            <CardContent className="p-6">
              <h2 className="mb-6 text-xl font-bold text-white">Recent Pledges</h2>

              <div className="space-y-4">
                {recentPledges.map((pledge) => (
                  <motion.div
                    key={pledge.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: pledge.id * 0.1 }}
                    className="rounded-lg bg-black/30 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium text-white">{pledge.name}</h3>
                      <span className="text-xs text-gray-400">{pledge.date}</span>
                    </div>
                    <p className="mb-2 text-sm text-gray-300">"{pledge.message}"</p>
                    <p className="text-xs text-gray-400">{pledge.location}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-md bg-green-900/20 p-4">
                <h3 className="mb-2 text-sm font-semibold text-white">Why Make a Pledge?</h3>
                <p className="text-sm text-gray-300">
                  Making a public commitment increases your likelihood of following through. Your pledge also inspires
                  others to take action for our environment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
