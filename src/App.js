import logo from './Photo.jpg';
import './App.css';

function App() {
  const myFunction = () => {
    console.log("AjithThota")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h5><marquee><em>ATHA CHEPPINA HOME WORK</em></marquee></h5>
          <table style={{"width":"20%"}} id="friends">
            <thead>
            <tr>
              <th>NAME</th>
              <th>QUALIFICATION</th>
              <th>AREA</th>
              <th>GENDER</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>AJITHKUMAR</td>
              <td>BTECH</td>
              <td>FORUM MALL</td>
              <td>MALE</td>
              <td>
                <div>
                  <a href="#" className="editButton" onClick={myFunction}>
                    <span className="glyphicon glyphicon-edit" >Edit</span>
                    <div style={{"display":"none"}} id="editButton">Edit</div>

                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>SATISH</td>
              <td>MTECH</td>
              <td>MANJEERA MALL</td>
              <td>MALE</td>
              <td>
                <div>
                  <a href="#" className="editButton">
                    <span className="glyphicon glyphicon-edit"></span> Edit
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>SASI</td>
              <td>PHD</td>
              <td>MANJEERA MALL</td>
              <td>FEMALE</td>
              <td>
                <div>
                  <a href="#" className="editButton">
                    <span className="glyphicon glyphicon-edit"></span> Edit
                  </a>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="popup" id="modalpopup" >
          <form action="/action_page.php">
            <label for="fname">NAME:</label>
            <input type="text" id="fname" name="fname" /><br /><br />
            <label for="quali">QUALIFICATION:</label>
            <input type="text" id="quali" name="quali" /><br /><br />
            <label for="area">AREA:</label>
            <input type="text" id="area" name="area" /><br /><br />
            <label for="gender">MALE:</label>
            <input type="radio" id="gender" name="gender" /><br /><br />
            <label for="gender">FEMALE:</label>
            <input type="radio" id="gender" name="gender" /><br /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        
      </header>
    </div>
  );
}

export default App;
