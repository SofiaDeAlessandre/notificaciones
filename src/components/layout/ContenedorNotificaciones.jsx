import { useState } from "react";
import {
  Box,
  Typography,
  Collapse,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Button,
} from "@mui/material";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import { Notificacion } from "../Notificacion";
import { arrayNotificaciones } from "../../utils/constant";

export function ContenedorNotificaciones({ array, count, setCount, setArray }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSeen = (id) => {
    const isSeen = array.map((notificacion) => {
      console.log(notificacion.id, id);
      if (notificacion.id === id) {
        const updateNotificacion = { ...notificacion, visto: true };
        console.log(updateNotificacion);
        return updateNotificacion;
      } else {
        return notificacion;
      }
    });
    contador();
    // setCount(count - 1);
    setArray(isSeen);
  };

  const contador = () => {
    const seenCount = array.map((notificacion) => {
      console.log(notificacion.visto);
    });
    setArray(seenCount)
  };

  return (
    <Box>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <HiBellAlert onClick={handleClick} />
            {count <= 0 ? "" : <span>{count}</span>}
          </ListItemIcon>
          <ListItemText primary="Notificaciones" />
          {open ? <MdExpandLess /> : <MdOutlineExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {array.map(({ notificacion, id, visto }) => {
              return (
                <div key={id}>
                  <Notificacion
                    notificacion={notificacion}
                    key={id}
                    visto={visto}
                    setCount={setCount}
                    count={count}
                    array={array}
                  />
                  <Button onClick={() => handleSeen(id)} id={id}>
                    Visto
                  </Button>
                </div>
              );
            })}
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
