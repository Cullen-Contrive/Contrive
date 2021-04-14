import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
  menuDrawer: {
    width: '45%',
    alignItems: 'center',
  },
  menuButton: {
    marginTop: '1em'
  }
}))

export default useStyles;