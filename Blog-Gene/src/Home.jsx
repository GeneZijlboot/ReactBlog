import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';
 
function Home(){
    const [blogs, setBlogs] = useState(null);
    const [ispending, Setispending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                Setispending(false);
            })
        }, 1000);
    }, [])

    return (  
        <div className="home">
            {ispending && <h1>Loading...</h1>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;