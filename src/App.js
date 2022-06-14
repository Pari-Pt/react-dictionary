import './App.css';
import DictionarySearch from "./DictionarySearch.js";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <DictionarySearch defaultKeyword="laugh" />
      <footer>
      <div>This <a href="https://github.com/Seo-Pt/react-dictionary" target="_blank" rel="noopener noreferrer">open-sourced</a> Dictionary was coded by <a href="https://confident-elion-25e30f.netlify.app/index.html" target="_blank" rel="noopener noreferrer">Seonah Nathali</a></div>
      </footer>
    </div>
  );
}

