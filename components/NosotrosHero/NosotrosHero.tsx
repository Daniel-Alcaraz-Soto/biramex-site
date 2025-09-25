'use client';

import { Container, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import styles from './NosotrosHero.module.css';

export default function NosotrosHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <Container size="lg" className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Title order={1} className={styles.title}>
            Más que propiedades. <br /> Creamos patrimonio con propósito.
          </Title>

          <Text size="lg" mt="md" className={styles.subtitle}>
            En Grupo Biramex, no solo vendemos terrenos. Acompañamos a cientos de familias a construir su futuro con certeza, confianza y visión a largo plazo.
          </Text>

          <Text size="md" mt="lg" className={styles.meta}>
            +500 familias ya confiaron en nosotros.
          </Text>
        </motion.div>
      </Container>
    </section>
  );
}