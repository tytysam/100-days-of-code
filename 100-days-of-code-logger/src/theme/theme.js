import chroma from "chroma-js"
import typography from "./typography.js"
import createShadows from "./shadows.js"

export const theme = {
  palette: {
    type: "dark",
    common: {
      black: "#2D2A28",
      white: "#ffffff",
    },
    primary: {
      main: "#759280",
      light: chroma("#759280").brighten().hex(),
      dark: chroma("#759280").darken().hex(),
      contrastText: "#EFE5CB",
    },
    secondary: {
      main: "#9E7454",
      contrastText: "#EFE5CB",
    },
    error: {
      main: "#ff3b18",
      contrastText: "#FFF",
    },
    warning: {
      main: "#ffbd48",
      contrastText: "#FFF",
    },
    info: {
      main: "#00B4EE",
      contrastText: "#FFF",
    },
    success: {
      main: "#1fb98c",
      contrastText: "#FFF",
    },
    text: {
      primary: "#2D2A28",
      secondary: "#9E7454",
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(255, 255, 255, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#2D2A28",
      default: "#2D2A28",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "rgba(255, 255, 255, 0.35)",
      disabledBackground: "rgba(255, 255, 255, 0.15)",
    },
  },
  shape: { borderRadius: 3 },
  typography: typography,
  maxWidth: {
    lg: 1170,
    md: 920,
    sm: 740,
  },
  props: {
    MuiAppBar: {
      elevation: 5,
    },
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application
    },
    MuiCard: {
      elevation: 0,
    },
    MuiSnackbar: {
      autoHideDuration: 6000,
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
    },
    MuiTabs: {
      variant: "fullWidth",
    },
  },
  shadows: createShadows("#2D2A28"),
  overrides: {
    MuiAppBar: {
      root: {
        background: "#ffffff !important",
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: "#9E7454",
        backgroundColor: chroma("#9E7454").alpha(0.2).hex(),
      },
    },
    MuiButton: {
      contained: { boxShadow: "none" },
      outlined: {
        border: "1px solid #FFF",
      },
      label: {
        fontWeight: 600,
      },
    },
    MuiButtonGroup: {
      contained: { boxShadow: "none" },
    },
    MuiCard: {
      root: {
        marginBottom: 16,
      },
    },
    MuiCardActions: {
      root: {
        // padding: 16,
      },
    },
    MuiCardHeader: {
      title: {
        fontSize: "1rem",
        fontWeight: 600,
      },
    },
    MuiChip: {
      label: {
        fontSize: 11,
        fontWeight: 500,
      },
    },
    MuiCircularProgress: {
      root: {
        position: "relative",
        margin: "24px 50%",
        left: "-20px",
      },
    },
    MuiDialogActions: {
      root: {
        // padding: 16,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "rgba(3, 236, 238, 0.1)",
      },
    },
    MuiFormLabel: {
      root: {
        fontWeight: 600,
        "&$focused": {
          color: "#919eab",
        },
      },
    },
    MuiIconButton: {
      root: {
        color: chroma("#C8D1DA").alpha(0.5).hex(),
      },
    },
    MuiLinearProgress: {
      root: {
        height: 12,
      },
    },
    MuiSelect: {
      icon: {
        color: "#FFF",
      },
    },
    MuiSkeleton: {
      root: {
        backgroundColor: "rgba(57,57,60, 1)",
      },
    },
    MuiTab: {
      root: {
        minWidth: "auto!important",
        fontWeight: 600,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "#00B4EE",
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      },
    },
    MuiTypography: {
      root: {
        color: "#2D2A28",
      },
      h1: {
        color: "#2D2A28",
      },
      h2: {
        color: "#EFE5CB",
      },
      h3: {
        color: "#FFFFFF",
      },
      h4: {
        color: "#FFFFFF",
      },
      h5: {
        color: "#ffffff",
      },
      h6: {
        color: "#EFE5CB",
      },
      subtitle1: {
        color: "#2D2A28",
      },
      subtitle2: {
        color: "#9E7454",
      },
      body1: {
        color: "#FFF",
      },
      body2: {
        color: "#EFE5CB",
      },
      caption: {
        color: "#919EAB",
      },
      colorTextPrimary: {
        color: "#FFF",
      },
      colorTextSecondary: {
        color: "#919EAB",
      },
    },
  },
}

export default theme
