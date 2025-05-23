import type { Cart, DoAddItemParams, SetCartItemQuantityParams, CartItem } from '@plentymarkets/shop-api';

export interface UseCartState {
  data: Cart;
  useAsShippingAddress: boolean;
  loading: boolean;
  lastUpdatedCartItem: CartItem;
}

export type GetCart = () => Promise<Cart>;
export type SetCart = (data: Cart) => void;
export type ClearCartItems = () => void;
export type AddToCart = (params: DoAddItemParams) => Promise<boolean>;
export type AddItemsToCart = (params: DoAddItemParams[]) => Promise<boolean>;
export type DeleteCartItem = (params: CartItem) => Promise<Cart>;
export type SetCartItemQuantity = (params: SetCartItemQuantityParams) => Promise<Cart>;
export type DeleteCart = () => Promise<void>;

export interface UseCart {
  data: Readonly<Ref<UseCartState['data']>>;
  useAsShippingAddress: Ref<boolean>;
  loading: Ref<boolean>;
  getCart: GetCart;
  addToCart: AddToCart;
  addItemsToCart: AddItemsToCart;
  deleteCartItem: DeleteCartItem;
  setCartItemQuantity: SetCartItemQuantity;
  setCart: SetCart;
  clearCartItems: ClearCartItems;
  lastUpdatedCartItem: Readonly<Ref<UseCartState['lastUpdatedCartItem']>>;
  cartIsEmpty: ComputedRef<boolean>;
  deleteCart: DeleteCart;
}

export type UseCartReturn = () => UseCart;
