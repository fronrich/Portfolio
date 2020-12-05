// prettier-ignore
export const COLORS = [
  "#AADFF1", 
  "#FBB57F", 
  "#F59DB2", 
  "#FCEC98", 
  "#80CAA5"
];

const FONT_CONSTANTS = {
  header: `'Roboto', sans-serif`,
  normal: `'Work Sans', sans-serif`,
  mono: `'DM Mono', monospace`,
};

export const FONTS = {
  title: `
    font-family: ${FONT_CONSTANTS.header};
    font-size: 5em;
  `,
  subtitle: `
    font-family: ${FONT_CONSTANTS.header};
    font-size: 4em;
  `,
  header: `
    font-family: ${FONT_CONSTANTS.header};
    font-size: 3em;
  `,
  normal: `
    font-family: ${FONT_CONSTANTS.normal};
    font-size: 1em;
  `,
  mono: `
    font-family: ${FONT_CONSTANTS.normal};
    font-size: 1em;
  `,
};
