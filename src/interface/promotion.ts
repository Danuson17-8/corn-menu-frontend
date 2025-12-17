export interface Promotion {
  id: string;
  title: string;
  description?: string;
  image: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  link?: string;
}