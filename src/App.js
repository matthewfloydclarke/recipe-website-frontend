// Main .js run, will be the overarching page that determines what other pages are displayed
import { Layout } from 'antd';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

// Import .js files used in the website
import Nav from './components/nav';
import Home from './components/home';
import Users from './components/users';

function App() {

  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Router>
        <Header>
          <Nav />
        </Header>
        <div style= {{margin:`20px`}}>
        </div>

        <Content>

          <Routes>

            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />

          </Routes>

        </Content>

        <Footer style={{ textAlign: 'center' }}>Recipe Website by Matty Clarke</Footer>
      </Router>
    </Layout>
  );
}

export default App;
