import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div class="card-container">
      <div class="wrapper">
        <div class="card">
          <img class="image"></img>
            src="https://logos-world.net/wp-content/uploads/2020/05/Pittsburgh-Penguins-symbol.jpg"
            alt="Penguins Logo" width="400" height="225"
            <div class="header">
              <h3>Pittsburgh Penguins National Hockey Team</h3>
            </div>
            <h4>Description</h4>
            <div class="description">
              <h5>The Pittsburgh Penguins are an NHL hockey team from Pittsburgh, known for their championships and star players like Sidney Crosby and Mario Lemieux.</h5>
            </div>
            <div class="btn-wrapper">
              <button onclick="hideDescription()">Details</button>
            </div>
          </div>
      </div>
    </div>
    <div class="button-box">
        <div class="dup-button">
          <button>Duplicate</button>
        </div>

        <div class="backgroundcolorButton">
          <button onclick="changeBackgroundColor()"> Change Background Color</button>
        </div>

        <div class="headingButton">
          <button onclick="changeHeading()"> Change Heading</button>
        </div>

        <div class="deleteCard">
          <button onclick="deleteDupCard()">Delete</button>
        </div>
      </div></>
  );
}

export default App;
