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
    video:
      "https://api.freeflex.com.au/storage/v1/object/public/transform/Pong%2025%20promo%202.mp4",
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
    link: "https://www.rbc.org.au/wordpress/",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-alpha-interview-1-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-alpha-interview-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-alpha-interview-3-min.png",
    ],
    description: [
      "For their 2025 alpha launch, Rostrevor Baptist church decided to create a relaxed, interview style welcome video.",
      "The video is designed to help people who have never attended an alpha course feel welcomed, and know exactly what to expect!",
    ],
  },
  {
    id: 3,
    type: "software",
    name: "FreeFlex app",
    link: "www.freeflex.com.au",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/2.jpg`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/1.jpg",
    ],
    description: [
      "This one is a bit of a personal project for us!",
      "FreeFlex is a Freelancer's admin dream, where they can organise projects, keep track of budget and stay on top of clients.",
    ],
  },
  {
    id: 4,
    type: "media",
    name: "RBC Easter Service promo",
        link: "https://www.rbc.org.au/wordpress/",

    video:
      "https://api.freeflex.com.au/storage/v1/object/public/transform/RBC%20Easter%20Spoken%20Word%20-%20Ben%20-%20v3.mp4",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/RBC-spoken-1-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/rbc-spoken-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/rbc-spoken-3-min.png",
    ],
    description: [
      "For Rostrevor Baptist Church's 2025 alpha campaign, they decided to create a couple of simple but really engaging dramatic videos.",
      "These videos were used primarily on their social media accounts in the lead up to the weekend!",
    ],
  },
  {
    id: 5,
    type: "media",
    name: "Baptist Care",
    link: "https://tumbelinfarm.org.au/",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/tumb-farm-3-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/tumb-farm-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/tumb-farm-4-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/t-farm-1-min.jpg",
    ],
    description: [
      "We interviewed a client of Baptist Care, to help the organisation raise money to put up a new shed on their property.",
      "The video was played live at several events to encourage people to donate towards the project.",
    ],
  },
  {
    id: 6,
    type: "media",
    name: "KBC Alpha Marriage promos",
    link: "https://kingsbaptist.org.au/",
    images: [
      `https://api.freeflex.com.au/storage/v1/object/public/transform/images/Kings-alpha-marriage-1-min.png`,
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-alpha-marriage-2-min.png",
      "https://api.freeflex.com.au/storage/v1/object/public/transform/images/kings-alpha-marraige-3-min.png",
    ],
    description: [
      "A series of couch couple interviews to help King's Baptist Church increase number of signups to the 2025 alpha marriage course.",
      "The course went on to sell out completely!",
    ],
  },
];

export const CONTACT = { email: "isaac@lightworksproductions.au" };
