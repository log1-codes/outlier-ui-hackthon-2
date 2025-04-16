"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Heart, ListMusic, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { songs } from "@/lib/data"

export function NowPlayingBar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(songs[0].duration)
  const [volume, setVolume] = useState(80)
  const [liked, setLiked] = useState(false)

  const currentSong = songs[0]
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element for controlling playback
    audioRef.current = new Audio()

    // Set up event listeners
    const audio = audioRef.current
    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("ended", handleSongEnd)

    return () => {
      audio.removeEventListener("timeupdate", updateProgress)
      audio.removeEventListener("ended", handleSongEnd)
    }
  }, [])

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleSongEnd = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Playback prevented by browser")
      })
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (value: number[]) => {
    const newTime = value[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Currently playing song info */}
        <div className="flex items-center gap-3 w-[30%]">
          <div
            className="h-12 w-12 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSong.albumCover})` }}
          />
          <div className="overflow-hidden">
            <h4 className="truncate font-medium text-foreground">{currentSong.title}</h4>
            <p className="truncate text-sm text-muted-foreground">{currentSong.artist}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 ${liked ? "text-primary" : "text-muted-foreground"}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={liked ? "fill-primary" : ""} />
          </Button>
        </div>

        {/* Playback controls */}
        <div className="flex w-[40%] flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-primary bg-primary/10 text-primary hover:bg-primary/20"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-5 w-5 fill-primary" /> : <Play className="h-5 w-5 fill-primary" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex w-full items-center gap-2">
            <span className="w-10 text-right text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            <Slider
              value={[currentTime]}
              min={0}
              max={duration}
              step={0.1}
              onValueChange={handleSeek}
              className="w-full"
            />
            <span className="w-10 text-xs text-muted-foreground">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume and additional controls */}
        <div className="flex w-[30%] items-center justify-end gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <ListMusic className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider value={[volume]} min={0} max={100} step={1} onValueChange={handleVolumeChange} className="w-24" />
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
