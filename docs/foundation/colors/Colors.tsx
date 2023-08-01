import React, { useState, useEffect } from "react";
import capitalize from "lodash/capitalize";
import {
  HvProvider,
  HvTypography,
  theme,
  useTheme,
} from "@hitachivantara/uikit-react-core";
import {
  StyledGroup,
  StyledGroupName,
  StyledColors,
  StyledColorContainer,
  StyledColorSquare,
  StyledColorName,
} from "./Colors.styles";
import { themeColors } from "./themeColors";

function groupColors(colorsJson) {
  const colorsMap = new Map();
  for (const key in colorsJson) {
    if (Object.prototype.hasOwnProperty.call(colorsJson, key)) {
      colorsMap.set(key, colorsJson[key]);
    }
  }
  return colorsMap;
}

const ColorsGroup = ({
  selectedTheme = "ds5",
  colors,
}: {
  selectedTheme: string;
  colors: Map<string, string>;
}) => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.backgroundColor,
        padding: theme.space.xs,
      }}
    >
      {Object.keys(themeColors[selectedTheme]).map((group) => (
        <div key={group}>
          <StyledGroup>
            <div>
              <StyledGroupName variant="title2">
                {capitalize(group)}
              </StyledGroupName>
              <StyledColors>
                {Object.values(themeColors[selectedTheme][group]).map(
                  (color, idx) => (
                    <React.Fragment key={color as string}>
                      <div
                        style={{
                          width: 0,
                          flexBasis:
                            (color as string).includes("cat") &&
                            selectedTheme === "ds5" &&
                            idx !== 0 &&
                            idx % 9 === 0
                              ? "100%"
                              : "",
                        }}
                      />
                      <StyledColorContainer>
                        <StyledColorSquare
                          style={{
                            backgroundColor: colors.get(color as string),
                          }}
                        />
                        <StyledColorName>
                          <HvTypography variant="label">
                            {color as string}
                          </HvTypography>
                          <HvTypography variant="caption1">
                            {colors.get(color as string)}
                          </HvTypography>
                        </StyledColorName>
                      </StyledColorContainer>
                    </React.Fragment>
                  )
                )}
              </StyledColors>
            </div>
          </StyledGroup>
        </div>
      ))}
    </div>
  );
};

const Colors = () => {
  const [allColors, setAllColors] = useState<Map<string, string>>();
  const { activeTheme, selectedTheme, selectedMode } = useTheme();

  useEffect(() => {
    setAllColors(groupColors(activeTheme?.colors.modes[selectedMode]));
  }, [activeTheme, selectedTheme, selectedMode]);

  return (
    allColors && (
      <HvProvider>
        <ColorsGroup selectedTheme={selectedTheme} colors={allColors} />
      </HvProvider>
    )
  );
};

export default Colors;
