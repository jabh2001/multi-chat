import { TextButton } from "./textButton"
import '../styles/deployBar.css'
export const DeployBar: React.FC = () => {
    return (
        <div className="buttons">
            <TextButton text="mine" color="#4876a5" />
            <TextButton text="unassigned" color="white" />
            <TextButton text="all" color="white" />
        </div>
    );
};