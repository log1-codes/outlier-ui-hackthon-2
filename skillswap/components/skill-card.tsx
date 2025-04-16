import Link from "next/link"
import { Clock, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface SkillCardProps {
  skill: {
    id: string
    offering: string
    wanting: string
    user: {
      name: string
      avatar: string
      rating: number
    }
    location: string
    availability: string
  }
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 m-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            Offering: {skill.offering}
          </div>
          <div className="absolute right-0 top-0 z-10 m-3 rounded-full bg-purple-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Wants: {skill.wanting}
          </div>
          <div className="h-40 w-full bg-gradient-to-r from-purple-100 to-blue-100"></div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <img
                src={skill.user.avatar || "/placeholder.svg"}
                alt={skill.user.name}
                className="h-full w-full object-cover"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="font-medium">{skill.user.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{skill.user.rating}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span>{skill.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>{skill.availability}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-4">
        <div className="flex w-full items-center justify-between">
          <Link href={`/profile/${skill.id}`} className="text-sm font-medium text-purple-600 hover:underline">
            View Profile
          </Link>
          <Button asChild size="sm" className="rounded-full">
            <Link href={`/schedule?user=${skill.id}`}>Schedule</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
