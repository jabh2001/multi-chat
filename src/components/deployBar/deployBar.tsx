import { TextButton } from "../textButton/textButton"
import './deployBar.css'
export const DeployBar: React.FC = () => {
    return (
        <div className="buttons">
            <TextButton text="mine" color="" />
            <TextButton text="unassigned" color="white" />
            <TextButton text="all" color="white" />
        </div>
    );
};