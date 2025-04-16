"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Sun,
  Moon,
  Plus,
  Settings,
  Home,
  BookOpen,
  Music,
  MoreHorizontal,
  CheckCircle2,
  Circle,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mood types and their associated styles
const moods = {
  chill: {
    emoji: "🌤️",
    label: "Chill",
    gradient: "from-blue-50 via-blue-100 to-blue-50",
    accent: "bg-blue-500",
    quote: "Take it easy. One step at a time.",
    taskColor: "bg-blue-100 text-blue-700",
    cardBg: "bg-white/80 border-blue-100",
    buttonBg: "bg-blue-500 hover:bg-blue-600",
  },
  focused: {
    emoji: "🔥",
    label: "Focused",
    gradient: "from-amber-50 via-amber-100 to-amber-50",
    accent: "bg-amber-500",
    quote: "Deep work leads to great achievements.",
    taskColor: "bg-amber-100 text-amber-700",
    cardBg: "bg-white/80 border-amber-100",
    buttonBg: "bg-amber-500 hover:bg-amber-600",
  },
  hype: {
    emoji: "🎉",
    label: "Hype",
    gradient: "from-purple-50 via-purple-100 to-purple-50",
    accent: "bg-purple-500",
    quote: "Energy and enthusiasm can move mountains!",
    taskColor: "bg-purple-100 text-purple-700",
    cardBg: "bg-white/80 border-purple-100",
    buttonBg: "bg-purple-500 hover:bg-purple-600",
  },
  lowEnergy: {
    emoji: "🌧️",
    label: "Low Energy",
    gradient: "from-gray-50 via-gray-100 to-gray-50",
    accent: "bg-gray-500",
    quote: "Rest is not a waste of time. It's an investment.",
    taskColor: "bg-gray-100 text-gray-700",
    cardBg: "bg-white/80 border-gray-100",
    buttonBg: "bg-gray-500 hover:bg-gray-600",
  },
}

// Sample tasks
const sampleTasks = [
  { id: 1, text: "Design portfolio section", completed: false, priority: "high" },
  { id: 2, text: "Reply to emails", completed: true, priority: "medium" },
  { id: 3, text: "Read 5 pages of book", completed: false, priority: "low" },
  { id: 4, text: "Schedule team meeting", completed: false, priority: "high" },
]

// Sample journal entries
const sampleJournalEntries = [
  {
    id: 1,
    text: "Feeling a little scattered today, trying to slow down.",
    mood: "lowEnergy",
    date: "Today, 10:30 AM",
  },
]

export default function Dashboard() {
  const [currentMood, setCurrentMood] = useState("focused")
  const [darkMode, setDarkMode] = useState(false)
  const [tasks, setTasks] = useState(sampleTasks)
  const [journalEntries, setJournalEntries] = useState(sampleJournalEntries)
  const [journalText, setJournalText] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activePage, setActivePage] = useState("dashboard")

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  // Add journal entry
  const addJournalEntry = () => {
    if (journalText.trim()) {
      const newEntry = {
        id: Date.now(),
        text: journalText,
        mood: currentMood,
        date: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          month: "short",
          day: "numeric",
        }),
      }
      setJournalEntries([newEntry, ...journalEntries])
      setJournalText("")
    }
  }

  // Get priority style
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700"
      case "medium":
        return "bg-yellow-100 text-yellow-700"
      case "low":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-500 font-sans",
        darkMode ? "bg-gray-900 text-white" : `bg-gradient-to-br ${moods[currentMood].gradient} text-gray-800`,
      )}
    >
      {/* Navbar */}
      <header
        className={cn(
          "sticky top-0 z-10 backdrop-blur-md border-b",
          darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/50 border-gray-100",
        )}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              VibeBoard
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mood Selector */}
            <div className="flex items-center gap-2 mr-4">
              {Object.entries(moods).map(([key, mood]) => (
                <motion.button
                  key={key}
                  onClick={() => setCurrentMood(key)}
                  className={cn(
                    "relative rounded-full p-2 transition-all duration-300",
                    currentMood === key ? (darkMode ? "bg-gray-800" : "bg-white/80 shadow-md") : "hover:bg-white/40",
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{mood.emoji}</span>
                  {currentMood === key && (
                    <motion.span
                      className={cn(
                        "absolute -bottom-1 left-1/2 w-1 h-1 rounded-full",
                        darkMode ? "bg-white" : moods[currentMood].accent,
                      )}
                      layoutId="moodIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* User Menu */}
            <Avatar className="cursor-pointer">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="ml-2">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 flex">
        {/* Sidebar */}
        <motion.aside
          className={cn(
            "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 p-4 transition-all duration-300 ease-in-out z-10",
            darkMode ? "bg-gray-900/90 backdrop-blur-md" : "bg-white/60 backdrop-blur-md",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
          initial={false}
          animate={{ x: sidebarOpen ? 0 : -256 }}
        >
          <div className="flex flex-col gap-1 mt-4">
            <Button
              variant={activePage === "dashboard" ? "default" : "ghost"}
              className={cn("justify-start", activePage === "dashboard" && !darkMode && moods[currentMood].buttonBg)}
              onClick={() => setActivePage("dashboard")}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activePage === "journal" ? "default" : "ghost"}
              className={cn("justify-start", activePage === "journal" && !darkMode && moods[currentMood].buttonBg)}
              onClick={() => setActivePage("journal")}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Journal
            </Button>
            <Button
              variant={activePage === "music" ? "default" : "ghost"}
              className={cn("justify-start", activePage === "music" && !darkMode && moods[currentMood].buttonBg)}
              onClick={() => setActivePage("music")}
            >
              <Music className="mr-2 h-4 w-4" />
              Music
            </Button>
            <Button
              variant={activePage === "settings" ? "default" : "ghost"}
              className={cn("justify-start", activePage === "settings" && !darkMode && moods[currentMood].buttonBg)}
              onClick={() => setActivePage("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>

          <div className="absolute bottom-8 left-4 right-4">
            <Card
              className={cn(
                "bg-opacity-70 backdrop-blur-sm",
                darkMode ? "bg-gray-800 border-gray-700" : moods[currentMood].cardBg,
              )}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pro Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs">Change your vibe anytime to adapt your workspace to your current mood.</p>
              </CardContent>
            </Card>
          </div>
        </motion.aside>

        {/* Toggle Sidebar Button */}
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "fixed left-0 top-1/2 transform -translate-y-1/2 z-20 rounded-l-none",
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 border-gray-200",
          )}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <ArrowRight className={cn("h-4 w-4 transition-transform", !sidebarOpen && "rotate-180")} />
        </Button>

        {/* Main Content */}
        <main className={cn("flex-1 py-6 transition-all duration-300", sidebarOpen ? "ml-64" : "ml-0")}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMood + activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Today's Vibe Card */}
              <Card
                className={cn(
                  "col-span-1 md:col-span-2 backdrop-blur-sm transition-all duration-500",
                  darkMode ? "bg-gray-800/90 border-gray-700" : moods[currentMood].cardBg,
                )}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Today's Vibe</CardTitle>
                    <div
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium",
                        darkMode ? "bg-gray-700" : moods[currentMood].taskColor,
                      )}
                    >
                      {moods[currentMood].emoji} {moods[currentMood].label}
                    </div>
                  </div>
                  <CardDescription>
                    {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg italic">"{moods[currentMood].quote}"</p>
                </CardContent>
              </Card>

              {/* Tasks Card */}
              <Card
                className={cn(
                  "backdrop-blur-sm transition-all duration-500",
                  darkMode ? "bg-gray-800/90 border-gray-700" : moods[currentMood].cardBg,
                )}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Tasks</CardTitle>
                    <CardDescription>Your priority list for today</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tasks.map((task) => (
                      <motion.li
                        key={task.id}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg transition-all",
                          darkMode ? "bg-gray-700/50 hover:bg-gray-700" : "bg-white/50 hover:bg-white/80",
                        )}
                        whileHover={{ x: 5 }}
                      >
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => toggleTask(task.id)}>
                          {task.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <Circle className="h-5 w-5" />
                          )}
                        </Button>
                        <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
                        <span
                          className={cn(
                            "ml-auto text-xs px-2 py-1 rounded-full",
                            darkMode ? "bg-gray-600" : getPriorityStyle(task.priority),
                          )}
                        >
                          {task.priority}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn("w-full", darkMode ? "bg-gray-700 hover:bg-gray-600" : moods[currentMood].buttonBg)}
                  >
                    Add New Task
                  </Button>
                </CardFooter>
              </Card>

              {/* Journal Card */}
              <Card
                className={cn(
                  "backdrop-blur-sm transition-all duration-500",
                  darkMode ? "bg-gray-800/90 border-gray-700" : moods[currentMood].cardBg,
                )}
              >
                <CardHeader className="pb-2">
                  <CardTitle>Mood Journal</CardTitle>
                  <CardDescription>Capture your thoughts and feelings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Textarea
                      placeholder="How are you feeling right now?"
                      className={cn(
                        "resize-none min-h-[100px]",
                        darkMode ? "bg-gray-700 border-gray-600" : "bg-white/70",
                      )}
                      value={journalText}
                      onChange={(e) => setJournalText(e.target.value)}
                    />
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Current mood:</span>
                        <span>{moods[currentMood].emoji}</span>
                      </div>
                      <Button
                        onClick={addJournalEntry}
                        className={cn(darkMode ? "bg-gray-700 hover:bg-gray-600" : moods[currentMood].buttonBg)}
                      >
                        Save Entry
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
                    {journalEntries.map((entry) => (
                      <motion.div
                        key={entry.id}
                        className={cn("p-3 rounded-lg", darkMode ? "bg-gray-700/50" : "bg-white/50")}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs text-gray-500">{entry.date}</span>
                          <span>{moods[entry.mood].emoji}</span>
                        </div>
                        <p className="text-sm">{entry.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-20",
          darkMode ? "bg-gray-700 hover:bg-gray-600" : moods[currentMood].buttonBg,
          "text-white",
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Plus className="h-6 w-6" />
      </motion.button>

      {/* Device Mockups */}
      <div className="fixed bottom-4 left-4 text-xs opacity-50">
        <p>VibeBoard v1.0</p>
      </div>
    </div>
  )
}
