import React from "react";

const ChatPage = () => {
    return (
        <div className="chat-section">
            <p className="heading-secondary px-4 pt-4 ">Chats</p>
            <div className="serch-section position-relative px-4 pb-4">
                <p className="serch-icon position-absolute ">h</p>
                <input
                    type="text"
                    className="w-100"
                    placeholder="search messages for users"
                    style={{ background: "#939DAE", padding: "0.5rem 0.6rem" }}
                />
            </div>
            {/* portals section */}

            <div className="portal-section px-4 pb-4">
                <ul className="portal-list list-unstyled">
                    <li className="portal-list-item">
                        <a href="">
                            <div className="portal">
                                <div className="chat-img-user d-block mx-auto position-relative me-3">
                                    <img
                                        src="http://chatvia-light.react.themesbrand.com/static/media/avatar-5.a5c59cee7b3dfda1156d.jpg"
                                        alt=""
                                        className="rounded-circle d-block"

                                        style={{ width: "2.32rem", height: "2.32rem", position: "absolute", left: "0", right: "10px", top: "0px" }}
                                    />
                                    <span className="user-online-status"></span>
                                </div>
                                <p className="subheading">mona</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="conversation-chat-recent px-4 ">
                <h5 className="heading-secondary pb-4">Recent</h5>

                <div className="recent-user">
                    <ul className="list-unstyled recent-user" style={{ width: "100%", height: "60vh", overflow: "auto" }}>
                        <li className="user-list-item">
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="user-list-item">
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-5.a5c59cee7b3dfda1156d.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Usha fan</h5>
                                            <p className="suheading">good morning lakhan😎</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-5.a5c59cee7b3dfda1156d.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Usha fan</h5>
                                            <p className="suheading">good morning lakhan😎</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-5.a5c59cee7b3dfda1156d.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Usha fan</h5>
                                            <p className="suheading">good morning lakhan😎</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-decoration-none ">
                                <div className="chat-user-recent px-3 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle"
                                                style={{ height: "2.2rem", width: "2.2rem" }}
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="heading-secondary">Alren richard</h5>
                                            <p className="suheading">nice to meeting you😃</p>
                                        </div>
                                        <div className="user-message-time">
                                            <p className="suheading">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <div className="chat-user-recent px-3 py-3">
                    <div className="d-flex align-items-center">
                        <div className="chat-img-user align-self-center position-relative me-3">
                            <img
                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-5.a5c59cee7b3dfda1156d.jpg"
                                alt=""
                                className="rounded-circle"
                                style={{ height: "2.2rem", width: "2.2rem" }}
                            />
                            <span className="user-online-status"></span>
                        </div>
                        <div className="user-name-message flex-grow-1 overflow-hidden">
                            <h5 className="heading-secondary">Usha fan</h5>
                            <p className="suheading">good morning lakhan😎</p>
                        </div>
                        <div className="user-message-time">
                            <p className="suheading">12:00</p>
                        </div>
                    </div>
                </div>

                <div className="chat-user-recent px-3 py-3">
                    <div className="d-flex align-items-center">
                        <div className="chat-img-user align-self-center position-relative me-3">
                            <img
                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-4.b23e41d9c09997efbc21.jpg"
                                alt=""
                                className="rounded-circle"
                                style={{ height: "2.2rem", width: "2.2rem" }}
                            />
                            <span className="user-online-status"></span>
                        </div>
                        <div className="user-name-message flex-grow-1 overflow-hidden">
                            <h5 className="heading-secondary">Rashmika chaouhan</h5>
                            <p className="suheading">welcome with prometteur orgnization😎</p>
                        </div>
                        <div className="user-message-time position-relative">
                            <p className="suheading">12:00</p>
                            <p className="message-count">
                                <span className="badge badge-soft-danger">4</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="chat-user-recent px-3 py-3">
                    <div className="d-flex align-items-center">
                        <div className="chat-img-user align-self-center position-relative me-3">
                            <img
                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-4.b23e41d9c09997efbc21.jpg"
                                alt=""
                                className="rounded-circle"
                                style={{ height: "2.2rem", width: "2.2rem" }}
                            />
                            <span className="user-online-status"></span>
                        </div>
                        <div className="user-name-message flex-grow-1 overflow-hidden">
                            <h5 className="heading-secondary">Rashmika chaouhan</h5>
                            <p className="suheading">welcome with prometteur orgnization😎</p>
                        </div>
                        <div className="user-message-time position-relative">
                            <p className="suheading">12:00</p>
                            <p className="message-count">
                                <span className="badge badge-soft-danger">4</span>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ChatPage;
