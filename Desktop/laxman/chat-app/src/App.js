import Sidebar from "./Layout/Sidebar";
import "./Assets/CSS/DashbordStyle.css";
import ChatPage from "./Component/ChatPage";
import ChatFeedSection from "./Component/ChatFeedSection";
import MediaSection from "./Component/MediaSection";

function App() {
  return (
    <div className="App">
      <div className="logout-wrapper">
        <Sidebar />
        <ChatPage />
        <ChatFeedSection />
        <MediaSection />
      </div>
      {/* <p className="heading-primary">Chat</p> */}
      {/* <p className="heading-secondary">helloo</p>
      <p className="subheading">helloo</p> */}
    </div>
  );
}

export default App;
