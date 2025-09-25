import { Container, Title, Text, Grid, Image, Paper, Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function NuestraHistoriaSection() {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fffff' }}>
      <Container size="lg">
        <Grid gutter="xl" align="center">
          {/* Imagen izquierda */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/nosotros/historia.png"
                alt="Nuestra historia"
                radius="md"
                fit="cover"
                height={400}
              />
            </motion.div>
          </Grid.Col>

          {/* Texto derecha con blockquote */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Title order={2} mb="md">
                Nuestra historia
              </Title>

              <Paper p="lg" radius="md" shadow="sm" withBorder style={{ background: '#fff' }}>
                <Text size="lg" lh={1.7}>
                  Grupo Biramex nació con una idea clara: facilitar el acceso a terrenos de alto valor,
                  con procesos simples y acompañamiento real. Creemos que el patrimonio no debería ser
                  un privilegio de pocos, sino una realidad alcanzable para cualquier familia en Sonora.
                </Text>

                <Blockquote
                  color="blue"
                  icon={<IconInfoCircle />}
                  cite="– Grupo Biramex"
                  mt="xl"
                >
                  Más que vender terrenos, ayudamos a las familias a construir un futuro con certeza.
                </Blockquote>

                <Text size="lg" mt="xl" lh={1.7}>
                  Hoy, más de 500 familias ya son parte de esta comunidad. Porque en Grupo Biramex,
                  el terreno es solo el inicio. Lo que realmente entregamos es acompañamiento, confianza
                  y visión a largo plazo.
                </Text>
              </Paper>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}