import { Calendar, Clock, Globe, MapPin, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function UserProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Profile Header */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white">
                <img
                  src="/placeholder.jpeg?height=128&width=128"
                  alt="Mia Rodriguez"
                  className="h-full w-full object-cover"
                  width={128}
                  height={128}
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-white">Mia Rodriguez</h1>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-white/80 md:justify-start">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Miami, FL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-300" />
                    <span>4.9 (28 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Member since 2023</span>
                  </div>
                </div>
              </div>
              <div className="ml-auto flex gap-3">
                <Button className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message
                </Button>
                <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Session
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Sidebar */}
              <div className="space-y-6 lg:col-span-1">
                {/* Skills Offering */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold">Skills Offering</h2>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Spanish Conversation",
                        level: "Expert",
                        description: "Native speaker offering conversational Spanish practice for all levels.",
                      },
                      {
                        name: "Salsa Dancing",
                        level: "Intermediate",
                        description: "Learn basic to intermediate salsa moves and techniques.",
                      },
                    ].map((skill, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                            {skill.level}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Wanted */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold">Skills Wanted</h2>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Web Design",
                        level: "Beginner",
                        description: "Looking to learn HTML, CSS, and basic web design principles.",
                      },
                      {
                        name: "Photography",
                        level: "Beginner to Intermediate",
                        description: "Want to improve my photography skills, especially portrait photography.",
                      },
                    ].map((skill, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                            {skill.level}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold">Availability</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Monday - Friday</div>
                      <div className="text-gray-600">6:00 PM - 9:00 PM</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Saturday</div>
                      <div className="text-gray-600">10:00 AM - 4:00 PM</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Sunday</div>
                      <div className="text-gray-600">Not Available</div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="h-4 w-4" />
                      <span>Time zone: Eastern Time (ET)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="about">
                  <TabsList className="mb-6 grid w-full grid-cols-3">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="space-y-6">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                      <h3 className="mb-4 text-xl font-bold">About Me</h3>
                      <p className="text-gray-600">
                        Hi there! I'm Mia, a language enthusiast and cultural exchange advocate. I grew up bilingual in
                        Miami with Spanish as my first language. I love helping others become confident Spanish speakers
                        through conversation practice.
                      </p>
                      <p className="mt-3 text-gray-600">
                        When I'm not teaching Spanish, you can find me salsa dancing, exploring Miami's cultural scene,
                        or planning my next travel adventure. I'm currently looking to improve my web design skills to
                        create a blog about language learning and cultural exchange.
                      </p>
                    </div>

                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                      <h3 className="mb-4 text-xl font-bold">Teaching Style</h3>
                      <p className="text-gray-600">
                        My teaching approach is conversational and practical. I believe the best way to learn a language
                        is by using it in real-life contexts. I customize lessons based on your interests and goals,
                        whether that's travel, business, or everyday conversation.
                      </p>
                      <p className="mt-3 text-gray-600">
                        I'm patient, encouraging, and focus on building your confidence. We'll practice through
                        role-plays, discussions about topics you enjoy, and interactive activities.
                      </p>
                    </div>

                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                      <h3 className="mb-4 text-xl font-bold">Learning Goals</h3>
                      <p className="text-gray-600">
                        I'm excited to learn web design basics! My goal is to create a personal blog where I can share
                        language learning tips and cultural insights. I'm a complete beginner but eager to learn HTML,
                        CSS, and eventually some JavaScript.
                      </p>
                      <p className="mt-3 text-gray-600">
                        I'm also interested in improving my photography skills to capture better travel photos and
                        create visual content for my future blog.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="space-y-6">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                      <h3 className="mb-4 text-xl font-bold">Reviews (28)</h3>
                      <div className="space-y-6">
                        {[
                          {
                            name: "Jordan Lee",
                            avatar: "/placeholder.svg?height=48&width=48",
                            rating: 5,
                            date: "March 15, 2023",
                            review:
                              "Mia is an excellent Spanish teacher! She's patient, knowledgeable, and makes learning fun. Our sessions are always engaging and I've improved so much in just a few weeks.",
                          },
                          {
                            name: "Alex Rivera",
                            avatar: "/placeholder.svg?height=48&width=48",
                            rating: 5,
                            date: "February 28, 2023",
                            review:
                              "I've been taking Spanish lessons with Mia for about two months now, and I'm amazed at how much progress I've made. She tailors the lessons to my interests and learning style.",
                          },
                          {
                            name: "Taylor Morgan",
                            avatar: "/placeholder.svg?height=48&width=48",
                            rating: 4,
                            date: "January 12, 2023",
                            review:
                              "Mia is a great teacher who really knows how to explain complex grammar concepts in a simple way. She's also very flexible with scheduling.",
                          },
                        ].map((review, index) => (
                          <div key={index} className="border-t pt-6 first:border-0 first:pt-0">
                            <div className="flex items-start gap-4">
                              <img
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.name}
                                className="h-12 w-12 rounded-full"
                                width={48}
                                height={48}
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium">{review.name}</h4>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <div className="mt-1 flex items-center">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p className="mt-2 text-gray-600">{review.review}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="mt-6 w-full">
                        View All Reviews
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="portfolio" className="space-y-6">
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                      <h3 className="mb-4 text-xl font-bold">Teaching Portfolio</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          {
                            title: "Spanish Conversation Guide",
                            image: "/placeholder.svg?height=200&width=300",
                            description: "A beginner's guide to everyday Spanish conversations.",
                          },
                          {
                            title: "Cultural Immersion Workshop",
                            image: "/placeholder.svg?height=200&width=300",
                            description: "Materials from my workshop on Latin American culture and language.",
                          },
                          {
                            title: "Spanish for Travelers",
                            image: "/placeholder.svg?height=200&width=300",
                            description: "Quick reference guide for travelers to Spanish-speaking countries.",
                          },
                          {
                            title: "Business Spanish Vocabulary",
                            image: "/placeholder.svg?height=200&width=300",
                            description: "Essential vocabulary for professional settings.",
                          },
                        ].map((item, index) => (
                          <div key={index} className="overflow-hidden rounded-lg border">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="h-40 w-full object-cover"
                              width={300}
                              height={200}
                            />
                            <div className="p-4">
                              <h4 className="font-medium">{item.title}</h4>
                              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
