export interface IWishlistItem {
  productId: string;
  addedAt?: Date;
}

export interface IWishlist {
  userId: string;
  items: IWishlistItem[];
}