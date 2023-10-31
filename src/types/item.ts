import { Section } from ".";

export type Item = {
  id: number;
  sectionId: number;
  section?: Section;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
};
