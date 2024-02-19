import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../features/chat/chatSlice";
import io from "socket.io-client";
import ipPort from "../ipPort";
import Message from "../components/Message";
import MessageList from "../components/MessageList";

const socket = io(ipPort);

export default function Home() {
    const [theme, setTheme] = useState(localStorage.getItem("PeerChatTheme") || "light");

    const dispatch = useDispatch();
    const messages = useSelector(state => state.chat.messages);

    const toggleTheme = _ => setTheme(theme === "light" ? "dark" : "light");

    useEffect(_ => {
        localStorage.setItem("PeerChatTheme", theme);
        document.body.className = theme;
    }, [theme]);

    useEffect(_ => {
        socket.on("message", message => {
            dispatch(addMessage(message));
        });

        return _ => {
            socket.off("message");
        };
    }, [messages]);

    const sendMessage = text => {
        socket.emit("message", { text });
    };

    return (
        <div>
            <div className="twocols-container twocols-container-bordered">
                <h1 className="twocols-side">PeerChat</h1>
                <button onClick={toggleTheme} className="twocols-button-fixedheight">{"Switch to " + (theme === "light" ? "dark" : "light") + " theme"}</button>
            </div>
            <MessageList />
            <Message sendMessage={sendMessage} />
        </div>
    );
};