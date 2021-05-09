import SearchEngine from "./SearchEngine"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        
      </header>
      <main>
        <div className="heading">
        <h1>Lexicon</h1>
        <h5><a href="https://github.com/ingakoz" target="_blank" rel="noreferrer"> by IngaKoz </a></h5>
        </div>
        <SearchEngine />
      </main>
      </div>
      <p className="Name">Coded by <a href="https://github.com/ingakoz" target="_blank" rel="noreferrer"> ingakoz</a> </p>
    </div>
  );
}

export default App;
