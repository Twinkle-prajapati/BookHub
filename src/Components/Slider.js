import Carousel from 'react-bootstrap/Carousel';
import Gimage from '../Images/girl.avif'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import Cards from './Cards';
import Navbar1 from './Navbar1';





export default function Slider() {
    const[data,setData] =useState([])
    const[search,setSearch]=useState("Novels");


    useEffect(()=>{
        bookBySearch(search)
    },[])


        async function bookBySearch(search)
        {
            let res= await fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=12&q=${search}&key=AIzaSyAesDgoBKIpqBBmsgF6xGeO746mzQlXVM4`,{
                method:'GET'
            })
            res =await res.json()
            console.log("message",res);
            if(res)
                {
                    setData(res.items)
                    console.log(res.items);
                }
        }





  return (
    <>
    <Navbar1/>
    <Carousel controls={false}>
      <Carousel.Item>
      <div
  style={{
    width: "100%",
    height: "100vh",
    backgroundImage: `linear-gradient(rgba(141,39,144,0.3), rgba(144,39,144,0.5)), url(${Gimage})`,
    backgroundPosition: "center",
    backgroundSize:"cover"
  }}
  aria-label="First slide"
/>

        <Carousel.Caption style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",textAlign:"center"}}>
          <h1 className="mb-4" style={{fontSize:"4.2rem",fontFamily:"cursive"}}>Find Book of Your Choice</h1>
          <InputGroup className="mb-3 mx-auto w-50">
        <Form.Control
          placeholder="Search Here..."
          className='py-3 px-5'
          style={{borderRadius: "100px",zIndex:"0"}}
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
                bookBySearch(search);
            }
        }}
        />
        <Button onClick={()=>{bookBySearch(search)}}
        style={{position:"absolute",zIndex:"1",right:"10px",top:"8px",borderRadius: "50px",backgroundColor:"transparent",color:"black",border:"none"
        }}>
          <SearchIcon/>
        </Button>
      </InputGroup>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


<div>
    <Cards data={data}/>
</div>


</>
  );
}
