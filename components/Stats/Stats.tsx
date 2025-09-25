'use client';

import { Paper, Text } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion';

export function Stat({
  icon,
  end,
  description,
}: {
  icon: string;
  end: number;
  description: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, end, { duration: 1.5 });
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <Paper withBorder radius="md" p="xl" ta="center" ref={ref}>
      <Text fz="3rem">{icon}</Text>
      <Text fz="2rem" fw={700} mt="sm">
        {displayValue}+
      </Text>
      <Text c="dimmed" fz="sm">
        {description}
      </Text>
    </Paper>
  );
}
