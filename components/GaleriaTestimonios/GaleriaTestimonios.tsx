'use client';

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './GaleriaTestimonios.module.css';

const testimonios = [
  {
    nombre: 'Alejandra R.',
    frase: 'El mejor trato y atención en Nogales.',
    foto: '/testimonios/1.jpg',
  },
  {
    nombre: 'Carlos M.',
    frase: 'Gracias a Biramex hoy tengo mi terreno.',
    foto: '/testimonios/2.jpg',
  },
  {
    nombre: 'Fernanda L.',
    frase: 'Todo fue más fácil de lo que imaginé.',
    foto: '/testimonios/3.jpg',
  },
];

const backgrounds = [
  '/testimonios/lotes.png',
  '/testimonios/dirt.png',
  '/testimonios/mexico.png',
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function TestimonioCard({
  foto,
  nombre,
  frase,
  index,
  onVisible,
}: {
  foto: string;
  nombre: string;
  frase: string;
  index: number;
  onVisible: (index: number) => void;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(index);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index, onVisible]);

  return (
    <section className={styles.testiContainer}>
      <div ref={ref} className={styles.testiImageWrapper}>
        <img src={foto} alt={nombre} className={styles.testiImage} />

        <motion.div
          className={styles.overlayCard}
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <h3 className={styles.testiTitle}>{nombre}</h3>
          <p className={styles.testiFrase}>“{frase}”</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function GaleriaTestimoniosParallax() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="galeria-parallax"
      className={styles.galeria}
      style={{
        backgroundImage: `url(${backgrounds[activeIndex]})`,
      }}
    >
      <div className={styles.overlay} />
      {testimonios.map((item, i) => (
        <TestimonioCard
          key={i}
          index={i}
          foto={item.foto}
          nombre={item.nombre}
          frase={item.frase}
          onVisible={(visibleIndex) => setActiveIndex(visibleIndex)}
        />
      ))}
    </div>
  );
}