import { CSSProperties } from 'react';

export interface GlamCSProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: GlamCSCategory;
}

export interface GlamCSCategory {
    id: string;
    name: string;
}

export interface GlamCSUser {
    id: string;
    name: string;
    email: string;
    password: string;
}

export const COLORS = {
    primary: '#FFA500', // Orange
    secondary: '#FFFFFF', // White
};

export const STYLES: { [key: string]: CSSProperties } = {
    header: {
        backgroundColor: COLORS.primary,
        color: COLORS.secondary,
        padding: '20px',
        textAlign: 'center',
        fontSize: '2rem',
        fontFamily: 'Arial, sans-serif',
    },
    button: {
        backgroundColor: COLORS.primary,
        color: COLORS.secondary,
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'transform 0.3s',
    },
    buttonHover: {
        transform: 'scale(1.05)',
    },
    productCard: {
        border: 1px solid ${COLORS.primary},
        borderRadius: '10px',
        padding: '15px',
        backgroundColor: COLORS.secondary,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
};

/
 * Utility function to concatenate class names for styling components in GlamCS.
 * 
 * @param {...string[]} classNames - The class names to concatenate.
 * @returns {string} - The concatenated class names.
 */
export const cn = (...classNames: string[]): string => {
    return classNames.filter(Boolean).join(' ');
};

/
 * Formats the price for GlamCS products to include currency symbol and two decimal places.
 * 
 * @param price - The price of the product.
 * @returns {string} - The formatted price string.
 */
export const formatPrice = (price: number): string => {
    return $${price.toFixed(2)};
};

/
 * Formats the product description for GlamCS, ensuring it adheres to the luxury branding.
 * 
 * @param description - The raw description input for a product.
 * @returns {string} - The formatted description string suitable for high-end cosmetics branding.
 */
export const formatDescription = (description: string): string => {
    return description.charAt(0).toUpperCase() + description.slice(1).trim();
};

// Exporting utility functions and types for GlamCS
export { GlamCSProduct, GlamCSCategory, GlamCSUser };