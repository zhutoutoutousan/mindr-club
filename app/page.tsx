"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Lock, Sparkles, Users, TrendingUp, Calendar, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [selectedRealm, setSelectedRealm] = useState<"public" | "private" | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">mindr.club</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-500/30">
            The Future of Startup Collaboration
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to the
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Metaverse{" "}
            </span>
            for Founders
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Connect, collaborate, and scale your startup in our AI-powered ecosystem. From partner matching to lifecycle
            management, everything you need in one place.
          </p>

          {/* Realm Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card
              className={`cursor-pointer transition-all duration-300 border-2 ${
                selectedRealm === "public"
                  ? "border-purple-400 bg-purple-500/20"
                  : "border-white/20 bg-white/5 hover:bg-white/10"
              }`}
              onClick={() => setSelectedRealm("public")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Public Realm</CardTitle>
                <CardDescription className="text-gray-300">Connect with the global startup community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>AI Partner Matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>Event & Meetup Scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span>Startup Lifecycle Tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Differential Privacy Sharing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all duration-300 border-2 ${
                selectedRealm === "private"
                  ? "border-pink-400 bg-pink-500/20"
                  : "border-white/20 bg-white/5 hover:bg-white/10"
              }`}
              onClick={() => setSelectedRealm("private")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Private Realm</CardTitle>
                <CardDescription className="text-gray-300">Manage your startup's internal operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-pink-400" />
                    <span>HR & Payroll Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-pink-400" />
                    <span>Competition Intelligence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-pink-400" />
                    <span>Investor Relations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-pink-400" />
                    <span>Partnership Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {selectedRealm && (
            <div className="animate-in fade-in-50 duration-500">
              <Link href={selectedRealm === "public" ? "/public" : "/private"}>
                <Button
                  size="lg"
                  className={`${
                    selectedRealm === "public"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                      : "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                  } text-white px-8 py-4 text-lg`}
                >
                  Enter {selectedRealm === "public" ? "Public" : "Private"} Realm
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Powered by AI, Built for Founders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI Agent Matching",
                description: "Smart algorithms connect you with the perfect co-founders and partners",
              },
              {
                icon: Shield,
                title: "Differential Privacy",
                description: "Share insights while protecting sensitive startup information",
              },
              {
                icon: TrendingUp,
                title: "Lifecycle Management",
                description: "Track and optimize every stage of your startup journey",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
