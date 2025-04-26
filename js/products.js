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
 },
 {
    id: 3,
    name: "Aperiam a exercitati",
    description: "Voluptas ex aut comm",
    base_price: 25,
    base_shipping_cost: 51,
    free_shipping: false,
    sku: "Omnis ab rem obcaeca",
    slug: "new-product",
    brand: "Pariatur Amet fugi",
    rating: 0,
    reviews_count: 0,
    status: "draft",
    isFeatured: false,
    isOnSale: true,
    requiresShipping: true,
    requiresInventoryTracking: false,
    stock: 0,
    hasVariants: false,
    totalVariantStock: 0,
    lowStockThreshold: 5,
    features: {},
    images: [
      "https://raw.githubusercontent.com/Adel-Kazem/subdomain-blueJean/main/products_images/belt-wolf-of-wallstreet-leonardo-di-caprio-v0-qd479m2ochjb1.webp"
    ],
    options: {},
    option_images: {},
    variant_images: {},
    option_variants_stock: {},
    option_price_adjustments: {},
    option_shipping_adjustments: {},
    weight: {
      value: 18,
      unit: "oz"
    },
    dimensions: {
      length: 37,
      width: 31,
      height: 38,
      unit: "mm"
    },
    option_dimension_overrides: {},
    categories: [],
    createdAt: "2025-04-26T08:24:46.234Z",
    updatedAt: "2025-04-26T08:24:46.233Z"
 }
];