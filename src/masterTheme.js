import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import typography from "./themes/typography";
import buttons from "./themes/buttons";

const masterTheme = createTheme(deepmerge(buttons, typography));

export default masterTheme;
