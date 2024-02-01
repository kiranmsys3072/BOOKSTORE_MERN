import React from 'react'
import {useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
// import Home from "./pages/Home"
// import ShowBooks from "./pages/ShowBooks"
// import CreateBook from "./pages/CreateBook"
// import EditBook from "./pages/EditBook"
// import DeleteBook from "./pages/DeleteBook"

const App = () => {
  const [data,setdata]=useState([])
  useEffect(()=>{

    async function cleanUp(){
      const dataNew=await fetch('http://localhost:3030/books')
      const fetchedData= await dataNew.json()
      setdata(fetchedData)

    }
    cleanUp()

  },[])
  return (
    <div className='bg-pink-300'>
      <h1>Hello Books Store App</h1>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books/create" element={<CreateBook/>} />
        <Route path="/books/details/:id" element={<ShowBooks/>} />
        <Route path="/books/edit/:id" element={<EditBook/>} />
        <Route path="/books/delete/:id" element={<DeleteBook/>} />
      </Routes>
     
      {/* {console.log("fetchedData",data)} */}
    </div>
  )
}

export default App