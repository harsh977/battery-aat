"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Battery, Clock, AlertTriangle, Recycle, Trash2, Info } from "lucide-react"
import BatteryAiChat from "@/components/battery-ai-chat"

// Battery types data
const batteryTypes = [
  {
    id: "alkaline",
    name: "Alkaline Batteries",
    image: "/placeholder.svg?height=200&width=300",
    usage: "Remote controls, toys, flashlights, clocks",
    components: "Zinc, manganese dioxide, potassium hydroxide",
    impact: "Can leach harmful chemicals into soil and groundwater",
    recyclingTime: "3-4 months",
    decompositionTime: "100 years",
    disposalMethod: "Collect in clear plastic bags, tape terminals, take to recycling center",
    recyclingProcess: "Crushed, separated into components, metals recovered",
    dangerLevel: 60,
  },
  {
    id: "lithium-ion",
    name: "Lithium-Ion Batteries",
    image: "/placeholder.svg?height=200&width=300",
    usage: "Smartphones, laptops, electric vehicles, power tools",
    components: "Lithium, cobalt, nickel, manganese, graphite",
    impact: "Fire hazard, toxic metals can contaminate water sources",
    recyclingTime: "6-8 months",
    decompositionTime: "500+ years",
    disposalMethod: "Never throw in trash, tape terminals, take to specialized recycling facilities",
    recyclingProcess: "Disassembled, shredded, materials separated through hydrometallurgical processes",
    dangerLevel: 90,
  },
  {
    id: "nickel-cadmium",
    name: "Nickel-Cadmium (Ni-Cd) Batteries",
    image: "/placeholder.svg?height=200&width=300",
    usage: "Power tools, emergency lighting, medical equipment",
    components: "Nickel, cadmium, potassium hydroxide",
    impact: "Cadmium is highly toxic and carcinogenic",
    recyclingTime: "5-6 months",
    decompositionTime: "100+ years",
    disposalMethod: "Must be recycled at specialized facilities, never incinerate",
    recyclingProcess: "Thermal treatment to recover cadmium, nickel processed separately",
    dangerLevel: 85,
  },
  {
    id: "nickel-metal-hydride",
    name: "Nickel-Metal Hydride (NiMH) Batteries",
    image: "/placeholder.svg?height=200&width=300",
    usage: "Hybrid vehicles, digital cameras, cordless phones",
    components: "Nickel, rare earth metals, hydrogen-absorbing alloys",
    impact: "Less toxic than Ni-Cd but still contains heavy metals",
    recyclingTime: "4-5 months",
    decompositionTime: "200+ years",
    disposalMethod: "Collect separately, take to recycling centers",
    recyclingProcess: "Mechanical separation, pyrometallurgical treatment to recover metals",
    dangerLevel: 50,
  },
  {
    id: "lead-acid",
    name: "Lead-Acid Batteries",
    image: "/placeholder.svg?height=200&width=300",
    usage: "Cars, motorcycles, UPS systems, solar energy storage",
    components: "Lead, lead dioxide, sulfuric acid",
    impact: "Lead is highly toxic to humans and wildlife",
    recyclingTime: "1-2 months",
    decompositionTime: "Never fully decomposes",
    disposalMethod: "Return to automotive stores or battery retailers",
    recyclingProcess: "Crushed, acid neutralized, lead melted and purified",
    dangerLevel: 95,
  },
  {
    id: "zinc-carbon",
    name: "Zinc-Carbon Batteries",
    image: "/placeholder.svg?height=200&width=300",
    usage: "Low-drain devices, remote controls, wall clocks",
    components: "Zinc, carbon, manganese dioxide, ammonium chloride",
    impact: "Less harmful than other types but still contains heavy metals",
    recyclingTime: "2-3 months",
    decompositionTime: "70 years",
    disposalMethod: "Collect with alkaline batteries for recycling",
    recyclingProcess: "Crushed, metals separated and recovered",
    dangerLevel: 40,
  },
]

export default function BatteryTypesPage() {
  const [activeTab, setActiveTab] = useState("alkaline")

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">
          Battery Types & Recycling Information
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Learn about different types of batteries, their environmental impact, and how long they take to recycle.
          Understanding battery composition is the first step to responsible disposal.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="alkaline" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 bg-transparent md:grid-cols-3 lg:grid-cols-6">
              {batteryTypes.map((battery) => (
                <TabsTrigger
                  key={battery.id}
                  value={battery.id}
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
                >
                  {battery.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {batteryTypes.map((battery) => (
              <TabsContent
                key={battery.id}
                value={battery.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Card className="battery-card overflow-hidden border-green-900/30">
                    <CardContent className="p-0">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-6">
                          <h2 className="mb-4 text-2xl font-bold text-white">{battery.name}</h2>
                          <img
                            src={battery.image || "/placeholder.svg"}
                            alt={battery.name}
                            className="mb-6 h-[200px] w-full rounded-lg object-cover"
                          />

                          <div className="mb-4 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                            <h3 className="text-lg font-semibold text-white">Environmental Danger Level</h3>
                          </div>
                          <div className="mb-6 space-y-2">
                            <Progress value={battery.dangerLevel} className="h-2 bg-gray-700" />
                            <p className="text-sm text-gray-400">
                              {battery.dangerLevel}% danger to environment if improperly disposed
                            </p>
                          </div>

                          <div className="mb-4 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-green-400" />
                            <h3 className="text-lg font-semibold text-white">Recycling Timeline</h3>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-black/50 p-3">
                              <p className="text-sm text-gray-400">Recycling Process</p>
                              <p className="text-lg font-semibold text-green-400">{battery.recyclingTime}</p>
                            </div>
                            <div className="rounded-lg bg-black/50 p-3">
                              <p className="text-sm text-gray-400">Decomposition Time</p>
                              <p className="text-lg font-semibold text-red-400">{battery.decompositionTime}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6 bg-black/30 p-6">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Battery className="h-5 w-5 text-green-400" />
                              <h3 className="text-lg font-semibold text-white">Common Uses</h3>
                            </div>
                            <p className="text-gray-300">{battery.usage}</p>
                          </div>

                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Info className="h-5 w-5 text-green-400" />
                              <h3 className="text-lg font-semibold text-white">Components</h3>
                            </div>
                            <p className="text-gray-300">{battery.components}</p>
                          </div>

                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5 text-green-400" />
                              <h3 className="text-lg font-semibold text-white">Environmental Impact</h3>
                            </div>
                            <p className="text-gray-300">{battery.impact}</p>
                          </div>

                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Trash2 className="h-5 w-5 text-green-400" />
                              <h3 className="text-lg font-semibold text-white">Proper Disposal</h3>
                            </div>
                            <p className="text-gray-300">{battery.disposalMethod}</p>
                          </div>

                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Recycle className="h-5 w-5 text-green-400" />
                              <h3 className="text-lg font-semibold text-white">Recycling Process</h3>
                            </div>
                            <p className="text-gray-300">{battery.recyclingProcess}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div>
          <BatteryAiChat />
        </div>
      </div>
    </div>
  )
}
