import { Filter, Grid3X3, List, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SkillCard from "@/components/skill-card"

export default function BrowseSkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white md:text-4xl">Browse Skills</h1>
            <p className="mt-2 text-white/80">Find the perfect skill match from thousands of offerings</p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search skills, topics, or users..." className="pl-10" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="languages">Languages</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="cooking">Cooking</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="virtual">Virtual Only</SelectItem>
                    <SelectItem value="in-person">In-Person Only</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <div className="flex items-center rounded-md border">
                  <Button variant="ghost" size="icon" className="rounded-r-none">
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-l-none">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Showing 24 results</h2>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  id: "1",
                  offering: "Spanish Conversation",
                  wanting: "Web Design",
                  user: {
                    name: "Mia Rodriguez",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.9,
                  },
                  location: "Virtual",
                  availability: "Weekends",
                },
                {
                  id: "2",
                  offering: "Piano Lessons",
                  wanting: "Python Programming",
                  user: {
                    name: "Arjun Patel",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.7,
                  },
                  location: "New York, NY",
                  availability: "Evenings",
                },
                {
                  id: "3",
                  offering: "Photography Tips",
                  wanting: "French Language",
                  user: {
                    name: "Sasha Kim",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.8,
                  },
                  location: "Hybrid",
                  availability: "Flexible",
                },
                {
                  id: "4",
                  offering: "Yoga Instruction",
                  wanting: "Graphic Design",
                  user: {
                    name: "Jordan Lee",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.6,
                  },
                  location: "Los Angeles, CA",
                  availability: "Mornings",
                },
                {
                  id: "5",
                  offering: "Guitar Lessons",
                  wanting: "Cooking Skills",
                  user: {
                    name: "Alex Rivera",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.9,
                  },
                  location: "Virtual",
                  availability: "Weekends",
                },
                {
                  id: "6",
                  offering: "Digital Marketing",
                  wanting: "Video Editing",
                  user: {
                    name: "Taylor Morgan",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.8,
                  },
                  location: "Chicago, IL",
                  availability: "Evenings",
                },
                {
                  id: "7",
                  offering: "Illustrator Basics",
                  wanting: "Spanish Lessons",
                  user: {
                    name: "Jamie Wilson",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.7,
                  },
                  location: "Virtual",
                  availability: "Weekdays",
                },
                {
                  id: "8",
                  offering: "French Cooking",
                  wanting: "Photography",
                  user: {
                    name: "Morgan Chen",
                    avatar: "/user.jpg?height=40&width=40",
                    rating: 4.9,
                  },
                  location: "San Francisco, CA",
                  availability: "Weekends",
                },
              ].map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  1
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  2
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  3
                </Button>
                <span className="px-2">...</span>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  12
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
