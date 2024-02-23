import './messageForm.css'
import { FunctionComponent } from "react";


const MesaggeForm: FunctionComponent = () => {
    return (
        <div className="sender">
            <div className="replay">
                <textarea placeholder="type the answer" />
            </div>
        </div>
    );
}

export default MesaggeForm;