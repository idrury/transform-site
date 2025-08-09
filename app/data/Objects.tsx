import { Project } from "./CommonTypes";

export const tabColors = {
  design: "var(--thirdColor)",
  media: "var(--primaryColor)",
  software: "var(--secondaryColor)",
};

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: "The Great Tim Tam Experiment",
    images: [
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/tim%20tam%203.png`,
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/tim%20tam%202.png`,
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/tim%20tam%201.png`,
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/tim-tam-4.png",
    ],
    type: "media",
    description: [
      "Part of Crossover Australia's 2025 campaign, The Great Tim Tam Experiement is a light-hearted video which we created to help Crossover share about God's love in an innovative way.",
      "We subtitled the video in 5 different languages.",
    ],
    link: "https://www.crossover.org.au",
  },
  {
    id: 1,
    type: "media",
    name: "King's Ping-pong-a-thon promo",
    images: [
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/kings-pong-2.png`,
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/kings-pong-1.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/kings-pong-3.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/kings-pong-4.png",
    ],
    description: ["Desk Setup"],
  },
  {
    id: 2,
    name: "RBC Alpha promo",
    type: "media",
    images: [
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/RBC-alpha-interview-1.png`,
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/RBC-alpha-interview-2.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/RBC-alpha-interview-3.png",
    ],
    description: ["Waterfall"],
  },
    {
    id: 3,
    type: "software",
    name: "FreeFlex app",
    images: [
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/freeflex-1.png`,
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/freeflex-budget.png",
    ],
    description: ["Strawberries"],
  },
  {
    id: 4,
    type: "media",
    name: "RBC Easter Service promo",
    images: [
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/RBC-spoken-1.png`,
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/rbc-spoken-2.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/rbc-spoken-3.png",
    ],
    description: ["Strawberries"],
  },
  {
    id: 5,
    type: "media",
    name: "Baptist Care - Tumbelin farm",
    images: [
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/tumb-farm-3.png`,
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/tumb-farm-2.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/tumb-farm-4.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/t-farm-1.jpg",
    ],
    description: ["Strawberries"],
  },
  {
    id: 6,
    type: "media",
    name: "KBC Alpha Marriage promos",
    images: [
      `https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/Kings-alpha-marriage-1.png`,
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/kings-alpha-marriage-2.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/kings-alpha-marraige-3.png",
      "https://xpifawxwcwazatwwhcpf.supabase.co/storage/v1/object/public/data/images/kings-alpha-marriage-4.png",
    ],
    description: ["Strawberries"],
  },
];
