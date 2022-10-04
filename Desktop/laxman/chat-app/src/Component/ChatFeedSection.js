import React from "react";

const ChatFeedSection = () => {
  return (
    <div
      className="client-chat-section
  "
    >
      <div className="chat-header">
        <div className="d-flex pt-3 px-5 align-items-center ">
          <div className="d-flex me-auto">
            <div className="user-image me-3">
              <img
                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-5.a5c59cee7b3dfda1156d.jpg"
                alt=""
                className="rounded-circle d-block"
                style={{ width: "3rem", height: "3rem" }}
              />
            </div>
            <div className="user-name-status">
              <h5 className="heading-secondary">Almina desai</h5>
              <p className="paragraph online-status">online</p>
            </div>
          </div>
          <div className="manu-icon">
            <ul className="list-unstyled d-flex">
              <li className="icons-item">
                <a href="/">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li className="icons-item">
                <a href="/">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </li>
              <li className="icons-item">
                <a href="/">
                  <i class="fa-solid fa-video"></i>
                </a>
              </li>
              <li className="icons-item">
                <a href="/">
                  <i class="fa-solid fa-ellipsis"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="chat-bot-section px-5 pt-3"
        style={{ width: "100%", height: "82vh", overflow: "auto" }}
      >
        {/* today label */}
        <div className="day-label d-flex align-items-center">
          <span className="hr-line"></span>
          <div className="day  ">
            <p className="subheafdding d-flex align-items-center pt-2 px-2">
              yesterday
            </p>
          </div>
          <span className="hr-line"></span>
        </div>
        <ul className="list-unstyled">
          <li className="user-msg-list">
            {/* client replay  */}

            <div className="client-replay">
              <p>hello, lakhan </p>
            </div>
          </li>
          <li className="user-msg-list right ">
            {/* your  replay  */}
            <div className="your-replay">
              <p>Hii, how are</p>
            </div>
          </li>
          <li className="user-msg-list">
            {/* client replay  */}

            <div className="client-replay">
              <p>hello, lakhan </p>
            </div>
          </li>
        </ul>

        <div className="day-label d-flex align-items-center">
          <span className="hr-line"></span>
          <div className="day  ">
            <p className="subheafdding d-flex align-items-center pt-2 px-2">
              Today
            </p>
          </div>
          <span className="hr-line"></span>
        </div>
      </div>

      <div className="message-type-section d-flex py-3 justify-content-evenly align-items-center">
        <ul className="list-unstyled d-flex">
          <li className="type-icons mx-2">
            <i class="fa-solid fa-paperclip fs-5"></i>
          </li>
          <li className="type-icons mx-2">
            <i class="fa-regular fa-face-smile fs-5"></i>
          </li>
        </ul>
        <div className="input-section " style={{ width: "88%" }}>
          <input
            type="text"
            placeholder="write message here"
            style={{
              width: "100%",
              padding: "0.8rem 0.4rem",
            }}
          />
        </div>
        <div className="send-button">
          <button className="btn border">
            <i
              class="fa-solid fa-paper-plane"
              style={{ padding: "0.8rem 0.4rem" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatFeedSection;
