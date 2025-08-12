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
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/tim%20tam%203-min.png`,
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/tim%20tam%202-min.png`,
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/tim%20tam%201-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/tim-tam-4-min.png",
      
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
    video: "https://api.freeflex.com.au/storage/v1/object/public/transform/Pong%2025%20promo%202.mp4",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-pong-2-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-pong-1-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-pong-4-min.png",
    ],
    description: [
      "For King's Baptist Youth's 2025 campaign we made this fun video to encourage people to donate.",
      "The video was played in church services and youth group leading up to the event.",
      "Their ping-pong-a-thon went on to raise $3000!",
    ],
  },
  {
    id: 2,
    name: "RBC Alpha promo",
    type: "media",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-alpha-interview-1-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-alpha-interview-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-alpha-interview-3-min.png",
    ],
    description: ["Waterfall"],
  },
  {
    id: 3,
    type: "software",
    name: "FreeFlex app",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/2.jpg`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/1.jpg",
    ],
    description: ["Strawberries"],
  },
  {
    id: 4,
    type: "media",
    name: "RBC Easter Service promo",
    video: "https://api.freeflex.com.au/storage/v1/object/public/transform/RBC%20Easter%20Spoken%20Word%20-%20Ben%20-%20v3.mp4",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-spoken-1-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/rbc-spoken-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/rbc-spoken-3-min.png",
    ],
    description: ["Strawberries"],
  },
  {
    id: 5,
    type: "media",
    name: "Baptist Care - Tumbelin farm",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/tumb-farm-3-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/tumb-farm-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/tumb-farm-4-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/t-farm-1-min.jpg",
    ],
    description: ["Strawberries"],
  },
  {
    id: 6,
    type: "media",
    name: "KBC Alpha Marriage promos",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/Kings-alpha-marriage-1-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-alpha-marriage-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-alpha-marraige-3-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-alpha-marriage-4-min.png",
    ],
    description: ["Strawberries"],
  },
];

export const CONTACT = { email: "isaac@lightworksproductions.au" };
