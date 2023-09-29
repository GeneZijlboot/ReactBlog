import useFetch from './useFetch';
import BlogList from './BlogList';
 
function Home(){
    const { data: blogs, ispending, error} = useFetch('http://localhost:8000/blogs')
    return (  
        <div className="home">
            {error && <h1>{error}</h1>}
            {ispending && <h1>Loading...</h1>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;