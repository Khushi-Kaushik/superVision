"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Camera,
  Brain,
  Smartphone,
  Cloud,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
} from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import Table from "@/components/ui/table/page"
import { PricingCard } from "@/components/ui/pricing-card"
import FeatureCard from "@/components/ui/cards"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0F2544] flex-col">
      <Navbar/>
      

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16 ">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Smart Services</h2>
              <p className=" text-lg max-w-[800px] mx-auto text-white">
                Cutting-edge machine learning solutions for advanced anomaly detection and security monitoring.
              </p>
           
            
            <FeatureCard/>
            </div>

          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-2 bg-muted text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our AI Technology Works</h2>
              <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                Our advanced machine learning models continuously learn and adapt to your environment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="AI Detection Technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                    <p className="text-muted-foreground">
                      Our system collects video data from your cameras and processes it in real-time using our secure
                      edge devices.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                    <p className="text-muted-foreground">
                      Our neural networks analyze the footage to identify normal patterns and detect anomalies that
                      deviate from expected behavior.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Alert Generation</h3>
                    <p className="text-muted-foreground">
                      When an anomaly is detected, our system generates an alert with relevant details and sends it to
                      designated personnel.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Our AI models continuously learn from feedback, improving detection accuracy and reducing false
                      positives over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Table/>

        {/* Demo Section */}
        <section className="py-20 md:py-32 bg-muted/50 text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">See VigilAI in Action</h2>
                <p className="text-lg text-muted-foreground">
                  Watch how our AI system detects anomalies in real-time, providing immediate alerts and reducing false
                  positives by up to 95% compared to traditional motion detection systems.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time anomaly detection demonstration",
                    "Dashboard walkthrough and alert management",
                    "Integration with existing camera systems",
                    "Mobile app functionality",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="gap-2" asChild>
                  <Link href="#demo">
                    Watch Demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Product demo video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full h-16 w-16 p-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                    <span className="sr-only">Play demo video</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                Hear from businesses that have transformed their security operations with our AI technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="VigilAI has completely transformed our security operations. We've reduced false alarms by 90% and our security team can now focus on real threats."
                author="David Chen"
                role="Security Director, Metro Shopping Centers"
                avatarSrc="/placeholder.svg?height=64&width=64"
              />
              <TestimonialCard
                quote="The anomaly detection is incredibly accurate. It identified a potential theft situation that our traditional system would have missed entirely."
                author="Sarah Johnson"
                role="Operations Manager, TechCorp Industries"
                avatarSrc="/placeholder.svg?height=64&width=64"
              />
              <TestimonialCard
                quote="Implementation was seamless with our existing cameras. The ROI has been tremendous - we've reduced security staff costs while improving overall safety."
                author="Michael Rodriguez"
                role="CTO, Logistics International"
                avatarSrc="/placeholder.svg?height=64&width=64"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-32 bg-muted text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">About VigilAI</h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2018, VigilAI is at the forefront of AI-powered security solutions. Our team of machine
                  learning experts and security professionals is dedicated to creating intelligent surveillance systems
                  that provide real value.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to revolutionize the security industry by leveraging artificial intelligence to create
                  smarter, more effective surveillance systems that reduce costs and improve safety.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">50+</h3>
                    <p className="text-muted-foreground">AI Engineers & Developers</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">500+</h3>
                    <p className="text-muted-foreground">Clients Worldwide</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">10,000+</h3>
                    <p className="text-muted-foreground">Cameras Connected</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">95%</h3>
                    <p className="text-muted-foreground">Reduction in False Alarms</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team at work"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Office space"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full mt-8"
                />
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="AI development"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full mt-8"
                />
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Security monitoring"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Security System?</h2>
              <p className="text-lg md:text-xl opacity-90">
                Join hundreds of businesses that have revolutionized their security operations with our AI-powered
                anomaly detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
              <p className="text-sm opacity-80">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50 py-12 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">VigilAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced AI-powered anomaly detection for modern security systems. Protecting businesses since 2018.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/products/basic" className="text-muted-foreground hover:text-foreground">
                    VigilAI Basic
                  </Link>
                </li>
                <li>
                  <Link href="/products/pro" className="text-muted-foreground hover:text-foreground">
                    VigilAI Pro
                  </Link>
                </li>
                <li>
                  <Link href="/products/enterprise" className="text-muted-foreground hover:text-foreground">
                    VigilAI Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} VigilAI Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
