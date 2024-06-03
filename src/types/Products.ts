export interface productType extends productSave{
  id: string; 
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface productSave {
  name: string;
  description: string;
  price: number | string;
}