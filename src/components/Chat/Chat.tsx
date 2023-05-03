import React from 'react';
import "../Navbar/Navbar.css"

const Chat = () => {
  return (
    <>
      <div className="chatContainer">
        <div className="chatSubContainer">
          <a
            href="https://api.whatsapp.com/send/?phone=2348162964632&text&type=phone_number&app_absent=0"
            target={"_blank"}
            className="chatLink"
          >
            <i
              className="fa fa-whatsapp"
              style={{ color: "green", fontSize: "24px" }}
            ></i>{" "}
            Start chatting now!!!
          </a>

          <div className="ring"></div>
        </div>
      </div>
    </>
  );
}

export default Chat
