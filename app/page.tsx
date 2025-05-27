"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Battery, BookOpen, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroGlobe from "@/components/hero-globe"
import CounterAnimation from "@/components/counter-animation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/570/747/large_2x/renewable-energy-background-with-green-energy-as-wind-turbines-and-solar-panels-green-energy-concept-energy-sources-sustainable-ecology-elements-generative-ai-photo.jpg"
            alt="Green energy background"
            className="h-full w-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/774/440/original/battery-charging-icon-on-transparent-background-free-png.png"
                  alt="Battery icon"
                  className="h-16 w-16 mb-4"
                />
              </div>
              <h1 className="glow-text text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Battery Recycling <span className="text-green-400">Awareness Platform</span>
              </h1>
              <p className="text-lg text-gray-300">
                Learn about sustainable battery disposal, find recycling centers, and join our mission to protect the
                environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow-button bg-green-500 text-black hover:bg-green-400">
                  <Link href="/battery-types">
                    Start Your Recycling Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300"
                >
                  <Link href="/quiz">Take the Quiz</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <HeroGlobe />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Pattern */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-10">
          {/* <img
            src="https://th.bing.com/th/id/OIP.S6voRWxpHKeVYwbQ9VYy8AHaHa?cb=iwp2&rs=1&pid=ImgDetMain"
            alt="Pattern background"
            className="h-full w-full object-cover"
          /> */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl rounded-xl bg-black/50 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <CounterAnimation end={1250000} label="Batteries Recycled" delay={100} />
              <CounterAnimation end={25000} label="Pledges Made" delay={300} />
              <CounterAnimation end={750} label="Tons of CO₂ Saved" delay={500} />
              <CounterAnimation end={98} label="Recycling Centers" suffix="+" delay={700} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Image Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="glow-text mb-4 text-3xl font-bold text-white md:text-4xl">Why Battery Recycling Matters</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Batteries contain toxic chemicals that can harm the environment if not disposed of properly. Learn how to
              make a difference.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              image="https://thumbs.dreamstime.com/z/colorful-cartoon-battery-set-colorful-cartoon-battery-set-different-type-rechargeable-electric-accumulators-electricity-themed-142122991.jpg"
              title="Battery Types"
              description="Learn about different battery types, their components, and recycling timelines."
              link="/battery-types"
              delay={0.1}
            />
            <FeatureCard
              image="https://static.vecteezy.com/system/resources/previews/046/970/072/non_2x/illustration-of-battery-recycling-vector.jpg"
              title="Recycling Guide"
              description="Step-by-step instructions for properly disposing of batteries."
              link="/guide"
              delay={0.2}
            />
            <FeatureCard
              image="https://cdnl.iconscout.com/lottie/premium/preview/find-location-10055135-8171952.png?f=webp"
              title="Find Centers"
              description="Locate battery recycling centers near you."
              link="/centers"
              delay={0.3}
            />
            <FeatureCard
              image="https://ugokawaii.com/wp-content/uploads/2022/12/quiz-time-768x768.gif"
              title="Take the Quiz"
              description="Test your knowledge and earn badges."
              link="/quiz"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-900/50 to-black p-8 md:p-12">
            <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h2 className="glow-text text-3xl font-bold text-white md:text-4xl">Make Your Pledge Today</h2>
                <p className="text-gray-300">
                  Join thousands of others committed to proper battery recycling. Make a pledge and track your impact on
                  our leaderboard.
                </p>
                <Button asChild size="lg" className="glow-button bg-green-500 text-black hover:bg-green-400">
                  <Link href="/pledge">
                    Make a Pledge
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://c8.alamy.com/comp/2R4MHJ2/recycling-batteries-people-throw-away-used-electric-alkaline-accumulators-in-special-garbage-container-waste-utilization-trash-sorting-disposal-2R4MHJ2.jpg"
                  alt="People recycling batteries"
                  className="max-h-[300px] rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  image: string
  title: string
  description: string
  link: string
  delay: number
}

function FeatureCard({ image, title, description, link, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="battery-card h-full overflow-hidden relative group">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <CardContent className="flex h-full flex-col p-6 relative z-10 bg-black/60">
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="mb-4 flex-grow text-gray-300">{description}</p>
          <Button
            asChild
            variant="ghost"
            className="mt-auto justify-start p-0 text-green-400 hover:bg-transparent hover:text-green-300"
          >
            <Link href={link}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}