export interface Recipe {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  photoId: string;
  calories: number;
  description: string;
  chefId: string;
  tags: string[];
}