import Image from './Image';
import './App.css';
import staringCat from './staringCat.jpg';
import Content from './Content';

function App() {
  return (
    <main>
      <Image source = {staringCat} alternativeText = {"Cute cat staring"} />
      <Content animal = {'cat'} doingWhat = {'staring'} looksLike = {'cute'} />
    </main>
  );
}

export default App;