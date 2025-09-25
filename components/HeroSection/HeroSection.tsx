'use client';

import {
  SegmentedControl,
  Grid,
  Title,
  Text,
  Button,
  Image,
  Container,
  useMantineTheme,
  Flex,
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './HeroSection.module.css';

export function HeroImageRight({
  tipo,
  setTipo,
}: {
  tipo: 'terreno' | 'casa';
  setTipo: (val: 'terreno' | 'casa') => void;
}) {
  const isTerreno = tipo === 'terreno';
  const theme = useMantineTheme();

  const keywordColor = isTerreno
    ? theme.colors.biramexGreen[6]
    : theme.colors.biramexBlue[6];

  // número de WhatsApp
  const phone = '526624537009'; // 👈 cambia este por el número real

  // función para generar link con mensaje
  const getWhatsAppLink = (tipoMensaje: string) =>
    `https://wa.me/${phone}?text=Hola,%20quiero%20información%20sobre%20${tipoMensaje}`;

  return (
    <Container size="lg" className={classes.root}>
      <SegmentedControl
        value={tipo}
        onChange={(val) => setTipo(val as 'terreno' | 'casa')}
        data={[
          { label: 'Terrenos', value: 'terreno' },
          { label: 'Casas', value: 'casa' },
        ]}
        mb="xl"
      />

      <Grid className={classes.inner}>
        {/* Texto + botones (desktop) */}
        <Grid.Col
          span={{ base: 12, lg: 6 }}
          order={{ base: 1, lg: 1 }}
          className={classes.content}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tipo + '-text'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Title className={classes.title}>
                {isTerreno ? 'Tu ' : 'Encuentra tu '}
                <motion.span
                  key={tipo + '-keyword'}
                  style={{
                    color: keywordColor,
                    fontWeight: 700,
                    textTransform: 'capitalize',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {isTerreno ? 'terreno' : 'casa'}
                </motion.span>{' '}
                {isTerreno ? 'ideal te espera' : 'perfecta'}
              </Title>

              <Text className={classes.description} mt="md">
                {isTerreno
                  ? 'Terrenos en venta en zonas estratégicas de Nogales. Plusvalía garantizada.'
                  : 'Casas listas para habitar en Nogales. Conoce nuestras opciones de financiamiento.'}
              </Text>

              {/* Botones desktop */}
              <div className={classes.ctaDesktop}>
                <Flex
                  mt="lg"
                  gap="2rem"
                  wrap="nowrap"
                  justify="flex-start"
                  align="center"
                >
                  <Button
                    radius="md"
                    size="lg"
                    variant="filled"
                    color={isTerreno ? 'biramexGreen' : 'biramexBlue'}
                    style={{ minWidth: 160, flex: '0 0 auto' }}
                    onClick={() =>
                      window.open(
                        getWhatsAppLink(isTerreno ? 'terrenos' : 'casas'),
                        '_blank'
                      )
                    }
                  >
                    {isTerreno ? 'Ver Terrenos' : 'Ver Casas'}
                  </Button>

                  <Button
                    radius="md"
                    size="lg"
                    variant="outline"
                    color={isTerreno ? 'biramexGreen' : 'biramexBlue'}
                    style={{ minWidth: 180, flex: '0 0 auto' }}
                    onClick={() =>
                      window.open(
                        getWhatsAppLink(
                          isTerreno
                            ? 'una asesoría sobre terrenos'
                            : 'una asesoría sobre casas'
                        ),
                        '_blank'
                      )
                    }
                  >
                    {isTerreno ? 'Asesoría Gratuita' : 'Estimación Gratuita'}
                  </Button>
                </Flex>
              </div>
            </motion.div>
          </AnimatePresence>
        </Grid.Col>

        {/* Imagen */}
        <Grid.Col
          span={{ base: 12, lg: 6 }}
          order={{ base: 2, lg: 2 }}
          className={classes.image}
        >
          <motion.div
            key={tipo + '-image'}
            initial={{ opacity: 0, x: 60, filter: 'blur(12px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <Image
              src={isTerreno ? '/hero/terreno.png' : '/hero/casa2.png'}
              alt={isTerreno ? 'Terreno' : 'Casa'}
              fit="contain"
            />
          </motion.div>
        </Grid.Col>

        {/* Botones mobile */}
        <Grid.Col
          span={12}
          order={{ base: 3, lg: 3 }}
          className={classes.ctaMobile}
        >
          <Button
            fullWidth
            radius="md"
            size="lg"
            variant="filled"
            color={isTerreno ? 'biramexGreen' : 'biramexBlue'}
            className={classes.control}
            onClick={() =>
              window.open(
                getWhatsAppLink(isTerreno ? 'terrenos' : 'casas'),
                '_blank'
              )
            }
          >
            {isTerreno ? 'Ver Terrenos Disponibles' : 'Ver Casas Disponibles'}
          </Button>

          <Button
            fullWidth
            radius="md"
            size="lg"
            variant="outline"
            color={isTerreno ? 'biramexGreen' : 'biramexBlue'}
            className={classes.control}
            mt="md"
            onClick={() =>
              window.open(
                getWhatsAppLink(
                  isTerreno
                    ? 'una asesoría sobre terrenos'
                    : 'una asesoría sobre casas'
                ),
                '_blank'
              )
            }
          >
            {isTerreno ? 'Asesoría Gratuita' : 'Estimación Gratuita'}
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}