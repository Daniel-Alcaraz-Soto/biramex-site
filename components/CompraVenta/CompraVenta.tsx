'use client';

import React, { useRef } from 'react';
import {
  Container,
  Title,
  Text,
  Flex,
  Card,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import {
  IconPhone,
  IconUserCheck,
  IconHome,
  IconFileCheck,
  IconCertificate,
  IconArrowDown,
  IconFileText,
  IconPhoto,
  IconBrandFacebook,
  IconBuildingStore,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';

interface Paso {
  title: string;
  icon: React.FC<any>;
}

const pasosCompraTerreno: Paso[] = [
  { title: 'Contáctanos y cuéntanos tus necesidades', icon: IconPhone },
  { title: 'Recibe asesoría personalizada y opciones disponibles', icon: IconUserCheck },
  { title: 'Visita terrenos y elige el que te convenga', icon: IconHome },
  { title: 'Realiza trámite de crédito o pago de contado', icon: IconFileCheck },
  { title: 'Firma escritura y recibe las llaves', icon: IconCertificate },
];

const pasosVentaTerreno: Paso[] = [
  { title: 'Solicita estimación de valor gratuita', icon: IconFileText },
  { title: 'Preparamos tu terreno (fotos, video y señalética)', icon: IconPhoto },
  { title: 'Publicamos en portales y redes sociales estratégicas', icon: IconBrandFacebook },
  { title: 'Gestionamos visitas y negociaciones', icon: IconBuildingStore },
  { title: 'Cierre notarial y entrega de pago', icon: IconCurrencyDollar },
];

const pasosCompraCasa: Paso[] = [
  { title: 'Contáctanos y cuéntanos tu búsqueda', icon: IconPhone },
  { title: 'Recibe opciones de casas y asesoría financiera', icon: IconUserCheck },
  { title: 'Visita casas y elige tu hogar ideal', icon: IconHome },
  { title: 'Gestionamos crédito o pago de contado', icon: IconFileCheck },
  { title: 'Firma escritura y recibe las llaves', icon: IconCertificate },
];

const pasosVentaCasa: Paso[] = [
  { title: 'Solicita estimación de valor gratuita', icon: IconFileText },
  { title: 'Preparamos tu casa (fotografía y video profesional)', icon: IconPhoto },
  { title: 'Publicamos en portales y redes sociales', icon: IconBrandFacebook },
  { title: 'Gestionamos visitas y negociaciones', icon: IconBuildingStore },
  { title: 'Cierre notarial y entrega de pago', icon: IconCurrencyDollar },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function CompraVentaFlowSection({ tipo }: { tipo: 'terreno' | 'casa' }) {
  const theme = useMantineTheme();
  const isTerreno = tipo === 'terreno';
  const highlightColor = isTerreno
    ? theme.colors.biramexGreen[6]
    : theme.colors.biramexBlue[6];

  const pasosCompra = isTerreno ? pasosCompraTerreno : pasosCompraCasa;
  const pasosVenta = isTerreno ? pasosVentaTerreno : pasosVentaCasa;

  const compraRef = useRef<HTMLDivElement>(null);
  const compraInView = useInView(compraRef, { once: true, amount: 0.3 });
  const ventaRef = useRef<HTMLDivElement>(null);
  const ventaInView = useInView(ventaRef, { once: true, amount: 0.3 });

  return (
    <section id="compraventa" style={{ padding: '4rem 0' }}>
      <Container size="lg">
        {/* Diagrama de Compra */}
        <Title order={2}  mb="md">
          {isTerreno ? 'Cómo Comprar Terreno' : 'Cómo Comprar Casa'}
        </Title>
        <Text mb="xl" color="dimmed">
          Sigue estos pasos para adquirir tu {tipo} de forma sencilla y transparente.
        </Text>

        <motion.div
          ref={compraRef}
          variants={containerVariants}
          initial="hidden"
          animate={compraInView ? 'visible' : 'hidden'}
        >
          <Flex direction="column" align="center" gap="1.5rem">
            {pasosCompra.map((paso, idx) => {
              const IconComp = paso.icon;
              return (
                <React.Fragment key={idx}>
                  <motion.div variants={itemVariants} style={{ width: '100%' }}>
                    <Flex justify="center" style={{ width: '100%' }}>
                      <Card
                        shadow="sm"
                        p="md"
                        radius="md"
                        withBorder
                        style={{
                          borderColor: highlightColor,
                          width: '300px',    // ancho fijo
                          minHeight: '80px', // altura fija
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Flex align="center" gap="1rem">
                          <ThemeIcon size={36} radius="md" variant="light" color="gray">
                            <IconComp size={20} stroke={1.5} color={highlightColor} />
                          </ThemeIcon>
                          <Text size="md">
                            {paso.title}
                          </Text>
                        </Flex>
                      </Card>
                    </Flex>
                  </motion.div>
                  {idx < pasosCompra.length - 1 && (
                    <Flex justify="center">
                      <IconArrowDown size={24} color={highlightColor} />
                    </Flex>
                  )}
                </React.Fragment>
              );
            })}
          </Flex>
        </motion.div>

        {/* Espacio entre diagramas */}
        <div style={{ height: '2rem' }} />

        {/* Diagrama de Venta */}
        <Title order={2}  mb="md">
          {isTerreno ? 'Cómo Vender Terreno' : 'Cómo Vender Casa'}
        </Title>
        <Text  mb="xl" color="dimmed">
          Descubre los pasos para poner tu {tipo} en el mercado y vender rápido.
        </Text>

        <motion.div
          ref={ventaRef}
          variants={containerVariants}
          initial="hidden"
          animate={ventaInView ? 'visible' : 'hidden'}
        >
          <Flex direction="column" align="center" gap="1.5rem">
            {pasosVenta.map((paso, idx) => {
              const IconComp = paso.icon;
              return (
                <React.Fragment key={idx}>
                  <motion.div variants={itemVariants} style={{ width: '100%' }}>
                    <Flex justify="center" style={{ width: '100%' }}>
                      <Card
                        shadow="sm"
                        p="md"
                        radius="md"
                        withBorder
                        style={{
                          borderColor: highlightColor,
                          width: '300px',
                          minHeight: '80px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Flex align="center" gap="1rem">
                          <ThemeIcon size={36} radius="md" variant="light" color="gray">
                            <IconComp size={20} stroke={1.5} color={highlightColor} />
                          </ThemeIcon>
                          <Text size="md">
                            {paso.title}
                          </Text>
                        </Flex>
                      </Card>
                    </Flex>
                  </motion.div>
                  {idx < pasosVenta.length - 1 && (
                    <Flex justify="center">
                      <IconArrowDown size={24} color={highlightColor} />
                    </Flex>
                  )}
                </React.Fragment>
              );
            })}
          </Flex>
        </motion.div>
      </Container>
    </section>
  );
}
