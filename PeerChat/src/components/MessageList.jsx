import { useSelector } from "react-redux";

export default function MessageList() {
    const messages = useSelector(state => state.chat.messages);

    return (
        <div>
            {messages.map(message => (
                <div className="message-container" key={message.from + "_" + message.time}>
                    <div className="message-from">
                        {message.from}
                    </div>
                    <div className="message-text">
                        {message.text}
                    </div>
                    <div className="message-time">
                        {message.time}
                    </div>
                </div>
            ))}
        </div>
    );
};