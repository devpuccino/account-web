import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DataTableButtonProps{
    dataId:string
    icon:IconDefinition
    onClick:Function
}

const DataTableButton = ({ dataId, icon, onClick }: DataTableButtonProps) => {
    function handleOnClick(){  
        onClick(dataId);
    }
    return <button className="data-table-button" onClick={handleOnClick}>
        <FontAwesomeIcon icon={icon} />
    </button>
}
export default DataTableButton;

