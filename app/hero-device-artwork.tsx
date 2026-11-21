import Image from 'next/image'

type HeroDeviceArtworkProps = {
  dark: boolean
  rtl: boolean
}

export function HeroDeviceArtwork({ dark, rtl }: HeroDeviceArtworkProps) {
  return (
    <div
      className="hero-device-stage"
      role="img"
      aria-label={
        rtl
          ? 'تصميم توضيحي لحاسوب محمول وهاتف يعرضان واجهة تواصل لشركة SperaCode'
          : 'Illustration of a laptop and phone displaying a contact interface by SperaCode'
      }
    >
      <Image
        src="/illustrations/hero-home-3d.jpg"
        alt={
          rtl
            ? 'تصميم ثلاثي الأبعاد تفاعلي لشركة SperaCode'
            : 'Interactive 3D illustration for SperaCode'
        }
        width={1200}
        height={800}
        sizes="(max-width: 900px) 100vw, 560px"
        quality={90}
        priority
        className="hero-image"
      />
    </div>
  )
}
