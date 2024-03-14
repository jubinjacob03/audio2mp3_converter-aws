import React, { useState } from 'react';
import axios from 'axios';

function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'https://ipjesjo0va.execute-api.ap-southeast-2.amazonaws.com/url-shortner',
        originalUrl, // Send the original URL as the request body
        {
          headers: {
            'Content-Type': 'text/plain', // Set content type to text/plain for raw text
          },
        }
      );
      setShortenedUrl(response.data.shortenedUrl); // Assuming the shortened URL is in the response data
    } catch (error) {
      console.error(error);
      setError('Error shortening URL');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="text"
          id="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>
      {shortenedUrl && <p>Shortened URL: {shortenedUrl}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UrlShortener;
