export interface Product {
  name: string;
  variety: string;
  price: string;
  image: string;
  description: string;
}

export const products = {
  fruitTrees: [
    {
      name: "Premium Apple Tree",
      variety: "Honeycrisp",
      price: "$89.99",
      image: "./images/premium_apple_tree.webp",
      description: "Sweet, crisp apples perfect for eating fresh"
    },
    {
      name: "Dwarf Peach Tree",
      variety: "Elberta",
      price: "$79.99",
      image: "./images/dwarf_peach_tree.webp",
      description: "Juicy peaches in compact size"
    },
    {
      name: "Cherry Tree",
      variety: "Bing Sweet",
      price: "$94.99",
      image: "./images/cherry_tree.webp",
      description: "Dark red, sweet cherries"
    }
  ],
  evergreen: [
    {
      name: "Blue Spruce",
      variety: "Colorado Blue",
      price: "$124.99",
      image: "./images/blue_spruce.webp",
      description: "Majestic blue-silver needles"
    },
    {
      name: "Fraser Fir",
      variety: "Premium Grade",
      price: "$139.99",
      image: "./images/fraser_fir.webp",
      description: "Classic Christmas tree favorite"
    },
    {
      name: "Pine Tree",
      variety: "Eastern White",
      price: "$89.99",
      image: "./images/pine_tree.webp",
      description: "Fast-growing, soft needles"
    }
  ],
  shrubs: [
    {
      name: "Hydrangea",
      variety: "Blue Endless Summer",
      price: "$49.99",
      image: "./images/hydrangea.webp",
      description: "Beautiful blue blooms all season"
    },
    {
      name: "Rose Bush",
      variety: "Knockout Red",
      price: "$34.99",
      image: "./images/rose_bush.webp",
      description: "Disease-resistant, continuous blooms"
    },
    {
      name: "Boxwood",
      variety: "Green Mountain",
      price: "$29.99",
      image: "./images/boxwood.webp",
      description: "Perfect for hedges and topiaries"
    }
  ],
  floweringTrees: [
    {
      name: "Cherry Blossom",
      variety: "Kwanzan",
      price: "$149.99",
      image: "./images/cherry_blossom.webp",
      description: "Stunning pink spring blooms"
    },
    {
      name: "Dogwood",
      variety: "Pink Princess",
      price: "$119.99",
      image: "./images/dogwood.webp",
      description: "Elegant pink flowering tree"
    },
    {
      name: "Magnolia",
      variety: "Southern Belle",
      price: "$159.99",
      image: "./images/magnolia.webp",
      description: "Large, fragrant white blooms"
    }
  ]
};