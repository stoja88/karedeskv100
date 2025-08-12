'use client'

import { useEffect, useState } from 'react'

interface CompatibleImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function CompatibleImage({ src, alt, width, height, className }: CompatibleImageProps) {
  const [isNextJs, setIsNextJs] = useState(false)

  useEffect(() => {
    // Detectar si estamos en Next.js o Vite
    setIsNextJs(typeof window !== 'undefined' && '__NEXT_DATA__' in window)
  }, [])

  if (isNextJs) {
    // En Next.js usar el componente Image optimizado
    const Image = require('next/image').default
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    )
  }

  // En Vite usar img regular
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}