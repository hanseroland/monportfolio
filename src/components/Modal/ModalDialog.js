import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Grid,Box, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../ButtonLinkStyle';
import CardDemo from '../Cards/CardDemo';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:'#1DA84E'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {data} = props
  return (
    <div >
      <Button variant="outlined" style={{borderColor:'#fff',color:'#fff', fontSize:'12px'}} onClick={handleClickOpen}>
         Consulter
      </Button>
      <Dialog  fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Détails du projet
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Box p={4} 
         sx={{
            backgroundColor: '#131313',
           
        }}
        >
            <Grid container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                            <CardDemo logo={data.logo}  />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <Paper>
                            <Box p={2} justifyContent="center" >
                                <Typography variant="h4" color="inherit" > {data.titre} </Typography>
                                <Typography variant="subtitle1" > {data.soustitre} </Typography>
                                <Typography variant="body1" align="justify" >
                                    {data.description}
                                </Typography>
                                <Box display="flex">
                                       <ButtonLink href={data.codeSource} target='_blank' style={{borderRadius:'10px'}}> Code Source</ButtonLink>
                                        {data.lien && 
                                           <ButtonLink href={data.lien} target='_blank' style={{marginLeft:'10px', borderRadius:'10px'}} > Démo</ButtonLink>
                                        }
                                      
                                </Box>
                            </Box>
                      </Paper>
                    </Grid> 
            </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
