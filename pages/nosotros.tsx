'use client';

import NosotrosHero from '@/components/NosotrosHero/NosotrosHero';
import { NuestraHistoriaSection } from '@/components/NuestraHistoria/NuestraHistoria';
import { Container, Title, Text, SimpleGrid, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import { PorqueElegirnosSection } from '@/components/PorQueElegirnos/PorQueElegirnos';
import { GaleriaTestimoniosSlider } from '@/components/CarruselTestimonios/CarruselTestimonios';
export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />

      <section style={{ padding: '4rem 0' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Paper p="xl" shadow="md" component={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Title order={3} mb="sm">Misión</Title>
              <Text>
                Democratizar la inversión inmobiliaria en el norte del país con transparencia, confianza y experiencia.
              </Text>
            </Paper>

            <Paper p="xl" shadow="md" component={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
              <Title order={3} mb="sm">Visión</Title>
              <Text>
                Ser el grupo inmobiliario líder en Sonora reconocido por transformar terrenos en oportunidades de vida.
              </Text>
            </Paper>

            <Paper p="xl" shadow="md" component={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <Title order={3} mb="sm">Valores</Title>
              <Text>
                Honestidad radical, asesoría sin presión, certeza jurídica, experiencia local y cercanía humana.
              </Text>
            </Paper>
          </SimpleGrid>
        </Container>
      </section>
      <NuestraHistoriaSection />
      <PorqueElegirnosSection />
      <GaleriaTestimoniosSlider />
    </>
  );
}
