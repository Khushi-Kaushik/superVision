import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0a1e38] to-[#1a3a64]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#06D001]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content area */}
          <div className="flex flex-col space-y-8 lg:w-1/2 text-white">
            <div className="inline-flex items-center self-start px-4 py-2 rounded-full bg-[#06D001]/10 border border-[#06D001]/20 text-[#06D001] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#06D001] mr-2 animate-pulse"></span>
              NEW: AI-Powered Security Suite
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Eyes That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06D001] to-[#4CAF50]">Think</span>. Security That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06D001] to-[#4CAF50]">Acts</span>.
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Our AI-powered surveillance system detects anomalies in real-time, 
              reducing false alarms by 95% and providing instant alerts when it matters most.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: <ShieldCheck className="h-5 w-5 text-[#06D001]" />, text: "95% Fewer False Alarms" },
                { icon: <Zap className="h-5 w-5 text-[#06D001]" />, text: "Real-time Detection" },
                { icon: <Award className="h-5 w-5 text-[#06D001]" />, text: "Award-winning AI" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-[#06D001]/20 to-[#4CAF50]/10 border border-[#06D001]/20 rounded-lg p-5 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-1">Plans starting at only ₹99 per month!</h2>
              <p className="text-gray-300">Enterprise-grade protection with no hidden fees</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="gap-2 bg-[#06D001] hover:bg-[#06D001]/90 border-0 shadow-lg shadow-[#06D001]/25 h-12" asChild>
                <Link href="/signup" className="text-white">
                  Get Started <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10 h-12" asChild>
                <Link href="#demo" className="inline-flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" /> Watch Demo
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-[#1a3a64] flex items-center justify-center text-xs font-bold">
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">800+</span> customers trust our security solution
              </p>
            </div>
          </div>
          
          {/* Right image area */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#06D001]/20 blur-3xl rounded-full opacity-30 -z-10 animate-pulse"></div>
            
            {/* Main image */}
            <div className="relative bg-gradient-to-tr from-[#0c2747]/80 to-[#1a3a64]/80 rounded-2xl p-3 border border-white/10 shadow-2xl">
              <div className="absolute -top-4 -left-4 bg-[#06D001] text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                Live Dashboard
              </div>
              
              <Image
                src="/filhal_final.png"
                alt="AI Anomaly Detection Dashboard"
                width={600}
                height={420}
                className="rounded-xl shadow-md"
                priority
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white text-[#0F2544] px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-bold flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#06D001] mr-2 animate-pulse"></span>
                  Smart Anomaly Detection
                </span>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-1/2 -right-4 transform rotate-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-bold">AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}