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

import withStyles from "@material-ui/core/styles/withStyles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import Header from "../components/Header";
import VerticalNavigation from "../components/VerticalNavigation";
import styles from "./styles";
import NavContext from "./NavContext";
import { headerConfiguration } from "../configuration/headerConfiguration";

const findById = (data = [], id) => {
  for (const el of data) {
    if (el.id === id) return el;

    const child = findById(el.data, id);
    if (child) return child;
  }
};

const findLeaf = item => {
  return item.data ? findLeaf(item.data[0]) : item;
};

const findFirstChildByParentId = (data = [], id) => {
  const parent = findById(data, id);
  return (parent && parent.data && findLeaf(parent.data[0]).id) || id;
};

const navigationDepth = arr =>
  Array.isArray(arr)
    ? 1 + Math.max(...arr.map(el => navigationDepth(el.data)))
    : 0;

/**
 *
 * @param Component
 * @param Notification
 * @param hasHeader
 * @param hasNotification
 * @param hasAnchor
 * @returns {React.ComponentType<Omit<JSX.LibraryManagedAttributes<function({classes: *, theme: *}): *, PropsOf<function({classes: *, theme: *}): *>>, keyof {theme: Theme} & {classes: ClassNameMap<string extends string ? string : (string extends StyleRulesCallback<infer K> ? K : (string extends StyleRules<infer K> ? K : never))>}> & StyledComponentProps<string>>}
 */
const withLayout = (
  Component,
  Notification,
  hasAnchor = true,
  hasHeader = true,
  hasNotification = true
) => {
  const withLayout = ({ classes, theme }) => {
    const [isOpen, setIsOpen] = useState(!hasAnchor);
    const [headerSelection, setHeaderSelection] = useState("01");
    const [verticalSelection, setVerticalSelection] = useState("01-01-01");

    const trimHeader = navigationDepth(headerConfiguration) > 2;

    const headerNav = headerConfiguration.map(el => ({
      ...el,
      data: trimHeader ? undefined : el.data
    }));

    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    const verticalNavData =
      (!isMdUp && headerConfiguration) ||
      (trimHeader && findById(headerConfiguration, headerSelection).data) ||
      [];

    const onHeaderSelection = id => {
      setHeaderSelection(id);
      setVerticalSelection(findFirstChildByParentId(headerConfiguration, id));
    };

    const onVerticalSelection = id => {
      const horizontalSelection = id.split("-");
      if (horizontalSelection) setHeaderSelection(horizontalSelection[0]);
      setVerticalSelection(id);
    };

    const shouldBeOpen = () => {
      setIsOpen(prevState => !prevState);
    };

    const showVerticalNavigation =
      hasHeader && !isEmpty(verticalNavData) && (isMdUp || isOpen);

    return (
      <>
        <NavContext.Provider
          value={{
            isOpen,
            showVerticalNavigation,
            headerNav,
            headerSelection,
            onHeaderSelection,
            verticalNavData,
            verticalSelection,
            onVerticalSelection,
            shouldBeOpen
          }}
        >
          {hasHeader && <Header />}
          <div className={classes.section}>
            {hasNotification && <Notification />}
            {showVerticalNavigation && (
              <div
                className={classNames(classes.navSection, {
                  [classes.verticalOpenWithAnchor]: hasAnchor && isOpen,
                  [classes.verticalCloseWithAnchor]: hasAnchor && !isOpen
                })}
              >
                <VerticalNavigation hasAnchor={hasAnchor} />
              </div>
            )}
            <main className={classes.component}>
              <Component />
            </main>
          </div>
        </NavContext.Provider>
      </>
    );
  };
  return withStyles(styles, { withTheme: true })(withLayout);
};

export default withLayout;
