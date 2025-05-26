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
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
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

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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

      {/* Features Section */}
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
              icon={<Battery className="h-10 w-10 text-green-400" />}
              title="Battery Types"
              description="Learn about different battery types, their components, and recycling timelines."
              link="/battery-types"
              delay={0.1}
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-green-400" />}
              title="Recycling Guide"
              description="Step-by-step instructions for properly disposing of batteries."
              link="/guide"
              delay={0.2}
            />
            <FeatureCard
              icon={<MapPin className="h-10 w-10 text-green-400" />}
              title="Find Centers"
              description="Locate battery recycling centers near you."
              link="/centers"
              delay={0.3}
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-green-400" />}
              title="Take the Quiz"
              description="Test your knowledge and earn badges."
              link="/quiz"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                  src="/placeholder.svg?height=300&width=300"
                  alt="Battery recycling illustration"
                  className="max-h-[300px] rounded-xl object-cover"
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
  icon: React.ReactNode
  title: string
  description: string
  link: string
  delay: number
}

function FeatureCard({ icon, title, description, link, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="battery-card h-full overflow-hidden">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4">{icon}</div>
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="mb-4 flex-grow text-gray-400">{description}</p>
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
