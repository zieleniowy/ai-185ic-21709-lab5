import React from 'react';
import {Container, TextField, Dialog, DialogContent, List, ListItem, ListItemText, ListItemSecondaryAction, 
  IconButton, Button, FormControlLabel, Switch } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import ReactJson from 'react-json-view'




export default function App() {
  const [list, setList] = React.useState([]);
  const [result, setResult] = React.useState(null);
  const [lastResult, setLastResult] = React.useState(null);
  const selector = React.useRef(null);
  const url = React.useRef(null);
  const returnAsHTML = React.useRef(null);

  const handleAdd = () => {
    setList(selector.current?[{ k: new Date()*1, val: selector.current.value }, ...list]:list);
    selector.current.value = '';
  }
  const handleRemove = key => () =>setList(list.filter(el=>el.k!==key));
  const handleSend = ()=>{
    fetch('/scrap', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ 
        url: url.current?.value||'',
        patterns: list.map(selector=>selector.val),
        returnHTML: returnAsHTML.current?.checked
       })
    })
    .then(res=>res.json())
    .then(setResult)
    .catch(console.error);
  }
  const handleClose = ()=>{ setLastResult(result); setResult(null) };
  return (
    <Container maxWidth="sm">
      <List>
        <ListItem>
          <TextField inputRef={url} label="Adres URL" fullWidth />
        </ListItem>
        <ListItem>
          <TextField inputRef={selector} label="selektor CSS" fullWidth />
          <ListItemSecondaryAction>
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {list.map(item=>(
          <ListItem key={item.k}>
            <ListItemText primary={item.val} />
            <ListItemSecondaryAction>
              <IconButton onClick={handleRemove(item.k)}><Remove /></IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <FormControlLabel label="Zwróć jako HTML" control={<Switch inputRef={returnAsHTML} />} />
      <Button fullWidth color="primary" variant="contained" onClick={handleSend}>Wyślij zapytanie</Button>
      <Dialog maxWidth="md" onClose={handleClose} fullWidth open={Boolean(result)}>
        <DialogContent>
          <ReactJson enableClipboard={false} displayDataTypes={false} src={result||lastResult||{ notYetRendered: true }} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}
