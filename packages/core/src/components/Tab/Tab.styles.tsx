import { CSSProperties } from "react";
import { createClasses } from "@core/utils/classes";
import { theme } from "@hitachivantara/uikit-styles";
import { outlineStyles } from "@core/utils/focusUtils";

export const { staticClasses, useClasses } = createClasses("HvTab", {
  root: {
    marginTop: "3px",
    padding: theme.tab.padding,
    minWidth: 70,
    minHeight: 32,
    textTransform: "none",
    fontFamily: theme.fontFamily.body,
    ...(theme.typography.body as CSSProperties),
    "&:hover": {
      backgroundColor: theme.tab.hoverBackgroundColor,
      borderRadius: theme.tab.hoverBackgroundBorderRadius,
      "&::after": {
        height: "1px",
        backgroundColor: theme.tab.hoverUnderlineBackgroundColor,
      },
    },
    "&$selected": {
      color: theme.typography.label.color,
      fontWeight: theme.typography.label.fontWeight,
      lineHeight: theme.typography.label.lineHeight,
      letterSpacing: theme.typography.label.letterSpacing,
    },
    "&$disabled": {
      color: theme.colors.secondary_60,
      cursor: "not-allowed",
      pointerEvents: "all",
      opacity: 1,
      "&:hover": {
        background: "none",
      },
    },
    opacity: 1,
    "&::after": {
      position: "absolute",
      left: 0,
      top: "calc(100% - 1px)",
      height: "1px",
      width: "100%",
      backgroundColor: theme.colors.atmo4,
      content: "''",
    },
    // Override Mui styling: https://mui.com/material-ui/api/tab/#css
    "& .MuiTab-iconWrapper": {
      margin: 0,
    },
  },
  focusVisible: {
    ...outlineStyles,
  },
  selected: {},
  disabled: {},
});
