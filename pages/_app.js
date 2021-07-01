import { useEffect } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import SiteState from "../context/SiteState";
import smoothscroll from "smoothscroll-polyfill";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

// Component imports
const Layout = dynamic(() => import("../components/layout/Layout"), {
  ssr: false,
});

// Material UI imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito Sans",
    h1: { fontFamily: "Nunito Sans", fontWeight: 800 },
    h2: {
      fontFamily: "Nunito Sans",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "Nunito Sans",
      fontWeight: 800,
    },
    h4: {
      fontFamily: "Nunito Sans",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.1rem",
    },
  },
  palette: {
    primary: {
      main: "#b9ac92",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#fecb89",
    },
    error: {
      main: "#f21170",
    },
    warning: {
      main: "#b9ac92",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  shape: {
    borderRadius: 7,
  },
  overrides: {
    MuiStepIcon: {
      text: {
        color: "#FFFFFF",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&:hover $notchedOutline": {
          borderColor: "#87431d",
        },
      },
    },
  },
});

// Media queries
theme.typography.h1 = {
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
};

theme.typography.h2 = {
  fontSize: "2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

theme.typography.h3 = {
  fontSize: "1.75rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.25rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
};

theme.typography.h6 = {
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const pathname = router.pathname;

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <SiteState>
      <ThemeProvider theme={theme}>
        <Layout pathname={pathname}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnHover
        transition={Zoom}
      />
    </SiteState>
  );
}

export default MyApp;
