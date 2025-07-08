import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComparisonFeature {
  feature: string
  traditional: string | boolean
  ai: string | boolean
  highlight?: boolean
}

interface ComparisonTableProps {
  features: ComparisonFeature[]
  className?: string
}

export function ComparisonTable({ features, className }: ComparisonTableProps) {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-background/10 rounded-tl-lg">Feature</th>
            <th className="p-4 bg-background/10 text-center">Traditional CCTV</th>
            <th className="p-4 bg-background/20 text-center rounded-tr-lg">
              <div className="flex flex-col items-center">
                <span className="text-primary">VigilAI</span>
                <span className="text-xs text-muted-foreground">Intelligent AI-Powered CCTV</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((item, index) => (
            <tr
              key={index}
              className={cn(
                "border-b border-border/20",
                item.highlight ? "bg-primary/5" : "",
                index === features.length - 1 ? "border-b-0" : "",
              )}
            >
              <td className="p-4 font-medium">{item.feature}</td>
              <td className="p-4 text-center">
                {typeof item.traditional === "boolean" ? (
                  item.traditional ? (
                    <Check className="h-5 w-5 mx-auto text-green-500" />
                  ) : (
                    <X className="h-5 w-5 mx-auto text-red-500" />
                  )
                ) : (
                  <span className="text-muted-foreground">{item.traditional}</span>
                )}
              </td>
              <td className={cn("p-4 text-center", item.highlight ? "bg-primary/10" : "")}>
                {typeof item.ai === "boolean" ? (
                  item.ai ? (
                    <Check className="h-5 w-5 mx-auto text-green-500" />
                  ) : (
                    <X className="h-5 w-5 mx-auto text-red-500" />
                  )
                ) : (
                  <span className="font-medium">{item.ai}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
