"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Lock,
  Users,
  TrendingUp,
  Calendar,
  AlertTriangle,
  Briefcase,
  FileText,
  Eye,
  BarChart3,
  Shield,
  Key,
  DollarSign,
  LineChart,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Settings,
  MessageSquare,
  PieChart,
  Target,
  Zap,
  Bell,
  ChevronRight,
  Brain,
  Lightbulb,
  Rocket,
  Network,
  Database,
  Code,
  TestTube,
  Flask,
  Microscope,
  Search,
  Layers,
  GitBranch,
  GitPullRequest,
  GitCommit,
  GitMerge,
  Terminal,
  Server,
  Cloud,
  Cpu,
  Memory,
  HardDrive,
  Activity,
  Pulse,
  Heart,
  ShieldCheck,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Timer,
  CalendarDays,
  BarChart2,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  Volume1,
  Mute,
  Unmute,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageOff,
  File,
  FileText as FileTextIcon,
  FilePlus,
  FileMinus,
  FileCheck,
  FileX,
  FileSearch,
  FileCode,
  FileJson,
  FileType,
  FileArchive,
  FileAudio,
  FileVideo,
  FileImage,
  FileSpreadsheet,
  FileDatabase,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCog,
  FileSettings,
  FileQuestion,
  FileWarning,
  FileAlert,
  FileInfo,
  FileHelp,
  FileHeart,
  FileStar,
  FileUp,
  FileDown,
  FileLeft,
  FileRight,
  FileInput,
  FileOutput,
  FileUpload,
  FileDownload,
  FileShare,
  FileLock,
  FileUnlock,
  FileKey,
  FileKeyhole,
  FileCheckCircle,
  FileXCircle,
  FileAlertCircle,
  FileInfoCircle,
  FileHelpCircle,
  FileHeartCircle,
  FileStarCircle,
  FileUpCircle,
  FileDownCircle,
  FileLeftCircle,
  FileRightCircle,
  FileInputCircle,
  FileOutputCircle,
  FileUploadCircle,
  FileDownloadCircle,
  FileShareCircle,
  FileLockCircle,
  FileUnlockCircle,
  FileKeyCircle,
  FileKeyholeCircle,
  FileCheckSquare,
  FileXSquare,
  FileAlertSquare,
  FileInfoSquare,
  FileHelpSquare,
  FileHeartSquare,
  FileStarSquare,
  FileUpSquare,
  FileDownSquare,
  FileLeftSquare,
  FileRightSquare,
  FileInputSquare,
  FileOutputSquare,
  FileUploadSquare,
  FileDownloadSquare,
  FileShareSquare,
  FileLockSquare,
  FileUnlockSquare,
  FileKeySquare,
  FileKeyholeSquare,
  Search as SearchIcon,
  Rocket as RocketIcon,
} from "lucide-react"
import Link from "next/link"
import React from "react"

export default function PrivateRealmPage() {
  const [activeModule, setActiveModule] = useState("startup-agent")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [selectedPhase, setSelectedPhase] = useState("discovery")

  const modules = [
    { 
      id: "startup-agent", 
      icon: Brain, 
      label: "Startup Agent", 
      color: "from-blue-500 to-cyan-500",
      description: "AI-powered venture building system"
    },
    { 
      id: "investor-relations", 
      icon: Network, 
      label: "Investor Relations", 
      color: "from-purple-500 to-pink-500",
      description: "Investor relationship management"
    },
    { 
      id: "trading-portfolio", 
      icon: LineChart, 
      label: "Trading Portfolio", 
      color: "from-green-500 to-emerald-500",
      description: "Strategy portfolio management"
    },
    { 
      id: "knowledge-base", 
      icon: Database, 
      label: "Knowledge Base", 
      color: "from-orange-500 to-red-500",
      description: "Industry insights and research"
    },
    { 
      id: "settings", 
      icon: Settings, 
      label: "Settings", 
      color: "from-gray-500 to-slate-500",
      description: "System configuration"
    },
  ]

  const startupPhases = [
    {
      id: "discovery",
      name: "Discovery",
      icon: () => <SearchIcon className="w-3 h-3" />,
      color: "from-blue-500 to-cyan-500",
      status: "active",
      progress: 75,
    },
    {
      id: "validation",
      name: "Validation",
      icon: () => <TestTube className="w-3 h-3" />,
      color: "from-purple-500 to-pink-500",
      status: "pending",
      progress: 0,
    },
    {
      id: "prototype",
      name: "Prototype",
      icon: () => <TestTube className="w-3 h-3" />,
      color: "from-green-500 to-emerald-500",
      status: "pending",
      progress: 0,
    },
    {
      id: "launch",
      name: "Launch",
      icon: () => <RocketIcon className="w-3 h-3" />,
      color: "from-orange-500 to-red-500",
      status: "pending",
      progress: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Startup Agent</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge className="bg-pink-500/20 text-pink-200 border-pink-500/30">AI-Powered</Badge>
              <Button className="text-white hover:bg-white/10">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Circular Navigation */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <div className="flex justify-center items-center space-x-8">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`relative group transition-all duration-300 ${
                  activeModule === module.id ? "scale-110" : "scale-100"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center transform transition-all duration-300 ${
                    activeModule === module.id ? "ring-4 ring-white/20" : ""
                  }`}
                >
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {module.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Quick Stats */}
          <div className="col-span-3 space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                    <span className="text-gray-300">AI Processing</span>
                    <span className="text-green-400">Active</span>
                      </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Knowledge Base</span>
                    <span className="text-green-400">Synced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">API Status</span>
                    <span className="text-green-400">Online</span>
                  </div>
                    </div>
                  </CardContent>
                </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                <CardTitle className="text-white">Active Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="space-y-3">
                    {[
                    { message: "New market opportunity detected", time: "2m ago", color: "text-green-400" },
                    { message: "Investor meeting scheduled", time: "15m ago", color: "text-yellow-400" },
                    { message: "Trading strategy update", time: "1h ago", color: "text-blue-400" },
                    ].map((alert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${alert.color}`} />
                        <div className="flex-1">
                          <p className="text-white text-sm">{alert.message}</p>
                          <p className="text-gray-400 text-xs">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
          </div>

          {/* Main Content - Dynamic Based on Active Module */}
          <div className="col-span-6">
            {activeModule === "startup-agent" && (
              <div className="space-y-6">
                {/* Phase Navigation */}
                <div className="flex justify-between items-center mb-8">
                  {startupPhases.map((phase) => (
                    <button
                      key={phase.id}
                      onClick={() => setSelectedPhase(phase.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedPhase === phase.id
                          ? "bg-white/20"
                          : "hover:bg-white/10"
                      }`}
                      >
                      <div className={`w-5 h-5 bg-gradient-to-r ${phase.color} text-white rounded-full p-1 flex items-center justify-center`}>
                        {phase.icon()}
                      </div>
                      <span className="text-white">{phase.name}</span>
                      {phase.status === "active" && (
                        <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                      )}
                    </button>
                    ))}
                  </div>

                {/* Discovery Phase Content */}
                {selectedPhase === "discovery" && (
                  <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                        <CardTitle className="text-white">Market Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                              title: "Industry Trends",
                              insights: [
                                "AI adoption increasing by 35% YoY",
                                "Cloud migration accelerating",
                                "Cybersecurity spending up 25%",
                              ],
                              confidence: 92,
                        },
                        {
                              title: "Competitive Landscape",
                              insights: [
                                "3 major players dominating market",
                                "2 emerging startups gaining traction",
                                "New regulations affecting market",
                              ],
                              confidence: 88,
                        },
                        {
                              title: "Customer Pain Points",
                              insights: [
                                "Integration complexity",
                                "Cost management",
                                "Security concerns",
                              ],
                              confidence: 95,
                        },
                          ].map((analysis, index) => (
                            <div
                              key={index}
                              className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                                expandedCard === analysis.title
                                  ? "bg-white/20"
                                  : "bg-white/5 hover:bg-white/10"
                              }`}
                              onClick={() => setExpandedCard(expandedCard === analysis.title ? null : analysis.title)}
                            >
                              <div className="flex items-center justify-between">
                            <div>
                                  <h3 className="text-white font-medium">{analysis.title}</h3>
                                  <p className="text-gray-300 text-sm">
                                    Confidence: {analysis.confidence}%
                                  </p>
                            </div>
                                <Badge className="bg-blue-500/20 text-blue-400">
                                  {analysis.insights.length} Insights
                                </Badge>
                          </div>
                              {expandedCard === analysis.title && (
                                <div className="mt-4 space-y-2">
                                  {analysis.insights.map((insight, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                      <p className="text-gray-300">{insight}</p>
                          </div>
                                  ))}
                                </div>
                              )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                        <CardTitle className="text-white">Technology Mapping</CardTitle>
                  </CardHeader>
                  <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              tech: "AI/ML",
                              maturity: "High",
                              adoption: "Growing",
                              impact: "Transformative",
                            },
                            {
                              tech: "Blockchain",
                              maturity: "Medium",
                              adoption: "Early",
                              impact: "High",
                            },
                            {
                              tech: "Cloud Native",
                              maturity: "High",
                              adoption: "Widespread",
                              impact: "High",
                            },
                            {
                              tech: "IoT",
                              maturity: "Medium",
                              adoption: "Growing",
                              impact: "Medium",
                            },
                          ].map((tech, index) => (
                            <div key={index} className="p-4 bg-white/5 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-white font-medium">{tech.tech}</h4>
                                <Badge className="bg-purple-500/20 text-purple-400">
                                  {tech.maturity}
                                </Badge>
                        </div>
                              <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-300">Adoption</span>
                                  <span className="text-blue-400">{tech.adoption}</span>
                        </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-300">Impact</span>
                                  <span className="text-green-400">{tech.impact}</span>
                      </div>
                        </div>
                        </div>
                          ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
                )}

                {/* Validation Phase Content */}
                {selectedPhase === "validation" && (
              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                        <CardTitle className="text-white">Expert Validation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                          {[
                            {
                              expert: "Dr. Sarah Chen",
                              role: "Industry Expert",
                              feedback: "Strong market fit, needs technical validation",
                              status: "Pending",
                            },
                            {
                              expert: "Mark Johnson",
                              role: "Technical Advisor",
                              feedback: "Architecture looks solid, security concerns",
                              status: "In Review",
                            },
                            {
                              expert: "Lisa Wong",
                              role: "Market Analyst",
                              feedback: "Clear value proposition, competitive advantage",
                              status: "Approved",
                            },
                          ].map((validation, index) => (
                            <div key={index} className="p-4 bg-white/5 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Avatar>
                                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500">
                                      {validation.expert[0]}
                                    </AvatarFallback>
                                  </Avatar>
                      <div>
                                    <p className="text-white font-medium">{validation.expert}</p>
                                    <p className="text-gray-300 text-sm">{validation.role}</p>
                        </div>
                      </div>
                                <Badge
                                  className={`${
                                    validation.status === "Approved"
                                      ? "bg-green-500/20 text-green-400"
                                      : validation.status === "In Review"
                                      ? "bg-yellow-500/20 text-yellow-400"
                                      : "bg-blue-500/20 text-blue-400"
                                  }`}
                                >
                                  {validation.status}
                                </Badge>
                        </div>
                              <p className="text-gray-300 text-sm mt-2">{validation.feedback}</p>
                      </div>
                          ))}
                    </div>
                  </CardContent>
                </Card>
                  </div>
                )}

                {/* Prototype Phase Content */}
                {selectedPhase === "prototype" && (
                  <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                        <CardTitle className="text-white">Prototype Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                        <div className="space-y-4">
                      {[
                            {
                              component: "User Interface",
                              progress: 65,
                              status: "In Progress",
                              tasks: ["Design System", "Component Library", "Responsive Layout"],
                            },
                            {
                              component: "Backend API",
                              progress: 40,
                              status: "In Progress",
                              tasks: ["Authentication", "Data Models", "API Endpoints"],
                            },
                            {
                              component: "AI Integration",
                              progress: 25,
                              status: "Planning",
                              tasks: ["Model Selection", "Training Pipeline", "Inference API"],
                            },
                          ].map((prototype, index) => (
                            <div key={index} className="p-4 bg-white/5 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-white font-medium">{prototype.component}</h4>
                                <Badge className="bg-blue-500/20 text-blue-400">
                                  {prototype.status}
                                </Badge>
                          </div>
                              <Progress value={prototype.progress} className="h-2 mb-3" />
                              <div className="space-y-1">
                                {prototype.tasks.map((task, i) => (
                                  <div key={i} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                    <p className="text-gray-300 text-sm">{task}</p>
                                  </div>
                                ))}
                              </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
                )}

                {/* Launch Phase Content */}
                {selectedPhase === "launch" && (
                  <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                        <CardTitle className="text-white">Launch Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                              task: "Marketing Strategy",
                              status: "Planning",
                              dependencies: ["Brand Guidelines", "Content Calendar"],
                      },
                      {
                              task: "Sales Pipeline",
                              status: "Setup",
                              dependencies: ["CRM Integration", "Lead Scoring"],
                      },
                      {
                              task: "Infrastructure",
                              status: "In Progress",
                              dependencies: ["Cloud Setup", "Monitoring", "Backup"],
                      },
                          ].map((launch, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-white font-medium">{launch.task}</h4>
                                  <p className="text-gray-300 text-sm">{launch.status}</p>
                                </div>
                                <Badge className="bg-orange-500/20 text-orange-400">
                                  {launch.dependencies.length} Dependencies
                          </Badge>
                        </div>
                              <div className="mt-2 space-y-1">
                                {launch.dependencies.map((dep, i) => (
                                  <div key={i} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                                    <p className="text-gray-300 text-sm">{dep}</p>
                                  </div>
                                ))}
                              </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
                  </div>
                )}
              </div>
            )}

            {activeModule === "investor-relations" && (
              <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-white">Investor Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          investor: "Tech Ventures Capital",
                          status: "Active",
                          lastContact: "2 days ago",
                          nextMeeting: "Next week",
                          interests: ["AI", "Cloud", "Security"],
                        },
                        {
                          investor: "Growth Partners",
                          status: "In Discussion",
                          lastContact: "1 week ago",
                          nextMeeting: "Scheduled",
                          interests: ["SaaS", "Enterprise", "B2B"],
                        },
                        {
                          investor: "Innovation Fund",
                          status: "New Lead",
                          lastContact: "N/A",
                          nextMeeting: "To be scheduled",
                          interests: ["Deep Tech", "Research", "IP"],
                        },
                      ].map((investor, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                            expandedCard === investor.investor
                              ? "bg-white/20"
                              : "bg-white/5 hover:bg-white/10"
                          }`}
                          onClick={() => setExpandedCard(expandedCard === investor.investor ? null : investor.investor)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500">
                                  {investor.investor[0]}
                                </AvatarFallback>
                              </Avatar>
                      <div>
                                <p className="text-white font-medium">{investor.investor}</p>
                                <p className="text-gray-300 text-sm">Last contact: {investor.lastContact}</p>
                        </div>
                      </div>
                            <Badge
                              className={`${
                                investor.status === "Active"
                                  ? "bg-green-500/20 text-green-400"
                                  : investor.status === "In Discussion"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {investor.status}
                            </Badge>
                          </div>
                          {expandedCard === investor.investor && (
                            <div className="mt-4 space-y-3">
                      <div>
                                <p className="text-gray-300 text-sm">Next Meeting</p>
                                <p className="text-white">{investor.nextMeeting}</p>
                        </div>
                      <div>
                                <p className="text-gray-300 text-sm">Areas of Interest</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {investor.interests.map((interest, i) => (
                                    <Badge key={i} className="bg-purple-500/20 text-purple-400">
                                      {interest}
                                    </Badge>
                                  ))}
                        </div>
                      </div>
                              <div className="flex space-x-2">
                                <Button className="bg-blue-500 hover:bg-blue-600">
                                  Schedule Meeting
                                </Button>
                                <Button className="border border-white/20 hover:bg-white/10">
                                  View History
                                </Button>
                    </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            )}

            {activeModule === "trading-portfolio" && (
              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Trading Strategies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
              {[
                {
                          name: "Momentum Pro X",
                          developer: "Trading Systems Lab",
                          return: "32%",
                          drawdown: "12%",
                          timeframe: "4H",
                          pairs: "EUR/USD, GBP/USD",
                  status: "Active",
                        },
                        {
                          name: "Forex Scalper Elite",
                          developer: "Alpha Trading",
                          return: "28%",
                          drawdown: "10%",
                          timeframe: "15M",
                          pairs: "Major Pairs",
                          status: "Active",
                        },
                        {
                          name: "Trend Master",
                          developer: "Quant Systems",
                          return: "35%",
                          drawdown: "14%",
                          timeframe: "1D",
                          pairs: "All Major Pairs",
                  status: "Active",
                },
                      ].map((strategy, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                            expandedCard === strategy.name
                              ? "bg-white/20"
                              : "bg-white/5 hover:bg-white/10"
                          }`}
                          onClick={() => setExpandedCard(expandedCard === strategy.name ? null : strategy.name)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-cyan-500">
                                  {strategy.name[0]}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-white font-medium">{strategy.name}</p>
                                <p className="text-gray-300 text-sm">by {strategy.developer}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <Badge className="bg-green-500/20 text-green-400">
                                Return: {strategy.return}
                              </Badge>
                              <Badge className="bg-red-500/20 text-red-400">
                                DD: {strategy.drawdown}
                        </Badge>
                      </div>
                      </div>
                          {expandedCard === strategy.name && (
                            <div className="mt-4 space-y-3">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-gray-300 text-sm">Timeframe</p>
                                  <p className="text-white">{strategy.timeframe}</p>
                      </div>
                                <div>
                                  <p className="text-gray-300 text-sm">Pairs</p>
                                  <p className="text-white">{strategy.pairs}</p>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button className="bg-blue-500 hover:bg-blue-600">
                                  View Details
                                </Button>
                                <Button className="border border-white/20 hover:bg-white/10">
                                  Contact Developer
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
            </div>
            )}

            {activeModule === "knowledge-base" && (
              <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-white">Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                          category: "Market Research",
                          documents: 24,
                          lastUpdate: "2 hours ago",
                          topics: ["Industry Trends", "Competitor Analysis", "Market Size"],
                        },
                        {
                          category: "Technical Documentation",
                          documents: 18,
                          lastUpdate: "1 day ago",
                          topics: ["Architecture", "APIs", "Security"],
                        },
                        {
                          category: "Business Strategy",
                          documents: 15,
                        lastUpdate: "3 days ago",
                          topics: ["Go-to-Market", "Pricing", "Partnerships"],
                      },
                      ].map((category, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                            expandedCard === category.category
                              ? "bg-white/20"
                              : "bg-white/5 hover:bg-white/10"
                          }`}
                          onClick={() => setExpandedCard(expandedCard === category.category ? null : category.category)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-white font-medium">{category.category}</h3>
                              <p className="text-gray-300 text-sm">
                                {category.documents} documents • Updated {category.lastUpdate}
                              </p>
                            </div>
                            <Badge className="bg-blue-500/20 text-blue-400">
                              {category.topics.length} Topics
                          </Badge>
                        </div>
                          {expandedCard === category.category && (
                            <div className="mt-4 space-y-3">
                              <div className="flex flex-wrap gap-2">
                                {category.topics.map((topic, i) => (
                                  <Badge key={i} className="bg-purple-500/20 text-purple-400">
                                    {topic}
                                  </Badge>
                                ))}
                          </div>
                              <div className="flex space-x-2">
                                <Button className="bg-blue-500 hover:bg-blue-600">
                                  Browse Documents
                                </Button>
                                <Button className="border border-white/20 hover:bg-white/10">
                                  Add Document
                                </Button>
                          </div>
                        </div>
                          )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </div>
            )}

            {activeModule === "settings" && (
              <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-white">System Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                      {[
                        { title: "Profile Settings", icon: Users },
                        { title: "Security", icon: Shield },
                        { title: "Notifications", icon: Bell },
                        { title: "API Keys", icon: Key },
                      ].map((setting, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10"
                        >
                          <div className="flex items-center space-x-3">
                            <setting.icon className="w-5 h-5 text-gray-400" />
                            <span className="text-white">{setting.title}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            )}
          </div>

          {/* Right Sidebar - Quick Actions */}
          <div className="col-span-3 space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {[
                    { icon: Brain, label: "AI Analysis" },
                    { icon: BarChart3, label: "Reports" },
                    { icon: Eye, label: "Monitor" },
                    { icon: Wallet, label: "Portfolio" },
                  ].map((action, index) => (
                    <Button
                      key={index}
                      className="h-20 flex flex-col items-center space-y-2 border border-white/20 hover:bg-white/10"
                    >
                      <action.icon className="w-6 h-6 text-pink-400" />
                      <span className="text-white text-sm">{action.label}</span>
                    </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                <CardTitle className="text-white">System Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                    { metric: "AI Processing", value: "98%", color: "text-green-400" },
                    { metric: "API Response", value: "45ms", color: "text-blue-400" },
                    { metric: "Storage Usage", value: "72%", color: "text-yellow-400" },
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-white">{metric.metric}</span>
                      <span className={metric.color}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </div>
  )
}

