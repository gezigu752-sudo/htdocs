"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X } from "lucide-react"

const posters = [
  {
    id: 1,
    title: "绯色月光",
    description: "产品宣传海报",
    image: "/11.png",
  },
  {
    id: 2,
    title: "几何之美",
    description: "形状与空间的对话",
    image: null,
    placeholder: "square",
  },
  {
    id: 3,
    title: "字体之美",
    description: "文字即图形",
    image: null,
    placeholder: "text",
  },
  {
    id: 4,
    title: "色彩之美",
    description: "三色定乾坤",
    image: null,
    placeholder: "colors",
  },
  {
    id: 5,
    title: "线条之美",
    description: "一线穿万物",
    image: null,
    placeholder: "line",
  },
  {
    id: 6,
    title: "网格之美",
    description: "秩序与变化",
    image: null,
    placeholder: "grid",
  },
]

export default function PosterPage() {
  const [selectedPoster, setSelectedPoster] = useState<typeof posters[0] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Back Button */}
        <Link href="/">
          <Button className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Button>
        </Link>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            平面海报--简约
          </h1>
          <p className="text-xl text-zinc-400">
            简约而不简单，用最少的元素传达最深刻的信息
          </p>
        </div>

        {/* Poster Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster) => (
            <div
              key={poster.id}
              onClick={() => poster.image && setSelectedPoster(poster)}
              className={`group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${poster.image ? 'cursor-pointer' : ''}`}
            >
              {poster.image ? (
                <>
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{poster.title}</h3>
                    <p className="text-zinc-400 text-sm">{poster.description}</p>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    {poster.placeholder === "square" && (
                      <div className="w-24 h-24 mx-auto mb-6 border-4 border-white/80 rotate-45"></div>
                    )}
                    {poster.placeholder === "text" && (
                      <div className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Aa</div>
                    )}
                    {poster.placeholder === "colors" && (
                      <div className="flex gap-2 justify-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                        <div className="w-8 h-8 rounded-full bg-pink-500"></div>
                        <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                      </div>
                    )}
                    {poster.placeholder === "line" && (
                      <div className="w-1 h-32 mx-auto mb-6 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                    )}
                    {poster.placeholder === "grid" && (
                      <div className="grid grid-cols-2 gap-2 mb-6 w-16 h-16 mx-auto">
                        <div className="bg-white/80"></div>
                        <div className="bg-white/40"></div>
                        <div className="bg-white/20"></div>
                        <div className="bg-white/60"></div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{poster.title}</h3>
                    <p className="text-zinc-400 text-sm">{poster.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">设计理念</h2>
          <p className="text-zinc-400 leading-relaxed">
            简约设计不是简单的删减，而是在繁复中寻找本质。每一个元素都经过精心考量，
            每一处留白都承载着意义。通过极简的视觉语言，传达最纯粹的设计美学。
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedPoster(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPoster.image!}
              alt={selectedPoster.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="text-2xl font-bold">{selectedPoster.title}</h3>
              <p className="text-zinc-400">{selectedPoster.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
