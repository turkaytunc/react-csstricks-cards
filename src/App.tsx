import './app.scss';
import Card from './components/card/Card';

function App() {
  return (
    <div className="app">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

export default App;
