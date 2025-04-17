export interface SignUp {
  name: string;
  password: string;
  email: string;
}

export interface LogIn {
  email: string;
  password: string;
}

export interface AddProduct {
  productName: string;
  productPrice: string;
  category: string;
  description: string;
  img: string;
  id: string;
}

export interface Order {
  id?: string;
  userId: string;
  name: string;
  address: string;
  phone: string;
  cart: any[]; // or your specific CartItem[]
  totalPrice: number;
  placedAt: Date;
}

