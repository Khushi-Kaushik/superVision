"use client"

import { useState } from "react"
import { AlertTriangle, BarChart3, Brain, Camera, Cloud, Smartphone, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Calculate animation delay based on index
  const animationDelay = `${index * 100}ms`
  
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-500 ease-in-out h-full",
        "border border-white/10 bg-gradient-to-br from-[#0F2544]/80 to-[#1a3a64]/60 backdrop-blur-sm",
        "hover:border-[#06D001] hover:shadow-xl hover:shadow-[#06D001]/10",
        "transform hover:-translate-y-2 group"
      )}
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[length:30px_30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing corner accent */}
      <div className={cn(
        "absolute top-0 right-0 w-16 h-16 bg-[#06D001]/20 blur-xl rounded-full -mr-8 -mt-8 transition-opacity duration-500",
        isHovered ? "opacity-100" : "opacity-0"
      )} />
      
      <CardHeader className="pb-2 relative z-10">
        <div className="flex justify-center mb-6">
          <div className={cn(
            "p-4 rounded-full transition-all duration-500 relative",
            "bg-gradient-to-br from-[#0a1e38]/80 to-[#1a3a64]/80 border border-white/10",
            "group-hover:border-[#06D001]/30 group-hover:bg-[#06D001]/10 group-hover:scale-110",
            "shadow-md"
          )}>
            <div className={cn(
              "text-[#06D001] transition-all duration-500",
              isHovered ? "scale-110" : ""
            )}>
              {icon}
            </div>
          </div>
        </div>
        
        <CardTitle className={cn(
          "text-xl font-semibold text-center transition-all duration-300",
          "text-white group-hover:text-[#06D001]"
        )}>
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <CardDescription className={cn(
          "text-center text-sm leading-relaxed transition-all duration-300 mb-6",
          "text-gray-300 group-hover:text-white/90"
        )}>
          {description}
        </CardDescription>
        
        <div className={cn(
          "mt-6 flex justify-center transition-all duration-500 opacity-0 translate-y-4",
          isHovered ? "opacity-100 translate-y-0" : ""
        )}>
          <div className="text-[#06D001] text-sm font-medium flex items-center gap-1.5">
            <span>Learn More</span>
            <CheckCircle className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
      
      {/* Corner accent */}
      <div className={cn(
        "absolute bottom-0 right-0 w-12 h-12 transition-all duration-500 opacity-0",
        isHovered ? "opacity-100" : ""
      )}>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-transparent border-l-transparent border-r-[20px] border-b-[20px] border-r-[#06D001]/70 border-b-[#06D001]/70"></div>
      </div>
    </Card>
  )
}

export default function FeatureGrid() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Anomaly Detection",
      description:
        "Our proprietary machine learning algorithms detect unusual activities and behaviors in real-time, reducing false alarms by 95%.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Intelligent Alerts",
      description:
        "Receive instant notifications when our system detects suspicious activities, with video clips and AI-generated descriptions.",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Camera Integration",
      description:
        "Seamlessly connect with existing CCTV infrastructure or deploy our smart cameras for enhanced detection capabilities.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics and reporting tools to identify patterns and optimize your security protocols.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Secure Cloud Storage",
      description:
        "All footage is encrypted and stored securely in the cloud, with flexible retention policies and easy retrieval.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Access",
      description:
        "Monitor your security system from anywhere with our intuitive mobile application for iOS and Android.",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 relative bg-gradient-to-br from-[#0a1e38] to-[#1a3a64]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#06D001]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#06D001]/10 border border-[#06D001]/20 text-[#06D001] text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-[#06D001] mr-2 animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intelligent Security Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI-powered security platform offers comprehensive protection for your property with these advanced features.
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}