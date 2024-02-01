import React from 'react'
import{BsInfoCircle} from "react-icons/bs"
const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home    
    
    
    // import React from 'react'
    // import {useState,useEffect} from 'react'
    // import axios from 'axios'

    // import{BsInfoCircle} from "react-icons/bs"
    // import{AiOutlineEdit} from "react-icons/ai"
    // import {mdOutLineAddBox,MdOutlineDelete} from "react-icons/md"
    // const Home = () => {
    //     const [books,setBooks]=useState([])
    //     const [loading,setLoading]=useState(false)

    //     useEffect(()=>{
    //         setLoading(true)

    //     axios.get('http://localhost:3030/books')
    //     .then((response)=>{
    //         setBooks(response.data.data)

    //     })
        

    //     },[])
    // return (
        
    //         <>
    //         <div>
    //             <h1>Books List</h1>
    //             <Link to='/books/create'>
    //                 <mdOutLineAddBox className='text-sky-800 text-4xl' />

    //             </Link>
    //         </div>
        
    //         {
    //             loading?(<Spinner/>):(
    //                 <table className='w-full border-separate border-spacing-2'>
    //                 <thead>
    //                     <tr>
    //                         <th className='border border-slate-600 rounded-md'>No</th>
    //                         <th className='border border-slate-600 rounded-md'>Title</th>
    //                         <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
    //                         <th className='border border-slate-600 rounded-md'>Author</th>
    //                     </tr>

    //                 </thead>
    //                 <tbody>
    //                     {
    //                         books.map((book,index)=>(
    //                             <tr key={book_id} className='h-8'>
    //                             <td className='border border-slate-700 rounded-md text-center' >
    //                             {
    //                                     index+1
    //                                 }
    //                             </td>
    //                             <td className='border border-slate-700 rounded-md text-center'>
    //                                 {book.title}
    //                             </td>
    //                             <td className='border border-slate-700 rounded-md text-center'>
    //                                 {book.author}
    //                             </td>
    //                             <td className='border border-slate-700 rounded-md text-center'>
    //                                 {book.publishedYear}
    //                             </td>
    //                             <td className='border border-slate-700 rounded-md text-center'>
    //                                 <Link to={`/books/details/${book._id}`}>
    //                                 <BsInfocircle className="text-2xl text-green-800"/>
    //                                 </Link>
    //                                 <Link to={`/books/edit/${book._id}`}>
    //                                 <AiOutlineEdit className="text-2xl text-yellow-600"/>
    //                                 </Link>
    //                                 <Link to={`/books/delete/${book._id}`}>
    //                                 <MdOutlineDelete className="text-2xl text-red-600"/>
    //                                 </Link>
    //                             </td>
    //                             </tr>
    //                         ))
    //                     }

    //                 </tbody>
    //                 </table>
    //             )
    //         }
        
    //     </>
        
    // )
    // }

    // export default Home