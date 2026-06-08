"use client";

import { useGSAPScroll } from "@/hooks/useGSAPScroll";
import { useLenis } from "@/hooks/useLenis";

export function ScrollExperience() {
  useLenis();
  useGSAPScroll();

  return null;
}
