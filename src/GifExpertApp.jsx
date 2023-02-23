
import {useState} from 'react'
import { AddCategory,GifGrid } from './components';


export const   GifExpertApp = () => {
  
 
const [Categories, setCategories] = useState(['tech Coding']);

const onAddCategory = (newCategory) => {

  if( Categories.includes(newCategory))return;

setCategories([newCategory,...Categories]);

} 




  return ( 
    <>
     <h1>
        <span className='Gif'>Gif</span>
        <span className='Mix'>Mix</span>
        <span className='App'>App.</span>
     </h1>

  
 
      <AddCategory onNewCategory = {onAddCategory} />  

    
      { 
       Categories.map(category => (

          <GifGrid 
             key={category}
             category = {category} 
          />
        )) 
      }
   
 
      
   

    <audio id='theme' controls  loop > 
      <source src='./musicaFondo.mp3' type='audio/mpeg'/>
    </audio> 
    


 

    </>
  
  )
  
}
 