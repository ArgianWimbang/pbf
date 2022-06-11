import React from 'react';
import makanan from '../assests/makanan.jpeg';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import Typical from 'react-typical';


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${makanan})` }}>
        <div className='headerContainer'>
            <h1>Ice Corner</h1>
            <p> 
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' SPECIALIST ICE CREAM',
                  4000,
                  ' DELICIOUS',
                  4000,
                ]}
              />
            </p>
            <Link to='/menu'>
            <button >
            Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home