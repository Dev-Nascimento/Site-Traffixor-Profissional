export type NicheTab = 'b2b' | 'b2c' | 'infoproducer';
export type CodeTab = 'curl' | 'node' | 'python';
export type PricingMode = 'monthly' | 'annual';

export interface Plan {
  name: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
}