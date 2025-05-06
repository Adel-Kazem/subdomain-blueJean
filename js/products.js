const PRODUCTS = [
 {
 id: 1,
 name: "Prime Ribeye Steakd",
 description: "Our premium ribeye steak is perfectly marbled for exceptional flavor and tenderness. Ideal for grilling or pan-searing to medium-rare perfection.",
 base_price: 35.99,
 base_shipping_cost: 5.99,
 free_shipping: false,
 sku: "BEEF-RIB-001",
 slug: "prime-ribeye-steak",
 brand: "Premium Meats",
 rating: 4.8,
 reviews_count: 48,
 status: "active",
 isFeatured: true,
 isOnSale: false,
 requiresShipping: true,
 requiresInventoryTracking: true,
 stock: 0,
 hasVariants: true,
 totalVariantStock: 12,
 lowStockThreshold: 3,
 features: {
  grade: "Prime grade beef",
  marbling: "Exceptional marbling",
  aging: "Wet-aged for 28 days",
  preparation: "Expertly trimmed",
  packaging: "Vacuum-sealed for freshness"
 },
 images: [
  "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
 ],
 options: {
  weight: [
   "8oz",
   "12oz",
   "16oz"
  ]
 },
 option_images: {},
 variant_images: {},
 option_variants_stock: {
  "8oz": 4,
  "12oz": 4,
  "16oz": 4
 },
 option_price_adjustments: {
  weight: {
   "12oz": 12,
   "16oz": 24
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
   "12oz": {
    weight: {
     value: 0.75,
     unit: "lb"
    }
   },
   "16oz": {
    weight: {
     value: 1,
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
  3
 ],
 crossSelling: [
  5,
  6
 ],
 relatedProducts: [
  2
 ],
 createdAt: "2025-01-01T00:00:00Z",
 updatedAt: "2025-04-26T13:57:40.986Z"
 },
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
 name: "testing caching busting",
 description: "Ea vitae id fugit ",
 base_price: 10,
 base_shipping_cost: 0,
 free_shipping: true,
 sku: "Ea error id unde su",
 slug: "new-product",
 brand: "In quis expedita quo",
 rating: 0,
 reviews_count: 0,
 status: "draft",
 isFeatured: true,
 isOnSale: true,
 requiresShipping: true,
 requiresInventoryTracking: false,
 stock: 0,
 hasVariants: false,
 totalVariantStock: 0,
 lowStockThreshold: 5,
 features: {},
 images: [
  "https://raw.githubusercontent.com/Adel-Kazem/subdomain-blueJean/main/products_images/Belts-Style-Image-3.jpg",
  "https://raw.githubusercontent.com/Adel-Kazem/subdomain-blueJean/main/products_images/belt-wolf-of-wallstreet-leonardo-di-caprio-v0-qd479m2ochjb1.webp"
 ],
 options: {},
 option_images: {},
 variant_images: {},
 option_variants_stock: {},
 option_price_adjustments: {},
 option_shipping_adjustments: {},
 weight: {
  value: 49,
  unit: "kg"
 },
 dimensions: {
  length: 92,
  width: 2,
  height: 23,
  unit: "cm"
 },
 option_dimension_overrides: {},
 categories: [],
 createdAt: "2025-05-06T12:02:44.392Z",
 updatedAt: "2025-05-06T12:02:44.392Z"
 },
 {
 id: 4,
 name: "testing combined product & category save",
 description: "Placeat amet ipsam",
 base_price: 11,
 base_shipping_cost: 0,
 free_shipping: true,
 sku: "Non inventore quis t",
 slug: "new-product",
 brand: "Aperiam qui delectus",
 rating: 0,
 reviews_count: 0,
 status: "draft",
 isFeatured: true,
 isOnSale: true,
 requiresShipping: false,
 requiresInventoryTracking: true,
 stock: 0,
 hasVariants: false,
 totalVariantStock: 0,
 lowStockThreshold: 5,
 features: {},
 images: [],
 options: {},
 option_images: {},
 variant_images: {},
 option_variants_stock: {},
 option_price_adjustments: {},
 option_shipping_adjustments: {},
 weight: {
  value: 83,
  unit: "oz"
 },
 dimensions: {
  length: 63,
  width: 28,
  height: 82,
  unit: "cm"
 },
 option_dimension_overrides: {},
 categories: [
  2
 ],
 createdAt: "2025-05-06T13:23:17.490Z",
 updatedAt: "2025-05-06T13:25:15.491Z"
 },
 {
 id: 5,
 name: "New Product 222333544",
 description: "",
 base_price: 0,
 base_shipping_cost: 0,
 free_shipping: true,
 sku: "PRD-005",
 slug: "new-product",
 brand: "",
 rating: 0,
 reviews_count: 0,
 status: "active",
 isFeatured: false,
 isOnSale: false,
 requiresShipping: true,
 requiresInventoryTracking: true,
 stock: 0,
 hasVariants: false,
 totalVariantStock: 0,
 lowStockThreshold: 5,
 features: {},
 images: [],
 options: {},
 option_images: {},
 variant_images: {},
 option_variants_stock: {},
 option_price_adjustments: {},
 option_shipping_adjustments: {},
 weight: {
  value: 0,
  unit: "kg"
 },
 dimensions: {
  length: 0,
  width: 0,
  height: 0,
  unit: "cm"
 },
 option_dimension_overrides: {},
 categories: [],
 createdAt: "2025-05-06T13:26:33.880Z",
 updatedAt: "2025-05-06T13:34:58.956Z"
 },
 {
 id: 6,
 name: "New Product33222",
 description: "",
 base_price: 0,
 base_shipping_cost: 0,
 free_shipping: true,
 sku: "PRD-006",
 slug: "new-product",
 brand: "",
 rating: 0,
 reviews_count: 0,
 status: "active",
 isFeatured: false,
 isOnSale: false,
 requiresShipping: true,
 requiresInventoryTracking: true,
 stock: 0,
 hasVariants: false,
 totalVariantStock: 0,
 lowStockThreshold: 5,
 features: {},
 images: [],
 options: {},
 option_images: {},
 variant_images: {},
 option_variants_stock: {},
 option_price_adjustments: {},
 option_shipping_adjustments: {},
 weight: {
  value: 0,
  unit: "kg"
 },
 dimensions: {
  length: 0,
  width: 0,
  height: 0,
  unit: "cm"
 },
 option_dimension_overrides: {},
 categories: [],
 createdAt: "2025-05-06T13:27:57.904Z",
 updatedAt: "2025-05-06T13:31:30.037Z"
 },
 {
 id: 8,
 name: "New Product444",
 description: "",
 base_price: 0,
 base_shipping_cost: 0,
 free_shipping: true,
 sku: "PRD-008",
 slug: "new-product",
 brand: "",
 rating: 0,
 reviews_count: 0,
 status: "active",
 isFeatured: false,
 isOnSale: false,
 requiresShipping: true,
 requiresInventoryTracking: true,
 stock: 0,
 hasVariants: false,
 totalVariantStock: 0,
 lowStockThreshold: 5,
 features: {},
 images: [],
 options: {},
 option_images: {},
 variant_images: {},
 option_variants_stock: {},
 option_price_adjustments: {},
 option_shipping_adjustments: {},
 weight: {
  value: 0,
  unit: "kg"
 },
 dimensions: {
  length: 0,
  width: 0,
  height: 0,
  unit: "cm"
 },
 option_dimension_overrides: {},
 categories: [],
 createdAt: "2025-05-06T13:31:37.713Z",
 updatedAt: "2025-05-06T13:31:37.713Z"
 }
];