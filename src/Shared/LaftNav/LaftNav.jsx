import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LaftNav = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])

    return (
        <div>
           {
              categories.map(category =><p
              key={category.id}
              >
                <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
              </p>)
           }
        </div>
    );
};

export default LaftNav;