import logo from './logo.svg';
import './App.css';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventsComponent from './events/EventsComponent';

function App() {
  return (
    <div>

      <UserSearch />
      <EventsComponent />
    </div>
  );
}

export default App;
