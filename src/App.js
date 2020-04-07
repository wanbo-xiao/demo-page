import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    '& h2':{
      textTransform: "uppercase",
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const projects = [
  { name: 'chat', description: 'A simple chat application', demoUrl: 'http://www.bobsyd.com/demo/chat/', codeUrl: 'https://github.com/wanbo-xiao/chat' },
  { name: 'poker', description: 'Draw 5 cards then check poker hands', demoUrl: 'http://www.bobsyd.com/demo/poker/', codeUrl: 'https://github.com/wanbo-xiao/poker' },
  { name: 'tic-tac-toe', description: 'tic-tac-toe game', demoUrl: 'http://www.bobsyd.com/demo/tic-tac-toe/', codeUrl: 'https://github.com/wanbo-xiao/tic-tac-toe' },
  { name: 'twitter-search', description: 'A search page for twitter', demoUrl: 'http://www.bobsyd.com/demo/twitter-search/', codeUrl: 'https://github.com/wanbo-xiao/twitter-search' },
  { name: 'ng-employee', description: 'Employees management', demoUrl: 'http://www.bobsyd.com/demo/ng-employee/', codeUrl: 'https://github.com/wanbo-xiao/ng-employees' },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BusinessCenterIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Demo page
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              List of demos
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Somewhere for fun
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link color="inherit" href="https://au.linkedin.com/in/bobsyd">
                      My Linkedin
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    <Link color="inherit" href="https://github.com/wanbo-xiao">
                      My Github
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map(project => (
              <Grid item key={project.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"./img/" + project.name + ".png"}
                    title={project.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.name}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link color="inherit" href={project.demoUrl}>
                        Demo
                      </Link>
                    </Button>
                    <Button size="small" color="primary">
                      <Link color="inherit" href={project.codeUrl}>
                        Source Code
                      </Link>
                    </Button>
                  </CardActions>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
