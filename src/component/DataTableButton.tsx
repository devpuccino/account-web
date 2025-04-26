import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./datatablebutton.module.css"
interface DataTableButtonProps{
    dataId:string
    icon:IconDefinition
    onClick:Function
}

const DataTableButton = ({ dataId, icon, onClick }: DataTableButtonProps) => {
    function handleOnClick(){  
        onClick(dataId);
    }
    return <button className={styles.tool_button} onClick={handleOnClick}>
        <FontAwesomeIcon className="icon" icon={icon} />
    </button>
}
export default DataTableButton;

