import './App.css';
import bg_light from './images/bg-desktop-light.jpg';
import bg_dark from './images/bg-desktop-dark.jpg';
import sun from './images/icon-sun.svg';
import moon from './images/icon-moon.svg';
import cross from './images/icon-cross.svg';
import check from './images/icon-check.svg';

function App() {
  return (
    <div className="App">
      <div className="frame" >
        <div className="top-bg">
          <img className="bg-image" src={bg_dark}></img>
        </div>
        <div className="card">
          <div className="section-1">
            <h1>TODO</h1>
            <img className="theme-icon" src = {sun} alt="theme-icon"/>
          </div>
          <div className="section-2">
            <input type="radio" className="radio-button"/>
            <input type="text" className="textbox"/>
          </div>
          <div className="section-3">
            <table className="bottom-list-box">
              <tr className="table-row-data">
                <input type="radio" className="radio-button"/>
                <p className="list-items">Complete online JavaScript course</p>
              </tr>
              <tr className="table-row-data">
                <input type="radio" className="radio-button"/>
                <p className="list-items">Jog Around the park 3x</p>
              </tr>
              <tr className="table-row-data">
                <input type="radio" className="radio-button"/>
                <p className="list-items">10 minutes meditation</p>
              </tr>
              <tr className="table-row-data">
                <input type="radio" className="radio-button"/>
                <p className="list-items">Read for 1 hour</p>
              </tr>
              <tr className="table-row-data">
                <input type="radio" className="radio-button"/>
                <p className="list-items">pick up groceries</p>
              </tr>
              <tr className="table-row-data">
                <input type="radio" className="radio-button"/>
                <p className="list-items">Complete todo app</p>
              </tr>
              <tr className="table-last-row">
                <div className="left-item">
                  <p className="bottom-text">5 items left</p>
                </div>
                <div className="center-item">
                  <p className="bottom-center-text">
                    <span className="bottom-center-text-All">All</span>&nbsp;&nbsp;<span>Active</span>&nbsp;&nbsp;<span>Completed</span>
                  </p>
                </div>
                <div className="right-item">
                  <p className="bottom-text">Clear Completed</p>
                </div>
              </tr>
            </table>
          </div>
          <div className="section-4">
            <p className="bottom-text">Drag and drop to reorder list</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
