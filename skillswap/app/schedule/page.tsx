import { Calendar, Clock, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ScheduleSessionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white md:text-4xl">Schedule a Session</h1>
            <p className="mt-2 text-white/80">Book a time to exchange skills with Mia Rodriguez</p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {/* User Info */}
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Session Details</CardTitle>
                  <CardDescription>You're scheduling a session with Mia Rodriguez</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Mia Rodriguez"
                        className="h-full w-full object-cover"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Mia Rodriguez</h3>
                      <p className="text-sm text-gray-500">Spanish Conversation Expert</p>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>60 minute session</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h4 className="font-medium">What you'll learn:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Conversational Spanish practice</li>
                      <li>• Everyday vocabulary and phrases</li>
                      <li>• Pronunciation tips and feedback</li>
                      <li>• Cultural context and expressions</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h4 className="font-medium">What Mia wants to learn:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Basic web design principles</li>
                      <li>• HTML and CSS fundamentals</li>
                      <li>• Creating a simple blog layout</li>
                      <li>• Responsive design basics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Select Date & Time</CardTitle>
                  <CardDescription>Choose a date and time that works for both of you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <Label className="mb-2 block">Select Date</Label>
                      <div className="rounded-md border">
                        <CalendarComponent mode="single" className="rounded-md" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label className="mb-2 block">Select Time</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time, index) => (
                            <Button key={index} variant={index === 2 ? "default" : "outline"} className="justify-start">
                              <Clock className="mr-2 h-4 w-4" />
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="session-type">Session Type</Label>
                        <Select defaultValue="video">
                          <SelectTrigger id="session-type" className="mt-1">
                            <SelectValue placeholder="Select session type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="video">
                              <div className="flex items-center">
                                <Video className="mr-2 h-4 w-4" />
                                Video Call
                              </div>
                            </SelectItem>
                            <SelectItem value="in-person">
                              <div className="flex items-center">
                                <Calendar className="mr-2 h-4 w-4" />
                                In Person
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="duration">Session Duration</Label>
                        <Select defaultValue="60">
                          <SelectTrigger id="duration" className="mt-1">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">60 minutes</SelectItem>
                            <SelectItem value="90">90 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="topic">What would you like to focus on?</Label>
                      <Textarea
                        id="topic"
                        placeholder="Describe what you'd like to learn or practice during this session..."
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any other information that might be helpful..."
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">Confirm Booking</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
