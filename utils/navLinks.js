// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faGraduationCap,
  faUserFriends,
  faPrayingHands,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";

// Link objects
const home = {
  path: "Home",
  url: "/",
  icon: <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.5rem" }} />,
};

const welcome = {
  path: "Welcome",
  url: "/#welcome-letter",
  icon: (
    <FontAwesomeIcon icon={faPrayingHands} style={{ fontSize: "1.5rem" }} />
  ),
};

const pricing = {
  path: "Membership",
  url: "/pricing",
  icon: (
    <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: "1.5rem" }} />
  ),
};

const alumniSpeak = {
  path: "Alumni Speak",
  url: "/testimonials",
  icon: <FontAwesomeIcon icon={faUserFriends} style={{ fontSize: "1.5rem" }} />,
};

const famousAlumni = {
  path: "Who's Who",
  url: "/famousalumni",
  icon: <FontAwesomeIcon icon={faStar} style={{ fontSize: "1.5rem" }} />,
};

const gallery = {
  path: "Gallery",
  url: "/gallery",
  icon: <FontAwesomeIcon icon={faImages} style={{ fontSize: "1.5rem" }} />,
};

const about = {
  path: "About the Association",
  url: "/about",
  icon: <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "1.5rem" }} />,
};

const contact = {
  path: "Contact Us",
  url: "/contact",
  icon: <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.5rem" }} />,
};

const navLinks = {
  "/": [welcome, pricing, alumniSpeak, famousAlumni, gallery, about, contact],
  "/register": [home, pricing, alumniSpeak, famousAlumni, about, contact],
  "/pricing": [home, alumniSpeak, famousAlumni, about, contact],
  "/about": [home, pricing, contact],
  "/contact": [home, pricing, about],
  "/famousalumni": [home, pricing, alumniSpeak, gallery, about, contact],
  "/404": [home, pricing, about, contact],
  "/testimonials": [home, pricing, famousAlumni, gallery, about, contact],
  "/gallery": [home, pricing, famousAlumni, alumniSpeak, about, contact],
  "/card/[id]": [home],
  "/certificate/[id]": [home],
  "/paymentinfo/[email]": [
    welcome,
    pricing,
    alumniSpeak,
    famousAlumni,
    gallery,
    about,
    contact,
  ],
  "/alumniassndashboard": [home, about, contact],
  "/dashboard/[admin]": [home, about, contact],
};

export default navLinks;
