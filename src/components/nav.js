import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

// Navigation Bar for webpage
function Nav(props) {

  // Setup location of current page
  const location = useLocation();

  // Extract pathname of http address
  const currentPath = location.pathname;

  // Hash map of paths and keys for setting current defaultSelectedKey
  const keys = {
    '/': '1',
    '/users': '2'
  };

  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[keys[currentPath]]}>
        <Menu.Item key="1"><Link to = "/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to = "/users">Users</Link></Menu.Item>
      </Menu>
    </>
  );
}

export default Nav;