// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";

const associationName = (
  <span>
    The MES College Alumni Association
    <FontAwesomeIcon
      icon={faRegistered}
      style={{ verticalAlign: "super", fontSize: "12px" }}
    />
  </span>
);

const collegeName = "MES College of Arts, Commerce & Science";

const officialEmail = "contact@mesalumniassociation.com";

const officialPhone = "9480797323";

const collegeAddress1 =
  "Vidyasagara Prof. M.P.L Sastry Road, 15th Cross, 10th Main,";

const collegeAddress2 = "Malleshwaram, Bengaluru - 560003";

const facebookProfile =
  "https://www.facebook.com/MES-Alumni-Association-107734431555722/";
const twitterProfile = "https://twitter.com/AlumniMes?s=08";
const instagramProfile = "https://www.instagram.com/mes_alumni_association/";

export {
  associationName,
  collegeName,
  collegeAddress1,
  collegeAddress2,
  officialEmail,
  officialPhone,
  facebookProfile,
  twitterProfile,
  instagramProfile,
};
