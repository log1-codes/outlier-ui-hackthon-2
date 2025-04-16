"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ChatMessage {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

interface ChatAssistantProps {
  compact?: boolean
}

export function ChatAssistant({ compact = false }: ChatAssistantProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Hi Alex! How can I help you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        content: input,
        sender: "user",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setInput("")

      // Simulate assistant response
      setTimeout(() => {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          content: getAssistantResponse(input),
          sender: "assistant",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
      }, 1000)
    }
  }

  const getAssistantResponse = (userInput: string): string => {
    const responses = [
      "I've added that to your task list with a medium priority.",
      "Would you like me to break that down into smaller steps?",
      "I've scheduled a reminder for that task.",
      "That's a great idea! I can help you organize that.",
      "I understand this might be challenging. Let's approach it one step at a time.",
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <Card
      className={cn(
        "flex h-full flex-col border-2 transition-all duration-300 hover:border-primary/20",
        compact ? "max-h-[400px]" : "h-[calc(100vh-10rem)]",
      )}
    >
      <CardHeader className="pb-3">
        <CardTitle>Chat Assistant</CardTitle>
        <CardDescription>Ask for help or guidance anytime</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className={cn("h-full px-4", compact ? "max-h-[250px]" : "h-[calc(100vh-16rem)]")}>
          <div className="space-y-4 pt-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-max max-w-[80%] flex-col gap-2 rounded-lg p-3",
                  message.sender === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                <div className="flex items-center gap-2">
                  {message.sender === "assistant" ? (
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="MindMate" />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="You" />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <span className="text-xs font-medium">{message.sender === "assistant" ? "MindMate" : "You"}</span>
                </div>
                <div>{message.content}</div>
                <div className="ml-auto text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="pt-3">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSendMessage} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
