"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Impact() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="glow-text text-4xl font-bold md:text-5xl lg:text-6xl">
              Impact of Improper Battery Disposal
            </h1>
          </motion.div>

          {/* Detailed Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            <p>
              Discarded batteries leach heavy metals such as lead, mercury, cadmium, and nickel into soil and groundwater,
              leading to bioaccumulation in plants and animals, and eventually entering the human food chain.
            </p>
            <p>
              Corrosive acids and electrolytes within batteries can alter pH levels in landfills, disrupting microbial
              ecosystems responsible for organic waste decomposition.
            </p>
            <p>
              Lithium-ion batteries, when crushed or punctured, can experience internal short circuits, sparking fires
              that are difficult to extinguish and emit toxic fumes like hydrogen fluoride.
            </p>
            <p>
              Inadequate sorting at waste facilities causes batteries to mix with general waste streams, increasing the
              risk of fires at recycling plants and putting workers at risk.
            </p>
            <p>
              According to the EPA, less than 5% of portable batteries are recycled in the U.S., resulting in millions of
              tons of e-waste accumulating worldwide each year.
            </p>
          </motion.div>

          {/* Expanded Image Gallery */}
          <div className="grid gap-8 mt-16 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm">
                {/* <img
                  src={`/placeholder-impact${i}.svg`}
                  alt={`Impact illustration ${i}`}
                  className="w-full object-cover h-48"
                /> */}
              </div>
            ))}
          </div>

          {/* Impact Breakdown Cards */}
          <div className="grid gap-8 mt-16 md:grid-cols-3">
            <Card className="bg-black/50 backdrop-blur-sm p-6">
              <CardContent>
                <img
                  src="https://renewablesadvice.com/wp-content/uploads/2023/11/battery-production-and-disposal.png"
                  alt=""
                  className="w-full object-cover h-48"
                />
                <h3 className="mb-2 text-xl font-bold text-white">Environmental Harm</h3>
                <p className="text-gray-400">
                  Toxic leakage contaminates water bodies, harming aquatic life and reducing biodiversity.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 backdrop-blur-sm p-6">
              <CardContent>
                <img
                  src="https://batteriesinc.net/wp-content/uploads/2023/12/Lithium-ion-Battery-Hazards.jpg"
                  alt=""
                  className="w-full object-cover h-48"
                />
                <h3 className="mb-2 text-xl font-bold text-white">Health Risks</h3>
                <p className="text-gray-400">
                  Heavy metal poisoning can cause neurological damage, kidney disease, and developmental issues in children.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 backdrop-blur-sm p-6">
              <CardContent>
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/1932288359/display_1500/stock-vector-natural-resources-depletion-and-planet-reserves-exhaustion-outline-concept-ecosystem-destruction-1932288359.jpg"
                  alt=""
                  className="w-full object-cover h-48"
                />
                <h3 className="mb-2 text-xl font-bold text-white">Resource Depletion</h3>
                <p className="text-gray-400">
                  Discarding batteries wastes valuable materials like cobalt and nickel, driving demand for invasive mining.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="glow-text text-3xl font-bold md:text-4xl">Solution: Brick Batteries</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            <p>
              Brick batteries are standardized, stackable modules designed for a circular economy. Each module can be
              easily removed, serviced, or replaced, eliminating the need to discard entire battery packs.
            </p>
            <p>
              The modular design simplifies logistics: recovered bricks can be retested and redistributed, reducing
              manufacturing footprints by up to 30% compared to custom pack assemblies.
            </p>
            <p>
              These batteries use eco-friendly electrode materials with reduced cobalt content and water-based
              electrolytes, lowering toxicity and improving end-of-life recyclability.
            </p>
            <p>
              Pilot programs in Europe have demonstrated that brick battery systems can achieve 90% material recovery,
              cutting landfill-bound e-waste by half in participating regions.
            </p>
            <p>
              Adoption challenges include standard-setting across manufacturers and developing reverse-logistics networks
              for module collection—initiatives that are already underway through industry consortia.
            </p>
          </motion.div>

          {/* Solution Images */}
          <div className="grid gap-8 mt-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm">
              <img
                src="https://www.piston.my/wp-content/uploads/2023/12/PISTON.MY-Zeekr-Golden-Brick-Battery_2-1024x513.jpeg"
                alt="Brick battery modular stack"
                className="w-full object-cover h-64"
              />
            </div>
            <div className="overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm">
              <img
                src="https://cdn.motor1.com/images/custom/lithium-battery-direct-recycling.jpg"
                alt="Recycling process illustration"
                className="w-full object-cover h-64"
              />
            </div>
          </div>

          {/* Video Embed */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="aspect-video overflow-hidden rounded-xl bg-black/20">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/f-T0PEWRaVc?feature=shared"
                  title="Brick Battery Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
