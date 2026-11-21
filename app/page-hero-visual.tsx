import { HeroDeviceArtwork } from './hero-device-artwork'

type PageHeroVisualProps = {
  dark: boolean
  rtl: boolean
  className?: string
}

export function PageHeroVisual({ dark, rtl, className = '' }: PageHeroVisualProps) {
  return (
    <div className={`hero-visual-container ${className}`.trim()}>
      <HeroDeviceArtwork dark={dark} rtl={rtl} />
    </div>
  )
}
