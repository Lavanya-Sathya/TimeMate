import Home from "./pages/Home";

function App() {
  return (
    <div className="dark  h-screen w-full bg-primary text-secondary  ">
      <div className="flex justify-center items-center flex-col">
        <div className=" px-4 py-6 ">
          <h1 className="text-4xl font-bold">TimeMate</h1>
          <small className="text-center text-base">
            Be productive the right way.
          </small>
        </div>

        <Home />
      </div>
    </div>
  );
}

export default App;
