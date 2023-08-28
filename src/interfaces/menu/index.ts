import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  price: number;
  ingredients: string;
  preparation_time: number;
  user_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {
    order?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  ingredients?: string;
  user_id?: string;
  restaurant_id?: string;
}
