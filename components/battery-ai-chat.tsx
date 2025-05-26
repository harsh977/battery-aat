"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Send, User } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
}

export default function BatteryAiChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Battery Recycling Assistant. Ask me anything about battery disposal or recycling timelines.",
      sender: "ai",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Send message to backend API
      const response = await fetch("https://chat-bot-jdj5.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt : input }),
      })

     

      const data = await response.json()

      // Add AI response
      const aiMessage: Message = {
        id: Date.now(),
        text: data.response || "Sorry, I couldn't process your request. Please try again.",
        sender: "ai",
      }
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error fetching response:", error)
      // Add error message
      const errorMessage: Message = {
        id: Date.now(),
        text: "Sorry, I'm having trouble connecting to my knowledge base. Please try again later.",
        sender: "ai",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="battery-card h-full border-green-900/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-xl text-white">
            <Bot className="h-5 w-5 text-green-400" />
            Battery Recycling Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[500px] overflow-y-auto pb-0">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex max-w-[80%] items-start gap-2 rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-green-500 text-black" : "bg-gray-800 text-white"
                  }`}
                >
                  {message.sender === "ai" && <Bot className="mt-1 h-4 w-4 shrink-0" />}
                  <div>{message.text}</div>
                  {message.sender === "user" && <User className="mt-1 h-4 w-4 shrink-0" />}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex max-w-[80%] items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white">
                  <Bot className="h-4 w-4" />
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        <CardFooter className="pt-3">
          <div className="flex w-full items-center space-x-2">
            <Input
              placeholder="Ask about battery recycling..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border-green-900/50 bg-black/50 text-white focus-visible:ring-green-500"
              disabled={isLoading}
            />
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-green-500 text-black hover:bg-green-400"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
