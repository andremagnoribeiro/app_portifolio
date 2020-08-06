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
import { logout } from '../../../routers_acess_user/Login';
//components
import {ExportPDF} from './components/exportPDF';
//api
import { api_deleteUser } from "../../../api/serverAPI";

//class
export const Page_Private_BarraMenu = props => {
  const classes = useStyles();
  const [anchorEla, setAnchorEla] = React.useState(null);
  const [encolher, setEncolher] = useState(false);

  const anchorRef_MeuPortfolio = useRef(null);

  const [open_MeuPortfolio, setOpen_MeuPortfolio] = useState(false);


  const [deleteDialog, setDeleteDialog] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [openP, setOpenP] = useState(false);

  const [expandedmenu, setExpandedmenu] = useState(false);

  const anchorRef = useRef(null);
  const anchorRefp = useRef(null);

  


  

  const delUser = () => {
    setDeleteDialog(<DeleteUserDialogo delete_={() => {
      api_deleteUser(JSON.parse(localStorage.getItem("user")).user_name);
    }} fechar={
      () => setDeleteDialog(undefined)
    } />);
  }


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle_MeuPortfolio = () => {
    setOpen_MeuPortfolio((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };


  const handleClose_MeuPortfolio = (event) => {

    if (anchorRef_MeuPortfolio.current && anchorRef_MeuPortfolio.current.contains(event.target)) {
      return;
    }
    setOpen_MeuPortfolio(false);

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
  ///////////////////

  const handleExpandClickmenu = () => {
    setExpandedmenu(!expandedmenu);
  };

  const handleClicka = (event) => {
    setAnchorEla(event.currentTarget);
  };

  const handleClosea = () => {
    setAnchorEla(null);
  };

  const fecharr=() => {
    setOpen(false);
  }

  return (
    <div>
      {deleteDialog}
      <AppBar position="static" style={{ width: "100%",minWidth:410, zIndex: 3 }} >
          <Toolbar>
          {/* IMAGEM UFJF */}
          <img  onClick={() => props.history.push("/")} alt="logo ufjf" style={{ height: 40, margin: 10 }} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />

            <Grid
              justify="space-between"
              container
              spacing={1}
            >
              
              <Grid item>
                {/* BUTTON HOME */}
                {/* <Button variant="outlined" style={{ marginLeft: 20 }} >Home</Button> */}
              </Grid>

              <Grid item >

                {/* Button AVATA NAME /////////////////////////////////////////////////////*/}
                <Button ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  style={{ height: 40 }}>
                  <Avatar className={classes.purple}>{JSON.parse(localStorage.getItem("user")).name.substring(0, 1)}</Avatar>
                  <Typography style={{ marginLeft: 10 }}>   {JSON.parse(localStorage.getItem("user")).user_name}</Typography><ExpandMoreIcon />
                </Button>



                {/* EXPANDIR /////////////////////////////////////////////////////*/}
                <Popper style={{zIndex:5}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                            <MenuItem variant="outlined" style={{ marginLeft: 10 }} onClick={
                              () => {
                                setOpen(false)
                                props.history.push("/portfolioEdit/");
                              }
                            } >Editar Portfólio</MenuItem>

                            <MenuItem variant="outlined" style={{ marginLeft: 10 }} onClick={
                              () => {
                                setOpen(false);
                                props.history.push("/import/");
                              }
                            } >Importar Currículo Lattes</MenuItem>
                            <MenuItem variant="outlined" style={{ marginLeft: 10 }}  ><ExportPDF fechar={
                              fecharr
                            } /></MenuItem>

                            <MenuItem variant="outlined" style={{ marginLeft: 10 }} onClick={
                              () => {
                                setOpen(false);
                                props.history.push("/excluir");
                              }
                            } >Excluir Informações do Portfólio</MenuItem>

                            <MenuItem variant="outlined" style={{ marginLeft: 10 }} onClick={
                              () => {
                                setOpen(false);
                                props.history.push('/editUser');
                              }}>Editar Usuário</MenuItem>

                            <MenuItem variant="outlined" style={{ marginLeft: 10 }} onClick={
                              () => {
                                setOpen(false);
                                delUser();
                                ;
                              }}>Excluir Usuário</MenuItem>

                            <MenuItem variant="outlined" style={{ marginLeft: 10 }} onClick={
                              () => {
                                setOpen(false);
                                logout();
                              }
                            }>Logout</MenuItem>

                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar >
     


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










const DeleteUserDialogo = ({ delete_, fechar }) => {

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
            Deseja realmente deletar seu usuário?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => { handleClose(); fechar(); }} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => delete_()} color="primary">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}








