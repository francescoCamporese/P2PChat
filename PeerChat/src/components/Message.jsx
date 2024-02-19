import { useRef } from "react";

export default function Message(props) {
  const textAreaRef = useRef(null);

  const sendNewMessage = _ => {
    const message = textAreaRef.current.value.trim();

    if (message !== "") {
      props.sendMessage(message);
      textAreaRef.current.value = "";
    }
  };

  return (
    <div className="twocols-container sticky-bottom">
      <textarea
        placeholder="Type your message..."
        ref={textAreaRef}
        rows="2"
        className="twocols-side textarea-formessage"
      />
      <button onClick={sendNewMessage} className="twocols-button">Send</button>
    </div>
  );
};