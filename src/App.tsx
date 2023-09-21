import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

import "./sass/components/app.sass";
import MenuContent from "./components/MenuContent";

function App() {
  return (
    <>
      <MenuContent />
      <div id="portfolio">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
