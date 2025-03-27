import "./App.css";
import About from "./pages/about";
import CustomCursor from "./pages/customCursor";
import Experience from "./pages/experience";
import Introduction from "./pages/intro";

function App() {
  return (
    <div className="h-screen justify-center w-full p-6 bg-slate-950 flex text-zinc-300 overflow-auto">
      <div className="max-w-2xl flex flex-col gap-6">
        <CustomCursor />
        <Introduction />
        <About />
        <Experience />
        <div className="p-4" />
      </div>
    </div>
  );
}

export default App;
