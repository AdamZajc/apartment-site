import { FaSwimmingPool } from "react-icons/fa";
import { FaCar, FaCouch } from "react-icons/fa6";
import { TbMicrowave } from "react-icons/tb";
import {
  MdOutlineKingBed,
  MdLocalLaundryService,
  MdLandscape,
} from "react-icons/md";
import { PiBathtubBold } from "react-icons/pi";

export const data = {
  appName: "ReApartment",
  colors: {
    primary: "#65ae84",
    secondary: "#cdf4dd",
    accent: "#4489bb",
  },
  navbar: {
    links: [
      {
        text: "Overview",
        href: "/",
      },
      {
        text: "Rooms",
        href: "/rooms",
      },
      {
        text: "Neighborhood",
        href: "/neighborhood",
      },
      {
        text: "Attractions",
        href: "/attractions",
      },
    ],
  },
  included: [
    {
      text: "Living Room",
      icon: <FaCouch />,
    },
    {
      text: "2 Bedrooms",
      icon: <MdOutlineKingBed />,
    },
    {
      text: "2 Bathrooms",
      icon: <PiBathtubBold />,
    },
    {
      text: "Kitchen",
      icon: <TbMicrowave />,
    },
    {
      text: "Laundry Room",
      icon: <MdLocalLaundryService />,
    },
    {
      text: "Swimming Pool",
      icon: <FaSwimmingPool />,
    },
    {
      text: "20m² Terrace",
      icon: <MdLandscape />,
    },
    {
      text: "Parking Lot",
      icon: <FaCar />,
    },
  ],
  rooms: [
    {
      type: "2 Bedrooms",
      description: "",
    },
  ],
  attractions: [
    {
      name: "Heladería Oasis",
      location: "P.º Marítimo Rey de España, 100, Fuengirola",
    },
    {
      name: "Asian Mister Restaurant",
      location: "Av. de España, 27, Calahonda",
    },
  ],
  footer: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed posuere neque. In dignissim odio eget ligula lacinia, eu feugiat dui maximus. Mauris efficitur erat sit amet leo iaculis mollis.",
    contact: {
      phone: "+48 695 945 249",
      email: "re.casa.vacacional@gmail.com",
    },
  },
};
