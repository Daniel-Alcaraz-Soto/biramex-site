'use client';

import {
  IconBuildingEstate,
  IconHomeDollar,
  IconKey,
  IconReportAnalytics,
  IconChevronDown,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image } from '@mantine/core';
import classes from './HeaderMegaMenu.module.css';

const servicios = [
  {
    icon: IconBuildingEstate,
    title: 'Venta de terrenos',
    description: 'Invierte en tierra con plusvalía garantizada',
  },
  {
    icon: IconHomeDollar,
    title: 'Venta de casas',
    description: 'Encuentra el hogar ideal para ti y tu familia',
  },
  {
    icon: IconKey,
    title: 'Renta de propiedades',
    description: 'Soluciones listas para habitar o invertir',
  },
  {
    icon: IconReportAnalytics,
    title: 'Avalúo gratuito',
    description: 'Conoce el valor real de tu propiedad sin costo',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const phone = '526624537009'; // 👈 aquí tu número de WhatsApp

  const links = servicios.map((item) => (
    <UnstyledButton
      className={classes.subLink}
      key={item.title}
      onClick={() =>
        window.open(
          `https://wa.me/${phone}?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(
            item.title
          )}`,
          '_blank'
        )
      }
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.biramexBlue[6]} />
        </ThemeIcon>
        <div>
          <Text size="md" fw={500}>
            {item.title}
          </Text>
          <Text size="md" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Box
            component="a"
            href="/"
            ml="md"
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <Image src="/logo.png" alt="Grupo Biramex" height={50} />
          </Box>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Inicio
            </a>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Servicios
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.colors.biramexBlue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Servicios</Text>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        ¿Vendes una propiedad?
                      </Text>
                      <Text size="xs" c="dimmed">
                        Solicita un avalúo gratuito con un clic
                      </Text>
                    </div>
                    <Button
                      variant="default"
                      component="a"
                      href="#avaluo"
                      color={theme.colors.biramexGreen[6]}
                    >
                      Avalúo
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="/nosotros" className={classes.link}>
              Nosotros
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button
              component="a"
              href={`https://wa.me/${phone}`}
              target="_blank"
              color="biramexGreen"
            >
              WhatsApp
            </Button>
            <Button
              variant="outline"
              component="a"
              href="#avaluo"
              color={theme.colors.biramexBlue[6]}
            >
              Avalúo gratuito
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navegación"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          <a href="#inicio" className={classes.link}>
            Inicio
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Servicios
              </Box>
              <IconChevronDown
                size={16}
                color={theme.colors.biramexGreen[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#nosotros" className={classes.link}>
            Nosotros
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              variant="default"
              component="a"
              href={`https://wa.me/${phone}`}
              target="_blank"
            >
              WhatsApp
            </Button>
            <Button component="a" href="/inicio#avaluo">
              Avalúo gratuito
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
