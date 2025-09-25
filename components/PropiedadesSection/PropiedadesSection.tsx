'use client';

import { textos } from '@/content/textos';
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import classes from './PropiedadesSection.module.css';

interface PropiedadesSectionProps {
  tipo: 'terreno' | 'casa';
}

const mockTerrenos = [
  {
    id: '1',
    image: '/vistas/1.jpg',
    title: 'Terreno Campestre',
    ubicacion: 'Las Vistas',
    descripcion: '1,000 m² con acceso a servicios básicos y plusvalía creciente.',
    precio: '$350,000 MXN',
  },
  {
    id: '2',
    image: '/alameda/card.jpg',
    title: 'Terreno Residencial',
    ubicacion: 'Las Alamedas',
    descripcion: 'Ubicado cerca de escuelas y zonas comerciales.',
    precio: '$420,000 MXN',
  },
];

const mockCasas = [
  {
    id: '1',
    image: '/mock/casa1.jpg',
    title: 'Casa estilo moderno',
    ubicacion: 'Nogales Centro',
    descripcion: '3 recámaras, 2 baños y patio amplio.',
    precio: '$1,450,000 MXN',
  },
  {
    id: '2',
    image: '/mock/casa2.jpg',
    title: 'Casa familiar',
    ubicacion: 'Col. Kennedy',
    descripcion: 'Casa equipada lista para habitar.',
    precio: '$1,250,000 MXN',
  },
];

// Animaciones
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function PropiedadesSection({ tipo }: PropiedadesSectionProps) {
  const propiedades = tipo === 'terreno' ? mockTerrenos : mockCasas;
  const { title, description } = textos.propiedades[tipo];

  return (
    <section id="propiedades" style={{ padding: '4rem 0' }}>
      <Container size="lg">
        <Title order={1} size="2.5rem" fw={700} ta="center" mb="xl">
          {title}
        </Title>
        <Text ta="center" mb="xl" c="dimmed">
          {description}
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          {propiedades.map((prop) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, amount: 0.2 });

            return (
              <motion.div
              key={prop.id}
              ref={cardRef}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                border: '1px solid #eaeaea',
                borderRadius: 12,
                overflow: 'hidden',
                background: '#fff',
              }}
            >
              <Card p="md" radius="md" withBorder={false} className={classes.card}>
                <Card.Section>
                  <Image src={prop.image} alt={prop.title} height={180} />
                </Card.Section>
            
                <Card.Section className={classes.section} mt="md">
                  <Group justify="apart">
                    <Text fz="lg" fw={500}>{prop.title}</Text>
                    <Badge size="sm" variant="light">{prop.ubicacion}</Badge>
                  </Group>
                  <Text fz="sm" mt="xs">{prop.descripcion}</Text>
                </Card.Section>
            
                <Card.Section className={classes.section} mt="sm">
                  <Group justify="space-between">
                    <Text fw={700} fz="lg">{prop.precio}</Text>
                    <Button radius="md" size="sm" variant="outline">Ver detalles</Button>
                  </Group>
                </Card.Section>
              </Card>
            </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>
    </section>
  );
}