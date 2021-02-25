import './app.scss';
import Card from './components/card/Card';

function App() {
  let arr: number[] = [];

  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }

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
