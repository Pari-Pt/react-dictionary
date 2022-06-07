import './App.css';
import DictionarySearch from "./DictionarySearch.js";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <DictionarySearch defaultKeyword="harmony" />
      <footer>
      <small><a href="https://github.com/Seo-Pt/react-dictionary">Open-source code</a> by Seonah Nathali</small>
      </footer>
    </div>
  );
}

