'use client';

import React from 'react';
import {
  Container,
  SimpleGrid,
  Title,
  Text,
  Paper,
  Group,
  Stack,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { Stat } from '../Stats/Stats'; // Asegúrate que sea el componente corregido
import classes from './Testimonios.module.css';

const testimonios = [
  {
    nombre: 'Alejandra R.',
    frase: 'Gracias a Biramex ahora tengo el terreno perfecto para mi familia. Todo fue fácil y seguro.',
  },
  {
    nombre: 'Carlos M.',
    frase: 'Excelente atención desde el primer contacto. Recomiendo ampliamente su servicio.',
  },
  {
    nombre: 'Fernanda L.',
    frase: 'Me sentí acompañada en todo el proceso. ¡Estoy feliz con mi nuevo hogar!',
  },
];

export function TestimoniosSection() {
  const theme = useMantineTheme();
  const neutralBorder = theme.colors.gray[3];
  const starColor = theme.colors.yellow[6];

  return (
    <section id="testimonios" style={{ padding: '4rem 0' }}>
      <Container size="lg">
        <Title order={2} ta="center" mb="md">
          Lo que nuestros clientes dicen
        </Title>
        <Text ta="center" mb="xl" c="dimmed">
          Más de 500 familias han confiado en nosotros para encontrar su hogar o terreno ideal. Conoce algunas de sus experiencias.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {/* Bloque de testimonios */}
          <Stack gap="lg">
            {testimonios.map((testi, idx) => (
              <Paper
                key={idx}
                withBorder
                p="md"
                radius="md"
                style={{ borderColor: neutralBorder }}
              >
                <Group align="flex-start" >
                  {/* Rango de 5 estrellas */}
                  <Group gap="md">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} size={20} color={starColor} />
                    ))}
                  </Group>
                  <div>
                    <Text fz="sm" c="dimmed">
                      “{testi.frase}”
                    </Text>
                    <Text fw={600} mt="xs">
                      – {testi.nombre}
                    </Text>
                  </div>
                </Group>
              </Paper>
            ))}
          </Stack>

          {/* Bloque de stats animados */}
          <SimpleGrid cols={1} spacing="xl">
            <Stat icon="👨‍👩‍👧‍👦" end={500} description="Familias felices" />
            <Stat icon="📍" end={8} description="Desarrollos activos" />
            <Stat icon="📆" end={15} description="Años de experiencia" />
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </section>
  );
}