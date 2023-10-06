import { useParams }  from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams()
    const { data: blog, error, ispending } = useFetch('http://localhost:8000/blogs/' + id);
    return (  
        <div className="blog-details">
            { ispending && <h1>Loading...</h1> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p><strong>Written by: { blog.author }</strong></p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;