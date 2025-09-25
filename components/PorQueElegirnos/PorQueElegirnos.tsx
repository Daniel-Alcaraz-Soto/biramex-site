import { Container, Title, SimpleGrid, Card, Text, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconUserCheck,
  IconMapPin,
  IconCertificate,
  IconHomeSearch,
} from '@tabler/icons-react';

const razones = [
  {
    icon: IconUserCheck,
    title: 'Acompañamiento real',
    description: 'Desde el primer interés hasta la entrega, estás respaldado por nuestro equipo.',
  },
  {
    icon: IconHomeSearch,
    title: 'Asesoría sin presión',
    description: 'Nos importa que tomes una decisión informada, no apresurada.',
  },
  {
    icon: IconCertificate,
    title: 'Certeza legal',
    description: 'Cada terreno está verificado y listo para escriturar.',
  },
  {
    icon: IconMapPin,
    title: 'Ubicación estratégica',
    description: 'Terrenos en zonas con alta proyección y plusvalía.',
  },
];

export function PorqueElegirnosSection() {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
      <Container size="lg">
        <Title order={2} ta="center" mb="xl">
          ¿Por qué elegirnos?
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing="xl">
          {razones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  shadow="sm"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className="hoverCard"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'translateY(-6px)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'translateY(0)')
                  }
                >
                  <ThemeIcon variant="light" size={50} radius="md" mb="md">
                    <Icon size={28} stroke={1.5} />
                  </ThemeIcon>

                  <Text fw={600} fz="lg" mb="xs">
                    {item.title}
                  </Text>
                  <Text c="dimmed" fz="sm">
                    {item.description}
                  </Text>
                </Card>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>
    </section>
  );
}