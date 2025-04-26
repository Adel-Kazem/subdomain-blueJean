const PRODUCTS = [
 {
    id: 2,
    name: "Sirloin Steak",
    description: "A leaner cut that still delivers robust beef flavor. Our sirloin steaks are hand-selected for consistent quality and perfect thickness.",
    base_price: 28.99,
    base_shipping_cost: 5.99,
    free_shipping: false,
    sku: "BEEF-SIR-002",
    slug: "sirloin-steak",
    brand: "Premium Meats",
    rating: 4.6,
    reviews_count: 35,
    status: "active",
    isFeatured: true,
    isOnSale: false,
    requiresShipping: true,
    requiresInventoryTracking: true,
    stock: 25,
    hasVariants: true,
    totalVariantStock: 25,
    lowStockThreshold: 5,
    features: {
      grade: "Choice grade beef",
      flavor: "Lean yet flavorful",
      aging: "Aged for 21 days",
      cutting: "Consistent 1-inch thickness",
      packaging: "Individually vacuum-sealed"
    },
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    options: {
      weight: [
        "8oz",
        "10oz",
        "12oz"
      ]
    },
    option_images: {},
    variant_images: {},
    option_variants_stock: {
      "8oz": 8,
      "10oz": 8,
      "12oz": 9
    },
    option_price_adjustments: {
      weight: {
        "10oz": 8,
        "12oz": 15
      }
    },
    option_shipping_adjustments: {},
    weight: {
      value: 0.5,
      unit: "lb"
    },
    dimensions: {
      length: 10,
      width: 6,
      height: 2,
      unit: "in"
    },
    option_dimension_overrides: {
      weight: {
        "8oz": {
          weight: {
            value: 0.5,
            unit: "lb"
          }
        },
        "10oz": {
          weight: {
            value: 0.625,
            unit: "lb"
          }
        },
        "12oz": {
          weight: {
            value: 0.75,
            unit: "lb"
          }
        }
      }
    },
    categories: [
      1,
      2,
      3
    ],
    upselling: [
      1,
      3
    ],
    crossSelling: [
      5,
      6
    ],
    relatedProducts: [
      1
    ],
    createdAt: "2025-01-15T00:00:00Z",
    updatedAt: "2025-04-05T00:00:00Z"
 }
];