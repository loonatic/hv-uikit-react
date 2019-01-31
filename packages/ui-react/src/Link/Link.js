/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import PropTypes from "prop-types";
import withConfig from "../config/withConfig";

const HvLink = props => {
  const { classes, children, pathname, query, config, useRouter } = props;

  const handleClick = e => {
    if (useRouter && config.router) {
      e.preventDefault();
      config.router.push({
        pathname,
        query
      });
    }
  };

  return useRouter ? (
    <div onClick={handleClick} className={classes.a}>
      {children}
    </div>
  ) : (
    <a href={pathname} className={classes.a}>
      {children}
    </a>
  );
};

HvLink.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.instanceOf(Object),
  config: PropTypes.instanceOf(Object).isRequired,
  useRouter: PropTypes.bool
};

HvLink.defaultProps = {
  useRouter: false,
  query: {}
};

export default withConfig(HvLink);
