import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Cloud, HardDrive, Settings, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      id: 1,
      name: "AI Anomaly Detection",
      status: "active",
      description: "Machine learning-based anomaly detection for all connected cameras",
      usagePercent: 65,
    },
    {
      id: 2,
      name: "Cloud Storage",
      status: "active",
      description: "Secure cloud storage for footage and alerts",
      usagePercent: 42,
      details: "23.5 GB / 100 GB used",
    },
    {
      id: 3,
      name: "Real-time Alerts",
      status: "active",
      description: "Instant notifications for detected anomalies",
      usagePercent: 100,
    },
    {
      id: 4,
      name: "Advanced Analytics",
      status: "inactive",
      description: "Detailed analytics and reporting for security insights",
      usagePercent: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Your Services</h2>
        <Button variant="outline" size="sm" className="gap-1">
          <Settings className="h-4 w-4" /> Manage Subscription
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between">
              <div className="flex gap-3">
                {service.name === "AI Anomaly Detection" && <Brain className="h-5 w-5 text-primary" />}
                {service.name === "Cloud Storage" && <Cloud className="h-5 w-5 text-primary" />}
                {service.name === "Real-time Alerts" && <Zap className="h-5 w-5 text-primary" />}
                {service.name === "Advanced Analytics" && <HardDrive className="h-5 w-5 text-primary" />}
                <div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </div>
              <Badge variant={service.status === "active" ? "default" : "secondary"}>{service.status}</Badge>
            </CardHeader>
            <CardContent className="p-4 pt-2 pb-2">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Usage</span>
                  <span>{service.usagePercent}%</span>
                </div>
                <Progress value={service.usagePercent} />
                {service.details && <p className="text-xs text-muted-foreground">{service.details}</p>}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                {service.status === "active" ? "Manage" : "Activate"}
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="border-dashed">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">Upgrade Your Plan</CardTitle>
            <CardDescription>Get access to more features and capabilities</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-2 pb-2">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Unlimited camera connections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Advanced AI model training</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Extended cloud storage (500GB)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Priority support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-4 pt-2">
            <Button className="w-full">Upgrade to Pro</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function Brain(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  )
}
