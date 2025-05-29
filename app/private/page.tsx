"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Lock,
  DollarSign,
  Users,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CreditCard,
  FileText,
  Eye,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function PrivateRealmPage() {
  const [selectedModule, setSelectedModule] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Private Realm</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge className="bg-pink-500/20 text-pink-200 border-pink-500/30">Secure Environment</Badge>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white/10 border-white/20">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-pink-500">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="hr" className="data-[state=active]:bg-pink-500">
              HR & Payroll
            </TabsTrigger>
            <TabsTrigger value="competition" className="data-[state=active]:bg-pink-500">
              Competition
            </TabsTrigger>
            <TabsTrigger value="partnerships" className="data-[state=active]:bg-pink-500">
              Partnerships
            </TabsTrigger>
            <TabsTrigger value="investors" className="data-[state=active]:bg-pink-500">
              Investors
            </TabsTrigger>
            <TabsTrigger value="operations" className="data-[state=active]:bg-pink-500">
              Operations
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Monthly Burn Rate",
                  value: "$45,000",
                  change: "-5%",
                  icon: DollarSign,
                  color: "text-green-400",
                },
                {
                  title: "Team Size",
                  value: "12",
                  change: "+2",
                  icon: Users,
                  color: "text-blue-400",
                },
                {
                  title: "Revenue Growth",
                  value: "23%",
                  change: "+8%",
                  icon: TrendingUp,
                  color: "text-purple-400",
                },
                {
                  title: "Runway",
                  value: "18 months",
                  change: "+2 months",
                  icon: Calendar,
                  color: "text-pink-400",
                },
              ].map((metric, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">{metric.title}</p>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                        <p className={`text-sm ${metric.color}`}>{metric.change}</p>
                      </div>
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Security Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "High",
                        message: "Unusual access pattern detected",
                        time: "2 hours ago",
                        color: "text-red-400",
                      },
                      {
                        type: "Medium",
                        message: "New device login from Sarah",
                        time: "5 hours ago",
                        color: "text-yellow-400",
                      },
                      {
                        type: "Low",
                        message: "Weekly security scan completed",
                        time: "1 day ago",
                        color: "text-green-400",
                      },
                    ].map((alert, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                        <AlertTriangle className={`w-5 h-5 ${alert.color}`} />
                        <div className="flex-1">
                          <p className="text-white text-sm">{alert.message}</p>
                          <p className="text-gray-400 text-xs">{alert.time}</p>
                        </div>
                        <Badge variant="outline" className={`border-current ${alert.color}`}>
                          {alert.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Process Payroll", icon: CreditCard },
                      { title: "Review Contracts", icon: FileText },
                      { title: "Competitor Analysis", icon: Eye },
                      { title: "Financial Report", icon: BarChart3 },
                    ].map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-20 flex flex-col items-center space-y-2 border-white/20 hover:bg-white/10"
                      >
                        <action.icon className="w-6 h-6 text-pink-400" />
                        <span className="text-white text-sm">{action.title}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* HR & Payroll Tab */}
          <TabsContent value="hr" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Team Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Sarah Johnson",
                          role: "CTO",
                          salary: "$150,000",
                          status: "Active",
                          equity: "5%",
                        },
                        {
                          name: "Mike Chen",
                          role: "Lead Developer",
                          salary: "$120,000",
                          status: "Active",
                          equity: "2%",
                        },
                        {
                          name: "Lisa Park",
                          role: "Product Manager",
                          salary: "$110,000",
                          status: "Active",
                          equity: "1.5%",
                        },
                      ].map((employee, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" />
                              <AvatarFallback>
                                {employee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-white font-medium">{employee.name}</p>
                              <p className="text-gray-300 text-sm">{employee.role}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white">{employee.salary}</p>
                            <p className="text-gray-300 text-sm">{employee.equity} equity</p>
                          </div>
                          <Badge className="bg-green-500/20 text-green-400">{employee.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Payroll Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white font-medium">December Payroll</p>
                          <p className="text-gray-300 text-sm">Due: December 31, 2024</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white">$38,500</p>
                          <Badge className="bg-yellow-500/20 text-yellow-400">Pending</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white font-medium">November Payroll</p>
                          <p className="text-gray-300 text-sm">Processed: November 30, 2024</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white">$38,500</p>
                          <Badge className="bg-green-500/20 text-green-400">Completed</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">HR Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Employee Satisfaction</span>
                          <span className="text-white">87%</span>
                        </div>
                        <Progress value={87} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Retention Rate</span>
                          <span className="text-white">94%</span>
                        </div>
                        <Progress value={94} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Performance Score</span>
                          <span className="text-white">91%</span>
                        </div>
                        <Progress value={91} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Vendor Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { vendor: "Gusto", service: "Payroll", cost: "$89/mo" },
                        { vendor: "BambooHR", service: "HR Management", cost: "$150/mo" },
                        { vendor: "Slack", service: "Communication", cost: "$80/mo" },
                      ].map((vendor, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="text-white text-sm">{vendor.vendor}</p>
                            <p className="text-gray-400 text-xs">{vendor.service}</p>
                          </div>
                          <span className="text-pink-400">{vendor.cost}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Competition Tab */}
          <TabsContent value="competition" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Competitor Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "TechRival Inc.",
                        funding: "$50M Series B",
                        threat: "High",
                        change: "+15% market share",
                      },
                      {
                        name: "InnovateCorp",
                        funding: "$25M Series A",
                        threat: "Medium",
                        change: "New product launch",
                      },
                      {
                        name: "StartupX",
                        funding: "$10M Seed",
                        threat: "Low",
                        change: "Team expansion",
                      },
                    ].map((competitor, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">{competitor.name}</h4>
                          <Badge
                            variant="outline"
                            className={`${
                              competitor.threat === "High"
                                ? "border-red-400 text-red-400"
                                : competitor.threat === "Medium"
                                  ? "border-yellow-400 text-yellow-400"
                                  : "border-green-400 text-green-400"
                            }`}
                          >
                            {competitor.threat} Threat
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-1">{competitor.funding}</p>
                        <p className="text-gray-400 text-xs">{competitor.change}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Market Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">3rd</div>
                      <div className="text-gray-300">Market Position</div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Market Share</span>
                          <span className="text-white">12%</span>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Brand Recognition</span>
                          <span className="text-white">34%</span>
                        </div>
                        <Progress value={34} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Customer Satisfaction</span>
                          <span className="text-white">89%</span>
                        </div>
                        <Progress value={89} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Partnerships Tab */}
          <TabsContent value="partnerships" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  company: "Microsoft Azure",
                  type: "Technology Partner",
                  status: "Active",
                  value: "$50K credits",
                  renewal: "June 2025",
                },
                {
                  company: "Salesforce",
                  type: "Integration Partner",
                  status: "Negotiating",
                  value: "Revenue share",
                  renewal: "TBD",
                },
                {
                  company: "AWS",
                  type: "Cloud Provider",
                  status: "Active",
                  value: "$25K credits",
                  renewal: "March 2025",
                },
              ].map((partnership, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">{partnership.company}</CardTitle>
                    <CardDescription className="text-gray-300">{partnership.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Status</span>
                        <Badge
                          className={
                            partnership.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }
                        >
                          {partnership.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Value</span>
                        <span className="text-white">{partnership.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Renewal</span>
                        <span className="text-white">{partnership.renewal}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Investors Tab */}
          <TabsContent value="investors" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Investor Relations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Sequoia Capital",
                        investment: "$5M",
                        round: "Series A",
                        contact: "John Smith",
                        lastUpdate: "2 days ago",
                      },
                      {
                        name: "Andreessen Horowitz",
                        investment: "$2M",
                        round: "Seed",
                        contact: "Sarah Wilson",
                        lastUpdate: "1 week ago",
                      },
                      {
                        name: "Y Combinator",
                        investment: "$500K",
                        round: "Pre-Seed",
                        contact: "Mike Johnson",
                        lastUpdate: "3 days ago",
                      },
                    ].map((investor, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">{investor.name}</h4>
                          <Badge variant="outline" className="border-purple-400 text-purple-400">
                            {investor.round}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Investment</p>
                            <p className="text-white">{investor.investment}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Contact</p>
                            <p className="text-white">{investor.contact}</p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs mt-2">Last update: {investor.lastUpdate}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Funding Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-white">Series B</div>
                      <div className="text-gray-300">Target: $15M</div>
                      <Progress value={65} className="mt-2" />
                      <div className="text-sm text-gray-400 mt-1">65% complete</div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { stage: "Pitch Deck", status: "Complete", progress: 100 },
                        { stage: "Due Diligence", status: "In Progress", progress: 70 },
                        { stage: "Term Sheet", status: "Pending", progress: 30 },
                        { stage: "Legal Review", status: "Not Started", progress: 0 },
                      ].map((stage, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-white text-sm">{stage.stage}</span>
                            <span className="text-gray-400 text-sm">{stage.status}</span>
                          </div>
                          <Progress value={stage.progress} className="h-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Operations Tab */}
          <TabsContent value="operations" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Operational Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Office Rent", amount: "$8,500", percentage: 19 },
                      { category: "Software Licenses", amount: "$3,200", percentage: 7 },
                      { category: "Marketing", amount: "$12,000", percentage: 27 },
                      { category: "Legal & Compliance", amount: "$4,500", percentage: 10 },
                      { category: "Other", amount: "$16,800", percentage: 37 },
                    ].map((expense, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white">{expense.category}</span>
                          <span className="text-white">{expense.amount}</span>
                        </div>
                        <Progress value={expense.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Board Meeting",
                        date: "Dec 20, 2024",
                        type: "Internal",
                        priority: "High",
                      },
                      {
                        title: "Investor Pitch",
                        date: "Dec 25, 2024",
                        type: "External",
                        priority: "High",
                      },
                      {
                        title: "Team Retreat",
                        date: "Jan 5, 2025",
                        type: "Internal",
                        priority: "Medium",
                      },
                      {
                        title: "Product Launch",
                        date: "Jan 15, 2025",
                        type: "Public",
                        priority: "High",
                      },
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{event.title}</p>
                          <p className="text-gray-300 text-sm">{event.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant="outline"
                            className={`mb-1 ${
                              event.priority === "High"
                                ? "border-red-400 text-red-400"
                                : "border-yellow-400 text-yellow-400"
                            }`}
                          >
                            {event.priority}
                          </Badge>
                          <p className="text-gray-400 text-xs">{event.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
