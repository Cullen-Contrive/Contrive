// Material-UI Themes (style sheet)
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Material-UI Components
import {
  Button, // replaces html5 <button> element
  FormControl,
  FormHelperText,
  Grid, //
  Input,
  InputLabel,
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
  return(
    <ThemeProvider theme={theme}>
      <Grid container alignContent="center" alignItems="center" justify="center" spacing={2}>

        <Grid item xs={12}>
          <Typography variant="h1" align="center">Contrive Style Guide</Typography>
        </Grid> 

        <Grid item xs={12}>
          <Typography variant="body1" component="p">
            The purpose of this document is to showcase and reference the styles that will be used to build out the Contrive Application. With the implementation of Material-UI within this application, this document also serves as a reference for what "vanilla" html elements are being replaced and how. This is an an example of a <strong>Typography Element with a "body1" variant and a "p" component</strong>.
          </Typography>
        </Grid>

        <Grid item container spacing={2} xs={12}>
          <Grid item xs={6}>
            <Button color="primary" variant="contained">Primary Button</Button>
          </Grid>

          <Grid item xs={6}>          
            <Button color="secondary" variant="contained">Secondary Button</Button>
          </Grid>
        </Grid>

        <Grid item container spacing={2} xs={12}>
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

          <Grid item xs={12} fullWidth>
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
        </Grid>
      </Grid>
    </ThemeProvider>
  )
} // end StyleGuide

export default StyleGuide;