import './App.css';
import UserProfile from './components/UserProfile';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';
import  { useState } from 'react';

function App() {
  const [infouser, setInfoUser] = useState({
    name:"nguyen minh quan",
    email:"quan@gmail.com",
    urlimg:"https://res.cloudinary.com/dg2awknkk/image/upload/v1704732879/bc1qqdokbeedqas6yfro.jpg"
  })

  const [infologin, setInfoLogin] = useState({
    email:"",
    password:""
  })

  const [listProduct, setListProduct] = useState([
    {
      id:1,
      name:"iphone 15 pro max",
      price:1500,
      urlimg:"https://res.cloudinary.com/dg2awknkk/image/upload/v1706101953/hiolaawmztyy1c5xtw49.jpg"
    },
    {
      id:3,
      name:"iphone 11 pro max",
      price:1000,
      urlimg:"https://res.cloudinary.com/dg2awknkk/image/upload/v1706101953/hiolaawmztyy1c5xtw49.jpg"
    },
    {
      id:2,
      name:"iphone 12 pro max",
      price:1200,
      urlimg:"https://res.cloudinary.com/dg2awknkk/image/upload/v1706101953/hiolaawmztyy1c5xtw49.jpg"
    },
   
  ])



  const handleSort = (sort_by,sort_type)=>{
    // console.log("sort_by",sort_by)
    // console.log("sort_type",sort_type)
    let listProductClone = [...listProduct];
    if (sort_by === "desc") {
      listProductClone.sort((a, b) => (a[sort_type] > b[sort_type] ? -1 : 1));
    }
    if (sort_by === "asc") {
      listProductClone.sort((a, b) => (a[sort_type] > b[sort_type] ? 1 : -1));
    } 
    if(sort_by === "default"){
      window.location.reload();
    }
    setListProduct(listProductClone);
  }


  return (
    <div className="container mt-3" style={{height:1200}}>
       <UserProfile info={infouser}  />
       <ProductList listProduct={listProduct} 
        handleSort={(sort_by,sort_type)=>handleSort(sort_by,sort_type)}
       />
       <LoginForm infoLogin={infologin} setInfoLogin={(data)=>setInfoLogin(data)} />

      
    </div>
  );
}

export default App;
