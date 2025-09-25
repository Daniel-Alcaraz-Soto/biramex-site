import React from 'react';
import {
  Container,
  Title,
  Text,
  Card,
  Grid,
  Flex,
  useMantineTheme,
} from '@mantine/core';
import { IconTarget, IconEye, IconShieldCheck } from '@tabler/icons-react';

export function SobreNosotros() {
  const theme = useMantineTheme();

  // Usamos colores neutrales (grises) en lugar de tonos de marca
  const neutralBorder = theme.colors.gray[3];
  const neutralIcon = theme.colors.gray[6];

  const cardsData = [
    {
      icon: <IconTarget size={32} color={neutralIcon} />,
      title: 'Misión',
      description:
        'Ofrecer soluciones inmobiliarias seguras, rápidas y transparentes, conectando a vendedores, compradores e inversionistas de manera justa y efectiva.',
    },
    {
      icon: <IconEye size={32} color={neutralIcon} />,
      title: 'Visión',
      description:
        'Ser el grupo inmobiliario líder del norte de México, ofreciendo proyectos de alto impacto social y plusvalía para las familias mexicanas.',
    },
    {
      icon: <IconShieldCheck size={32} color={neutralIcon} />,
      title: 'Valores',
      description:
        'Transparencia, Honestidad, Humildad, Compromiso y Confianza.',
    },
  ];

  return (
    <Container size="lg" py="xl">
      {/* Título de sección */}
      <Title order={2} mb="md">
        Quiénes Somos
      </Title>

      {/* Párrafos introductorios */}
      <Text mb="lg">
        Esta historia de <strong>BIRAMEX</strong> (Bienes Raíces de México) nace de
        una experiencia personal marcada por la pérdida y la resiliencia. Tras
        enfrentar la inseguridad habitacional, comprendimos la importancia de un
        hogar digno. Por eso creamos una empresa que no solo comercializa
        inmuebles, sino que busca transformar la vida de muchas familias
        mexicanas.
      </Text>

      <Text mb="xl">
        Nos diferenciamos por ofrecer <strong>estimaciones sin costo</strong>,
        cubrir <strong>trámites operativos con exclusiva</strong> y brindar{' '}
        <strong>rendimientos superiores al mercado</strong> para inversionistas.
        Especializados en venta de casas y terrenos, maximizamos la plusvalía de
        los vendedores, remodelamos inmuebles ideales para compradores y
        ofrecemos retornos atractivos a inversionistas.
      </Text>

      {/* Grid de 3 columnas responsive usando Grid.Col */}
      <Grid gutter="lg">
        {cardsData.map((item) => (
          <Grid.Col key={item.title} span={12}>
            <Card
              shadow="sm"
              p="lg"
              radius="md"
              withBorder
              style={{ borderColor: neutralBorder }}
            >
              <Flex
                align="center"
                style={{ gap: '0.75rem', marginBottom: '0.5rem' }}
              >
                {item.icon}
                <Title order={4} style={{ margin: 0 }}>
                  {item.title}
                </Title>
              </Flex>
              <Text color="dimmed" size="sm">
                {item.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}