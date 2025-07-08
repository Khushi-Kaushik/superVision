import { ComparisonTable } from "@/components/ui/table/comparsion"

export default function Table() {
  const comparisonFeatures = [
    {
      feature: "Threat Detection",
      traditional: "Manual review required",
      ai: "Real-time AI detection",
      highlight: true,
    },
    {
      feature: "False Alarms",
      traditional: "Frequent",
      ai: "Minimized with AI filtering",
    },
    {
      feature: "Monitoring",
      traditional: "Requires constant human attention",
      ai: "Automated with human oversight",
    },
    {
      feature: "Object Recognition",
      traditional: false,
      ai: true,
      highlight: true,
    },
    {
      feature: "Behavioral Analysis",
      traditional: false,
      ai: true,
    },
    {
      feature: "Predictive Capabilities",
      traditional: false,
      ai: true,
      highlight: true,
    },
    {
      feature: "Integration",
      traditional: "Limited",
      ai: "Seamless with existing systems",
    },
    {
      feature: "Scalability",
      traditional: "Hardware-dependent",
      ai: "Cloud-based, easily scalable",
    },
    {
      feature: "Data Insights",
      traditional: "None",
      ai: "Advanced analytics dashboard",
      highlight: true,
    },
    {
      feature: "Cost Efficiency",
      traditional: "High ongoing monitoring costs",
      ai: "Reduced long-term operational costs",
    },
  ]

  return (
    <main>
      {/* Other sections */}

      {/* Products Section - Replaced with Comparison Table */}
      <section id="products" className="py-20 md:py-32 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose US?</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              See how our intelligent AI-powered surveillance system outperforms traditional CCTV solutions.
            </p>
          </div>

          <div className="rounded-lg border border-border/30 shadow-lg overflow-hidden">
            <ComparisonTable features={comparisonFeatures} />
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to upgrade your security infrastructure with intelligent surveillance?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary hover:bg-primary/90 text-[#06D001] font-medium py-3 px-6 rounded-md transition-colors">
                Request a Demo
              </button>
              <button className="bg-primary hover:bg-primary/90 text-[#06D001] font-medium py-3 px-6 rounded-md transition-colors">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
    </main>
  )
}
