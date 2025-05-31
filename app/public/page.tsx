"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, X, Users, MapPin, Calendar, Clock, Star, Building2, GraduationCap, Briefcase, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Head from "next/head"

interface Participant {
  name: string
  title: string
  background: string
  icon: ReactNode
  skills?: string[]
  interests?: string[]
  location?: string
}

interface Event {
  id: string
  title: string
  date: string
  location: string
  attendees: number
  type: string
  description: string
  participants: Participant[]
}

interface Match {
  id: number
  name: string
  title: string
  company: string
  stage: string
  location: string
  compatibility: number
  skills: string[]
  bio: string
  image: string
  background?: string
}

export default function PublicRealmPage() {
  const [currentMatch, setCurrentMatch] = useState(0)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [viewMode, setViewMode] = useState<"tinder" | "pool">("tinder")

  const hackathonEvent: Event = {
    id: "hackathon-1",
    title: "Hackathon + Dinner",
    date: "Dec 6, 2024",
    location: "TBD",
    attendees: 12,
    type: "Hackathon",
    description: "A casual gathering of tech enthusiasts and entrepreneurs",
    participants: [
      {
        name: "月哥",
        title: "Software Training Entrepreneur",
        background: "月入百万，发家史非常励志",
        icon: <Star className="w-4 h-4" />,
        skills: ["Software Training", "Business Development"],
        location: "Shanghai",
      },
      {
        name: "Rosie",
        title: "Former Meta Engineering Manager",
        background: "旅美Meta毕业的工程经理，程序员，提前退休，国内考到美硕博，现在在组队创业",
        icon: <Building2 className="w-4 h-4" />,
        skills: ["Engineering Management", "AI/ML"],
        location: "San Francisco",
      },
      {
        name: "罗同学",
        title: "Senior Frontend Engineer",
        background: "饿了么高级前端工程师，目前正在学习AI agent",
        icon: <Briefcase className="w-4 h-4" />,
        skills: ["Frontend Development", "AI Agents"],
        location: "Shanghai",
      },
      {
        name: "钱同学",
        title: "Former ByteDance Engineer",
        background: "曾留学意大利，前字节跳动软件工程师，现国内远程办公，英语十分溜",
        icon: <GraduationCap className="w-4 h-4" />,
        skills: ["Software Engineering", "Remote Work"],
        location: "Italy/China",
      },
      {
        name: "张同学",
        title: "AI Engineer at ByteDance",
        background: "南开大学人工智能毕业生，现在字节跳动AI部门，前商汤AI部门供职，做AI底层相关开发",
        icon: <Star className="w-4 h-4" />,
        skills: ["AI Development", "Machine Learning"],
        location: "Beijing",
      },
      {
        name: "Lee",
        title: "PwC Developer & Entrepreneur",
        background: "普华永道程序员，创业者，曾做软件外包项目在常州全款买房，开了多家奶茶店和火锅店，赛车爱好者",
        icon: <Building2 className="w-4 h-4" />,
        skills: ["Software Development", "Entrepreneurship"],
        location: "Changzhou",
      },
      {
        name: "翁夫人",
        title: "Retired Entrepreneur",
        background: "上海土著上一代创业者，退休网红，曾开过礼品广告公司, 非常有钱，女儿也是开火锅店，网红，奢侈品带货",
        icon: <Star className="w-4 h-4" />,
        skills: ["Business", "Marketing"],
        location: "Shanghai",
      },
      {
        name: "冯先生",
        title: "Former HK Legislative Council",
        background: "前香港立法委公务员，对香港身份这块比较熟，非常有钱，家里墓地曾被人误认为是别墅庄园",
        icon: <Building2 className="w-4 h-4" />,
        skills: ["Public Policy", "Business"],
        location: "Hong Kong",
      },
      {
        name: "韩非",
        title: "Former Tencent Game Operations",
        background: "腾讯十几年的游戏运营，现在找寻创业机会",
        icon: <Briefcase className="w-4 h-4" />,
        skills: ["Game Operations", "Product Management"],
        location: "Shenzhen",
      },
      {
        name: "Charles",
        title: "AI Entrepreneur",
        background: "AI创业者，经历过web3，元宇宙等各种科技周期",
        icon: <Star className="w-4 h-4" />,
        skills: ["AI", "Web3", "Metaverse"],
        location: "Global",
      },
    ],
  }

  const matches: Match[] = hackathonEvent.participants.map((p, index) => ({
    id: index + 1,
    name: p.name,
    title: p.title,
    company: p.title.split(" at ")[1] || p.title.split(" & ")[0],
    stage: "Active",
    location: p.location || "Global",
    compatibility: Math.floor(Math.random() * 30) + 70,
    skills: p.skills || [],
    bio: p.background,
    image: "/placeholder.svg?height=400&width=300",
    background: p.background,
  }))

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      console.log("Matched with:", matches[currentMatch].name)
    }
    setCurrentMatch((prev: number) => (prev + 1) % matches.length)
  }

  return (
    <>
      <Head>
        <title>Public Realm - Founder Matching Network | Connect with Visionary Founders</title>
        <meta name="description" content="Join the global founder matching network. Connect with innovators, entrepreneurs, and visionaries building the future. Find your perfect co-founder and build something amazing together." />
        <meta name="keywords" content="founder matching, co-founder, startup, entrepreneurship, innovation, tech, business, networking, community" />
        <meta property="og:title" content="Public Realm - Founder Matching Network | Connect with Visionary Founders" />
        <meta property="og:description" content="Join the global founder matching network. Connect with innovators, entrepreneurs, and visionaries building the future." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Public Realm - Founder Matching Network | Connect with Visionary Founders" />
        <meta name="twitter:description" content="Join the global founder matching network. Connect with innovators, entrepreneurs, and visionaries building the future." />
        <link rel="canonical" href="https://mindr.club/public" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-sm" role="banner">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between" role="navigation">
              <Link href="/" className="flex items-center space-x-2" aria-label="mindr.club Home">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-2xl font-bold text-white">mindr.club</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30" aria-label={`${matches.length} founders online`}>
                  Online: {matches.length} Founders
                </Badge>
                <Button variant="ghost" className="text-white hover:bg-white/10" aria-label="View Profile">
                  Profile
                </Button>
              </div>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect Co-Founder
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Connect with visionary founders who share your passion and complement your skills. Build the next big thing together.
            </p>
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
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8" aria-label="Start Matching">
                Start Matching
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 text-lg px-8" aria-label="Learn More">
                Learn More
              </Button>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Founder Network</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              "Building a startup is a journey best shared. Find your perfect co-founder, build your dream team, and create something amazing together. The right connection can change everything."
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-300">Active Founders</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Successful Matches</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Active Network</div>
            </div>
          </div>

          <Tabs defaultValue="matching" className="w-full" role="tablist">
            <TabsList className="grid w-full grid-cols-4 bg-white/10 border-white/20" role="tablist">
              <TabsTrigger value="matching" className="data-[state=active]:bg-blue-500" role="tab" aria-selected="true">
                Founder Matching
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-blue-500" role="tab">
                Startup Events
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-blue-500" role="tab">
                Market Insights
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-blue-500" role="tab">
                Community
              </TabsTrigger>
            </TabsList>

            {/* Partner Matching Tab */}
            <TabsContent value="matching" className="mt-8" role="tabpanel">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* View Mode Toggle */}
                <div className="col-span-2 flex justify-end space-x-4 mb-4">
                  <Button
                    variant={viewMode === "tinder" ? "default" : "outline"}
                    onClick={() => setViewMode("tinder")}
                    className="bg-blue-500 hover:bg-blue-600"
                    aria-label="Switch to Tinder view"
                  >
                    Freedom Network
                  </Button>
                  <Button
                    variant={viewMode === "pool" ? "default" : "outline"}
                    onClick={() => setViewMode("pool")}
                    className="bg-blue-500 hover:bg-blue-600"
                    aria-label="Switch to People Pool view"
                  >
                    Global Pool
                  </Button>
                </div>

                {viewMode === "tinder" ? (
                  <>
                    {/* Tinder-style Matching Interface */}
                    <section className="space-y-6" aria-label="Freedom network interface">
                      <h2 className="text-3xl font-bold text-white mb-6">Connect with Freedom Advocates</h2>

                      <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden max-w-md mx-auto">
                        <div className="relative">
                          <img
                            src={matches[currentMatch].image || "/placeholder.svg"}
                            alt={`Profile of ${matches[currentMatch].name}`}
                            className="w-full h-64 object-cover"
                          />
                          <Badge className="absolute top-4 right-4 bg-green-500" aria-label={`${matches[currentMatch].compatibility}% alignment`}>
                            {matches[currentMatch].compatibility}% Alignment
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
                            <MapPin className="w-4 h-4 text-gray-400" aria-hidden="true" />
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
                              aria-label="Pass on this connection"
                            >
                              <X className="w-6 h-6" aria-hidden="true" />
                            </Button>
                            <Button
                              size="lg"
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => handleSwipe("right")}
                              aria-label="Connect with this advocate"
                            >
                              <Heart className="w-6 h-6" aria-hidden="true" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </section>

                    {/* AI Recommendations */}
                    <section className="space-y-6" aria-label="Freedom alignment recommendations">
                      <h3 className="text-2xl font-bold text-white">Why This Connection?</h3>

                      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-white">Freedom Alignment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true"></div>
                              <span className="text-gray-300">Shared vision for decentralized future</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true"></div>
                              <span className="text-gray-300">Complementary skills for building freedom</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true"></div>
                              <span className="text-gray-300">Potential for impactful collaboration</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </section>
                  </>
                ) : (
                  <section className="col-span-2" aria-label="Global freedom network">
                    <h2 className="text-3xl font-bold text-white mb-6">Global Freedom Network</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {matches.map((match, index) => (
                        <HoverCard key={index}>
                          <HoverCardTrigger asChild>
                            <Card className="bg-white/10 border-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors">
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                  <Avatar className="w-12 h-12">
                                    <AvatarFallback className="bg-blue-500/20 text-blue-200">
                                      {match.name[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h3 className="text-lg font-bold text-white">{match.name}</h3>
                                    <p className="text-gray-300 text-sm">{match.title}</p>
                                    <div className="flex items-center space-x-2 mt-1">
                                      <MapPin className="w-3 h-3 text-gray-400" aria-hidden="true" />
                                      <span className="text-gray-400 text-xs">{match.location}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80 bg-white/10 border-white/20 backdrop-blur-sm">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <h4 className="text-lg font-bold text-white">{match.name}</h4>
                                <Badge className="bg-green-500/20 text-green-400">
                                  {match.compatibility}% Alignment
                                </Badge>
                              </div>
                              <p className="text-gray-300 text-sm">{match.bio}</p>
                              <div className="flex flex-wrap gap-2">
                                {match.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-200">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex justify-end space-x-2">
                                <Button size="sm" variant="outline" className="border-red-400 text-red-400" aria-label="Pass on this connection">
                                  <X className="w-4 h-4" aria-hidden="true" />
                                </Button>
                                <Button size="sm" className="bg-green-500 hover:bg-green-600" aria-label="Connect with this advocate">
                                  <Heart className="w-4 h-4" aria-hidden="true" />
                                </Button>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-8" role="tabpanel">
              <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Bitcoin events">
                {[hackathonEvent].map((event, index) => (
                  <article key={index} className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-white">{event.title}</CardTitle>
                        <Badge variant="outline" className="border-blue-400 text-blue-400">
                          {event.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <time dateTime={event.date}>{event.date}</time>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-medium">Featured Freedom Advocates</h4>
                          <Button
                            variant="ghost"
                            className="text-blue-400 hover:text-blue-300"
                            onClick={() => setSelectedEvent(event)}
                            aria-label="View all participants"
                          >
                            View All <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                          </Button>
                        </div>
                        <div className="space-y-3">
                          {event.participants.slice(0, 3).map((participant, pIndex) => (
                            <div key={pIndex} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                              <Avatar className="w-10 h-10">
                                <AvatarFallback className="bg-blue-500/20 text-blue-200">
                                  {participant.name[0]}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <h5 className="text-white font-medium">{participant.name}</h5>
                                  <span className="text-gray-400 text-sm">{participant.icon}</span>
                                </div>
                                <p className="text-gray-300 text-sm">{participant.title}</p>
                                <p className="text-gray-400 text-xs mt-1">{participant.background}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-gray-300">{event.attendees} freedom advocates attending</span>
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600" aria-label="Join this event">
                          Join Movement
                        </Button>
                      </div>
                    </CardContent>
                  </article>
                ))}
              </section>

              {/* Event Detail Modal */}
              {selectedEvent && (
                <div 
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="event-detail-title"
                >
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle id="event-detail-title" className="text-white text-2xl">{selectedEvent.title}</CardTitle>
                          <CardDescription className="text-gray-300 mt-2">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <time dateTime={selectedEvent.date}>{selectedEvent.date}</time>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" aria-hidden="true" />
                                <span>{selectedEvent.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4" aria-hidden="true" />
                                <span>{selectedEvent.attendees} freedom advocates attending</span>
                              </div>
                            </div>
                          </CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-white hover:bg-white/10"
                          onClick={() => setSelectedEvent(null)}
                          aria-label="Close event details"
                        >
                          <X className="w-6 h-6" aria-hidden="true" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedEvent.participants.map((participant, index) => (
                          <Card key={index} className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-4">
                                <Avatar className="w-12 h-12">
                                  <AvatarFallback className="bg-blue-500/20 text-blue-200">
                                    {participant.name[0]}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <h5 className="text-white font-medium">{participant.name}</h5>
                                    <span className="text-gray-400">{participant.icon}</span>
                                  </div>
                                  <p className="text-gray-300 text-sm mt-1">{participant.title}</p>
                                  <p className="text-gray-400 text-xs mt-2">{participant.background}</p>
                                  {participant.skills && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                      {participant.skills.map((skill, sIndex) => (
                                        <Badge key={sIndex} variant="secondary" className="bg-blue-500/20 text-blue-200">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>

            {/* Market Insights Tab */}
            <TabsContent value="insights" className="mt-8" role="tabpanel">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Freedom Movement Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { sector: "Bitcoin Adoption", growth: "+23%", color: "bg-green-500" },
                        { sector: "Freedom Tech", growth: "+18%", color: "bg-blue-500" },
                        { sector: "Decentralized Systems", growth: "+15%", color: "bg-purple-500" },
                        { sector: "Global Freedom", growth: "+12%", color: "bg-emerald-500" },
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
                    <CardTitle className="text-white">Freedom Network Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">$2.4T</div>
                        <div className="text-gray-300">Global Freedom Network Value</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-400">156</div>
                          <div className="text-gray-300 text-sm">New Freedom Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-purple-400">$15.4M</div>
                          <div className="text-gray-300 text-sm">Avg Project Value</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community" className="mt-8" role="tabpanel">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Bitcoin Freedom Circle",
                    members: 1247,
                    description: "Connect with Bitcoin advocates worldwide",
                    activity: "Very Active",
                  },
                  {
                    title: "Freedom Entrepreneurs",
                    members: 892,
                    description: "Building the future of decentralized technology",
                    activity: "Active",
                  },
                  {
                    title: "Global Freedom Alliance",
                    members: 634,
                    description: "Uniting freedom advocates globally",
                    activity: "Growing",
                  },
                ].map((community, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">{community.title}</CardTitle>
                      <CardDescription className="text-gray-300">{community.members} freedom advocates</CardDescription>
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
                          Join Movement
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  )
}
