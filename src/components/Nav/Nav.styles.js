import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navbar: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
  menuDrawer: {
    width: '45%',
    alignItems: 'center'
  }
})

export default useStyles;