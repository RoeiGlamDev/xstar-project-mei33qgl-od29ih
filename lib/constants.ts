export const BRAND_NAME = "GlamCS"; // The official brand name for the cosmetics line

export const COLORS = {
    PRIMARY: "#FFA500", // Orange color for the brand
    SECONDARY: "#FFFFFF", // White color for the brand
};

export const CONFIG = {
    // Configuration for the GlamCS application
    websiteTitle: "GlamCS - Elevate Your Beauty",
    tagline: "Discover Your Glamour with GlamCS",
    defaultLanguage: "en-US",
    currency: "USD",
    contactEmail: "support@glamcs.com",
    socialMediaLinks: {
        facebook: "https://facebook.com/glamcs",
        instagram: "https://instagram.com/glamcs",
        twitter: "https://twitter.com/glamcs",
    },
};

// Interface for product details in the GlamCS cosmetics line
export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the cosmetic product
    description: string; // Description of the product
    price: number; // Price of the product
    category: string; // Category of the product (e.g., lipstick, foundation)
    imageUrl: string; // URL for the product image
    stock: number; // Number of items in stock
}

// Example of a product using the Product interface
export const exampleProduct: Product = {
    id: "001",
    name: "Luxury Lipstick",
    description: "Experience the elegance of rich, vibrant color with our Luxury Lipstick.",
    price: 29.99,
    category: "Lipstick",
    imageUrl: "https://example.com/images/luxury-lipstick.jpg",
    stock: 150,
};