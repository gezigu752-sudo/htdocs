import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">平面设计师</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">你好，我是</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                谷冉
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              以创意为刃，以视觉为光，在平面与空间中探索设计的无限可能。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    查看项目 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
                >
                  联系我
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="关于我" subtitle="我的背景和成长历程" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/profile.png"
                  alt="个人照片"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">可接受新工作</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  我是一名充满热情的视觉传达设计师，拥有品牌、平面与数字视觉创作经验，擅长用图形与色彩传递信息，熟悉从创意到落地的全流程设计方法。
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  我的设计始于扎实的美术与设计思维基础，参与过多个商业与公益项目，打造兼具美学质感与传播力的作品。
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  不做设计时，我会探索先锋设计趋势、研究字体与版式表达，从艺术与生活中汲取创作灵感。
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">姓名</div>
                    <div className="font-medium">谷冉</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">邮箱</div>
                    <div className="font-medium break-all">gezigu752@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">所在地</div>
                    <div className="font-medium">安徽</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">状态</div>
                    <div className="font-medium text-green-500">开放工作机会</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/resume.pdf" download="GuRan-Resume.pdf">
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">下载简历</Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="我的技能" subtitle="我掌握的技术栈" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Photoshop" level={90} />
            <SkillBadge name="Illustrator" level={85} />
            <SkillBadge name="After Effects" level={95} />
            <SkillBadge name="Cinema 4D" level={90} />
            <SkillBadge name="字体与标志设计" level={80} />
            <SkillBadge name="包装设计" level={80} />
            <SkillBadge name="UI/UX 视觉设计" level={90} />
            <SkillBadge name="Blender" level={75} />
            <SkillBadge name="动态视觉设计" level={70} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="精选项目" subtitle="我近期的一些作品" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="非遗纸笺UI设计"
              description="基于墨刀状态切换实现拟物化折叠与染色交互，构建宣纸纹理与朱黛配色的国风UI体系，并通过可视化步骤导航降低传统工艺认知门槛。"
              tags={["墨刀 MockingBot", "UI/UX 设计", "交互动效", "组件化设计"]}
              image="/1.png"
              demoUrl="/ui-design/index.html"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="平面海报--简约"
              description="简约风格的平面海报设计"
              tags={["平面海报", "简约风格", "商业海报"]}
              image="/project-dark.png"
              demoUrl="/poster"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="平面海报--酸性"
              description="酸性风格的平面海报设计"
              tags={["平面海报", "酸性风格", "商业海报"]}
              image="/project-dark.png"
              demoUrl="/poster-acid"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="动态图形设计"
              description="动态视觉与运动图形设计"
              tags={["动态图形", "Motion Design", "视觉设计"]}
              image="/project-dark.png"
              demoUrl="/motion"
              repoUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="工作经历" subtitle="我的职业发展历程" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="联系我" subtitle="期待与您合作" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">邮箱</div>
                    <div className="font-medium">gezigu752@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">电话</div>
                    <div className="font-medium">17354930109</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">当前状态</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>可接受自由职业和全职工作机会</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">谷</span>
              <span className="text-white">冉</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} 谷冉. 保留所有权利。
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
