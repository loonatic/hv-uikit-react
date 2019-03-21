/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

const styles = theme => ({
  brandContainer: {
    position: "relative",
    display: "inherit",
    alignItems: "center",
    height: "100%",
    marginRight: `${theme.hv.spacing.lg}px`
  },
  iconContainer: {
    display: "inherit",
    maxHeight: "46px"
  },
  companyLogoTextContainer: {
    height: "46px",
    display: "flex",
    alignItems: "center"
  },
  separator: {
    width: `${theme.hv.spacing.sm}px`,
    height: `${theme.hv.spacing.md}px`,
    borderRight: `1px solid ${theme.hv.palette.atmosphere.atmo5}`
  },
  separatorPadding: {
    width: `${theme.hv.spacing.sm}px`
  },
  separatorBox: {
    display: "flex"
  },
  productLogoTextContainer: {
    height: "46px",
    display: "flex",
    alignItems: "center"
  },
  paddingTextLeft: { paddingLeft: `${theme.hv.spacing.xs}px` }
});

export default styles;
