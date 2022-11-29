// 
import React,{useState} from 'react'


const Employees = () => {
   
    const [value,setValue]=useState([])
    const [data,setData]=useState([{id:'1',name:'antonio',role:'teacher'},
    { id:'2',name:'john', role:'programmer'},
    { id:'3',name:'cedric', role:'actor'},
    { id:'4',name:'trump', role:'engineer'},
    {id:'5',name:'Taylor',role:'singer'},
    {id:'6',name:'Yoora',role:'doctor'},
    {id:'7',name:'Turan',role:'CEO'},
    {id:'8',name:'Sevil',role:'software engineer'},
    {id:'9',name:'Angelina',role:'model'},
    {id:'10',name:'Ronaldo',role:'football player'}])
     
    

   
    const handleSearch=e=>{
        const searchItem=e.target.value
        const searchedProducts=data.filter(item=>item.name.toLowerCase().includes(searchItem.toLowerCase()))
        setValue(searchedProducts)
        console.log(value)
        console.log(typeof(value))
      
      
      }
  return (
    <div>
        <input  onChange={handleSearch}  placeholder='text' style={{borderRadius:'10px',padding:'15px',fontSize:'20px',marginLeft:'550px'}}  />
       

        { 
        value.map(item=>{
            return <div style={{display:'flex',flexDirection:'row',padding:'10px',textAlign:'center', justifyContent:'center'}} key={item.id}> 
            <h2>{item.name}</h2>
            <br></br>
            <p style={{marginLeft:'20px',marginTop:'25px'}}>{item.role}</p>
            </div>
        })
             
              }

      </div>
  )
}

export default Employees