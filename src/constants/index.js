import {
  aasthalogo,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  check,
  chromecast,
  disc02,
  discord,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
} from "../assets";

import linkedin from "../assets/socials/linkedin.svg";
import naturejoy from "../assets/Naturejoy.png";
import vicuna from "../assets/VICUNA.png";
import Befree from "../assets/befree.png";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "FOr You",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  {
    id: "5",
    title: "Contact Us",
    url: "mailto:techwings01@gmail.com",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  {
    id: "0",
    title: "Aastha",
    companylogo: aasthalogo,
    url: "https://www.instagram.com/aastha.footwears?igsh=MXZra3hjaHYyaG12ZQ==",
  },

  {
    id: "1",
    title: "Befree",
    companylogo: Befree,
    url: "https://www.instagram.com/be.fee_collection2023?igsh=MXhsZWlubHRzY2cybg==",
  },

  {
    id: "2",
    title: "Naturejoy",
    companylogo: naturejoy,
    url: "https://www.instagram.com/naturejoyresort?igsh=dG4xazhtbTN1aHFk",
  },
  {
    id: "3",
    title: "Vicum",
    companylogo: vicuna,
    url: "https://www.instagram.com/vicuna_nepal?igsh=ZWw2aDNoN2Nob2U0",
  },
];

export const brainwaveServices = [
  "AI Chatbot",
  "Leveraging AI Tools",
  "AI Products",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for bussinesses looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Graphic Designing",
  },
  {
    id: "1",
    title: "Search Engine Optimization",
  },
  {
    id: "2",
    title: "Market Relevant Content",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

import multiply from "../assets/cross1.svg";
import checkmark from "../assets/checkmark.svg";

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "10% discount on yearly subscription",
    price: "5,999",
    features: [
      { id: "0", name: "FB/Insta Post", imageUrl: checkmark },
      { id: "1", name: "Caption Writing", imageUrl: checkmark },
      { id: "2", name: "Page Management", imageUrl: checkmark },
      { id: "3", name: "Cover Poster", imageUrl: checkmark },
      { id: "4", name: "Complimentary Reel", imageUrl: checkmark },
      { id: "5", name: "Monthly Reporting", imageUrl: multiply },
      { id: "6", name: "Strategic Collaboration", imageUrl: multiply },
      { id: "7", name: "Basic Page Automation", imageUrl: multiply },
      { id: "8", name: "AI Chatbot", imageUrl: multiply },
      { id: "9", name: "Boosting(Your Call)", imageUrl: checkmark },
    ],
  },
  {
    id: "1",
    title: "Standard",
    description: "10% discount on yearly subscription",
    price: "16,999",
    features: [
      { id: "0", name: "FB/Insta Post", imageUrl: checkmark },
      { id: "1", name: "Caption Writing", imageUrl: checkmark },
      { id: "2", name: "Page Management", imageUrl: checkmark },
      { id: "3", name: "Cover Poster", imageUrl: checkmark },
      { id: "4", name: "Complimentary Reel", imageUrl: checkmark },
      { id: "5", name: "Monthly Reporting", imageUrl: multiply },
      { id: "6", name: "Strategic Collaboration", imageUrl: multiply },
      { id: "7", name: "Basic Page Automation", imageUrl: multiply },
      { id: "8", name: "AI Chatbot", imageUrl: multiply },
      { id: "9", name: "Boosting(Your Call)", imageUrl: checkmark },
    ],
  },
  {
    id: "2",
    title: "Premium",
    description: "10% discount on yearly subscription",
    price: "26,999",
    features: [
      { id: "0", name: "FB/Insta Post", imageUrl: checkmark },
      { id: "1", name: "Caption Writing", imageUrl: checkmark },
      { id: "2", name: "Page Management", imageUrl: checkmark },
      { id: "3", name: "Cover Poster", imageUrl: checkmark },
      { id: "4", name: "Complimentary Reel", imageUrl: checkmark },
      { id: "5", name: "Monthly Reporting", imageUrl: multiply },
      { id: "6", name: "Strategic Collaboration", imageUrl: multiply },
      { id: "7", name: "Basic Page Automation", imageUrl: multiply },
      { id: "8", name: "AI Chatbot", imageUrl: multiply },
      { id: "9", name: "Boosting(Your Call)", imageUrl: checkmark },
    ],
  },
];

import digitalMarketing from "../assets/digitalmarketing.png";
import webDevelopment from "../assets/webdevelopment.png";
import videoGraphy from "../assets/video.png";
import ADS from "../assets/ads.png";
import graphicDesigning from "../assets/graphic.png";
import chatBot from "../assets/chatbot.png";

export const benefits = [
  {
    id: "0",
    title: "Digital Marketing",
    text: "Harness the power of digital channels to effectively reach and engage with your target audience.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: digitalMarketing,
    imageUrl: benefitImage2,
    address: "https://tailwindcss.com/",
  },
  {
    id: "1",
    title: "Web Development",
    text: "Build and maintain high-quality websites and web applications that deliver exceptional user experiences.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: webDevelopment,
    imageUrl: benefitImage2,
    light: true,
    address: "https://tailwindcss.com/",
  },
  {
    id: "2",
    title: "Video Production",
    text: "Create compelling video content that captivates your audience and drives engagement.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: videoGraphy,
    imageUrl: benefitImage2,
    address: "https://tailwindcss.com/",
  },
  {
    id: "3",
    title: "Commercial Ads",
    text: "Design and execute impactful commercial advertising campaigns that boost brand awareness.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: ADS,
    imageUrl: benefitImage2,
    light: true,
    address: "https://tailwindcss.com/",
  },
  {
    id: "4",
    title: "Graphic Designing",
    text: "Craft visually stunning graphics that enhance your brand’s visual identity and messaging.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: graphicDesigning,
    imageUrl: benefitImage2,
    address: "https://tailwindcss.com/",
  },
  {
    id: "5",
    title: "AI Chatbot",
    text: "Leverage advanced AI technology to provide instant, accurate responses to customer queries.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    address: "https://tailwindcss.com/",
  },
];

import youtube from "../assets/youtube.svg";

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/chilltech11/",
  },

  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/chill__tech?igsh=MWt0ZWZiaHJqMWlj",
  },

  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/chilltech2022/?paipv=0&eav=AfYMH_SGWYUmTNhrdwI1T9KsaUWxVUK2MW-1lvW5fJ-t7Bp6KT-tsbFJQc4iW9B9yvA&_rdr",
  },
  {
    id: "4",
    title: "Youtube",
    iconUrl: youtube,
    url: "https://www.youtube.com/@chillproduction9999",
  },
];
