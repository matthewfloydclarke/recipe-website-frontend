import { Row } from 'antd';


// The main Homepage displayed when a user goes to the website for the first time
function Home(props) {

return (
  <>
    <Row type="flex" justify="space-around" gutter={[50, 50]} style={{margin: "20px"}}>
    <h1>Recipe Website Test!</h1>
    </Row>
    <Row type="flex" justify="space-around">
      <h1 style={{ textAlign: 'center' }}><u>Test Header</u></h1>
    </Row>
    <br />
  </>
);

}

export default Home;
