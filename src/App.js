import React, {useState, useEffect} from 'react';
import { ImageCard } from './components/ImageCard';
import { SearchForm } from './components/SearchForm';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const handleTermChange = (newTerm) => {
    setTerm(newTerm);
  }

  useEffect( () => { 
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  },[term])

  return (
   
    <div className="flex flex-col container mx-auto">
      <h1 className="text-4xl text-purple-500 text-center mt-4 font-sans">Pixabay API Search</h1>
      <SearchForm handleTermChange={handleTermChange} />
      {isLoading ? 
        <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1> : 
        <div className="grid grid-cols-1 md:grid-cols-3 md:w-all md:max-w-full max-w-xs gap-4 mb-10 mx-auto">
          { images.map(img => (
            <ImageCard key={img.id} img={img}/>
            ))
          }
      </div>
     }

    </div>
  );
}

export default App;
