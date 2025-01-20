import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import Typography from "./themes/typography";
import buttons from "./themes/buttons";

const masterTheme = createTheme(deepmerge(Typography, buttons));
export default masterTheme;
