import './App.css';
import Main from './components/Main';
// import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import AppState from './context/App/AppState';
function App() {
  return (
    <>
      <AppState>
        <Main />
      </AppState>
    </>
  );
}

export default App;
