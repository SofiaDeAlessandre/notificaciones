import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Collapse,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Button,
  Container,
} from "@mui/material";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import { Notificacion } from "../Notificacion";
import { arrayNotificaciones } from "../../utils/constant";
import { FaCheckSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DeleteButton } from "../DeleteButton";

export function ContenedorNotificaciones({
  array,
  count,
  setCount,
  setArray,
  handleDeleteAll,
}) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSeen = (id) => {
    const isSeen = array.map((notificacion) => {
      // console.log(notificacion.id, id);
      if (notificacion.id === id) {
        const updateNotificacion = { ...notificacion, visto: true };
        console.log(updateNotificacion);
        return updateNotificacion;
      } else {
        return notificacion;
      }
    });
     setCount(count - 1);
    setArray(isSeen);
  };

  // useEffect(() => {
  //   console.log(array);
  //   array?.forEach((notificacion) => {
  //     if (!notificacion.visto) {
  //       console.log("si");
  //       setCount(count + 1);
  //     }
  //   });
  // }, [array]);

  const handleDelete = (id) => {
    const deleteArray = array.filter((notificacion) => {
      if (!notificacion.visto === true) {
        setCount(count - 1);
        console.log("!== true")
      }
      return notificacion.id !== id;
      
    });
    setArray(deleteArray);
  };
  // useEffect(() => {
  //   setCount(array.length);
  // }, [array.length]);

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
            <DeleteButton setArray={setArray} array={array} />
            {array.map(({ notificacion, id, visto }) => {
              return (
                <Container
                  key={id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Notificacion
                    notificacion={notificacion}
                    key={id}
                    visto={visto}
                    setCount={setCount}
                    count={count}
                    array={array}
                  />
                  {visto ? (
                    <Button onClick={() => handleSeen(id)} id={id} disabled>
                      <FaCheckSquare />
                    </Button>
                  ) : (
                    <Button onClick={() => handleSeen(id)} id={id}>
                      <FaCheckSquare style={{ color: "green" }} />
                    </Button>
                  )}
                  <MdDelete
                    onClick={() => handleDelete(id)}
                    id={id}
                    style={{ fontSize: "22px", color: "red" }}
                  />
                </Container>
              );
            })}
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
