// page.tsx - Server Component
import type { Metadata } from "next"
import LoginForm from "./login" // Import the client component

export const metadata: Metadata = {
  title: "Login - SuperVision",
  description: "Login to your SuperVision account",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen bg-[#0F2544] text-white flex-col items-center justify-center px-4 py-12">
        {/* Server component parts */}
        <LoginForm /> {/* Client component */}
      </div>
    </div>
  )
}