/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import empty from "./assets/check-empty.svg";
import disable from "./assets/check-disabled.svg";
import full from "./assets/check-checked.svg";
import indeterminate from "./assets/check-partial.svg";

const styles = theme => ({
  container: {
    height: "32px",
    marginRight: 0,
    marginLeft: 0,
    "&:hover": {
      backgroundColor: theme.hv.palette.atmosphere.atmo4
    }
  },
  labelTypography: {
    fontWeight: theme.typography.body1.fontWeight,
    letterSpacing: theme.typography.body1.letterSpacing,
    color: theme.typography.body1.color,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight
  },
  labelDisabled: {
    backgroundColor: "transparent",
    cursor: "not-allowed",
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "not-allowed"
    }
  },
  labelEnd: {
    paddingRight: "8px"
  },
  labelStart: {
    paddingLeft: "8px"
  },
  checkBox: {
    padding: "8px"
  },
  icon: {
    width: "16px",
    height: "16px",
    backgroundSize: "16px 16px"
  },
  iconEmpty: {
    background: `url(${empty})`
  },
  iconFull: {
    background: `url(${full})`
  },
  iconDisable: {
    background: `url(${disable})`
  },
  iconIndeterminate: {
    background: `url(${indeterminate})`
  }
});

export default styles;
