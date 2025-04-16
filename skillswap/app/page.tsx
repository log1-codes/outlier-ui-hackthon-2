import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SkillCard from "@/components/skill-card"
import CategoryCard from "@/components/category-card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
          <div className="container relative mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                  Join 10,000+ skill swappers worldwide
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Swap Skills,{" "}
                  <span className="relative">
                    <span className="relative z-10">Not Bills</span>
                    <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-orange-400 opacity-50"></span>
                  </span>
                </h1>
                <p className="max-w-md text-lg text-white/80">
                  Exchange knowledge directly with others. Teach what you know, learn what you don't. No money involved.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">
                    Find Your Skill Match
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full bg-white/10 text-white hover:bg-white/20">
                    How It Works
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="relative rounded-2xl bg-white/10 p-2 backdrop-blur-sm">
                  <img
                    src="/placeholder.jpeg?height=600&width=600"
                    alt="People exchanging skills"
                    className="rounded-xl"
                    width={600}
                    height={600}
                  />
                  <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-orange-100">
                        <img src="/user.jpg?height=48&width=48" alt="User avatar" width={48} height={48} />
                      </div>
                      <div>
                        <p className="font-medium">Jordan matched with Mia!</p>
                        <p className="text-sm text-gray-500">Spanish for Web Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">How SkillSwap Works</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Exchange your knowledge and skills with others in three simple steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "List Your Skills",
                  description: "Share what you can teach and what you want to learn",
                  icon: "📝",
                },
                {
                  title: "Find Your Match",
                  description: "Connect with people who have complementary skills",
                  icon: "🤝",
                },
                {
                  title: "Schedule & Swap",
                  description: "Meet virtually or in-person and start learning",
                  icon: "🗓️",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Explore Skill Categories</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Discover the wide range of skills available for exchange
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Design", icon: "🎨", count: 245 },
                { name: "Languages", icon: "🗣️", count: 189 },
                { name: "Music", icon: "🎵", count: 167 },
                { name: "Technology", icon: "💻", count: 312 },
                { name: "Cooking", icon: "🍳", count: 143 },
                { name: "Fitness", icon: "💪", count: 98 },
                { name: "Business", icon: "📊", count: 76 },
                { name: "Arts & Crafts", icon: "🎭", count: 124 },
              ].map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/browse">
                  View All Categories
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Skills */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Popular Skill Swaps</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Check out these trending skill exchange opportunities</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "1",
                  offering: "Spanish Conversation",
                  wanting: "Web Design",
                  user: {
                    name: "Mia Rodriguez",
                    avatar: "/placeholder.jpeg?height=40&width=40",
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
                    avatar: "/placeholder.jpeg?height=40&width=40",
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
                    avatar: "/placeholder.jpeg?height=40&width=40",
                    rating: 4.8,
                  },
                  location: "Hybrid",
                  availability: "Flexible",
                },
              ].map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild className="rounded-full bg-purple-600 hover:bg-purple-700">
                <Link href="/browse">
                  Browse All Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Success Stories</h2>
              <p className="mx-auto max-w-2xl text-white/80">
                Hear from people who have transformed their skills through swapping
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "I learned Spanish while teaching web design. It was the perfect exchange and we're still friends!",
                  name: "Jordan Lee",
                  title: "Graphic Designer",
                  avatar: "/user.jpg?height=64&width=64",
                },
                {
                  quote:
                    "As a musician, I never thought I'd learn to code. Now I'm building my own music app thanks to SkillSwap!",
                  name: "Taylor Morgan",
                  title: "Pianist & Developer",
                  avatar: "/user.jpg?height=64&width=64",
                },
                {
                  quote:
                    "I taught photography and learned French. The platform made it so easy to find the perfect match.",
                  name: "Alex Rivera",
                  title: "Photographer",
                  avatar: "/user.jpg?height=64&width=64",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-1"
                >
                  <div className="mb-4 text-lg">&ldquo;{testimonial.quote}&rdquo;</div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={testimonial.avatar || "/placeholder.jpeg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-white/70">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to start swapping skills?</h2>
                  <p className="text-white/80">
                    Join thousands of people exchanging knowledge and building new skills without spending a dime.
                  </p>
                  <Button size="lg" className="rounded-full bg-white text-pink-600 hover:bg-gray-100">
                    Create Your Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="/placeholder.jpeg?height=300&width=500"
                    alt="People exchanging skills"
                    className="rounded-xl"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
