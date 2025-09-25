'use client';

import { Paper, Container, Title, Text, Button, Group } from '@mantine/core';
import classes from './Avaluo.module.css';

export function BannerAvaluo() {
  return (
    <section id="avaluo" className={classes.wrapper}>
      <Container size="lg">
        <Paper shadow="md" radius="md" p="xl" className={classes.banner}>
          <Title order={2} className={classes.title}>
            Solicita tu avalúo gratuito
          </Title>

          <Text mt="sm" mb="lg" className={classes.description}>
            Conoce el valor real de tu propiedad sin compromiso. Recibe un informe detallado y asesoría profesional directamente por WhatsApp.
          </Text>

          <Group justify="center">
            <Button
              size="md"
              radius="md"
              color="biramexGreen"
              component="a"
              href="https://wa.me/526624537009"
              target="_blank"
            >
              Solicitar avalúo por WhatsApp
            </Button>
          </Group>
        </Paper>
      </Container>
    </section>
  );
}