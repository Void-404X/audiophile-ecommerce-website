import { create } from "zustand";

import xx992 from "../assets/icons/headphones_xx992_phone.svg";
import xx991 from "../assets/icons/headphones_xx991_phone.svg";
import xx59 from "../assets/icons/headphones_xx59_phone.svg";
import zx9 from "../assets/icons/speaker_zx9.svg";
import zx7 from "../assets/icons/speaker_zx7.svg"

import first_xx99 from "../assets/icons/xx99_photo_detail_first.svg";
import second_xx99 from "../assets/icons/xx99_photo_detail_second.svg";
import third_xx99 from "../assets/icons/xx99_photo_detail_third.svg";

import first_xx99_1 from "../assets/icons/xx99_1_photo_detail_first.svg";
import second_xx99_1 from "../assets/icons/xx99_1_photo_detail_second.svg";
import third_xx99_1 from "../assets/icons/xx99_1_photo_detail_third.svg";

import first_zx9 from "../assets/icons/zx9_photo_detail_first.svg";
import second_zx9 from "../assets/icons/zx9_photo_detail_second.svg";
import third_zx9 from "../assets/icons/zx9_photo_detail_third.svg";

interface Headphone {
  id: number;
  type: string;
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
      type: "headphones",
      tag: "NEW PRODUCT",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      buttonLabel: "SEE PRODUCT",
      price: 2999,
      images: [first_xx99, second_xx99, third_xx99],
      features1:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      features2:
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
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
      type: "headphones",
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
      type: "headphones",
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



    {
      id: 4,
      name: "ZX9 SPEAKER",
      image: zx9,
      tag: "NEW PRODUCT",
      type: "speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      buttonLabel: "SEE PRODUCT",
      price: 4500,
      images: [first_zx9, second_zx9, third_zx9],
      features1:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      features2:
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      inTheBox: [
        { quantity: 2, item: "Speaker Unit" },
        { quantity: 2, item: "Speaker Cloth Panel" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 10m Audio Cable" },
        { quantity: 1, item: "10m Optical Cable" },
      ],
    },

    {
      id: 4,
      name: "ZX7 SPEAKER",
      image: zx7,
      type: "speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      buttonLabel: "SEE PRODUCT",
      price: 4500,
      images: [first_zx9, second_zx9, third_zx9],
      features1:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      features2:
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      inTheBox: [
        { quantity: 2, item: "Speaker Unit" },
        { quantity: 2, item: "Speaker Cloth Panel" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 10m Audio Cable" },
        { quantity: 1, item: "10m Optical Cable" },
      ],
    },
  ],

  currentData: [],

  setHeadphonesData: (newData) => set({ headphonesData: newData }),

  setCurrentData: (headphone) => set({ currentData: [headphone] }), // Sets the clicked item
}));

export default useHeadphonesStore;
