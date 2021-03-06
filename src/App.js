import './App.css';
import DictionarySearch from "./DictionarySearch.js";
import bookIcon from "./images/book-girl-icon.svg";

export default function App() {
  return (
    <div className="App">
      <div className="MainHeading"><img src={bookIcon} className="BookIcon BookIconLeft" alt="Girl with book" width="220px"/><span className="Title">Dictionary App</span><img src={bookIcon} className="BookIcon BookIconRight"  alt="Girl with book" width="220px"/></div>
      <DictionarySearch defaultKeyword="cheerful" />
      <footer>
      <div>This <a href="https://github.com/Pari-Pt/react-dictionary" target="_blank" rel="noopener noreferrer">open-sourced</a> Dictionary was coded by <a href="https://confident-elion-25e30f.netlify.app/index.html" target="_blank" rel="noopener noreferrer">S. Pari Nathali</a></div>
      </footer>
    </div>
  );
}

