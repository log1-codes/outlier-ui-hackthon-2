import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  category: {
    name: string
    icon: string
    count: number
  }
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/browse?category=${category.name.toLowerCase()}`}>
      <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100 text-2xl">
            {category.icon}
          </div>
          <div>
            <h3 className="font-medium">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count} skills available</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
