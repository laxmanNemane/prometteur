import React from "react";

const MediaSection = () => {
    return (
        <div
            className="media-section px-4 pt-4
    "
            style={{ width: "20%" }}
        >
            <div className="d-flex me-auto">
                <div className="user-image me-3">
                    <img
                        src="http://chatvia-light.react.themesbrand.com/static/media/avatar-5.a5c59cee7b3dfda1156d.jpg"
                        alt=""
                        className="rounded-circle d-block"
                        style={{ width: "3rem", height: "3rem" }}
                    />
                </div>
                <div className="user-name-status me-auto">
                    <h5 className="heading-secondary">Almina desai</h5>
                    <p className="subheading">Estate Agent pro</p>
                </div>
                <div className="setting">
                    <h5 className="heading-secondary">
                        <i class="fa-solid fa-gear"></i>
                    </h5>
                </div>
            </div>

            <div className="media-brief-information">
                <div className="media-heading d-flex my-2 justify-content-between">
                    <div className="heading-secondary">media</div>
                    <p className="subheading">See all</p>
                </div>
                <div className="images-section-agents">
                    <ul className="list-unstyled d-flex">
                        <li>
                            <div
                                className="image-one"
                                style={{ width: "7rem", margin: "0 0.5rem" }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
                                    alt=""
                                    className="w-100"
                                />
                            </div>
                        </li>
                        <li>
                            <div
                                className="image-one"
                                style={{ width: "7rem", margin: "0 0.5rem" }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
                                    alt=""
                                    className="w-100"
                                />
                            </div>
                        </li>
                        <li>
                            <div
                                className="image-one"
                                style={{ width: "7rem", margin: "0 0.5rem" }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
                                    alt=""
                                    className="w-100"
                                />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="files w-100">
                    <div className="media-button w-100 text-center ">
                        <button className="btn btn-media-files">
                            Media , Files , Links
                        </button>
                    </div>

                    <ul className="list-unstyled pt-4">
                        <li className="list-of-file">
                            <div className=" d-flex ">
                                <div className="file-icon me-3">
                                    <i class="fa-solid fa-file-video"></i>
                                </div>
                                <div className="file-name-storage">
                                    <h5 className="heading-secondary">video file</h5>
                                    <p>12 MB <span className="dot"></span> 20 Jan 2022</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-of-file">
                            <div className=" d-flex ">
                                <div className="file-icon me-3">
                                    <i class="fa-solid fa-file-video"></i>
                                </div>
                                <div className="file-name-storage">
                                    <h5 className="heading-secondary">video file</h5>
                                    <p>12 MB <span className="dot"></span> 20 Jan 2022</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-of-file">
                            <div className=" d-flex ">
                                <div className="file-icon me-3">
                                    <i class="fa-solid fa-file-video"></i>
                                </div>
                                <div className="file-name-storage">
                                    <h5 className="heading-secondary">video file</h5>
                                    <p>12 MB <span className="dot"></span> 20 Jan 2022</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-of-file">
                            <div className=" d-flex ">
                                <div className="file-icon me-3">
                                    <i class="fa-solid fa-file-video"></i>
                                </div>
                                <div className="file-name-storage">
                                    <h5 className="heading-secondary">video file</h5>
                                    <p>12 MB <span className="dot"></span> 20 Jan 2022</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-of-file">
                            <div className=" d-flex ">
                                <div className="file-icon me-3">
                                    <i class="fa-solid fa-file-video"></i>
                                </div>
                                <div className="file-name-storage">
                                    <h5 className="heading-secondary">video file</h5>
                                    <p>12 MB <span className="dot"></span> 20 Jan 2022</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;
