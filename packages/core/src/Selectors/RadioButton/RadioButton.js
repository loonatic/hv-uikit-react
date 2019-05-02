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

import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonSelected from "@hv/uikit-react-icons/dist/RadioButtonSelected.S";
import RadioButtonUnSelected from "@hv/uikit-react-icons/dist/RadioButtonUnselected.S";
import Radio from "@material-ui/core/Radio";
import classNames from "classnames";
import labelPositions from "../labelPositions";

/**
 * Chooses the correct label styling to applied based on position.
 *
 * @param {String} classes - The classes object containing the classes names needed to be applied.
 * @param {Object} labelPosition - an Object containing the available label positions.
 * @returns {Object} - an Object with the name of the class for the required styling.
 */
const prepareLabelStyles = (classes, labelPosition, label) => {
  if (label) {
    switch (labelPosition) {
      default:
      case labelPositions.end:
        return classNames(classes.container, classes.labelEnd);
      case labelPositions.start:
        return classNames(classes.container, classes.labelStart);
    }
  }
  return classes.container;
};

/**
 * Chooses the correct icon to used based on the disable value.
 *
 * @param {Boolean} disabled - `true` if the disabled icon is required.
 * @returns {Object} - an Object with the selected icons.
 */
const prepareIcon = (disabled, theme) => {
  const disabledIcon = (
    <RadioButtonUnSelected
      color={[
        "none",
        theme.hv.palette.atmosphere.atmo4,
        theme.hv.palette.atmosphere.atmo6
      ]}
    />
  );

  const icons = {
    emptyIcon: disabledIcon,
    checkedIcon: disabledIcon
  };

  if (disabled) {
    return icons;
  }

  icons.emptyIcon = <RadioButtonUnSelected />;
  icons.checkedIcon = <RadioButtonSelected />;

  return icons;
};

const HvRadio = props => {
  const {
    classes,
    className,
    checked,
    disabled,
    onChange,
    value,
    label,
    labelPlacement,
    propsLabel,
    propsIcon,
    theme
  } = props;

  const icons = prepareIcon(disabled, theme);
  const labelClass = prepareLabelStyles(classes, labelPlacement, label);
  const materialPrimaryColor = "primary";

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      className={classNames(labelClass, className)}
      classes={{
        disabled: classes.labelDisabled,
        label: classes.labelTypography
      }}
      control={
        <Radio
          className={classes.radio}
          icon={icons.emptyIcon}
          checkedIcon={icons.checkedIcon}
          color={materialPrimaryColor}
          disabled={disabled}
          disableRipple
          onChange={onChange}
          value={value}
          checked={checked}
          {...propsIcon}
        />
      }
      {...propsLabel}
    />
  );
};

HvRadio.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * A Jss Object used to override or extend the styles applied to the Radio button.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the component.
     */
    container: PropTypes.string,
    /**
     * Styles applied to the label typography.
     */
    labelTypography: PropTypes.string,
    /**
     * Styles applied to the component when the label is disable.
     */
    labelDisabled: PropTypes.string,
    /**
     *  Styles applied to the label when the position is end.
     */
    labelEnd: PropTypes.string,
    /**
     * Styles applied to the label when the position is start.
     */
    labelStart: PropTypes.string,
    /**
     * Styles applied to the checkbox core element (material-ui).
     */
    radio: PropTypes.string,
    /**
     * Styles applied to the icon.
     */
    icon: PropTypes.string,
    /**
     * Styles applied to the icon when not selected.
     */
    iconEmpty: PropTypes.string,
    /**
     * Styles applied to the icon when selected.
     */
    iconFull: PropTypes.string,
    /**
     * Styles applied to the icon when disable.
     */
    iconDisable: PropTypes.string
  }).isRequired,
  /**
   * If `true` the Radio button is disabled and the onChange function will not be called.
   */
  disabled: PropTypes.bool,
  /**
   * The function executed when the Radio button changes from unselected to selected.
   */
  onChange: PropTypes.func,
  /**
   * If `true` the Radio button is selected, if set to `false` the Radio button is not selected.
   */
  checked: PropTypes.bool,
  /**
   * The value of the Radio button.
   * this value will be returned in the event object generated for the onChange callback
   */
  value: PropTypes.string,
  /**
   * The label to be added to the checkbox.
   */
  label: PropTypes.string,
  /**
   * The position of the Radio button label.
   *  - Accepted values:
   *    --"start",
   *    --"end"
   *  - note: the labelPositions object should be used to set this value.
   */
  labelPlacement: PropTypes.oneOf(["start", "end"]),
  /**
   * Extra properties passed to the icon.
   */
  propsIcon: PropTypes.instanceOf(Object),
  /**
   * Extra properties passed to the label.
   */
  propsLabel: PropTypes.instanceOf(Object),
  /**
   * The theme passed by the provider.
   */
  theme: PropTypes.instanceOf(Object)
};

HvRadio.defaultProps = {
  className: "",
  value: "",
  label: "",
  checked: undefined,
  disabled: false,
  onChange: () => {},
  propsIcon: undefined,
  propsLabel: undefined,
  labelPlacement: labelPositions.end,
  theme: null
};

export default HvRadio;
