"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation" // Changed from next/router

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, UserIcon, Key, LogOut } from "lucide-react"
import { DashboardShell } from "@/components/ui/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/ui/dashboard/dashboard-header"
import { DashboardTabs } from "@/components/ui/dashboard/dashboard-tabs"
import { CamerasSection } from "@/components/ui/dashboard/cameras-section"
import { AlertsSection } from "@/components/ui/dashboard/alerts-section"
import { ServicesSection } from "@/components/ui/dashboard/services-section"

export default function DashboardClient() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Check for browser environment before accessing localStorage
    if (typeof window === "undefined") return;
    
    const token = localStorage.getItem("accessToken")

    if (!token) {
      router.push("/login")
      return
    }

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:9091/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include", // Important for cookies
        })

        if (!response.ok) {
          // Handle unauthorized or other errors
          if (response.status === 401) {
            // Try to refresh token
            try {
              const refreshResponse = await fetch("http://localhost:9091/api/auth/access-token", {
                credentials: "include", // important for sending cookies
              })

              if (refreshResponse.ok) {
                const data = await refreshResponse.json()
                localStorage.setItem("accessToken", data.accessToken)

                // Retry with new token
                const retryResponse = await fetch("http://localhost:9091/api/user", {
                  headers: {
                    Authorization: `Bearer ${data.accessToken}`,
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                })

                if (retryResponse.ok) {
                  const userData = await retryResponse.json()
                  setUserData(userData)
                  setLoading(false)
                  return
                }
              }
            } catch (refreshErr) {
              console.error("Token refresh failed:", refreshErr)
            }

            // If refresh failed or retry failed, redirect to login
            localStorage.removeItem("accessToken")
            router.push("/login")
            return
          }
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        console.log("User data:", data)
        setUserData(data)
      } catch (err) {
        console.error("Failed to fetch user data:", err)
        setError("Failed to load user data. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    // Redirect to login page
    router.push("/login")
  }

  if (loading) {
    return (
      <div>
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    ) 
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 max-w-md">
        <Card>
          <CardContent className="p-6">
            <div className="text-red-500 text-center">
              <p className="mb-4">{error}</p>
              <Button onClick={() => router.push("/login")}>Return to Login</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="container mx-auto p-6 max-w-md">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="mb-4">No user data available</p>
            <Button onClick={() => router.push("/login")}>Return to Login</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <div className="container mx-auto p-6 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Welcome, {userData.name || "User"}!</CardTitle>
          </CardHeader>
          <CardContent>
            {userData.picture && (
              <div className="flex justify-center mb-6">
                <img
                  src={userData.picture || "/placeholder.svg"}
                  alt="Profile"
                  className="rounded-full w-24 h-24 border-2 border-primary shadow-md"
                />
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Your Profile</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <p>
                    <span className="font-medium">Email:</span> {userData.email}
                  </p>
                </div>

                {userData.name && (
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5 text-muted-foreground" />
                    <p>
                      <span className="font-medium">Name:</span> {userData.name}
                    </p>
                  </div>
                )}

                {userData.googleId && (
                  <div className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-muted-foreground" />
                    <p>
                      <span className="font-medium">Google ID:</span> {userData.googleId}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Button variant="destructive" className="w-full" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <DashboardShell>
        <DashboardHeader heading="Dashboard" text="Manage your security system and view alerts." />
        <DashboardTabs
          tabs={[
            {
              id: "cameras",
              label: "Cameras",
              content: <CamerasSection />,
            },
            {
              id: "alerts",
              label: "Alerts",
              content: <AlertsSection />,
            },
            {
              id: "services",
              label: "Services",
              content: <ServicesSection />,
            },
          ]}
          defaultTab="cameras"
        />
      </DashboardShell>
    </div>
  )
}