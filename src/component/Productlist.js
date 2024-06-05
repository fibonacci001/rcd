import Productcard from './Productcard';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Initmodel from './Initmodal';
import { Link } from 'react-router-dom';


const Productlist = ({products}) => {
  console.log(products)
    const [activesrc, setactivesrc] = useState(null);
    const [firstmodal, setfirstmodal] = useState(false);
    
   


    return ( <>
    <Box sx={{ flexGrow: 1, 
width: '100%',
mx: 'auto'
}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
      {products && products.map((coin) => (
        <Grid item xs={2} sm={4} md={2} key={coin.id}>
          
               

               <Link style={{
                    textDecoration: 'none', 
                }
                } key={coin.id} to={`/addyourkey/${coin.id}`}>
                <Productcard product={coin} />
                </Link>
                 
                
                 
        </Grid>
       ))}  
</Grid>
      
{/* {setfirstmodal && < Initmodel activesrc={activesrc}/>} */}
         

            

          
        
        
        
    
      
    </Box>
    </> );
}
 
export default Productlist;