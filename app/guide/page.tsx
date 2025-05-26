"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Box, PackageCheck, MapPin, ShieldCheck, AlertTriangle, Clock } from "lucide-react"

// Recycling steps data
const recyclingSteps = [
  {
    id: 1,
    title: "Safe Storage",
    description:
      "Store used batteries in a cool, dry place in a non-metal container. Keep them away from flammable materials and out of reach of children.",
    icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
    time: "Ongoing",
    tips: [
      "Use a plastic container with a lid",
      "Keep different battery types separated if possible",
      "Store away from direct sunlight and heat sources",
    ],
    warnings: [
      "Never store loose batteries where terminals can touch metal objects",
      "Don't store damaged or leaking batteries with intact ones",
    ],
  },
  {
    id: 2,
    title: "Sorting & Preparation",
    description:
      "Sort batteries by type (alkaline, lithium-ion, etc.). For lithium-based and button batteries, tape the terminals to prevent short circuits.",
    icon: <Box className="h-8 w-8 text-green-400" />,
    time: "5-10 minutes",
    tips: [
      "Use clear tape to cover positive (+) terminals",
      "Group similar battery types together",
      "Remove batteries from devices before recycling",
    ],
    warnings: ["Handle damaged batteries with gloves", "Never puncture or damage batteries during sorting"],
  },
  {
    id: 3,
    title: "Packaging for Transport",
    description:
      "Place sorted batteries in clear plastic bags or containers. Label the container with the battery types inside for easier processing at recycling centers.",
    icon: <PackageCheck className="h-8 w-8 text-green-400" />,
    time: "5 minutes",
    tips: ["Use separate bags for different battery types", "Seal bags securely", "Label each bag with battery type"],
    warnings: ["Don't use metal containers for transport", "Avoid overpacking containers"],
  },
  {
    id: 4,
    title: "Finding & Visiting Recycling Centers",
    description:
      "Locate a battery recycling center near you. Many electronics stores, hardware stores, and municipal waste facilities accept batteries for recycling.",
    icon: <MapPin className="h-8 w-8 text-green-400" />,
    time: "Varies by location",
    tips: [
      "Call ahead to confirm they accept your battery types",
      "Ask about any special handling requirements",
      "Some retailers offer incentives for battery recycling",
    ],
    warnings: [
      "Never dispose of batteries in regular trash or recycling bins",
      "Don't leave batteries in extreme heat (like a hot car) while transporting",
    ],
  },
]

// Do's and Don'ts data
const dosAndDonts = {
  dos: [
    "Recycle all types of batteries",
    "Tape terminals of lithium batteries",
    "Store in cool, dry places",
    "Keep different battery types separated",
    "Remove batteries from devices before recycling",
    "Check with local regulations for specific requirements",
  ],
  donts: [
    "Throw batteries in regular trash",
    "Incinerate batteries",
    "Puncture or crush batteries",
    "Mix different battery types in storage",
    "Leave batteries in extreme temperatures",
    "Attempt to recharge non-rechargeable batteries",
  ],
}

export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="glow-text mb-4 text-4xl font-bold text-white md:text-5xl">Battery Recycling Guide</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Follow these steps to properly recycle your batteries. Proper disposal ensures toxic materials don't harm the
          environment and allows valuable materials to be recovered.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="relative space-y-6 pl-10">
            {recyclingSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="timeline-item pb-8"
              >
                <div className="timeline-dot" />
                <Card className="battery-card overflow-hidden border-green-900/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-green-900/30 p-2">{step.icon}</div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>Estimated time: {step.time}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-6 text-gray-300">{step.description}</p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                          <ShieldCheck className="h-5 w-5 text-green-400" />
                          Tips
                        </h3>
                        <ul className="space-y-2">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                              <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-400" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          Warnings
                        </h3>
                        <ul className="space-y-2">
                          {step.warnings.map((warning, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                              <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-yellow-500" />
                              {warning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="battery-card sticky top-24 border-green-900/30">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold text-white">Do's and Don'ts</h2>

                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-green-400">Do's</h3>
                  <ul className="space-y-2">
                    {dosAndDonts.dos.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="mt-1 text-green-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-red-400">Don'ts</h3>
                  <ul className="space-y-2">
                    {dosAndDonts.donts.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="mt-1 text-red-400">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
