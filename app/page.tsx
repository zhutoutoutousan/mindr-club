"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Lock, Sparkles, Users, TrendingUp, Calendar, Shield, Zap, Bitcoin, Network, Globe2, Rocket } from "lucide-react"
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
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">mindr.club</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Join the Network
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-500/30">
            Founder Matching Network
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Connect with
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Visionary{" "}
            </span>
            Founders
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join a network of ambitious founders, entrepreneurs, and innovators. Find your perfect co-founder, build your dream team, and create the future together.
          </p>

          {/* Add merit-based entry section */}
          <div className="max-w-4xl mx-auto mb-12 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Merit-Based Network</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">What We Value</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Open Source Contributions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Technical Skills & Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Startup Experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Domain Knowledge</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">No Traditional Barriers</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>No Degree Required</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>No Corporate Titles Needed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>No Minimum Capital</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Skills-Based Certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Smart Matching</h3>
              <p className="text-gray-300">AI-powered founder matching based on skills, vision, and complementary strengths.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Global Network</h3>
              <p className="text-gray-300">Connect with founders worldwide, from Silicon Valley to emerging tech hubs.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Market Context</h3>
              <p className="text-gray-300">Stay informed about market trends and emerging technologies while building your network.</p>
            </div>
          </div>

          {/* Add new features section */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Private Hosting</h3>
              <p className="text-gray-300">Deploy your own instance with complete data sovereignty and independent operation.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Decentralized Network</h3>
              <p className="text-gray-300">Connect to the global network voluntarily with differential privacy protocols.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Data Control</h3>
              <p className="text-gray-300">Maintain full control over your data while benefiting from network effects.</p>
            </div>
          </div>

          {/* Add startup agent features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-300">Advanced market analysis and opportunity detection powered by AI agents.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Strategy Automation</h3>
              <p className="text-gray-300">Automated trading strategies and portfolio management with customizable parameters.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Expert Validation</h3>
              <p className="text-gray-300">AI-driven expert validation and technical assessment of opportunities.</p>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Founder Network</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              "Building a startup is a journey best shared. Find your perfect co-founder, build your dream team, and create something amazing together. The right connection can change everything."
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Choose your path: host privately with complete data sovereignty, or connect to our global network with privacy-preserving protocols.
            </p>
          </div>

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
                <CardDescription className="text-gray-300">Connect with the founder community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>Founder Matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>Startup Events</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span>Market Insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Community</span>
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
                <CardDescription className="text-gray-300">Secure your founder journey</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-pink-400" />
                    <span>AI Startup Agent</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-pink-400" />
                    <span>Strategy Portfolio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-pink-400" />
                    <span>Investor Relations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-pink-400" />
                    <span>Expert Validation</span>
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
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Join mindr.club?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Merit-Based Access",
                description: "Join based on your skills and contributions, not your background or capital",
              },
              {
                icon: Shield,
                title: "Skill Certification",
                description: "Get your technical and startup skills evaluated and certified",
              },
              {
                icon: TrendingUp,
                title: "Equal Opportunity",
                description: "Connect with founders regardless of traditional credentials",
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
