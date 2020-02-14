/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";
import classNames from "classnames";
import isNil from "lodash/isNil";
import CheckMark from "@hv/uikit-react-icons/dist/Generic/Good";
import HvTypography from "../Typography";

const HvSwitch = props => {
  const {
    classes,
    checked,
    disabled,
    onChange,
    labels,
    id,
    showLabels,
    value,
    displayIconChecked
  } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = event => {
    setIsChecked(event.target.checked);
    onChange(event);
  };

  const renderLabel = position => (
    <div
      id={!isNil(id) ? `${id}_${position}Button` : undefined}
      role="button"
      tabIndex={0}
    >
      <HvTypography
        className={classNames(classes[`${position}Label`], {
          [classes.disabledLabel]: disabled,
          [classes.labelSelected]: !disabled && !isChecked,
          [classes.labelDeselected]: !disabled && isChecked
        })}
      >
        {labels[position]}
      </HvTypography>
    </div>
  );

  const checkedIcon = (
    <CheckMark iconSize="XS" className={classes.checkedIcon} />
  );

  return (
    <div className={classes.root}>
      {showLabels && renderLabel("left")}
      <Switch
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
        value={value}
        classes={{
          root: classes.switch,
          switchBase: classes.switchBase,
          checked: classes.checked,
          track: classes.track,
          thumb: classes.thumb,
          disabled: classes.disabled
        }}
        {...(displayIconChecked && { checkedIcon })}
      />
      {showLabels && renderLabel("right")}
    </div>
  );
};

HvSwitch.propTypes = {
  /**
   * A Jss Object used to override or extend the styles applied to the Switch Component.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the root element.
     */
    root: PropTypes.string,
    /**
     * Styles applied to the internal SwitchBase component's root class.
     */
    switchBase: PropTypes.string,
    /**
     * Pseudo-class applied to the internal SwitchBase component's checked class.
     */
    checked: PropTypes.string,
    /**
     * Styles applied to the track element.
     */
    track: PropTypes.string,
    /**
     * Styles used to create the thumb passed to the internal SwitchBase component icon prop.
     */
    thumb: PropTypes.string,
    /**
     * Styles applied to the internal SwitchBase component's disabled class.
     */
    disabled: PropTypes.string
  }).isRequired,
  /**
   * Denotes selection state of switch component.
   */
  checked: PropTypes.bool,
  /**
   * Denotes if component is active or not.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function to be triggered when the input value is changed
   */
  onChange: PropTypes.func,
  /**
   * An Object containing the various text associated with the switch.
   *
   * - left: Label placed at the left of the switch.
   * - right: Label placed at the right of the switch.
   */
  labels: PropTypes.shape({
    left: PropTypes.string,
    right: PropTypes.string
  }),
  /**
   * The ID associated with the switch component.
   */
  id: PropTypes.string,
  /**
   * Value assigned to the Switch Component.
   */
  value: PropTypes.string,
  /**
   * Determine if labels should be displayed alongside component
   */
  showLabels: PropTypes.bool,
  /**
   * Determine if custom icon in button should be displayed
   * */
  displayIconChecked: PropTypes.bool
};

HvSwitch.defaultProps = {
  checked: true,
  disabled: false,
  onChange: () => {},
  labels: {
    left: "Off",
    right: "On"
  },
  id: undefined,
  value: "",
  showLabels: true,
  displayIconChecked: false
};

export default HvSwitch;
