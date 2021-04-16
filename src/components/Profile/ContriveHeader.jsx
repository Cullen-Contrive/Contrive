import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import placeholderImg from '../Images/placeholder.png';

function ContriveHeader() {
  return (
    <Grid container spacing={0} direction="row">
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <img
            className=""
            src={placeholderImg}
            style={{
              width: '33%',
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
