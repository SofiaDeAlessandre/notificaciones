import { MdDeleteForever } from "react-icons/md";


export const DeleteButton = ({setArray, array}) => {

const handleDeleteAll = () => {
 setArray([])
}



    return (
<>
<MdDeleteForever onClick={handleDeleteAll}/>
</>
    )
}