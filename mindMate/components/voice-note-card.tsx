"use client"

import { useState, useEffect } from "react"
import { Mic, Square, Play, Pause } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function VoiceNoteCard() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasRecording, setHasRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Simulated recording time counter
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRecording])

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      setHasRecording(true)
    } else {
      setIsRecording(true)
      setRecordingTime(0)
    }
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <Card className="border-2 transition-all duration-300 hover:border-primary/20">
      <CardHeader>
        <CardTitle>Voice Notes</CardTitle>
        <CardDescription>Record your thoughts and ideas</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4 py-4">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div
            className={cn(
              "absolute inset-0 rounded-full",
              isRecording ? "animate-pulse bg-red-100 dark:bg-red-900/30" : "bg-primary/10",
            )}
          />
          <Button
            size="icon"
            variant={isRecording ? "destructive" : "outline"}
            className={cn("h-16 w-16 rounded-full transition-all duration-300", isRecording && "animate-pulse")}
            onClick={toggleRecording}
          >
            {isRecording ? <Square className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </Button>
        </div>

        {isRecording && (
          <div className="flex items-center gap-2 text-red-500 dark:text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 dark:bg-red-400"></span>
            <span>Recording {formatTime(recordingTime)}</span>
          </div>
        )}

        {hasRecording && !isRecording && (
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Voice note - {formatTime(recordingTime)}</span>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={togglePlayback}>
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn("h-full bg-primary transition-all", isPlaying ? "animate-progress-bar w-0" : "w-full")}
                style={{ animationDuration: `${recordingTime}s` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              "Remember to check in with Dr. Smith about the new medication schedule and side effects..."
            </p>
          </div>
        )}
      </CardContent>
      {hasRecording && !isRecording && (
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={toggleRecording}>
            Record New Note
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
