import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { fetchGallery } from '../../galleryService';
import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async topic => {
    try {
      setError(false);
      setIsLoading(true);
      setGallery([]);
      const data = await fetchGallery(topic);
      setGallery(data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div>
        <SearchBar onSubmit={handleSubmit} />
        {gallery.length > 0 && <ImageGallery items={gallery} />}
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
      </div>
    </>
  );
}

export default App;
