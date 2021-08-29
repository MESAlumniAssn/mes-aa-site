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
  faCalendarAlt,
  faBlog,
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

const event = {
  path: "Events",
  url: "/events",
  icon: <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: "1.5rem" }} />,
};

const blog = {
  path: "Blog",
  url: "/blog",
  icon: <FontAwesomeIcon icon={faBlog} style={{ fontSize: "1.5rem" }} />,
};

const navLinks = {
  "/": [
    welcome,
    pricing,
    alumniSpeak,
    famousAlumni,
    gallery,
    event,
    blog,
    about,
    contact,
  ],
  "/register": [home, pricing, alumniSpeak, famousAlumni, about, contact],
  "/pricing": [home, alumniSpeak, famousAlumni, about, contact],
  "/about": [home, pricing, contact],
  "/contact": [home, pricing, about],
  "/famousalumni": [
    home,
    pricing,
    alumniSpeak,
    gallery,
    event,
    blog,
    about,
    contact,
  ],
  "/404": [home, pricing, about, contact],
  "/testimonials": [
    home,
    pricing,
    famousAlumni,
    gallery,
    event,
    blog,
    about,
    contact,
  ],
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
  "/paymentverified/[id]": [
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
  "/unsubscribe": [home, about, contact],
  "/testimonialverification/[verificationhash]": [home, about, contact],
  "/terms": [home, pricing, famousAlumni, alumniSpeak, about, contact],
  "/privacy": [home, pricing, famousAlumni, alumniSpeak, about, contact],
  "/renewal/[hash]": [home, pricing, famousAlumni, alumniSpeak, about, contact],
  "/events": [home, pricing, famousAlumni, alumniSpeak, blog, about, contact],
  "/events/[id]": [
    home,
    pricing,
    famousAlumni,
    alumniSpeak,
    blog,
    about,
    contact,
  ],
  "/blog": [home, pricing, famousAlumni, alumniSpeak, event, about, contact],
  "/blog/[slug]": [
    home,
    pricing,
    famousAlumni,
    alumniSpeak,
    event,
    about,
    contact,
  ],
};

export default navLinks;
