import { LeftSideBar } from "./components/LeftSideBar.tsx";
import { MiddleSide } from "./components/MiddleSide.tsx";
import { RightSideBar } from "./components/RightSideBar.tsx";

function App() {
  return (
    <div className="grid grid-cols-[0.5fr_6fr_0.5fr] items-start text-center h-full">
      <LeftSideBar />

      <MiddleSide />

      <RightSideBar />
    </div>
  );
}

export default App;
