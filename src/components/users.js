import { Card, Row, Col } from 'antd';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const { Meta } = Card;


// Returns all Users with it's basic information displayed, such as image, name and description
function Users(props) {

 // Sets Users for the data and setUsers for updating users
 const [users, setUsers] = useState([]);

 // Set up navigation 
 const navigate = useNavigate();

 // A useEffect hook is used to update and run each time a page is rendered
 useEffect(() => {

  const fetchData = async () => {
    // Trying to collect a response but will catch if one isn't collected
      try {        
        // Fetching user
        const response = await fetch(`http://localhost:3000/recipe_website/v1/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

        // If there isn't a reponse, throw an error and will go straight to catch
        if (!response.ok) {
          throw new Error(`Failed to find any users`);
        }

        // If repsonse is okay, 
        const data = await response.json();
        setUsers(data);
        console.log(`Users successfully retrieved`);
      } catch (error) {

        // Log error if there is no response
        console.error(`Error retrieving users:`, error);
      }
    };

    // Runs the function each time the page is re-rendered
    fetchData();

  }, [navigate]);


  return (
  <>
    <Row type="flex" justify="space-around" gutter={[50, 50]}>
        <Col span={3}>
          <h1>Users</h1>
        </Col>
      </Row>
      <br/>
    <Row type="flex" justify="space-around" gutter={[50, 50]}>
      {users.map((user) => (
        <Col span={5}>
        <Link to={`/users/${user.ID}`}>
          <Card cover={<img alt={user.username} src={`${user.avatarURL}`}/>} style={{height: "50%", width: "100%"}}>
            <Meta title={user.username}
                  description={<>
                    <div>Name: {user.firstName} {user.lastName}</div>
                    <div>Email: {user.email}</div>
                  </>}
            />
          </Card>
        </Link>
      </Col>
      ))}
    </Row>
  </>
);
}

export default Users;
