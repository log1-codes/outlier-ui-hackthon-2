"use client"

import type React from "react"

import { useState } from "react"
import { Check, Plus, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// Task priority types with colors
const PRIORITY_TYPES = {
  high: { label: "High", color: "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400" },
  medium: {
    label: "Medium",
    color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  low: {
    label: "Low",
    color: "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400",
  },
}

// Mock task data
const INITIAL_TASKS = [
  { id: 1, title: "Schedule doctor appointment", completed: false, priority: "high" },
  { id: 2, title: "Prepare presentation for meeting", completed: false, priority: "high" },
  { id: 3, title: "Pay utility bills", completed: false, priority: "medium" },
  { id: 4, title: "Order groceries", completed: true, priority: "medium" },
  { id: 5, title: "Call mom", completed: false, priority: "low" },
]

interface Task {
  id: number
  title: string
  completed: boolean
  priority: keyof typeof PRIORITY_TYPES
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)
  const [newTask, setNewTask] = useState("")
  const [isAdding, setIsAdding] = useState(false)

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: "medium" as keyof typeof PRIORITY_TYPES,
      }
      setTasks([...tasks, newTaskObj])
      setNewTask("")
      setIsAdding(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask()
    }
  }

  return (
    <Card className="border-2 transition-all duration-300 hover:border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Tasks</span>
          <Badge variant="outline" className="ml-2">
            {tasks.filter((t) => !t.completed).length} remaining
          </Badge>
        </CardTitle>
        <CardDescription>AI-prioritized tasks for your day</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "group flex items-center justify-between rounded-md border p-3 transition-all duration-200",
                task.completed ? "bg-muted/50 text-muted-foreground" : "hover:border-primary/50",
              )}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleToggleTask(task.id)}
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full border transition-colors",
                    task.completed
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input hover:border-primary/50 hover:bg-primary/10",
                  )}
                  aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                  {task.completed && <Check className="h-3 w-3" />}
                </button>
                <span className={cn(task.completed && "line-through")}>{task.title}</span>
              </div>
              <Badge
                variant="outline"
                className={cn("transition-all", PRIORITY_TYPES[task.priority].color, task.completed && "opacity-50")}
              >
                {PRIORITY_TYPES[task.priority].label}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {isAdding ? (
          <div className="flex w-full items-center gap-2">
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What do you need to do?"
              className="flex-1"
              autoFocus
            />
            <Button size="icon" onClick={handleAddTask}>
              <Check className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => setIsAdding(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button variant="outline" className="w-full" onClick={() => setIsAdding(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Task
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
