"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, AlertCircle, Check, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

// Define the steps in the signup process
type SignupStep = "credentials" | "verification" | "profile"

// Main form data interface
interface FormData {
  email: string
  password: string
  confirmPassword: string
  otp: string
  firstName: string
  lastName: string
  username: string
  phoneNumber: string
}

export default function SignUpPage() {
  const router = useRouter()

  // State for the multi-step form
  const [currentStep, setCurrentStep] = useState<SignupStep>("credentials")
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
  })

  // Error handling
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    general: "",
  })

  // UI state
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [otpTimer, setOtpTimer] = useState(0)

  // Handle OTP timer countdown
  useEffect(() => {
    if (otpTimer > 0) {
      const interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [otpTimer])

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0

    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    if (/[^A-Za-z0-9]/.test(password)) strength += 25

    return strength
  }

  // Handle input changes for all form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear errors when typing
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }))

    // Calculate password strength
    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value))
    }

    // Check password match
    if (name === "confirmPassword" || (name === "password" && formData.confirmPassword)) {
      if (name === "confirmPassword" && value !== formData.password) {
        setErrors((prev) => ({ ...prev, confirmPassword: "Passwords don't match" }))
      } else if (name === "password" && value !== formData.confirmPassword && formData.confirmPassword) {
        setErrors((prev) => ({ ...prev, confirmPassword: "Passwords don't match" }))
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }))
      }
    }
  }

  // Handle credentials form submission
  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    let isValid = true
    const newErrors = { ...errors }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      isValid = false
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match"
      isValid = false
    }

    if (!isValid) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call to check if email exists and send OTP
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Randomly simulate email already exists error (for demo purposes)
      // Remove this when implementing real API
      const emailExists = Math.random() > 0.7
      if (emailExists) {
        setErrors((prev) => ({ ...prev, email: "This email is already registered" }))
        setIsSubmitting(false)
        return
      }

      // FUTURE API INTEGRATION:
      // Replace the above simulation with actual API call:
      /*
      const response = await fetch('/api/send-email-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      
      if (!response.ok) {
        const data = await response.json();
        if (data.error === 'email_exists') {
          setErrors((prev) => ({ ...prev, email: "This email is already registered" }));
          setIsSubmitting(false);
          return;
        }
        throw new Error(data.message || 'Failed to send OTP');
      }
      */

      // Move to verification step
      setCurrentStep("verification")
      setOtpTimer(120) // 2 minutes countdown
    } catch (error) {
      setErrors((prev) => ({ ...prev, general: "An error occurred. Please try again." }))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle OTP verification form submission
  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate OTP
    if (!formData.otp || formData.otp.length !== 6 || !/^\d+$/.test(formData.otp)) {
      setErrors((prev) => ({ ...prev, otp: "Please enter a valid 6-digit code" }))
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call to verify OTP
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, accept any 6-digit code
      // In a real implementation, this would validate against the server
      
      // FUTURE API INTEGRATION:
      /*
      const response = await fetch('/api/verify-email-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp
        })
      });
      
      if (!response.ok) {
        const data = await response.json();
        setErrors((prev) => ({ ...prev, otp: data.message || "Invalid verification code" }));
        setIsSubmitting(false);
        return;
      }
      
      const data = await response.json();
      setToken(data.token);
      */

      // Simulate receiving JWT token for now
      setToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2MTYxNjI4MDAsImV4cCI6MTYxNjE2NjQwMH0",
      )

      // Move to profile step
      setCurrentStep("profile")
    } catch (error) {
      setErrors((prev) => ({ ...prev, otp: "Invalid verification code" }))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle profile form submission
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate profile data
    let isValid = true
    const newErrors = { ...errors }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      isValid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      isValid = false
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required"
      isValid = false
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters"
      isValid = false
    }

    // Phone validation is optional
    if (formData.phoneNumber && !/^\+?[0-9\s-]{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number"
      isValid = false
    }

    if (!isValid) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call to complete profile
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // FUTURE API INTEGRATION:
      /*
      const response = await fetch('/api/complete-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          phoneNumber: formData.phoneNumber || null
        })
      });
      
      if (!response.ok) {
        const data = await response.json();
        // Handle specific errors like username taken
        if (data.error === 'username_taken') {
          setErrors((prev) => ({ ...prev, username: "This username is already taken" }));
          setIsSubmitting(false);
          return;
        }
        throw new Error(data.message || 'Failed to complete profile');
      }
      */

      // For demo, simulate success and redirect
      console.log("Registration successful!", {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        phoneNumber: formData.phoneNumber,
      })

      // Redirect to dashboard or success page
      // Comment this out if you want to stay on the page for testing
      router.push("/dashboard")
    } catch (error) {
      setErrors((prev) => ({ ...prev, general: "Failed to complete your profile. Please try again." }))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle resending OTP
  const handleResendOTP = async () => {
    if (otpTimer > 0) return

    setIsSubmitting(true)
    try {
      // Simulate API call to resend OTP
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // FUTURE API INTEGRATION:
      /*
      const response = await fetch('/api/send-email-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to resend OTP');
      }
      */

      setOtpTimer(120) // Reset timer to 2 minutes
    } catch (error) {
      setErrors((prev) => ({ ...prev, general: "Failed to resend verification code" }))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle Google sign-in
  const handleGoogleSignIn = () => {
    // FUTURE API INTEGRATION:
    // When implementing Google OAuth, uncomment this:
    // window.location.href = '/api/auth/google'
    
    // For now, show a message
    setErrors((prev) => ({ ...prev, general: "Google authentication is not implemented yet" }))
  }

  // Format time remaining for OTP
  const formatTimeRemaining = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Render credentials form (Page 1)
  const renderCredentialsForm = () => (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <div className="flex justify-center mb-2">
          <Shield className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Enter your information below to create your account</p>
      </div>

      {errors.general && (
        <Alert variant="destructive" className="bg-red-900/20 border-red-900/50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errors.general}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6">
        <form onSubmit={handleCredentialsSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

              {formData.password && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Password strength:</span>
                    <span>{passwordStrength < 50 ? "Weak" : passwordStrength < 100 ? "Medium" : "Strong"}</span>
                  </div>
                  <Progress value={passwordStrength} className="h-1" />
                  <ul className="text-xs space-y-1 mt-2">
                    <li className="flex items-center gap-1">
                      {formData.password.length >= 8 ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-500" />
                      )}
                      At least 8 characters
                    </li>
                    <li className="flex items-center gap-1">
                      {/[A-Z]/.test(formData.password) ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-500" />
                      )}
                      At least one uppercase letter
                    </li>
                    <li className="flex items-center gap-1">
                      {/[0-9]/.test(formData.password) ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-500" />
                      )}
                      At least one number
                    </li>
                    <li className="flex items-center gap-1">
                      {/[^A-Za-z0-9]/.test(formData.password) ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-500" />
                      )}
                      At least one special character
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                </>
              ) : (
                <>
                  <p className="cursor-pointer">Continue </p><ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#0F2544] px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button
          variant="outline"
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-5 w-5">
            <path
              fill="#EA4335"
              d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
            />
            <path
              fill="#34A853"
              d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
            />
            <path
              fill="#4A90E2"
              d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
            />
            <path
              fill="#FBBC05"
              d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
            />
          </svg>
          Google
        </Button>
      </div>

      <p className="px-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="cursor-pointer underline underline-offset-4 hover:text-primary">
          Sign in
        </Link>
      </p>
    </div>
  )

  // Render OTP verification form (Page 2)
  const renderVerificationForm = () => (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <div className="flex justify-center mb-2">
          <Shield className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Verify your email</h1>
        <p className="text-sm text-muted-foreground">
          We've sent a verification code to <span className="font-medium">{formData.email}</span>
        </p>
      </div>

      {errors.general && (
        <Alert variant="destructive" className="bg-red-900/20 border-red-900/50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errors.general}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6">
        <form onSubmit={handleVerificationSubmit} className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="otp" className="text-sm font-medium leading-none">
              Verification Code
            </label>
            <Input
              id="otp"
              name="otp"
              placeholder="Enter 6-digit code"
              className={`text-center text-lg tracking-widest ${errors.otp ? "border-red-500" : ""}`}
              maxLength={6}
              value={formData.otp}
              onChange={handleInputChange}
            />
            {errors.otp && <p className="text-sm text-red-500">{errors.otp}</p>}
          </div>

          {otpTimer > 0 && (
            <p className="text-center text-sm">
              Code expires in <span className="font-medium">{formatTimeRemaining(otpTimer)}</span>
            </p>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
              </>
            ) : (
              "Verify Email"
            )}
          </Button>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={handleResendOTP}
            disabled={otpTimer > 0 || isSubmitting}
            className={`text-sm ${
              otpTimer > 0 ? "text-muted-foreground" : "text-primary underline underline-offset-4 hover:text-primary/80"
            }`}
          >
            {otpTimer > 0 ? `Resend code in ${formatTimeRemaining(otpTimer)}` : "Resend verification code"}
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setCurrentStep("credentials")}
            className="text-sm text-muted-foreground hover:text-white"
          >
            ← Back to previous step
          </button>
        </div>
      </div>
    </div>
  )

  // Render profile completion form (Page 3)
  const renderProfileForm = () => (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <div className="flex justify-center mb-2">
          <Shield className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Complete your profile</h1>
        <p className="text-sm text-muted-foreground">Just a few more details to get you started</p>
      </div>

      {errors.general && (
        <Alert variant="destructive" className="bg-red-900/20 border-red-900/50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errors.general}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6">
        <form onSubmit={handleProfileSubmit}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="username"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <Input
                id="username"
                name="username"
                placeholder="johndoe"
                value={formData.username}
                onChange={handleInputChange}
                className={errors.username ? "border-red-500" : ""}
              />
              {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Phone number (optional)
              </label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+1 (555) 123-4567"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={errors.phoneNumber ? "border-red-500" : ""}
              />
              {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-2 cursor-pointer">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Completing Setup...
                </>
              ) : (
                "Complete Setup"
              )}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setCurrentStep("verification")}
            className="text-sm text-muted-foreground hover:text-white"
          >
            ← Back to verification
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col bg-[#0F2544] text-white">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Link
          href="/"
          className="absolute top-8 left-8 inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm font-medium hover:border-border"
        >
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
            className="mr-2 h-4 w-4"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back
        </Link>

        {/* Progress indicator */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${currentStep === "credentials" ? "bg-primary" : "bg-primary/30"}`} />
          <div className={`h-2 w-2 rounded-full ${currentStep === "verification" ? "bg-primary" : "bg-primary/30"}`} />
          <div className={`h-2 w-2 rounded-full ${currentStep === "profile" ? "bg-primary" : "bg-primary/30"}`} />
        </div>

        {/* Render the appropriate form based on current step */}
        {currentStep === "credentials" && renderCredentialsForm()}
        {currentStep === "verification" && renderVerificationForm()}
        {currentStep === "profile" && renderProfileForm()}
      </div>
    </div>
  )
}