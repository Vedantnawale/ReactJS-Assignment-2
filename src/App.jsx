import { Link } from 'react-router-dom'
import './App.css'
import GithubList from './components/GithubList/GithubList'
import Search from './components/Search/Search'
import CustomRoutes from './routes/CustomRoutes'

function App() {

  return (
    <div className='outer-githubdex'>
      <h1 id='github-haeading'>
      <Link to="/">Github Profile Searcher</Link>
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App
