"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, X, Users, MapPin } from "lucide-react"
import Link from "next/link"

export default function PublicRealmPage() {
  const [currentMatch, setCurrentMatch] = useState(0)

  const matches = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "AI/ML Engineer",
      company: "TechFlow AI",
      stage: "Series A",
      location: "San Francisco, CA",
      compatibility: 94,
      skills: ["Machine Learning", "Python", "TensorFlow"],
      bio: "Building the future of conversational AI. Looking for a technical co-founder to scale our platform.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Product Manager",
      company: "GreenTech Solutions",
      stage: "Seed",
      location: "Austin, TX",
      compatibility: 87,
      skills: ["Product Strategy", "Sustainability", "B2B Sales"],
      bio: "Passionate about climate tech. Seeking partnerships for sustainable energy solutions.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Marketing Director",
      company: "HealthTech Innovations",
      stage: "Pre-Seed",
      location: "Boston, MA",
      compatibility: 91,
      skills: ["Digital Marketing", "Healthcare", "Growth Hacking"],
      bio: "Revolutionizing patient care through technology. Looking for strategic partnerships.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      // Handle match logic
      console.log("Matched with:", matches[currentMatch].name)
    }
    setCurrentMatch((prev) => (prev + 1) % matches.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Public Realm</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30">Online: 1,247 Founders</Badge>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="matching" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 border-white/20">
            <TabsTrigger value="matching" className="data-[state=active]:bg-blue-500">
              Partner Matching
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-blue-500">
              Events
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-blue-500">
              Market Insights
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-blue-500">
              Community
            </TabsTrigger>
          </TabsList>

          {/* Partner Matching Tab */}
          <TabsContent value="matching" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Tinder-style Matching Interface */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">Find Your Perfect Partner</h2>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden max-w-md mx-auto">
                  <div className="relative">
                    <img
                      src={matches[currentMatch].image || "/placeholder.svg"}
                      alt={matches[currentMatch].name}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-green-500">
                      {matches[currentMatch].compatibility}% Match
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{matches[currentMatch].name}</h3>
                        <p className="text-gray-300">{matches[currentMatch].title}</p>
                      </div>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">
                        {matches[currentMatch].stage}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{matches[currentMatch].location}</span>
                    </div>

                    <p className="text-gray-300 mb-4">{matches[currentMatch].bio}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {matches[currentMatch].skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-4">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                        onClick={() => handleSwipe("left")}
                      >
                        <X className="w-6 h-6" />
                      </Button>
                      <Button
                        size="lg"
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => handleSwipe("right")}
                      >
                        <Heart className="w-6 h-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Recommendations */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">AI Recommendations</h3>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Why This Match?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Complementary skill sets in AI/ML</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Similar funding stage and goals</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Geographic proximity for collaboration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Potential market synergies</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Matches</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Alex Kim", company: "DataFlow", status: "Pending" },
                        { name: "Lisa Park", company: "EcoTech", status: "Matched" },
                        { name: "David Chen", company: "FinanceAI", status: "Chatting" },
                      ].map((match, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback>
                                {match.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-white text-sm">{match.name}</p>
                              <p className="text-gray-400 text-xs">{match.company}</p>
                            </div>
                          </div>
                          <Badge
                            variant={match.status === "Matched" ? "default" : "secondary"}
                            className={match.status === "Matched" ? "bg-green-500" : ""}
                          >
                            {match.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Founders Meetup",
                  date: "Dec 15, 2024",
                  location: "San Francisco",
                  attendees: 127,
                  type: "Networking",
                },
                {
                  title: "Pitch Competition",
                  date: "Dec 20, 2024",
                  location: "Virtual",
                  attendees: 89,
                  type: "Competition",
                },
                {
                  title: "Investor Panel",
                  date: "Dec 22, 2024",
                  location: "New York",
                  attendees: 156,
                  type: "Learning",
                },
              ].map((event, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white">{event.title}</CardTitle>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">
                        {event.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {event.date} • {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{event.attendees} attending</span>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                        Join Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Market Insights Tab */}
          <TabsContent value="insights" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Trending Sectors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { sector: "AI/ML", growth: "+23%", color: "bg-green-500" },
                      { sector: "FinTech", growth: "+18%", color: "bg-blue-500" },
                      { sector: "HealthTech", growth: "+15%", color: "bg-purple-500" },
                      { sector: "ClimaTech", growth: "+12%", color: "bg-emerald-500" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                          <span className="text-white">{item.sector}</span>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400">{item.growth}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Funding Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">$2.4B</div>
                      <div className="text-gray-300">Raised this month</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-400">156</div>
                        <div className="text-gray-300 text-sm">New rounds</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-400">$15.4M</div>
                        <div className="text-gray-300 text-sm">Avg round size</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Founders Circle",
                  members: 1247,
                  description: "Connect with AI startup founders worldwide",
                  activity: "Very Active",
                },
                {
                  title: "Female Entrepreneurs",
                  members: 892,
                  description: "Supporting women in tech entrepreneurship",
                  activity: "Active",
                },
                {
                  title: "Climate Tech Alliance",
                  members: 634,
                  description: "Building sustainable solutions together",
                  activity: "Growing",
                },
              ].map((community, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">{community.title}</CardTitle>
                    <CardDescription className="text-gray-300">{community.members} members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{community.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={`border-green-400 text-green-400 ${
                          community.activity === "Very Active" ? "bg-green-500/20" : ""
                        }`}
                      >
                        {community.activity}
                      </Badge>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                        Join
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
