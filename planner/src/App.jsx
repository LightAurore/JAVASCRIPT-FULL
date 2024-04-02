
import './App.css';
import Footer from './containers/footer/footer.jsx';
import Header from './containers/header/header.jsx';
import PlannerTask from './containers/planner-task/planner-task.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <PlannerTask />
      </main>
      <Footer />
    </>
  )
}

export default App
