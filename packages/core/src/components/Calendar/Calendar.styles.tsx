import { createClasses } from "@core/utils/classes";
import { theme } from "@hitachivantara/uikit-styles";

export const { staticClasses, useClasses } = createClasses("HvCalendar", {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  rangeCalendarContainer: {
    display: "flex",
  },
  singleCalendar: {
    "&:hover": {
      "& ~ $singleCalendar": {
        // target the next calendar when the former is hovered
        "& > div": {
          "& > div:nth-child(3)": {
            "& > div": {
              "& > div[data-calendar-cell='calendarCell']": {
                backgroundColor: theme.colors.atmo1,
              },
            },
          },
        },
      },
    },
  },
  focusSelection: {},
  calendarMonthlyCell: {},
  calendarMonthlyCellSelected: {},
});
