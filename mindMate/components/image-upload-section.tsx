"use client"

import { useState } from "react"
import { Camera, Upload, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ImageUploadSection() {
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "success">("idle")
  const [hasImage, setHasImage] = useState(false)

  const handleUpload = () => {
    setUploadState("uploading")

    // Simulate upload process
    setTimeout(() => {
      setUploadState("success")
      setHasImage(true)
    }, 1500)
  }

  return (
    <Card className="border-2 transition-all duration-300 hover:border-primary/20">
      <CardHeader>
        <CardTitle>Space Photo</CardTitle>
        <CardDescription>Take a photo of your space for organization tips</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4 py-4">
        {hasImage ? (
          <div className="relative h-40 w-full overflow-hidden rounded-md">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/placeholder.svg?height=160&width=320')" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-white">
              <h3 className="text-lg font-semibold">3-Step Clean-up Plan</h3>
              <ol className="mt-2 list-decimal pl-5 text-sm">
                <li>Clear desk surface of all items</li>
                <li>Sort items into categories</li>
                <li>Return only essential items to desk</li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="flex h-40 w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed p-4">
            <Camera className="h-10 w-10 text-muted-foreground" />
            <p className="text-center text-sm text-muted-foreground">
              Upload a photo of your space to get personalized organization tips
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={handleUpload} disabled={uploadState === "uploading"}>
          {uploadState === "idle" && (
            <>
              <Upload className="mr-2 h-4 w-4" /> Upload Photo
            </>
          )}
          {uploadState === "uploading" && (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Uploading...
            </>
          )}
          {uploadState === "success" && hasImage && (
            <>
              <Check className="mr-2 h-4 w-4" /> Upload New Photo
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
