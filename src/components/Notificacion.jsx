import { ListItemText, Button,Container } from "@mui/material"



export function Notificacion({notificacion, visto}) {
    
console.log(visto)

  return (
    <Container sx={{display:"flex"}} >
    <ListItemText primary={notificacion} sx={{color:visto ? "grey" : "black"}} />
    
    </Container>
    
  );
}