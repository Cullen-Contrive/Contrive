// Material-UI Themes (style sheet)
// Reached at path '/styleGuide'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Material-UI Components
import {
  Button, // replaces html5 <button> element
  ButtonGroup,
  FormControl,
  FormHelperText,
  Grid, //
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...

} from '@material-ui/core';

/**
 * Style Guide
 * 
 * The purpose of this component is to set out guidelines and general rules for styling.
 * Contrive will be implementing Material-UI from the get go.
 * 
 * Yellow       - #fefcc6
 * Dark Brown   - #984f26
 * Medium Brown - #ae784f
 * Light Brown  - #ccab7c
 */

const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#fff",
      default: "#fff",
      level2: "#f5f5f5",
      level1: "#fff"
    },
    secondary: {
      light: '#fffff9',
      main: '#fefcc6',
      dark: '#cac995',
      contrastText: '#000000',
    },
    primary: {
      light: '#cd7c50',
      main: '#984f26',
      dark: '#652500',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Forum',
      'Raleway'
    ].join(','),
  },
});

function StyleGuide() {
  return (
    <ThemeProvider theme={theme}>

      {/* Overall Grid to wrap entire component */}
      <Grid container alignContent="center" alignItems="center"
        justify="center" spacing={10}>

        {/* Top Grid Container to hold Contrive title and example paragraph */}
        <Grid item container component={Paper} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h1" align="center">
              Contrive Style Guide
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              The purpose of this document is to showcase and reference the styles
              that will be used to build out the Contrive Application. With the
              implementation of Material-UI within this application, this document
              also serves as a reference for what "vanilla" html elements are being
              replaced and how. This is an example of a <strong>Typography Element
              with a "body1" variant and a "p" component</strong>.
            </Typography>
          </Grid>
        </Grid>

        {/* Grid container to hold all buttons on this page */}
        <Grid item container spacing={2} xs={12} component={Paper}>
          <Grid item container xs={12} justify="center">
            <Button color="primary" variant="contained">Primary Button</Button>
          </Grid>

          <Grid item container xs={12} justify="center">
            <Button color="secondary" variant="contained">Secondary Button</Button>
          </Grid>

          <Grid item container xs={12} justify="center">
            <ButtonGroup>
              <Button color="primary" variant="contained">Primary Button</Button>
              <Button color="secondary" variant="contained">Secondary Button</Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        {/* Grid container to hold entire form */}
        <Grid item container spacing={2} xs={12} component={Paper}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="text-input-example"
                label="Text input example"
                type="text"
                placeholder="Add some text"
                helperText="Example helper text"
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="password-input-example"
                label="Password input example"
                type="password"
                autoComplete="current-password"
                helperText="Your password can include symbols and numbers."
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="password-input-example"
                label="Password input example"
                type="password"
                autoComplete="current-password"
                helperText="Your password can include symbols and numbers."
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                type="text"
                multiline
                rows={4}
                defaultValue='Example of a multiline form (i.e. "Description")'
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="selector-example-label">Selector Example</InputLabel>
              <Select
                // value={state}
                // onChange={handleChange}
                labelId="selector-example-label"
                id="selector-example"
                label="Selector Example" // this must be the same string from this selector's <InputLabel />
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
} // end StyleGuide

export default StyleGuide;