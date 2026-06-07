"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X } from "lucide-react"

const posters = [
  {
    id: 1,
    title: "毕业会展",
    description: "酸性风格海报",
    image: "/7.png",
  },
  {
    id: 2,
    title: "潮玩市集",
    description: "酸性风格海报",
    image: "/8.png",
  },
]

export default function PosterAcidPage() {
  const [selectedPoster, setSelectedPoster] = useState<typeof posters[0] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      {/* Background Effects - Acid Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-cyan-400 to-yellow-400">
            平面海报--酸性
          </h1>
          <p className="text-xl text-zinc-400">
            高饱和度色彩与液态金属质感，打造未来感视觉体验
          </p>
        </div>

        {/* Poster Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster) => (
            <div
              key={poster.id}
              onClick={() => poster.image && setSelectedPoster(poster)}
              className={`group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 hover:border-lime-500/50 transition-all duration-300 ${poster.image ? 'cursor-pointer' : ''}`}
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
            酸性设计（Acid Design）源自90年代锐舞文化，以高饱和度的荧光色、液态金属质感、
            几何图形和扭曲变形为特点，营造出迷幻、未来感的视觉体验。
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
          <div className="relative mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPoster.image!}
              alt={selectedPoster.title}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
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
