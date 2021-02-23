import './app.scss';
import Card from './components/card/Card';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="app-container">
      <div className="app">
        {arr.map((_, i) => (
          <Card key={i} pubDate={arr[Math.floor(Math.random() * 10)]} />
        ))}
      </div>
    </div>
  );
}

export default App;
