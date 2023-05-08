import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-react-core";

export const styles = {
  closed: css({
    display: "none",
  }),
  root: css({
    backgroundColor: theme.colors.atmo1,
    right: 0,
    display: "flex",
    width: 390,
    flexDirection: "column",
    gap: theme.space.sm,
    padding: theme.space.sm,
    paddingRight: theme.space.md,
    position: "fixed",
    zIndex: theme.zIndices.overlay,
    height: "100vh",
    boxShadow: `-4px 0px 10px 1px rgba(125,125,125,0.12)`,
    overflowY: "scroll",
  }),
  label: css({
    ...theme.typography.sectionTitle,
    textTransform: "uppercase",
  }),
  themeName: css({
    display: "flex",
    gap: 10,
    alignItems: "center",
  }),
  themeNameInput: css({
    width: "100%",
  }),
  themeBase: css({
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
  }),
  codeEditor: css({
    ".margin, .margin-view-overlays": {
      width: "24px!important",
    },
    ".line-numbers": {
      width: "19px!important",
    },
    ".monaco-scrollable-element": {
      left: "24px!important",
      width: "318px!important",
    },
  }),
};
