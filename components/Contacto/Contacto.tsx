'use client';

import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Flex,
  Divider,
} from '@mantine/core';

export function ContactoSection() {
  // Estado para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [accion, setAccion] = useState<'vende' | 'compra' | 'renta' | ''>('');
  const [mensaje, setMensaje] = useState('');

  // Número de WhatsApp al que enviaremos (con formato internacional, sin espacios ni guiones)
  const whatsappNumber = '5266224537009'; // ajusta según tu número

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Construir el texto que queremos enviar por WhatsApp
    const textoWhatsApp = `Hola, soy *${nombre}*.\n\n` +
      `• Teléfono: ${telefono}\n` +
      `• Correo: ${correo}\n` +
      `• Accedo a: ${accion === 'vende' ? 'Vender' : accion === 'compra' ? 'Comprar' : 'Rentar/Administrar'}\n` +
      `• Mensaje: ${mensaje}`;

    // Codificar URI
    const encoded = encodeURIComponent(textoWhatsApp);

    // Enlace de WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    // Abrir en nueva pestaña/ventana
    window.open(url, '_blank');
  }

  return (
    <section id="contacto" style={{ padding: '4rem 0' }}>
      <Container size="md">
        {/* Encabezado */}
        <Title order={2} align="center" mb="md">
          ¿Listo para Empezar?
        </Title>
        <Text align="center" mb="xl" color="dimmed">
          Llena este formulario y te dirigiremos a WhatsApp para finalizar tu solicitud.
        </Text>

        {/* Formulario que redirige a WhatsApp */}
        <form onSubmit={handleSubmit}>
          <Stack spacing="md">
            <TextInput
              label="Nombre completo"
              placeholder="Tu nombre"
              required
              value={nombre}
              onChange={(e) => setNombre(e.currentTarget.value)}
            />
            <TextInput
              label="Teléfono"
              placeholder="+52 631 123 4567"
              required
              value={telefono}
              onChange={(e) => setTelefono(e.currentTarget.value)}
            />
            <TextInput
              label="Correo electrónico"
              placeholder="tucorreo@ejemplo.com"
              required
              value={correo}
              onChange={(e) => setCorreo(e.currentTarget.value)}
            />

            <Select
              label="¿Vendes, Compras o Rentas?"
              placeholder="Selecciona una opción"
              data={[
                { value: 'vende', label: 'Vender' },
                { value: 'compra', label: 'Comprar' },
                { value: 'renta', label: 'Rentar / Administrar' },
              ]}
              required
              value={accion}
              onChange={(val) => setAccion(val as 'vende' | 'compra' | 'renta')}
            />

            <Textarea
              label="Mensaje / Detalles"
              placeholder="Cuéntanos brevemente qué necesitas o la dirección de tu propiedad"
              minRows={4}
              required
              value={mensaje}
              onChange={(e) => setMensaje(e.currentTarget.value)}
            />

            <Button type="submit" size="lg" fullWidth>
              Enviar por WhatsApp
            </Button>
          </Stack>
        </form>

        {/* Separador */}
        <Divider my="xl" />

        {/* Información de contacto fija */}
        <Flex direction="column" align="flex-start" spacing="sm">
          <Text size="sm">
            <strong>Dirección:</strong> Blvr. Luis Donaldo Colosio No. 2680, Col. Kennedy, Nogales, SON
          </Text>
          <Text size="sm">
            <strong>Teléfono:</strong> +52 (631) 180 3070
          </Text>
          <Text size="sm">
            <strong>Correo:</strong> bienesraices.mexico@gmail.com
          </Text>
          <Text size="sm">
            <strong>WhatsApp:</strong> +52 (662) 453 7009
          </Text>
        </Flex>
      </Container>
    </section>
  );
}