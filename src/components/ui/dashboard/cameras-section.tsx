import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Settings, Power, Plus } from "lucide-react"

export function CamerasSection() {
  const cameras = [
    {
      id: 1,
      name: "Front Entrance",
      location: "Main Building",
      status: "online",
      lastActivity: "2 minutes ago",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      name: "Parking Lot",
      location: "North Side",
      status: "online",
      lastActivity: "5 minutes ago",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 3,
      name: "Warehouse",
      location: "Building B",
      status: "online",
      lastActivity: "Just now",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 4,
      name: "Back Entrance",
      location: "Main Building",
      status: "offline",
      lastActivity: "3 hours ago",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Connected Cameras</h2>
        <Button size="sm" className="gap-1">
          <Plus className="h-4 w-4" /> Add Camera
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <Card key={camera.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image src={camera.thumbnail || "/placeholder.svg"} alt={camera.name} fill className="object-cover" />
              <Badge
                variant={camera.status === "online" ? "default" : "destructive"}
                className="absolute top-2 right-2"
              >
                {camera.status}
              </Badge>
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{camera.name}</CardTitle>
              <CardDescription>{camera.location}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-sm">
              <p>Last activity: {camera.lastActivity}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Button variant="outline" size="sm" className="gap-1">
                <Eye className="h-4 w-4" /> View
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Power className="h-4 w-4" />
                  <span className="sr-only">Power</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}

        <Card className="flex flex-col items-center justify-center p-6 border-dashed">
          <Plus className="h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-muted-foreground mb-4 text-center">Add a new camera to your network</p>
          <Button>Connect Camera</Button>
        </Card>
      </div>
    </div>
  )
}
