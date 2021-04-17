import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contriveHeader:{
    backgroundColor: '#fefcc6',
  },
  headerLogo: {
    margin: 0
  },
  headerText : {
    textTransform: 'uppercase',
    fontWeight: 100,
    color: '#984f26',
    fontFamily: "'Forum', cursive"
  },
}))

export default useStyles;