import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

import "./sass/components/app.sass";
import MenuContent from "./components/MenuContent";

function App() {
  return (
    <>
      <MenuContent />
      <div id="portfolio">
        {/* <h1>Sedrac Lucas Calupeteca</h1> */}
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
