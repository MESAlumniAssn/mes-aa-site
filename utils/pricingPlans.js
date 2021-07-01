import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const planValues = {
  annualMembershipCost: 250,
  lifetimeMembershipCost: 1000,
};

const lifetime = [
  {
    incentive: "Life membership for a one-time payment",
    icon: (
      <FontAwesomeIcon
        icon={faStar}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
        }}
      />
    ),
  },
  {
    incentive: "Membership certificate",
    icon: (
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#4aa96c",
        }}
      />
    ),
  },
  {
    incentive: "Lifetime identity card",
    icon: (
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#4aa96c",
        }}
      />
    ),
  },
  {
    incentive: "Event updates (lifetime)",
    icon: (
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#4aa96c",
        }}
      />
    ),
  },
  {
    incentive: "Discounts on merchandise and ticketed events",
    icon: (
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#4aa96c",
        }}
      />
    ),
  },
];

const annual = [
  {
    incentive: "Membership valid for one year only (renewal option available)",
    icon: (
      <FontAwesomeIcon
        icon={faStar}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
        }}
      />
    ),
  },
  {
    incentive: "Membership certificate",
    icon: (
      <FontAwesomeIcon
        icon={faTimesCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#f21170",
        }}
      />
    ),
  },
  {
    incentive: "Temporary identity card",
    icon: (
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#4aa96c",
        }}
      />
    ),
  },
  {
    incentive: "Event updates (when membership is active)",
    icon: (
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#4aa96c",
        }}
      />
    ),
  },
  {
    incentive: "Discounts on merchandise and ticketed events",
    icon: (
      <FontAwesomeIcon
        icon={faTimesCircle}
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          color: "#f21170",
        }}
      />
    ),
  },
];

export { planValues, annual, lifetime };
