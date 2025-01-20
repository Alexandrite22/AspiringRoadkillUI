import { createTheme } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"

import typography from "./themes/typography"
import breakpoints from "./themes/breakpoints"
import buttons from "./themes/buttons"

const masterTheme = createTheme(
    deepmerge(breakpoints,
    deepmerge(typography, buttons))
    )
export default masterTheme
