import "./App.css";
import About from "./pages/about";
import CustomCursor from "./pages/customCursor";
import Experience from "./pages/experience";
import Introduction from "./pages/intro";

function App() {
  return (
    <div className="h-screen p-6 bg-slate-950 flex flex-col gap-6 text-zinc-300 overflow-auto">
      <CustomCursor />
      <Introduction />
      <About />
      <Experience />
    </div>
  );
}

export default App;
