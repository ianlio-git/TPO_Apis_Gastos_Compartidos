function App() {
  const handleClick = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <div className="App text-center bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <header className="App-header flex flex-col items-center">
        <p className="prueba text-red-500 text-xl">Hello World!</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
