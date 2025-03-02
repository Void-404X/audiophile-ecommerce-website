import { create } from "zustand";

import xx992 from "../assets/icons/headphones_xx992_phone.svg";
import xx991 from "../assets/icons/headphones_xx991_phone.svg";
import xx59 from "../assets/icons/headphones_xx59_phone.svg";

import first_xx99 from "../assets/icons/xx99_photo_detail_first.svg";
import second_xx99 from "../assets/icons/xx99_photo_detail_second.svg";
import third_xx99 from "../assets/icons/xx99_photo_detail_third.svg";

import first_xx99_1 from "../assets/icons/xx99_1_photo_detail_first.svg";
import second_xx99_1 from "../assets/icons/xx99_1_photo_detail_second.svg";
import third_xx99_1 from "../assets/icons/xx99_1_photo_detail_third.svg";


interface Headphone {
  id: number;
  name: string;
  image: string;
  tag?: string;
  description: string;
  buttonLabel: string;
  price: number;
  images: string[];
  features1: string;
  features2: string;
  inTheBox: { quantity: number; item: string }[];
  reverse?: boolean;
}

interface HeadphonesState {
  headphonesData: Headphone[];
  currentData: Headphone[];
  setHeadphonesData: (newData: Headphone[]) => void;
  setCurrentData: (headphone: Headphone) => void;
}

const useHeadphonesStore = create<HeadphonesState>((set) => ({
  headphonesData: [
    {
      id: 1,
      name: "XX99 Mark II Headphones",
      image: xx992,
      tag: "NEW PRODUCT",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      buttonLabel: "SEE PRODUCT",
      price: 2999,
      images: [first_xx99, second_xx99, third_xx99],
      features1:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort...",
      features2:
        "The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world...",
      inTheBox: [
        { quantity: 1, item: "Headphone Unit" },
        { quantity: 2, item: "Replacement Earcups" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 5m Audio Cable" },
        { quantity: 1, item: "Travel Bag" },
      ],
    },
    {
      id: 2,
      name: "XX99 Mark I Headphones",
      image: xx991,
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction...",
      buttonLabel: "SEE PRODUCT",
      reverse: true,
      price: 1750,
      images: [first_xx99_1, second_xx99_1, third_xx99_1],
      features1:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise...",
      features2:
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element...",
      inTheBox: [
        { quantity: 1, item: "Headphone Unit" },
        { quantity: 2, item: "Replacement Earcups" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 5m Audio Cable" },
      ],
    },
    {
      id: 3,
      name: "XX59 Headphones",
      image: xx59,
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones...",
      buttonLabel: "SEE PRODUCT",
      price: 899,
      images: ["image1.png", "image2.png", "image3.png"],
      features1:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere...",
      features2:
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling...",
      inTheBox: [
        { quantity: 1, item: "Headphone Unit" },
        { quantity: 2, item: "Replacement Earcups" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 5m Audio Cable" },
      ],
    },
  ],

  currentData: [],

  setHeadphonesData: (newData) => set({ headphonesData: newData }),

  setCurrentData: (headphone) => set({ currentData: [headphone] }), // Sets the clicked item
}));

export default useHeadphonesStore;
