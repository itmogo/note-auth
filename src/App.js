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
    
    <div className="container contapp">
    <div><marquee><h3> A Note Book Application</h3></marquee>
      <div className="row">
        <div className="col-md-5">
        <h6>Note App Form</h6>
          <UserForm />
        </div>

        <div className="col-md-7">
       <h6>Note App Details</h6>
          <UserList />
        </div>
      </div>
    </div>
    </div>
    </div>

  );
}

export default App;
