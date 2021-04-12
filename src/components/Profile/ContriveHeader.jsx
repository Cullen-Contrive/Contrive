import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ContriveHeader() {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justify="center"
      direction="row"
    >
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
}

export default ContriveHeader;
