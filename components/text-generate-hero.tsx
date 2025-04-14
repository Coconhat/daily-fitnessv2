"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Join our state-of-the-art fitness center and start your journey
                to a healthier, stronger you. Expert trainers, modern equipment,
                and a supportive community await.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
