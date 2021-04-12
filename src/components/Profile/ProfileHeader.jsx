import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ProfileHeader() {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        style={{
          height: '10%',
        }}
      >
        <img
          className=""
          src={process.env.PUBLIC_URL + 'placeholder.png'}
          style={{
            width: '33%',
          }}
        />
        <Typography variant="h1">Contrive</Typography>
      </Grid>
    </Grid>
  );
}

export default ProfileHeader;
