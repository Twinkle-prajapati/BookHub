import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Cards({ data }) {
    const navigate = useNavigate();


  if (!data || data.length === 0) {
    return <p>No books found</p>;
  }


  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col lg={3} key={item.id} className='my-4'>
            <Card style={{ width: '18rem', height: '100%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',border:"none" }}>
              <Card.Img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail :""} style={{ maxHeight: '15rem', objectFit: 'contain', padding:"15px"}} />
              <Card.Body style={{ maxHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Card.Text className='fw-bold' style={{lineHeight:"1rem"}}><span>Title:</span> {item.volumeInfo.title}</Card.Text>
                <Card.Text style={{lineHeight:"1rem"}}><span>Author:</span> {item.volumeInfo.authors}</Card.Text>
                <Card.Text style={{lineHeight:"1rem"}}><span>Publish Date :</span>{item.volumeInfo.publishedDate}</Card.Text>
                <Button onClick={()=>{handleDetails(item.id)}}>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
