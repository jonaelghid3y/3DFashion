import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const locked = useRef(false);
  const delayChange = useRef(false);

  data.fill.classList.add('container');

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
        locked.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
        setTimeout(() => {
          locked.current = false;
        }, 100);
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current || locked.current || delayChange.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const scrollDelta = Math.abs(data.scroll.current - lastScroll.current);
    const threshold = section === 1 ? 50 : 10; // Adjust the values as needed
    if (scrollDelta < threshold) return;

    const isScrollingDown = data.scroll.current > lastScroll.current;
    const isScrollingUp = data.scroll.current < lastScroll.current;

    if (isScrollingDown && section < data.pages - 1) {
      delayChange.current = true;
      onSectionChange(section + 1);
      setTimeout(() => delayChange.current = false, 200);
    } else if (isScrollingUp && section > 0) {
      delayChange.current = true;
      onSectionChange(section - 1);
      setTimeout(() => delayChange.current = false, 200);
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
};
