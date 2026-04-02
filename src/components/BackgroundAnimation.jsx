import { useEffect, useRef } from 'react'
import styles from './BackgroundAnimation.module.css'

/**
 * Warm ember particle system — inspired by Etmsk's canvas effect.
 * Gold/amber embers drift upward with glow and sine sway.
 */
export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Ember {
      constructor() { this.spawn(true) }

      spawn(initial = false) {
        this.x      = Math.random() * canvas.width
        this.y      = initial ? Math.random() * canvas.height : canvas.height + 10
        this.r      = Math.random() * 1.6 + 0.3
        this.speedY = -(Math.random() * 0.5 + 0.18)
        this.speedX = (Math.random() - 0.5) * 0.12
        this.life   = 0
        this.maxLife = Math.random() * 320 + 180
        this.alpha  = 0
        this.maxAlpha = Math.random() * 0.5 + 0.12
        this.glowing  = Math.random() < 0.45
        // Warm ember palette: deep orange → gold → amber
        const hues = [30, 35, 40, 45, 48]
        const hue  = hues[Math.floor(Math.random() * hues.length)]
        const sat  = Math.random() * 25 + 65
        const lit  = Math.random() * 25 + 50
        this.color = `hsl(${hue},${sat}%,${lit}%)`
      }

      update() {
        this.life++
        this.x += this.speedX + Math.sin(this.life * 0.022) * 0.25
        this.y += this.speedY

        const progress = this.life / this.maxLife
        if (progress < 0.15) {
          this.alpha = (progress / 0.15) * this.maxAlpha
        } else if (progress > 0.65) {
          this.alpha = ((1 - progress) / 0.35) * this.maxAlpha
        } else {
          this.alpha = this.maxAlpha
        }

        if (this.life >= this.maxLife || this.y < -10) this.spawn()
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle   = this.color
        if (this.glowing) {
          ctx.shadowBlur  = this.r * 7
          ctx.shadowColor = this.color
        }
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: 140 }, () => new Ember())
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => { p.update(); p.draw() })
      animId = requestAnimationFrame(tick)
    }

    const onResize = () => {
      resize()
      particles.forEach((p) => p.spawn(true))
    }

    init()
    tick()
    window.addEventListener('resize', onResize, { passive: true })
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
