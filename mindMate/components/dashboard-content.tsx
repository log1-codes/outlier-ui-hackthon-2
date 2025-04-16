"use client"

import { useState } from "react"
import { TaskList } from "@/components/task-list"
import { VoiceNoteCard } from "@/components/voice-note-card"
import { ChatAssistant } from "@/components/chat-assistant"
import { ImageUploadSection } from "@/components/image-upload-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMediaQuery } from "@/hooks/use-media-query"

export function DashboardContent() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [activeTab, setActiveTab] = useState("tasks")

  return (
    <div className="space-y-6 pb-16">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Hi Alex, let&apos;s get things done today!</h1>
        <p className="text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {isDesktop ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <TaskList />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <VoiceNoteCard />
              <ImageUploadSection />
            </div>
          </div>
          <div className="lg:col-span-1">
            <ChatAssistant />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="voice">Voice & Photos</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
            </TabsList>
            <TabsContent value="tasks" className="space-y-4">
              <TaskList />
            </TabsContent>
            <TabsContent value="voice" className="space-y-4">
              <VoiceNoteCard />
              <ImageUploadSection />
            </TabsContent>
            <TabsContent value="chat">
              <Card>
                <CardHeader>
                  <CardTitle>Chat Assistant</CardTitle>
                  <CardDescription>Talk with your AI assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChatAssistant compact />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
