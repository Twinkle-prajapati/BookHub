import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Navbar1 from './Navbar1'
import Card from 'react-bootstrap/Card';
import {useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





export default function Maincard() {
    const navigate = useNavigate()
    const[data,setData]=useState("")
    const {id} = useParams();



    useEffect(()=>{
        showDetails(id)
    },[id])


    function goBack(){
        navigate('/')
    }


    async function showDetails(id){
        let res= await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAesDgoBKIpqBBmsgF6xGeO746mzQlXVM4`,{
            method:'GET'
        })
        res = await res.json()
        console.log(res);
        setData(res)

    }
    return (
        <>
            <Navbar1 />

            <Container>
                <p onClick={goBack} style={{cursor:"pointer"}}><ArrowBackIcon/> Go Back</p>
                <Row>
                    <Col lg={8} className='mx-auto mt-5'>
                    {data &&
                        <Card className='py-4 px-2' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",border:"none"}}>
                           <Row>
                            <Col lg={3}>
                            <img className='p-5' style={{height:"100%",objectFit:"cover"}}  src={data.volumeInfo.imageLinks.thumbnail} alt='image1'></img>
                            </Col>
                            <Col lg={5} className='mx-auto'>
                            <h2 className='my-4'>{data.volumeInfo.title}</h2>
                            <p className='fs-6 fw-semibold'>{data.volumeInfo.description.slice(0,400)}...</p>
                            <p><span className='fw-bold'>Author: </span><span>{data.volumeInfo.authors}</span></p>
                            <Button onClick={() => window.open(data.volumeInfo.previewLink)}>View Book</Button>
                            </Col>
                           </Row>
                        </Card>
}
                    </Col>

                </Row>

            </Container>

        </>
    )
}
