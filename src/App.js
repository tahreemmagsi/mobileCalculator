import './App.css';
import Buttons from './components/buttons';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center w-[25rem] h-[30rem] bg-gray-800">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
