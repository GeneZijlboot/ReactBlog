import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Create(){
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');
    const[ispending, setispending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };   

        setispending(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('new blog added');
                setispending(false);
                history.push('/');
            })
        }, 750);
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                { !ispending && <button>Add Blog</button>}
                { ispending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;