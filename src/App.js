import styles from './App.styles';
import JokeList from './components/jokes/JokeList';

function App() {
  return (
    <div style={styles.app}>
      <JokeList />
    </div>
  );
}

export default App;
