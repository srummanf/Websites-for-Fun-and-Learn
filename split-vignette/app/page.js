'use client';

import styles from './page.module.css'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import Gallery from '../components/gallery';
import Description from '../components/description';

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak",
    id: 0
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias",
    id: 1
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers",
    id: 2
  },
  {
    name: "Landon Speers",
    handle: "landon_speers",
    id: 3
  }
]

export default function Home() {

  //  Stiffness is used to determine the spring back speed of the image with cursor
  //  Dampness is used to determine the spring back speed of the image with cursor with a click that once the transition time is over, the image will spring back to position of the cursor
  // Mass is the measure of inertia of the image with cursor. With higher Value it actually gives a spring effect

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  const smoothScroll = () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  useEffect(() => {
    smoothScroll()
  }, [])

  // This snippet is used to center teh cursor of the mouse with an element
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  return (
    <main onMouseMove={mouseMove} className={styles.main}>

      {
        projects?.map(({ handle }, i) => {
          return (<Gallery mousePosition={mousePosition} handle={handle} key={i} />
          )
        })
      }
      <Description mousePosition={mousePosition} projects={projects} />
    </main>
  )
}