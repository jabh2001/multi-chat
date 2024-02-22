import { FunctionComponent } from "react";

interface IncomingMessageProps {
    message: string
}

const IncomingMessage: FunctionComponent<IncomingMessageProps> = (props: IncomingMessageProps) => {
    return (
        <div>
            {props.message}
        </div>
    );
}

export default IncomingMessage;