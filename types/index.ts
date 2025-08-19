import { Product } from './product.interface';
import { User } from './user.interface';

/
 * Represents the GlamCS Cosmetics Application.
 * This module contains TypeScript types and interfaces specific to the GlamCS brand.
 * The application focuses on delivering an elegant and high-end cosmetics shopping experience.
 * 
 * @module GlamCS
 */

/
 * Interface representing a category of products in the GlamCS cosmetics line.
 */
export interface Category {
  id: string; // Unique identifier for the category
  name: string; // Name of the category (e.g., "Lipstick", "Foundation")
  description: string; // Description of the category
  products: Product[]; // List of products in this category
}

/
 * Interface representing a shopping cart for GlamCS customers.
 */
export interface ShoppingCart {
  userId: string; // Unique identifier for the user
  items: CartItem[]; // List of items in the cart
  totalAmount: number; // Total price of items in the cart
}

/
 * Interface representing an item in the shopping cart.
 */
export interface CartItem {
  product: Product; // Product being purchased
  quantity: number; // Quantity of the product
}

/
 * Interface representing customer feedback for GlamCS products.
 */
export interface Feedback {
  userId: string; // Unique identifier for the user providing feedback
  productId: string; // Unique identifier for the product being reviewed
  rating: number; // Rating given to the product (1 to 5)
  comment: string; // User's comment on the product
}

/
 * Interface representing GlamCS user profile information.
 */
export interface GlamCSUser extends User {
  favorites: Product[]; // List of favorite products for the user
  orderHistory: Order[]; // List of past orders
}

/
 * Interface representing an order placed by a GlamCS user.
 */
export interface Order {
  orderId: string; // Unique identifier for the order
  userId: string; // Unique identifier for the user who placed the order
  products: CartItem[]; // List of products in the order
  orderDate: Date; // Date when the order was placed
  totalAmount: number; // Total amount for the order
}

/
 * Interface for product details specific to GlamCS cosmetics.
 */
export interface Product {
  id: string; // Unique identifier for the product
  name: string; // Name of the product (e.g., "Velvet Matte Lipstick")
  description: string; // Detailed description of the product
  price: number; // Price of the product
  category: string; // Category to which the product belongs
  imageUrl: string; // URL for the product image
  isFeatured: boolean; // Indicates if the product is featured
} 

export { Category, ShoppingCart, CartItem, Feedback, GlamCSUser, Order, Product };