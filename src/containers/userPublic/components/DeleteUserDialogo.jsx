import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';



export const DeleteUserDialogo = ({deletee,fechar}) => {

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
          <Button autoFocus onClick={()=>{handleClose();fechar();}} color="primary">
            Cancelar
          </Button>
          <Button onClick={()=>deletee()} color="primary">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}