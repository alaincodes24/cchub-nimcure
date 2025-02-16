"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="min-h-screen grid lg:grid-cols-5">
      <div className="col-span-2 flex flex-col p-8 lg:p-12">
        <div className="space-y-12 max-w-sm mx-auto w-full">
          <div className="flex justify-center">
            <Image
              src="/home-logo.png"
              alt="Home Logo"
              width={56}
              height={56}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center">Sign in to continue</h1>

            <div className="space-y-4">
              <Input type="email" placeholder="Email Address" className="p-[22px] rounded-none focus:outline-none" />

              <div className="relative">
                <Input type={showPassword ? "text" : "password"} placeholder="Password" className="p-[22px] rounded-none focus:outline-none" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <span>HIDE</span>
                  ) : (
                    <span>SHOW</span>
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="remember"
                  className="h-5 w-5 border border-gray-300 rounded-none data-[state=checked]:bg-black data-[state=checked]:border-gray-300"
                />
                <label htmlFor="remember" className="text-sm font-medium">
                  Remember Me
                </label>
              </div>
              <Button variant="link" className="px-0 text-blue-700" asChild>
                <Link href="#">
                  Forgot Password?
                </Link>
              </Button>
            </div>

            <Button className="w-full rounded-none bg-blue-600 hover:bg-blue-700 p-[22px] cursor-pointer" size="lg">
              Login
            </Button>
          </div>
        </div>

        <div className="mt-auto pt-8 text-center text-sm text-muted-foreground">
          Powered by{" "}
          <Image
            src="/cchub-logo.png"
            alt="Co-Creation Hub Logo"
            width={100}
            height={24}
            className="inline-block ml-1"
          />
        </div>
      </div>

      <div className="hidden lg:block col-span-3 bg-white relative">
        <Image
          src="/login-illustration.png"
          alt="Delivery Illustration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 p-12 text-white z-10">
          <h2 className="text-[28px] font-bold mb-4 max-w-lg mx-auto">Serving Patients During a Pandemic</h2>
          <p className="max-w-lg mx-auto">
            Delivering essential medication to NIMR patients with adherence to quality of service, care and
            confidentiality.
          </p>
        </div>
      </div>
    </main>
  )
}
