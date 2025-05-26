"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Globe, Search, CheckCircle, Filter } from "lucide-react"

// Mock recycling centers data
const mockCenters = [
  {
    id: 1,
    name: "EcoRecycle Center",
    address: "123 Green Street, Eco City, EC 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 9AM-6PM, Sun: Closed",
    distance: "1.2 miles",
    acceptedBatteries: ["alkaline", "lithium-ion", "nickel-cadmium", "lead-acid"],
    website: "#",
    certified: true,
  },
  {
    id: 2,
    name: "City Waste Management",
    address: "456 Recycling Ave, Eco City, EC 12345",
    phone: "(555) 987-6543",
    hours: "Mon-Fri: 8AM-5PM, Sat-Sun: Closed",
    distance: "2.5 miles",
    acceptedBatteries: ["alkaline", "lithium-ion", "lead-acid"],
    website: "#",
    certified: true,
  },
  {
    id: 3,
    name: "TechRecycle Solutions",
    address: "789 Electronics Blvd, Eco City, EC 12345",
    phone: "(555) 456-7890",
    hours: "Mon-Sun: 10AM-8PM",
    distance: "3.8 miles",
    acceptedBatteries: ["lithium-ion", "nickel-metal-hydride", "nickel-cadmium"],
    website: "#",
    certified: true,
  },
  {
    id: 4,
    name: "GreenTech Recyclers",
    address: "321 Sustainable Road, Eco City, EC 12345",
    phone: "(555) 789-0123",
    hours: "Mon-Fri: 9AM-7PM, Sat: 10AM-5PM, Sun: Closed",
    distance: "4.2 miles",
    acceptedBatteries: ["alkaline", "zinc-carbon", "button-cell"],
    website: "#",
    certified: false,
  },
  {
    id: 5,
    name: "Battery Depot",
    address: "555 Power Lane, Eco City, EC 12345",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 8AM-9PM",
    distance: "5.7 miles",
    acceptedBatteries: [
      "alkaline",
      "lithium-ion",
      "nickel-cadmium",
      "lead-acid",
      "nickel-metal-hydride",
      "zinc-carbon",
    ],
    website: "#",
    certified: true,
  },
]

// Battery types for filtering
const batteryTypes = [
  { id: "alkaline", label: "Alkaline" },
  { id: "lithium-ion", label: "Lithium-Ion" },
  { id: "nickel-cadmium", label: "Nickel-Cadmium" },
  { id: "nickel-metal-hydride", label: "NiMH" },
  { id: "lead-acid", label: "Lead-Acid" },
  { id: "zinc-carbon", label: "Zinc-Carbon" },
  { id: "button-cell", label: "Button Cell" },
]

export default function CentersPage() {
  const [zipCode, setZipCode] = useState("")
  const [selectedBatteryTypes, setSelectedBatteryTypes] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [filteredCenters, setFilteredCenters] = useState(mockCenters)

  const handleSearch = () => {
    // In a real app, this would call an API with the zip code
    // For now, we'll just filter the mock data based on selected battery types
    if (selectedBatteryTypes.length === 0) {
      setFilteredCenters(mockCenters)
    } else {
      const filtered = mockCenters.filter((center) =>
        selectedBatteryTypes.some((type) => center.acceptedBatteries.includes(type)),
      )
      setFilteredCenters(filtered)
    }
  }

  const toggleBatteryType = (type: string) => {
    setSelectedBatteryTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">Find Recycling Centers</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Locate battery recycling centers near you. Enter your zip code and filter by the types of batteries you need
          to recycle.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="battery-card sticky top-24 border-green-900/30">
            <CardContent className="p-6">
              <h2 className="mb-6 text-xl font-bold text-white">Search & Filter</h2>

              <div className="mb-6 space-y-4">
                <div>
                  <label htmlFor="zipCode" className="mb-2 block text-sm font-medium text-gray-300">
                    Enter Zip Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="zipCode"
                      placeholder="e.g. 12345"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500"
                    />
                    <Button onClick={handleSearch} className="bg-green-500 text-black hover:bg-green-400" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="mb-4 w-full justify-between border-green-900/50 text-green-400 hover:bg-green-900/20 hover:text-green-300"
                  >
                    <span className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filter by Battery Type
                    </span>
                    <span>{showFilters ? "−" : "+"}</span>
                  </Button>

                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 rounded-md bg-black/30 p-4"
                    >
                      {batteryTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={type.id}
                            checked={selectedBatteryTypes.includes(type.id)}
                            onCheckedChange={() => toggleBatteryType(type.id)}
                            className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-black"
                          />
                          <label
                            htmlFor={type.id}
                            className="cursor-pointer text-sm font-medium text-gray-300 hover:text-white"
                          >
                            {type.label}
                          </label>
                        </div>
                      ))}

                      <Button onClick={handleSearch} className="mt-4 w-full bg-green-500 text-black hover:bg-green-400">
                        Apply Filters
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="rounded-md bg-green-900/20 p-4">
                <h3 className="mb-2 text-sm font-semibold text-white">Did you know?</h3>
                <p className="text-sm text-gray-300">
                  Many electronics stores and hardware retailers offer free battery recycling services. Always call
                  ahead to confirm they accept your specific battery types.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <div className="mb-8 overflow-hidden rounded-xl">
            <div className="relative h-[300px] w-full bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center text-gray-400">
                  Interactive map would appear here.
                  <br />
                  Enter your zip code to see recycling centers near you.
                </p>
              </div>
              <img
                src="/placeholder.svg?height=300&width=800"
                alt="Map placeholder"
                className="h-full w-full object-cover opacity-30"
              />
            </div>
          </div>

          <h2 className="mb-6 text-2xl font-bold text-white">Recycling Centers {zipCode && `near ${zipCode}`}</h2>

          <div className="space-y-4">
            {filteredCenters.map((center) => (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="battery-card overflow-hidden border-green-900/30">
                  <CardContent className="p-0">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-6 md:col-span-2">
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white">{center.name}</h3>
                          <Badge variant={center.certified ? "default" : "outline"} className="ml-2">
                            {center.certified ? (
                              <span className="flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" /> Certified
                              </span>
                            ) : (
                              "Non-Certified"
                            )}
                          </Badge>
                        </div>

                        <div className="mb-4 space-y-2 text-gray-300">
                          <p className="flex items-start gap-2">
                            <MapPin className="mt-1 h-4 w-4 shrink-0 text-green-400" />
                            {center.address}
                          </p>
                          <p className="flex items-start gap-2">
                            <Phone className="mt-1 h-4 w-4 shrink-0 text-green-400" />
                            {center.phone}
                          </p>
                          <p className="flex items-start gap-2">
                            <Clock className="mt-1 h-4 w-4 shrink-0 text-green-400" />
                            {center.hours}
                          </p>
                          <p className="flex items-start gap-2">
                            <Globe className="mt-1 h-4 w-4 shrink-0 text-green-400" />
                            <a href={center.website} className="text-green-400 hover:underline">
                              Visit Website
                            </a>
                          </p>
                        </div>

                        <div>
                          <p className="mb-2 text-sm font-medium text-gray-300">Accepted Battery Types:</p>
                          <div className="flex flex-wrap gap-2">
                            {center.acceptedBatteries.map((type) => (
                              <Badge
                                key={type}
                                variant="outline"
                                className="border-green-900/50 bg-green-900/20 text-green-400"
                              >
                                {batteryTypes.find((t) => t.id === type)?.label || type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center bg-black/30 p-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-400">Distance</p>
                          <p className="text-3xl font-bold text-green-400">{center.distance}</p>
                          <Button className="mt-4 w-full bg-green-500 text-black hover:bg-green-400">
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {filteredCenters.length === 0 && (
              <div className="rounded-lg bg-black/30 p-8 text-center">
                <p className="text-gray-300">
                  No recycling centers found that match your criteria. Try adjusting your filters or search a different
                  zip code.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
