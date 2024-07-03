import { MdDeleteForever } from "react-icons/md";


export const DeleteButton = ({setArray, array}) => {

// const handleDeleteAll = () => {
//  setArray([])
// }

const handleDeleteAll = () => {
    const deleteArray = [...array];
    deleteArray.length = 0; 

    setArray(deleteArray); 
  };

    return (
<>
<MdDeleteForever onClick={handleDeleteAll}/>
</>
    )
}