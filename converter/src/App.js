import React, { useState } from 'react';
import axios from 'axios';
import urlShortenerImg from './banner-main-alt.png';
import urlicon from './url-icon.png';
import clipart1 from './clipart1.png';
import clipart2 from './clipart2.png';

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
         originalUrl , // Sending the original URL as part of the request body
        {
          headers: {
            'Content-Type': 'text/plain', // Set content type to application/json
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <header style={{ marginBottom: '40px',display:'flex',flexDirection:'column',gap:'16px' }}>
      <img src={urlShortenerImg} alt="URL Shortener" style={{ maxWidth: '35vw', height: 'auto' }} />
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            id="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            style={{ width: '80%', marginBottom: '20px', padding: '10px', fontFamily: 'Rubik, sans-serif', fontSize: '1em', border: '2px solid #ccc', borderRadius: '5px', transition: 'border-color 0.3s', textAlign: 'center',
           }}
            placeholder="Enter your URL here"
            required
          />
          <button type="submit" disabled={isLoading} style={{ width: '50%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '15px', cursor: 'pointer', fontFamily: 'Rubik, sans-serif', fontSize: '1em', transition: 'background-color 0.3s' }}>
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>
        {shortenedUrl && (
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', marginTop: '40px', animation: 'fadeIn 1s' }}>
            <p style={{ margin: 0, fontFamily: 'Rubik, sans-serif', fontSize: '1.2em', color: '#333', textAlign: 'center' }}><strong>Shortened URL:</strong></p>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', wordBreak: 'break-all', fontFamily: 'Rubik, sans-serif', fontSize: '1.2em', textDecoration: 'none', transition: 'color 0.3s', display: 'block', marginTop: '10px', textAlign: 'center' }}>{shortenedUrl}</a>
          </div>
        )}
        {error && <p style={{ color: 'red', fontFamily: 'Rubik, sans-serif', fontSize: '1.2em', marginTop: '20px', textAlign: 'center' }}>{error}</p>}
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '40px' }}>

        {/* <img src={clipart1} alt="Clipart" style={{ maxWidth: '200px', height: 'auto' }} />
        <img src={clipart2} alt="Clipart" style={{ maxWidth: '200px', height: 'auto' }} /> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '40px',gap:'30px' }}>
        <div className="card" style={{ width: '300px', textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'transform 0.3s' }}>
          <h3>Why Choose Us?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card" style={{ width: '300px', textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'transform 0.3s' }}>
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card" style={{ width: '300px', textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'transform 0.3s' }}>
          <h3>Customer Satisfaction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '20px', backgroundColor: '#343a40', color: '#fff', width: '100%' }}>
        <p style={{ margin: 0, fontFamily: 'Rubik, sans-serif', fontSize: '1em' }}>© 2024 URL Shortener. All rights reserved.</p>
      </footer>
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default UrlShortener;
