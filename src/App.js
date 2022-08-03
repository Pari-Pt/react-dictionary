import './App.css';
import DictionarySearch from "./DictionarySearch.js";

export default function App() {
  return (
    <div className="App">
      <div className="MainHeading">Dictionary App</div>
      <DictionarySearch defaultKeyword="cheerful" />
      <footer>
      <div>This <a href="https://github.com/Pari-Pt/react-dictionary" target="_blank" rel="noopener noreferrer">open-sourced</a> Dictionary was coded by <a href="https://confident-elion-25e30f.netlify.app/index.html" target="_blank" rel="noopener noreferrer">S. Pari Nathali</a></div>
      </footer>
    </div>
  );
}

