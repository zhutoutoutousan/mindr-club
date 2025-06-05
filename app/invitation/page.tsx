"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MessageSquare, Lightbulb, ArrowUpRight, ArrowDownRight, FileDown } from "lucide-react"

export default function InvitationPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-2 sm:p-4 overflow-hidden">
      <div className="h-full max-w-7xl mx-auto flex flex-col">
        {/* Header - Smaller */}
        <div className="text-center mb-2 sm:mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">mindr.club</h1>
          <p className="text-base sm:text-lg text-pink-200">线下聚会邀请柬</p>
        </div>

        {/* Main Content - Horizontal Layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 min-h-0">
          {/* Left Column */}
          <div className="space-y-2 sm:space-y-4 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
            {/* Location Card */}
            <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                  <h2 className="text-lg sm:text-xl font-bold text-white">梵高艺术咖啡馆</h2>
                </div>
                <p className="text-pink-200 text-xs sm:text-sm">Van Gogh SENSES</p>
              </CardContent>
            </Card>

            {/* Ice Breaker */}
            <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                  <h3 className="text-base sm:text-lg font-bold text-white">破冰游戏</h3>
                </div>
                <p className="text-pink-200 text-xs sm:text-sm mb-1 sm:mb-2">调皮捣蛋版自我介绍</p>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                  <li>• 每人发十枚硬币</li>
                  <li>• 桌子把大伙儿都包起来</li>
                  <li>• 规则讲解</li>
                </ul>
              </CardContent>
            </Card>

            {/* Demo Hour */}
            <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                  <h3 className="text-base sm:text-lg font-bold text-white">Demo Hour</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-pink-200 text-xs sm:text-sm mb-0.5 sm:mb-1">1. Dealership Application</p>
                    <p className="text-gray-300 text-xs">通过assembly.ai生成销售技巧分析，措辞分析及coaching内容</p>
                    <a href="https://dealerpulse.ai/" className="text-blue-300 text-xs hover:underline">dealerpulse.ai</a>
                  </div>
                  <div>
                    <p className="text-pink-200 text-xs sm:text-sm mb-0.5 sm:mb-1">2. 月照我渠</p>
                    <p className="text-gray-300 text-xs">一体化软件培训学习平台</p>
                    <ul className="text-gray-300 text-xs list-disc list-inside">
                      <li>求职刷题</li>
                      <li>求职追踪</li>
                      <li>程序员英语学习</li>
                      <li>氛围编程课程</li>
                      <li>求职模拟面试</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coffee Time */}
            <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                  <h3 className="text-base sm:text-lg font-bold text-white">Coffee Time</h3>
                </div>
                <p className="text-pink-200 text-xs sm:text-sm">茶歇时间</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-2 sm:space-y-4 overflow-y-auto pl-1 sm:pl-2 custom-scrollbar">
            {/* Industry Insight */}
            <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                  <h3 className="text-base sm:text-lg font-bold text-white">行业洞察</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-pink-200 text-xs sm:text-sm mb-0.5 sm:mb-1">Charles</p>
                    <p className="text-gray-300 text-xs">AI生成小说创业经历与市场机遇</p>
                  </div>
                  <div>
                    <p className="text-pink-200 text-xs sm:text-sm mb-0.5 sm:mb-1">月哥</p>
                    <p className="text-gray-300 text-xs">软件开发培训市场实战洞察与创业经历</p>
                  </div>
                  <div>
                    <p className="text-pink-200 text-xs sm:text-sm mb-0.5 sm:mb-1">Rosie</p>
                    <p className="text-gray-300 text-xs">Dealership AI创业前景与机会</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Debate */}
            <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                  <h3 className="text-base sm:text-lg font-bold text-white">创业灵感辩论会</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {/* Project 1 */}
                  <div className="bg-white/5 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <p className="text-pink-200 text-xs sm:text-sm font-bold">1. AI匹配餐厅解决方案</p>
                      <Badge className="bg-green-500/20 text-green-400 text-xs">正方</Badge>
                    </div>
                    <p className="text-gray-300 text-xs mb-1 sm:mb-2">随机匹配食客，AI智能匹配，实时推送</p>
                    <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                      <ArrowDownRight className="w-3 h-3 text-red-400" />
                      <p className="text-red-400 text-xs">反方质疑：如何保证匹配质量？</p>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <ArrowUpRight className="w-3 h-3 text-green-400" />
                      <p className="text-green-400 text-xs">正方回应：AI算法优化，用户反馈机制</p>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-white/5 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <p className="text-pink-200 text-xs sm:text-sm font-bold">2. 搞笑干货版霸道总裁短剧</p>
                      <Badge className="bg-green-500/20 text-green-400 text-xs">正方</Badge>
                    </div>
                    <p className="text-gray-300 text-xs mb-1 sm:mb-2">周星驰式无厘头喜剧，中英字幕，商业干货</p>
                    <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                      <ArrowDownRight className="w-3 h-3 text-red-400" />
                      <p className="text-red-400 text-xs">反方质疑：如何平衡娱乐性和教育性？</p>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <ArrowUpRight className="w-3 h-3 text-green-400" />
                      <p className="text-green-400 text-xs">正方回应：分段式内容设计，互动式学习</p>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="bg-white/5 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <p className="text-pink-200 text-xs sm:text-sm font-bold">3. 游戏化交互式在线教育平台</p>
                      <Badge className="bg-green-500/20 text-green-400 text-xs">正方</Badge>
                    </div>
                    <p className="text-gray-300 text-xs mb-1 sm:mb-2">多人在线PVE/PVP对战，无国界教育</p>
                    <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                      <ArrowDownRight className="w-3 h-3 text-red-400" />
                      <p className="text-red-400 text-xs">反方质疑：如何保证教育质量？</p>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <ArrowUpRight className="w-3 h-3 text-green-400" />
                      <p className="text-green-400 text-xs">正方回应：专业教师审核，AI辅助评估</p>
                    </div>
                  </div>

                  {/* Coin Investment Mechanism */}
                  <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-2 sm:p-3 mt-2 sm:mt-3">
                    <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                      <h4 className="text-white text-xs sm:text-sm font-bold">硬币投资机制</h4>
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <p className="text-gray-300 text-xs">• 每次辩论结束后，将硬币投入心仪项目</p>
                      <p className="text-gray-300 text-xs">• 项目启动后市值翻n倍</p>
                      <p className="text-yellow-400 text-xs font-bold">• mindr.club返还2n倍硬币！</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Row - Full Width */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
              {/* Lunch */}
              <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                    <h3 className="text-base sm:text-lg font-bold text-white">反差感午餐</h3>
                  </div>
                  <p className="text-pink-200 text-xs sm:text-sm">惊喜满满！</p>
                </CardContent>
              </Card>

              {/* Hackathon */}
              <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                    <h3 className="text-base sm:text-lg font-bold text-white">Vibe Hackathon</h3>
                  </div>
                  <div className="text-gray-300 text-xs space-y-0.5 sm:space-y-1">
                    <p>• 硬币最多的项目作为主题</p>
                    <p>• AI推荐主题</p>
                    <p>• 技术创始人拼团hackathon</p>
                  </div>
                </CardContent>
              </Card>

              {/* Happy Hour */}
              <Card className="bg-white/10 border-pink-200/20 backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                    <h3 className="text-base sm:text-lg font-bold text-white">Happy Hour</h3>
                  </div>
                  <p className="text-pink-200 text-xs sm:text-sm">总结、践行、畅想未来</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer - Smaller */}
        <div className="text-center mt-2 sm:mt-4">
          <Badge className="bg-pink-500/20 text-pink-200 border-pink-500/30 mb-1 sm:mb-2">
            期待与你相见！
          </Badge>
          <p className="text-gray-300 text-xs">
            打印此邀请柬，现场出示即可入场
          </p>
        </div>

        {/* Print styles */}
        <style jsx global>{`
          @media print {
            body {
              background: white;
            }
            .min-h-screen {
              background: white !important;
              padding: 0;
            }
            .bg-white\\/10 {
              background: white !important;
              border: 1px solid #e5e7eb !important;
            }
            .text-white {
              color: black !important;
            }
            .text-pink-200 {
              color: #4b5563 !important;
            }
            .text-gray-300 {
              color: #4b5563 !important;
            }
            .text-pink-300 {
              color: #4b5563 !important;
            }
            .text-red-400 {
              color: #dc2626 !important;
            }
            .text-green-400 {
              color: #16a34a !important;
            }
            .text-yellow-400 {
              color: #ca8a04 !important;
            }
            .bg-gradient-to-r {
              background: #f3f4f6 !important;
            }
            .backdrop-blur-sm {
              backdrop-filter: none !important;
            }
            button {
              display: none !important;
            }
            @page {
              size: landscape;
            }
          }

          /* Custom Scrollbar Styles */
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            transition: all 0.2s ease;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          /* Firefox Scrollbar */
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.1);
          }

          /* Mobile Optimizations */
          @media (max-width: 640px) {
            .custom-scrollbar::-webkit-scrollbar {
              width: 2px;
              height: 2px;
            }
          }
        `}</style>
      </div>
    </div>
  )
} 