import { useState } from 'react';
import BlogList from './BlogList';
 
function Home(){
    const [blogs, setBlogs] = useState([
        { title: 'my new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;