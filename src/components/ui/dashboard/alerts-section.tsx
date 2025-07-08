import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle2, Clock, Eye, Filter } from "lucide-react"
import { Alert } from "@/components/types"


export function AlertsSection() {
 
  const alerts:Alert[] = [
    {
      id: 1,
      camera: "Front Entrance",
      type: "Motion Detected",
      severity: "high",
      timestamp: "Today, 10:23 AM",
      status: "unresolved",
      description: "Unidentified person detected in restricted area",
    },
    {
      id: 2,
      camera: "Warehouse",
      type: "Object Removed",
      severity: "medium",
      timestamp: "Today, 9:45 AM",
      status: "unresolved",
      description: "Inventory item removed outside of scheduled hours",
    },
    {
      id: 3,
      camera: "Parking Lot",
      type: "Unusual Activity",
      severity: "low",
      timestamp: "Yesterday, 11:30 PM",
      status: "resolved",
      description: "Vehicle parked in no-parking zone",
    },
    {
      id: 4,
      camera: "Back Entrance",
      type: "Motion Detected",
      severity: "medium",
      timestamp: "Yesterday, 8:15 PM",
      status: "resolved",
      description: "Multiple people entering after hours",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Recent Alerts</h2>
        <Button variant="outline" size="sm" className="gap-1">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unresolved">Unresolved</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="pt-4 space-y-4">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </TabsContent>
        <TabsContent value="unresolved" className="pt-4 space-y-4">
          {alerts
            .filter((alert) => alert.status === "unresolved")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>
        <TabsContent value="resolved" className="pt-4 space-y-4">
          {alerts
            .filter((alert) => alert.status === "resolved")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AlertCard({ alert }: { alert: Alert }) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }


  

  return (
    <Card>
      <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-lg flex items-center gap-2">
            {alert.status === "unresolved" ? (
              <AlertTriangle className="h-4 w-4 text-destructive" />
            ) : (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            )}
            {alert.type}
          </CardTitle>
          <CardDescription>{alert.camera}</CardDescription>
        </div>
        {/* <Badge variant={getSeverityColor(alert.severity)}>{alert.severity} priority</Badge> */}
      </CardHeader>
      <CardContent className="p-4 pt-0 pb-2">
        <p className="text-sm">{alert.description}</p>
        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {alert.timestamp}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <Eye className="h-4 w-4" /> View Footage
        </Button>
        {alert.status === "unresolved" ? (
          <Button size="sm">Mark as Resolved</Button>
        ) : (
          <Button variant="ghost" size="sm">
            Reopen
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
