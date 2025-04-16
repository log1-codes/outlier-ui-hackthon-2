import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Mission</h1>
                <p className="text-xl text-white/80">
                  SkillSwap is on a mission to create a world where knowledge flows freely between people, without
                  financial barriers.
                </p>
                <Button size="lg" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
                  Join Our Community
                </Button>
              </div>
              <div className="relative hidden md:block">
                <img
                  src="/placeholder.jpeg?height=400&width=500"
                  alt="People exchanging skills"
                  className="rounded-xl"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/placeholder.jpeg?height=400&width=500"
                  alt="SkillSwap founders"
                  className="rounded-xl"
                  width={500}
                  height={400}
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">Our Story</h2>
                <p className="text-gray-600">
                  SkillSwap began in 2022 when our founders, Maya and Liam, were struggling to afford classes to learn
                  new skills. They realized that while they couldn't afford formal education, they each had valuable
                  knowledge they could share.
                </p>
                <p className="text-gray-600">
                  Maya was fluent in three languages but wanted to learn graphic design. Liam was a skilled designer who
                  wanted to learn Japanese. They started exchanging lessons and realized this model could help thousands
                  of others.
                </p>
                <p className="text-gray-600">
                  Today, SkillSwap connects thousands of people worldwide who exchange knowledge directly, creating a
                  more accessible and equitable learning ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">How SkillSwap Works</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Our platform makes it easy to exchange skills with others in three simple steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Create Your Profile",
                  description:
                    "Sign up and create your profile listing the skills you can teach and the skills you want to learn.",
                  icon: "👤",
                  color: "bg-purple-100",
                },
                {
                  title: "Find Your Match",
                  description:
                    "Browse through potential matches or let our algorithm suggest people with complementary skills.",
                  icon: "🔍",
                  color: "bg-blue-100",
                },
                {
                  title: "Start Swapping",
                  description:
                    "Schedule sessions and start exchanging knowledge. Rate and review each other after sessions.",
                  icon: "🔄",
                  color: "bg-orange-100",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${step.color} text-3xl`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-purple-600">
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
              <p className="mx-auto max-w-2xl text-gray-600">The principles that guide everything we do at SkillSwap</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Accessibility",
                  description: "We believe everyone should have access to learning, regardless of financial means.",
                  icon: "🌍",
                  color: "bg-purple-500",
                },
                {
                  title: "Community",
                  description: "We foster meaningful connections between people through knowledge exchange.",
                  icon: "👥",
                  color: "bg-blue-500",
                },
                {
                  title: "Equality",
                  description: "We value all skills equally, from academic to practical, artistic to technical.",
                  icon: "⚖️",
                  color: "bg-green-500",
                },
                {
                  title: "Growth",
                  description: "We're committed to helping people continuously develop and expand their abilities.",
                  icon: "🌱",
                  color: "bg-orange-500",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`flex h-24 items-center justify-center ${value.color} text-4xl text-white`}>
                    {value.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Find answers to common questions about SkillSwap</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Is SkillSwap completely free to use?",
                    answer:
                      "Yes, SkillSwap is completely free to use. We don't charge any fees for connecting with other users or exchanging skills. Our platform is built on the principle of equal exchange rather than monetary transactions.",
                  },
                  {
                    question: "How do I know if someone is qualified to teach?",
                    answer:
                      "Users list their experience level for each skill they offer, and our review system helps ensure quality. After each session, participants rate and review each other, building a reputation system that helps you find qualified teachers.",
                  },
                  {
                    question: "What if I don't have any skills to offer?",
                    answer:
                      "Everyone has something valuable to share! Whether it's a language you speak, a hobby you enjoy, or professional knowledge, there's someone out there who wants to learn from you. Our onboarding process helps you identify skills you might not have considered valuable.",
                  },
                  {
                    question: "How do I ensure my safety when meeting in person?",
                    answer:
                      "Safety is our priority. We recommend starting with video sessions before meeting in person. When meeting in person, choose public places like cafes or libraries. Our platform includes safety features like session reporting and user verification.",
                  },
                  {
                    question: "What if the skill exchange isn't equal in value?",
                    answer:
                      "SkillSwap operates on the principle that all knowledge has value. The platform helps match people with complementary skills and interests. If you feel an exchange isn't balanced, you can discuss expectations before starting or choose a different match.",
                  },
                  {
                    question: "Can I use SkillSwap for professional services?",
                    answer:
                      "SkillSwap is designed for learning and skill development, not for professional services or work exchanges. Users should not expect professional-grade services or use the platform to avoid paying for professional work.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="mt-12 text-center">
              <p className="mb-4 text-gray-600">Still have questions?</p>
              <Button asChild className="rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500 p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Ready to start your skill exchange journey?
                  </h2>
                  <p className="text-white/80">
                    Join thousands of people exchanging knowledge and building new skills without spending a dime.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
                      Sign Up Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white text-purple-600 hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="/skill.avif?height=300&width=500"
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
