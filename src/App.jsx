import { Routes, Route, NavLink } from 'react-router-dom';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';
import { ItemProvider } from './context/ItemContext';
function App() {
  return (
    <ItemProvider>
      <nav >
        <NavLink className={"nav"} to="/view">View Items</NavLink>
        <NavLink className={"nav"} to="/add">Add Item</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/add" element={<AddItem />} />
          <Route path="/view" element={<ViewItems />} />
          <Route path="" element={<ViewItems />} />
        </Routes>
      </main>
    </ItemProvider>
  );
}
export default App;