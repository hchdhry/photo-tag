import './App.css'
import Frame from './assets/frame';

const navBar = () => {
  return (
    <nav className="navbar">
      Wheres Wally
      <div className='shelf'>
      <Frame image="wally.jpeg" character="Wally" />
      <Frame image="bob.png" character="bob" />
      <Frame image="wanderlei.png" character="Wanderlei" />
      </div>
    </nav>
  );
};

export default navBar
