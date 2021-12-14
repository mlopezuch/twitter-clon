import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs({ image, modal, handleClose }) {
  return (
    <div>
      <Dialog maxWidth='md' onClick={handleClose} aria-labelledby="customized-dialog-title" open={modal}>
        <DialogContent >
          <img src={image} alt="" style={{width:'100%'}}/>          
        </DialogContent>
      </Dialog>
    </div>
  );
}
