import "./App.css";
import "@radix-ui/themes/styles.css";
import { LeftSideBar } from "./components/LeftSideBar.tsx";
import { MiddleSide } from "./components/MiddleSide.tsx";
import { RightSideBar } from "./components/RightSideBar.tsx";

function App() {
  return (
    <div
      className="grid grid-cols-[0.5fr_6fr_0.5fr]
        items-center justify-center text-center h-screen"
    >
      <LeftSideBar />

      <MiddleSide />

      <RightSideBar />
    </div>
  );
}

export default App;
