import { useState } from 'react';
 
function Home(){
    //let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(45);

    const handleClick = () => {
        setName('luigi');
        setAge(54)
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>CLick me</button>
        </div>
    );
}
 
export default Home;