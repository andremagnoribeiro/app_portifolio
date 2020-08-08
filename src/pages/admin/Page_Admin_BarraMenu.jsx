import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

//material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


//variavel
import { logout } from '../../routers_acess_user/Login';

//api
import { api_deleteUser } from "../../api/serverAPI";

//class
export const Page_Admin_BarraMenu=(props)=>{


  const [open, setOpen] = useState(false);
  const [openP, setOpenP] = useState(false);
  const [anchorEla, setAnchorEla] = React.useState(null);

  const [expandedmenu, setExpandedmenu] = useState(false);


  const [encolher, setEncolher] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(undefined);




  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setEncolher(false);
    } else {
      setEncolher(true);
    }

  }, [])



  const classes = useStyles();

  window.addEventListener('resize', function () {

    if (window.innerWidth >= 1200) {
      setEncolher(false);
    } else {
      setEncolher(true);
    }
  });

  const delUser = () => {

    setDeleteDialog(<DeleteUserDialogo deletee={() => {
      api_deleteUser(JSON.parse(localStorage.getItem("user")).user_name);


    }} fechar={
      () => setDeleteDialog(undefined)
    } />);


  }

  const anchorRef = useRef(null);

  const anchorRefp = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleToggleP = () => {
    setOpenP(!openP);
  };

  const handleCloseP = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenP(false);
  };


  function handleListKeyDownP(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenP(false);
    }
  }

  const handleExpandClickmenu = () => {
    setExpandedmenu(!expandedmenu);
  };

  const handleClicka = (event) => {
    setAnchorEla(event.currentTarget);
  };

  const handleClosea = () => {
    setAnchorEla(null);
  };



 
  return (
    <div>
      {deleteDialog}
      <AppBar position="static" style={{ width: "100%", zIndex: 3 }} >
        {encolher ?
          //MOBILE
          <Toolbar>
            <IconButton
              onClick={handleClicka}
              aria-expanded={expandedmenu}
              aria-label="show more"
              size="small">

              <MoreVertIcon />

            </IconButton>
            {/* MOBILE USUARIO/////////////////////////////////////////////// */}
            <div
              style={{ zIndex: 3 }}>
              Administrador do Sistema
             </div>
            <img alt="logo ufjf" style={{ height: 40, margin: 10 }} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />

            {/* MOBILE USUARIO/////////////////////////////////////////////// */}
            <Button ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              style={{ zIndex: 3 }}>
              <Avatar className={classes.purple}>{JSON.parse(localStorage.getItem("user")).name.substring(0, 1)}</Avatar>

              <Typography style={{ marginLeft: 10 }}>   {JSON.parse(localStorage.getItem("user")).user_name}</Typography><ExpandMoreIcon />
            </Button>

            {/* MOBILE Logout, Deletar Usuario,Editar Informações do Usuario/////////////////////////////////////////////// */}
            <Popper style={{ zIndex: 3 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                        <MenuItem onClick={() => setOpen(false)}><Typography onClick={logout(props)} >Logout</Typography></MenuItem>
                        <MenuItem onClick={() => setOpen(false)}><Typography onClick={() => props.history.push('/editUser')}>Edit</Typography></MenuItem>
                        <MenuItem onClick={() => setOpen(false)}><Typography onClick={delUser}>Delete User</Typography></MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar >
          :
          // DESKTOP //////////////////////////////////////////////////
          <Toolbar>
            <img alt="logo ufjf" style={{ height: 40, margin: 10 }} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />
            <div style={{width:250}}> 
                  Administrador do Sistema
             </div>
            <Grid
              justify="space-between"
              container
              spacing={1}
            >
             
              <Grid item>

                {/* Home//////////////////////////// */}
                
                <Button variant="outlined" onClick={() => props.history.push("/")} >Home</Button>
                <Button variant="outlined" onClick={() => props.history.push("/importDataSiga")} >Importar Dados do Siga</Button>
               
                
                

              </Grid>


              <Grid item>
                
                {/* USUARIO AVATA /////////////////*/}
                <Button ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  style={{ height: 40 }}>
                  <Avatar className={classes.purple}>{JSON.parse(localStorage.getItem("user")).name.substring(0, 1)}</Avatar>

                  <Typography style={{ marginLeft: 10 }}>   {JSON.parse(localStorage.getItem("user")).user_name}</Typography><ExpandMoreIcon />
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                            <MenuItem onClick={() => setOpen(false)}><Typography onClick={logout(props)} >Logout</Typography></MenuItem>
                         </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>

              </Grid>
            </Grid>


          </Toolbar>}

      </AppBar >
      <Menu
        id="customized-menu"
        anchorEl={anchorEla}
        keepMounted
        open={Boolean(anchorEla)}
        onClose={handleClosea}
        color="primary"
      >
        <MenuItem >
          <Button variant="contained" color="primary" style={{ width: '100%' }} variant="outlined" onClick={() => props.history.push("/")} >Home</Button>
        </MenuItem>
        <MenuItem>
          <ExpansionPanel style={{ width: '100%' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Button
                ref={anchorRefp}
                aria-controls={openP ? 'menu-list-growp' : undefined}
                aria-haspopup="true"

                style={{ width: '100%' }} variant="outlined"  >
                MEU PORTIFÓLIO LATTES
            </Button>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <Button variant="outlined" style={{ width: '100%' }} onClick={() => props.history.push(`/portfolio/lattes/login/${JSON.parse(localStorage.getItem("user")).user_name}`)}>EDITAR</Button>
              <Button variant="outlined" style={{ width: '100%' }} onClick={() => props.history.push(`/portfolio/lattes/${JSON.parse(localStorage.getItem("user")).user_name}`)}>VISUALIZAR</Button>

            </ExpansionPanelDetails>
          </ExpansionPanel>



        </MenuItem>
        <MenuItem>
          <Button style={{ width: '100%' }} variant="outlined" onClick={() => props.history.push(`/portfolio/siga/${JSON.parse(localStorage.getItem("user")).user_name}`)} >Meu Portfólio siga</Button>

        </MenuItem>
        <MenuItem>
          <Button style={{ fontSize: 12, width: '100%' }} variant="outlined" onClick={() => props.history.push(`/`)} >Importação SIGA em desenvolvimento</Button>

        </MenuItem>
      </Menu>


      <Popper open={openP} anchorEl={anchorRefp.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseP}>
                <MenuList autoFocusItem={openP} id="menu-list-growp" onKeyDown={handleListKeyDownP}>

                  <MenuItem onClick={() => setOpenP(false)}><Typography onClick={() => props.history.push(`/portfoliolattes/login/${JSON.parse(localStorage.getItem("user")).user_name}`)}>EDITAR</Typography></MenuItem>
                  <MenuItem onClick={() => setOpenP(false)}><Typography onClick={() => props.history.push(`/portfoliolattes/${JSON.parse(localStorage.getItem("user")).user_name}`)}>VISUALIZAR</Typography></MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>



    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);



const DeleteUserDialogo = ({ deletee, fechar }) => {

  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}

        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe{open}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmete deletar o usuário?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => { handleClose(); fechar(); }} color="primary">
            Cancelar
            </Button>
          <Button onClick={() => deletee()} color="primary">
            Sim
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}






