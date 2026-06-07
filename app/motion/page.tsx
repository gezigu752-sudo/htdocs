"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"

const motionProjects = [
  {
    id: 1,
    title: "动态图形示例1",
    description: "动态视觉设计",
    video: "/动态图形设计/0eff219ea72109faec98f1ea3fcaef.mp4",
  },
  {
    id: 2,
    title: "动态图形示例2",
    description: "运动图形设计",
    video: "/动态图形设计/9b14239ca8d8f82e93d18a9b635c53.mp4",
  },
  {
    id: 3,
    title: "动态图形示例3",
    description: "视觉动效设计",
    video: "/动态图形设计/176 Pinterest.mp4",
  },
  {
    id: 4,
    title: "动态图形示例4",
    description: "动态视觉设计",
    video: "/动态图形设计/p2-13.mp4",
  },
  {
    id: 5,
    title: "动态图形示例5",
    description: "运动图形设计",
    video: "/动态图形设计/p3-15.mp4",
  },
  {
    id: 6,
    title: "动态图形示例6",
    description: "视觉动效设计",
    video: "/动态图形设计/p11-3.mp4",
  },
  {
    id: 7,
    title: "动态图形示例7",
    description: "动态视觉设计",
    video: "/动态图形设计/p12-4.mp4",
  },
  {
    id: 8,
    title: "动态图形示例8",
    description: "运动图形设计",
    video: "/动态图形设计/p18-192.mp4",
  },
  {
    id: 9,
    title: "动态图形示例9",
    description: "视觉动效设计",
    video: "/动态图形设计/p101_a-20.mp4",
  },
  {
    id: 10,
    title: "动态图形示例10",
    description: "动态视觉设计",
    video: "/动态图形设计/p80-397.mp4",
  },
  {
    id: 11,
    title: "动态图形示例11",
    description: "运动图形设计",
    video: "/动态图形设计/p47-354.mp4",
  },
  {
    id: 12,
    title: "动态图形示例12",
    description: "视觉动效设计",
    video: "/动态图形设计/p69-379.mp4",
  },
  {
    id: 13,
    title: "动态图形示例13",
    description: "动态视觉设计",
    video: "/动态图形设计/p94_-436.mp4",
  },
]

export default function MotionPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-8 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>返回首页</span>
          </Link>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            动态图形设计
          </h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-zinc-400 max-w-2xl mx-auto">
            探索动态视觉的无限可能，通过运动图形传递创意与情感。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motionProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:border-blue-500/50 cursor-pointer"
              onClick={() => {
                if (project.video) {
                  setSelectedVideo(project.video)
                } else if (project.image) {
                  setSelectedImage(project.image)
                }
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative h-64 overflow-hidden">
                {project.video ? (
                  <>
                    <video
                      src={project.video}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </>
                ) : project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <div className="text-center p-8">
                      <div className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                        ▶
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-zinc-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-zinc-300 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <video
            src={selectedVideo}
            className="max-w-[90vw] max-h-[85vh] rounded-lg"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
