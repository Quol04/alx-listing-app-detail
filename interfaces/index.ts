import { ReactNode } from "react";

export interface PropertyProps{
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
      };
      rating: number;
      category: string[];
      price: number;
      offers: {
        bed: string;
        shower: string;
        occupants: string;
      };
      image: string;
      description: string;
      discount: string;

}

export interface LayoutProps {
    children: ReactNode;
  }

export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'white' | 'blue' | 'orange' | 'green'
  action?: () => void
}

//     name: string,
//     address: Address,
//     rating: number,
//     category: Category,
//     price: number,
//     offers: Offers,
//     image:string ,
//     discount: string,
// }

// export interface Address {
//       state: string,
//       city: string,
//       country: string,
// }
// export interface Category{
//     // ["Luxury Villa", "Pool", "Free Parking"]
// }

// export interface Offers{
//     bed: string,
//     shower: string,
//     occupants: string,

