// styles
import './App.css';

// assets
import { images } from './assets/images/index.js';

// apis
import API from './apis';

const App = () => {
  return (
    <div className='main'>
      <div>UpEvent Project</div>
      <div>Running Locally on: {API.BASE_URL}</div>
      <img src={images.logo} alt='React logo' className='App-logo' />
    </div>
  );
};

export default App;
