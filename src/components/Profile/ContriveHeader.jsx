import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ContriveHeader() {
  return (
    <Grid container spacing={0} direction="row">
      <Grid item xs={12}>
        <Box alignItems="center" justifyContent="space-between">
          <img
            className=""
            src={process.env.PUBLIC_URL + 'placeholder.png'}
            style={{
              width: '25%',
            }}
          />
          <Typography
            variant="h2"
            style={{
              display: 'inline-block',
            }}
          >
            Contrive
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContriveHeader;
