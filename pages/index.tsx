import { useState } from 'react';
import { HeroImageRight } from '@/components/HeroSection/HeroSection';
import { ServiciosSection } from '@/components/Servicios/Servicios';
import { PropiedadesSection } from '@/components/PropiedadesSection/PropiedadesSection';
import { CompraVentaFlowSection } from '@/components/CompraVenta/CompraVenta';
import { BannerAvaluo } from '@/components/avaluo/Avaluo';
import { TestimoniosSection } from '@/components/Testimonios/Testimonios';
import GaleriaTestimoniosParallax from '@/components/GaleriaTestimonios/GaleriaTestimonios';
import { SobreNosotros } from '@/components/SobreNosotros/SobreNosotros';
import { ContactoSection } from '@/components/Contacto/Contacto';
export default function HomePage() {
  const [tipo, setTipo] = useState<'terreno' | 'casa'>('terreno');

  return (
    <>
      <HeroImageRight tipo={tipo} setTipo={setTipo} />
      <ServiciosSection tipo={tipo} />
      <SobreNosotros />
      <PropiedadesSection tipo={tipo} />
      <CompraVentaFlowSection tipo={tipo} />
      <BannerAvaluo />
      <TestimoniosSection />
      <GaleriaTestimoniosParallax />
      <ContactoSection />
    </>
  );
}