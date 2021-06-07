//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './components/form.css';

function App() {
  return (
    <div style={{                 
      backgroundImage: `url("background.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"     
    }}>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
        <h5>Note App Form</h5>
          <UserForm />
        </div>

        <div className="col-md-7">
        <h5>Note App Details</h5>
          <UserList />
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
