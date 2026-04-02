import { useState } from 'react'
import Navbar from './components/Navbar'
import BackgroundAnimation from './components/BackgroundAnimation'
import Hero from './components/Hero'
import TaglineStrip from './components/TaglineStrip'
import ProductVariants from './components/ProductVariants'
import SizeSelector from './components/SizeSelector'
import HowToWear from './components/HowToWear'
import Features from './components/Features'
import Reviews from './components/Reviews'
import FooterCTA from './components/FooterCTA'

export default function App() {
  const [selectedColor, setSelectedColor] = useState('Noir Black')
  const [selectedSize, setSelectedSize]   = useState('M')

  return (
    <div style={{ background: 'var(--bg-void)', position: 'relative' }}>
      <BackgroundAnimation />

      <Navbar />

      <div style={{ position: 'relative', zIndex: 1 }}>

        <section id="home">
          <Hero selectedColor={selectedColor} selectedSize={selectedSize} />
        </section>

        <TaglineStrip />

        <section id="variants">
          <ProductVariants selectedColor={selectedColor} onSelectColor={setSelectedColor} />
        </section>

        <HowToWear />

        <section id="about">
          <SizeSelector selectedSize={selectedSize} onSelectSize={setSelectedSize} />
        </section>

        <Features />
        <Reviews />

        <section id="contact">
          <FooterCTA />
        </section>

      </div>
    </div>
  )
}
