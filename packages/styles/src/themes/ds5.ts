import { colors } from "../tokens/colors";
import { makeTheme } from "../makeTheme";
import { HvTheme } from "../types";

const ds5 = makeTheme((theme: HvTheme) => ({
  name: "ds5",
  colors: {
    modes: {
      dawn: {
        type: "light",
        backgroundColor: colors.light.atmo2,
        ...colors.common,
        ...colors.light,
      },
      wicked: {
        type: "dark",
        backgroundColor: colors.dark.atmo2,
        ...colors.common,
        ...colors.dark,
      },
    },
  },
  typography: {
    display: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl4,
      lineHeight: theme.lineHeights.xl4,
    },
    title1: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl3,
      lineHeight: theme.lineHeights.xl3,
    },
    title2: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl2,
      lineHeight: theme.lineHeights.xl2,
    },
    title3: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl,
      lineHeight: theme.lineHeights.xl,
    },
    title4: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.lineHeights.lg,
    },
    label: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.base,
      lineHeight: theme.lineHeights.base,
    },
    body: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.base,
      lineHeight: theme.lineHeights.base,
    },
    caption1: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.sm,
      lineHeight: theme.lineHeights.sm,
    },
    caption2: {
      color: theme.colors.acce1,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.xs,
      lineHeight: theme.lineHeights.xs,
    },
    // LEGACY
    ["5xlTitle"]: {
      color: theme.colors.acce1,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 600,
    },
    ["4xlTitle"]: {
      color: theme.colors.acce1,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 400,
    },
    xxlTitle: {
      color: theme.colors.acce1,
      fontSize: "42px",
      letterSpacing: "0.02em",
      lineHeight: "52px",
      fontWeight: 400,
    },
    lTitle: {
      color: theme.colors.acce1,
      fontSize: "32px",
      letterSpacing: "0.02em",
      lineHeight: "40px",
      fontWeight: 400,
    },
    sTitle: {
      color: theme.colors.acce1,
      fontSize: "22px",
      letterSpacing: "0.02em",
      lineHeight: "30px",
      fontWeight: 400,
    },
    xxsTitle: {
      color: theme.colors.acce1,
      fontSize: "18px",
      letterSpacing: "0.02em",
      lineHeight: "28px",
      fontWeight: 400,
    },
    sectionTitle: {
      color: theme.colors.acce1,
      fontSize: "14px",
      letterSpacing: "0.32em",
      lineHeight: "18px",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    placeholderText: {
      color: theme.colors.atmo5,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 400,
    },
    link: {
      color: theme.colors.acce2,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
  },
  dropdown: {
    borderRadius: theme.radii.base,
    headerBorder: `1px solid ${theme.colors.acce4}`,
    headerBorderHover: `1px solid ${theme.colors.acce4}`,
    disabledColor: theme.colors.atmo5,
    readOnlyBorder: `1px solid ${theme.colors.acce4}`,
    readOnlyBackgroundColor: theme.colors.atmo1,
    placeholderColor: theme.colors.acce4,
    dropdownHeaderInvalidBorder: `1px solid ${theme.colors.sema4}`,
    dropdownHeaderOpenBorder: `1px solid ${theme.colors.acce1}`,
    listBackgroundColor: theme.colors.atmo1,
    listBorder: `1px solid ${theme.colors.acce1}`,
    listBorderRadius: `0px 0px ${theme.radii.base} ${theme.radii.base}`,
    listContainerPadding: theme.space.sm,
    searchContainerMargin: theme.space.xs,
  },
  button: {
    borderRadius: theme.radii.base,
    padding: theme.spacing(["xs", "sm"]),
    marginIconRight: "0px",
    marginIconLeft: "-8px",
    semanticColor: "rgba(251, 252, 252, 0.3)",
    semanticColorDisabled: "rgba(251, 252, 252, 0.1)",
    hoverColor: theme.colors.acce2s,
    secondaryBackgroundColor: "transparent",
  },
  header: {
    color: theme.colors.acce1,
    brandColor: theme.colors.acce1,
    textColor: "string",
    height: "64px",
    backgroundColor: theme.colors.atmo1,
    secondLevelBackgroundColor: theme.colors.atmo2,
    hoverColor: theme.colors.atmo3,
    borderTopThickness: "0px",
    borderTopColor: "transparent",
    selectedItemColor: theme.colors.acce1,
    selectedItemBorderTopColor: "transparent",
    selectedItemBackgroundColor: "transparent",
    selectedItemBorderTopThickness: "0px",
    selectedItemBorderBottomColor: theme.colors.acce1,
    selectedItemBorderBottomThickness: "4px",
    shadow: "none",
  },
  card: {
    iconMargin: "0px",
    outline: `1px solid ${theme.colors.atmo4}`,
    borderRadius: `0px 0px ${theme.radii.round} ${theme.radii.round}`,
    hoverColor: theme.colors.acce2,
    backgroundColor: "transparent",
    titleVariant: "label",
    subheaderVariant: "caption1",
    subheaderColor: theme.colors.acce1,
  },
  tab: {
    padding: "0 16px",
    hoverBackgroundColor: theme.colors.acce2s,
    hoverBackgroundBorderRadius: theme.radii.base,
    hoverUnderlineBackgroundColor: theme.colors.atmo4,
  },
  list: {
    hoverColor: theme.colors.acce2s,
    disabledBackgroundColor: theme.colors.atmo3,
  },
  dialog: {
    borderRadius: theme.radii.round,
    margin: "80px",
    titleVariant: "title4",
  },
  baseCheckBox: {
    hoverColor: theme.colors.acce2s,
    borderRadius: theme.radii.base,
  },
  checkbox: {
    hoverColor: theme.colors.acce2s,
    borderRadius: theme.radii.base,
  },
  baseDropdown: {
    shadow: "none",
    placeholderColor: theme.colors.acce4,
    borderColor: theme.colors.acce4,
    hoverBorderColor: theme.colors.acce2,
    disabledBorderColor: theme.colors.atmo5,
    disabledBackgroundColor: theme.colors.atmo2,
    readOnlyBorder: `1px solid ${theme.colors.atmo5}`,
    readOnlyBackgroundColor: theme.colors.atmo2,
    openBorderColor: theme.colors.acce4,
  },
  baseRadio: {
    hoverColor: theme.colors.acce2s,
    hoverBorderRadius: theme.radii.base,
  },
  baseSwitch: {
    padding: 0,
    height: "32px",
    width: "40px",
    track: {
      opacity: 1,
      borderRadius: "15px",
      height: "16px",
      width: "32px",
      border: `solid 1px ${theme.colors.acce1}`,
      backgroundColor: theme.colors.atmo1,
      hoverBackgroundColor: "transparent",
    },
    thumb: {
      width: "12px",
      height: "12px",
      left: "-9px",
      border: `solid 1px ${theme.colors.acce1}`,
      backgroundColor: theme.colors.atmo1,
      marginLeft: "2px",
      marginTop: 0,
      boxShadow: "none",
    },
    disabled: {
      thumbBackgroundColor: theme.colors.atmo3,
      thumbBorder: `solid 1px ${theme.colors.atmo5}`,
      trackBackgroundColor: theme.colors.atmo3,
      trackBorder: `solid 1px ${theme.colors.atmo5}`,
      trackOpacity: 1,
    },
    checkedTrackBackgroundColor: theme.colors.acce1,
    hoverBackgroundColor: theme.colors.acce2s,
    hoverBaseBackgroundColor: "transparent",
    checkedOpacity: 1,
    borderRadius: theme.radii.base,
    focusBorderRadius: "8px",
  },
  baseInput: {
    underlineHeight: "0px",
    placeholderColor: theme.colors.acce4,
    borderColor: theme.colors.acce4,
    hoverColor: theme.colors.acce2,
    disabledBorderColor: theme.colors.atmo5,
    disabledTextColor: theme.colors.atmo5,
    disabledBackgroundColor: theme.colors.atmo2,
    readOnlyBorderColor: theme.colors.atmo5,
    readOnlyTextColor: theme.colors.acce4,
    readOnlyBackgroundColor: "transparent",
    multilineBorderColor: theme.colors.acce4,
    multilineDisabledBorderColor: theme.colors.atmo5,
  },
  radio: {
    hoverColor: theme.colors.acce2s,
    borderRadius: theme.radii.base,
  },
  tagsInput: {
    borderColor: theme.colors.acce4,
    disabledBackgroundColor: theme.colors.atmo2,
    readOnlyBackgroundColor: theme.colors.atmo2,
    hoverColor: theme.colors.acce2,
    readOnlyBorderColor: theme.colors.atmo5,
  },
  switch: {
    invalidPaddingBottom: "1px",
  },
  fileUploader: {
    dropZone: {
      borderColor: theme.colors.atmo5,
      backgroundColor: theme.colors.atmo1,
      borderRadius: theme.radii.round,
      borderColorDrag: theme.colors.acce2,
      borderColorDisabled: theme.colors.atmo5,
      borderType: "dashed",
    },
    fileList: {
      itemBorder: `1px solid ${theme.colors.atmo4}`,
      itemBorderRadius: `0px 0px ${theme.radii.round} ${theme.radii.round}`,
    },
    file: {
      progressHeight: "4px",
      borderWidth: "2px",
      previewContainerSize: "48px",
      imageSize: "40px",
    },
    preview: {
      buttonSize: "48px",
      overlayColor: theme.colors.acce2s,
      overlayOpacity: "0.6", // TODO: Change to 1 when acce2s is fixed and has an alpha value
      overlayBorderRadius: theme.radii.base,
    },
  },
  dropDownMenu: {
    borderRadius: theme.radii.base,
    hoverColor: theme.colors.acce2s,
    borderOpened: `1px solid ${theme.colors.acce4}`,
    borderClosed: "1px solid transparent",
    extensionHeight: "0px",
    extensionBorderColor: theme.colors.acce4,
  },
  pagination: {
    pageSizeBorderColor: theme.colors.acce1,
    pageSizeBorderRadius: theme.radii.base,
    pageJumpTextAlign: "center",
  },
  actionsGeneric: { buttonSize: "md" },
  bulkActions: {
    separatorDisplay: "flex",
    border: `1px solid ${theme.colors.atmo4}`,
    backgroundColor: theme.colors.atmo2,
    padding: `${theme.space.xs} ${theme.space.md}`,
    anySelectedBackgroundColor: theme.colors.acce2s,
    buttonSize: "md",
  },
  table: {
    headerHoverColor: "transparent",
    headerBorderTopColor: "transparent",
    selectedRowBackgroundColor: theme.colors.acce2s,
    rowBorderColor: theme.colors.atmo4,
    rowBackgroundColor: theme.colors.atmo1,
    rowBorderRadius: theme.radii.base,
    rowStripedBackgroundColor: theme.colors.atmo1,
    rowExpandBackgroundColor: theme.colors.atmo2,
    rowHoverColor: theme.colors.acce2s,
    rowHoverBorderColor: theme.colors.atmo4,
  },
  calendar: {
    border: `1px solid ${theme.colors.acce4}`,
    borderRadius: theme.radii.base,
    cellHoverColor: theme.colors.acce2s,
    headerInputBorderBottom: `1px solid ${theme.colors.acce4}`,
    headerInputBorderTop: `1px solid ${theme.colors.acce4}`,
    headerInputBorderLeft: `1px solid ${theme.colors.acce4}`,
    headerInputBorderRight: `1px solid ${theme.colors.acce4}`,
    headerInputFontColor: theme.colors.acce4,
    headerInputFontSize: theme.fontSizes.base,
    headerInputFontLetterSpacing: "string",
    headerInputFontLineHeight: theme.lineHeights.base,
    headerInputFontWeight: theme.fontWeights.normal,
  },
  globalActions: {
    sectionVariant: "title4",
  },
  emptyState: {
    titleVariant: "title4",
    titleMarginTop: "4px",
  },
  tooltip: {
    borderRadius: theme.radii.round,
  },
}));

export default ds5;
