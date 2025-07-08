// app/dashboard/page.tsx - Server Component
import type { Metadata } from "next"
import DashboardClient from "./dash_client"

export const metadata: Metadata = {
  title: "Dashboard - Supervision",
  description: "Manage your security system",
}

export default function DashboardPage() {
  return (
  <DashboardClient />
  )
}