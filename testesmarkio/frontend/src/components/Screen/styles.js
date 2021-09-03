import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  PaperStyle: {
    height: '100%',
    minHeight: '100vh'
  },
  FullGridStyle: {
    marginTop: '3rem'
  },
  SessionInputStyle: {
    marginRight: theme.spacing(2),
  },
  SessionButtonStyle: {
    marginTop: '2rem',
    marginRight: theme.spacing(2),
  },
  SessionRefreshButtonStyle: {
    marginTop: '2rem',
  },
  FormStyle: {
    marginTop: '2rem',
  },
  FormButtonStyle: {
    marginTop: '2rem',
  },
  AudioPlayerStyle: {
    marginTop: '2rem',
    marginBottom: '1rem',
    width: '100%',
  },
  LinearProgressStyle: {
    marginBottom: '1rem',
  },
  DividerStyle: {
    justifyContent: 'center',
    height: '100%',
    minHeight: '85vh'
  },
  CommentAreaStyle: {
    overflow: 'auto',
    maxHeight: '70vh',
  },
  CardStyle: {
    marginRight: theme.spacing(1),
    marginBottom: '1rem'
  },
  CardContentStyle: {
    paddingBottom: '0px',
  },
  CardActionStyle: {
    paddingTop: '0px',
    paddingLeft: '16px',
    paddingBottom: '16px',
  },
  CardActionButtonStyle: {
    marginRight: theme.spacing(1)
  }
}));

export default useStyles;