import React, { useState, useEffect, useRef } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';

import MenuItem from '@material-ui/core/MenuItem';

import { logout } from '../../PrivateRoute';
import { deleteUser } from "../../api/serverAPI";
import Avatar from '@material-ui/core/Avatar';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


export const L_BarraMenu = props => {
  const classes = useStyles();



  const [encolher, setEncolher] = useState(false);

  window.addEventListener('resize', function () {

    if (window.innerWidth >= 1000) {
      setEncolher(false);
    } else {
      setEncolher(true);
    }
  });

  useEffect(() => {
    if (window.innerWidth >= 1000) {
      setEncolher(false);
    } else {
      setEncolher(true);
    }

  }, [])












  const href = (href) => {
    window.location.href = "/ufjfportfolioprofissional/build" + href;
  }

  const delUser = () => {
    deleteUser(JSON.parse(localStorage.getItem("user")).user_name);
    window.location.href = "/ufjfportfolioprofissional/build";
    logout();
  }






  const [open, setOpen] = useState(false);
  const [openP, setOpenP] = useState(false);
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

  /////////////////////////////


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


  const [expandedmenu, setExpandedmenu] = useState(false);


  const handleExpandClickmenu = () => {
    setExpandedmenu(!expandedmenu);
  };





  const [anchorEla, setAnchorEla] = React.useState(null);

  const handleClicka = (event) => {
    setAnchorEla(event.currentTarget);
  };

  const handleClosea = () => {
    setAnchorEla(null);
  };
  return (
    <div>
      <AppBar position="static" style={{ width: "100%",zIndex:3 }} >
        {encolher ? <Toolbar >
          <IconButton

            onClick={handleClicka}
            aria-expanded={expandedmenu}
            aria-label="show more"
            size="small"
          >
            <MoreVertIcon />

          </IconButton>
          <img alt="logo ufjf" style={{ height: 40, margin: 10 }} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />

          <Button ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ zIndex:3 }}>
            <Avatar className={classes.purple}>{JSON.parse(localStorage.getItem("user")).name.substring(0, 1)}</Avatar>


            <Typography style={{ marginLeft: 10 }}>   {JSON.parse(localStorage.getItem("user")).name}</Typography><ExpandMoreIcon />
          </Button>
          <Popper style={{ zIndex:3 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                      <MenuItem onClick={() => setOpen(false)}><Typography onClick={logout} >Logout</Typography></MenuItem>
                      <MenuItem onClick={() => setOpen(false)}><Typography onClick={() => href('/editUser')}>Edit</Typography></MenuItem>
                      <MenuItem onClick={() => setOpen(false)}><Typography onClick={delUser}>Delete User</Typography></MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar >
          :
          <Toolbar  >
            <img alt="logo ufjf" style={{ height: 40, margin: 10 }} src="https://doity.com.br/media/doity/eventos/evento-19789-logo_organizador.png" />

            <Grid
              justify="space-between"
              container
              spacing={1}
            >
              <Grid item>
                <Button variant="outlined" onClick={() => href("/")} >Home</Button>


                <Button
                  ref={anchorRefp}
                  aria-controls={openP ? 'menu-list-growp' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggleP}

                  style={{ marginLeft: 20 }} variant="outlined"  >
                  MEU PORTIFÓLIO LATTES
</Button>


                <Popper open={openP} anchorEl={anchorRefp.current} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleCloseP}>
                          <MenuList autoFocusItem={openP} id="menu-list-growp" onKeyDown={handleListKeyDownP}>

                            <MenuItem onClick={() => setOpenP(false)}><Typography onClick={() => href(`/portfoliolattes/login/${JSON.parse(localStorage.getItem("user")).user_name}`)}>EDITAR</Typography></MenuItem>
                            <MenuItem onClick={() => setOpenP(false)}><Typography onClick={() => href(`/portfoliolattes/${JSON.parse(localStorage.getItem("user")).user_name}`)}>VISUALIZAR</Typography></MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
                <Button style={{ marginLeft: 20 }} variant="outlined" onClick={() => href(`/portfoliosiga/${JSON.parse(localStorage.getItem("user")).user_name}`)} >Meu Portfólio siga</Button>
                <Button style={{ marginLeft: 20, fontSize: 12 }} variant="outlined" onClick={() => href("/")} >Importação SIGA em desenvolvimento</Button>

              </Grid>

              <Grid item>


                <Button ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  style={{ height: 40 }}>
                  <Avatar className={classes.purple}>{JSON.parse(localStorage.getItem("user")).name.substring(0, 1)}</Avatar>


                  <Typography style={{ marginLeft: 10 }}>   {JSON.parse(localStorage.getItem("user")).name}</Typography><ExpandMoreIcon />
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

                            <MenuItem onClick={() => setOpen(false)}><Typography onClick={logout} >Logout</Typography></MenuItem>
                            <MenuItem onClick={() => setOpen(false)}><Typography onClick={() => href('/editUser')}>Edit</Typography></MenuItem>
                            <MenuItem onClick={() => setOpen(false)}><Typography onClick={delUser}>Delete User</Typography></MenuItem>
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
      >
        <MenuItem>

          <Button style={{ width: '100%' }} variant="outlined" onClick={() => href("/")} >Home</Button>
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

              <Button variant="outlined" style={{ width: '100%' }} onClick={() => href(`/portfoliolattes/login/${JSON.parse(localStorage.getItem("user")).user_name}`)}>EDITAR</Button>
              <Button variant="outlined" style={{ width: '100%' }}  onClick={() => href(`/portfoliolattes/${JSON.parse(localStorage.getItem("user")).user_name}`)}>VISUALIZAR</Button>

            </ExpansionPanelDetails>
          </ExpansionPanel>



        </MenuItem>
        <MenuItem>
          <Button style={{ width: '100%' }} variant="outlined" onClick={() => href(`/portfoliosiga/${JSON.parse(localStorage.getItem("user")).user_name}`)} >Meu Portfólio siga</Button>

        </MenuItem>
        <MenuItem>
          <Button style={{ fontSize: 12, width: '100%' }} variant="outlined" onClick={() => href(`/`)} >Importação SIGA em desenvolvimento</Button>

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

                  <MenuItem onClick={() => setOpenP(false)}><Typography onClick={() => href(`/portfoliolattes/login/${JSON.parse(localStorage.getItem("user")).user_name}`)}>EDITAR</Typography></MenuItem>
                  <MenuItem onClick={() => setOpenP(false)}><Typography onClick={() => href(`/portfoliolattes/${JSON.parse(localStorage.getItem("user")).user_name}`)}>VISUALIZAR</Typography></MenuItem>
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









