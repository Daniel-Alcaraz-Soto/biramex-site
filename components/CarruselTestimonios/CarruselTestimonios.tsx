'use client';

import { Carousel } from '@mantine/carousel';
import { Image, Title } from '@mantine/core';
import classes from './CarruselTestimonios.module.css';

const testimonios = [
  '/testimonios/1.jpg',
  '/testimonios/2.jpg',
  '/testimonios/3.jpg',
  '/testimonios/4.jpg',
];

export function GaleriaTestimoniosSlider() {
  return (
    <section className={classes.wrapper}>
      <Title order={2} ta="center" mb="xl" c="#fff">
        Nuestra comunidad
      </Title>

      <Carousel
        withIndicators
        slideSize="100%"
        height="auto"
        styles={{
          indicator: {
            backgroundColor: '#fff',
          },
        }}
        emblaOptions={{ loop: true }} // 👈 loop corregido
      >
        <Carousel.Slide>
          <div className={classes.gallery}>
            {testimonios.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Testimonio ${index + 1}`}
                radius="md"
                className={classes.image}
              />
            ))}
          </div>
        </Carousel.Slide>
      </Carousel>
    </section>
  );
}
