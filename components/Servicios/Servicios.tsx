'use client';

import React, { useRef } from 'react';
import {
  Container,
  Title,
  Text,
  Grid,
  Image,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import {
  IconBolt,
  IconTools,
  IconHome,
  IconCreditCard,
  IconBuildingFactory,
} from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import classes from './Servicios.module.css';

interface ServiciosSectionProps {
  tipo: 'terreno' | 'casa';
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServiciosSection({ tipo }: ServiciosSectionProps) {
  const theme = useMantineTheme();

  // Definimos directamente los datos de servicio según tipo
  const serviciosTerreno = [
    {
      icon: IconBolt,
      title: 'Venta Rápida',
      description:
        'Estrategias digitales enfocadas en conversión para vender tu terreno en tiempo récord.',
    },
    {
      icon: IconTools,
      title: 'Remodelación + Venta',
      description:
        'Aumentamos el valor de tu terreno con mejoras y lo ponemos en el mercado sin que inviertas nada.',
    },
    {
      icon: IconHome,
      title: 'Administración de Propiedades',
      description:
        'Gestión integral de rentas, mantenimiento y atención a inquilinos para generar ingresos pasivos.',
    },
  ];

  const serviciosCasa = [
    {
      icon: IconHome,
      title: 'Compra Facilitada',
      description:
        'Te acompañamos desde la búsqueda hasta la firma, asegurando que encuentres la casa ideal.',
    },
    {
      icon: IconCreditCard,
      title: 'Financiamiento',
      description:
        'Gestionamos tu crédito Infonavit o bancario de principio a fin para que tú solo firmes.',
    },
    {
      icon: IconBuildingFactory,
      title: 'Asesoría Jurídica',
      description:
        'Revisamos toda la documentación y trámites legales para que tu compra sea 100% segura.',
    },
  ];

  const data = tipo === 'terreno' ? serviciosTerreno : serviciosCasa;
  const icons = data.map((item) => item.icon);

  const imagenSrc = tipo === 'terreno' ? '/servicios/terreno.png' : '/servicios/house.png';

  const imagenRef = useRef<HTMLDivElement>(null);
  const imagenInView = useInView(imagenRef, { once: true, amount: 0.4 });

  const serviciosRef = useRef<HTMLDivElement>(null);
  const serviciosInView = useInView(serviciosRef, { once: true, amount: 0.4 });

  return (
    <section id="servicios" className={classes.wrapper}>
      <Container size="lg">
        <Grid>
          {/* Imagen animada */}
          <Grid.Col span={12} >
            <motion.div
              ref={imagenRef}
              initial={{ opacity: 0, x: 60, filter: 'blur(12px)' }}
              animate={
                imagenInView
                  ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                  : { opacity: 0, x: 60, filter: 'blur(12px)' }
              }
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: 400,
              }}
            >
              <Image
                src={imagenSrc}
                alt={`Servicios ${tipo}`}
                fit="contain"
                style={{
                  maxHeight: 380,
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </Grid.Col>

          {/* Contenido */}
          <Grid.Col span={12}>
            <Title order={2} size="2.25rem" fw={700} mb="xl" c="#000">
              {tipo === 'terreno'
                ? 'Todo lo que necesitas para invertir en tierra'
                : 'Servicios para encontrar y comprar tu casa ideal'}
            </Title>

            <Text className={classes.description} mb="xl">
              Te acompañamos en cada paso del proceso. Desde trámites hasta entrega, nuestro equipo te respalda con experiencia y compromiso.
            </Text>

            {/* Cards animadas */}
            <motion.div
              ref={serviciosRef}
              variants={containerVariants}
              initial="hidden"
              animate={serviciosInView ? 'visible' : 'hidden'}
            >
              <Grid gutter="md">
                {data.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <Grid.Col key={item.title} span={12}>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                          transition: { type: 'spring', stiffness: 300, damping: 20 },
                        }}
                        style={{
                          padding: '1rem',
                          background: '#fff',
                          borderRadius: 12,
                          border: '1px solid #eaeaea',
                          cursor: 'default',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '1rem',
                        }}
                      >
                        <ThemeIcon
                          size={44}
                          radius="md"
                          variant="outline"
                          color="dark"
                          style={{ borderWidth: 2, flexShrink: 0 }}
                        >
                          <IconComp size={26} stroke={1.5} />
                        </ThemeIcon>
                        <div>
                          <Text fz="lg" fw={600}>
                            {item.title}
                          </Text>
                          <Text c="dimmed" fz="sm">
                            {item.description}
                          </Text>
                        </div>
                      </motion.div>
                    </Grid.Col>
                  );
                })}
              </Grid>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}