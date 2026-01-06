import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import Navbar from './Navbar'

const Hero = () => {
  const heroRef = useRef(null)
  const revealRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const reveal = revealRef.current

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let x = mouseX
    let y = mouseY
    let visible = false

    const animate = () => {
      x += (mouseX - x) * 0.08
      y += (mouseY - y) * 0.08

      reveal.style.setProperty('--x', `${x}px`)
      reveal.style.setProperty('--y', `${y}px`)

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    const move = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      if (!visible) {
        visible = true
        reveal.classList.add('active')
      }
    }

    const leave = () => {
      visible = false
      reveal.classList.remove('active')
    }

    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)

    return () => {
      hero.removeEventListener('mousemove', move)
      hero.removeEventListener('mouseleave', leave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 14 },
    },
  }

  return (
    <div className="hero" ref={heroRef}>
      <Navbar />

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="left" variants={item}>
          <h1>NIKHIL<br />RANGAREJ</h1>
          <p>
            AI Engineer exploring intelligence, systems, and the edge of reality.
          </p>
          <button>Enter the Upside Down</button>
        </motion.div>

        <motion.div className="right" variants={item}>
          <h1>THE AI ENGINEER</h1>
          <p>
            Designing systems that blur the boundary between human thought and machines.
          </p>
        </motion.div>
      </motion.div>

      <div className="fire-reveal" ref={revealRef} />
    </div>
  )
}

export default Hero
