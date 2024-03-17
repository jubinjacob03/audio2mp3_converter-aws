import React, { useState } from "react";
import axios from "axios";
import banner_image from "./banner-main-alt.png";
import "./App.css";
const apiUrl = process.env.REACT_APP_API_ENDPOINT; // Importing endpoint from .env ( or else hardcode it in request line & remove this line )


// some of the links dont use anchor tags, so we disable the eslint warnings for anchor tags with --{/* eslint-disable jsx-a11y/functions */}

function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState("");  // State to store the original URL
  const [shortenedUrl, setShortenedUrl] = useState(null);  // State to store the shortened URL
  const [isLoading, setIsLoading] = useState(false);  // State to store the loading state
  const [error, setError] = useState(null);  // State to store the error


  const handleSubmit = async (e) => {  // Function to handle form submission
    e.preventDefault();  // Prevent the default form submission
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(  // Send a POST request to the URL shortening API
      apiUrl, // Your API endpoint to AWS API Gateway integarted with Lambda
        originalUrl, // Sending the original URL as part of the request body
        {
          headers: {
            "Content-Type": "text/plain", // Set content type to application/json
          },
        }
      );
      setShortenedUrl(response.data.shortenedUrl); // Set the shortened URL in the state
    } catch (error) {
      console.error(error);
      setError(" Error shortening URL, try again  :(");
    } finally {
      setIsLoading(false);
    }
  };

  const handleHomeClick = () => {
    window.location.reload(); // Reload the site
    setOriginalUrl(""); // Reset the input box
  };


  return (
    <>
    <header>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a className="logo">
        SHORTIFY
      </a>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <ul className="navlist">
        <li className="navlist-text">
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a onClick={handleHomeClick}>Home</a>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
        </li>
        <li className="navlist-text">
          <a href="https://github.com/jubinjacob03/shortify_url-shortner-aws_lambda">Github</a>
        </li>
        <li className="navlist-text">
          <a href="https://github.com/jubinjacob03">Contact Me</a>
        </li>
        <li className="navlist-icon">
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a onClick={handleHomeClick}><i className="ri-home-line"></i></a>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
          </li>
          <li className="navlist-icon">
            <a href="https://github.com/jubinjacob03/shortify_url-shortner-aws_lambda"><i className="ri-github-line"></i></a>
          </li>
          <li className="navlist-icon">
            <a href="https://github.com/jubinjacob03"><i className="ri-user-line"></i></a>
          </li >
      </ul>
      {/* eslint-disable jsx-a11y/anchor-has-content */}
      <a href="https://aws.amazon.com/getting-started/" class="ri-amazon-line" id="menu-icon"></a>
      {/* eslint-disable jsx-a11y/anchor-has-content */}
    </header>

    <section className="banner">
      <div className="banner-text">
        <h4>Shorten any url on the go <i className="ri-flashlight-line"></i></h4>
        <h1>URL Shortener</h1>
        <p className="desc">This project seamlessly merges AWS Lambda with TinyURL PHP, offering a dynamic solution for swiftly shortening URLs tailored to your requirements.</p>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            id="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="url-input"
            placeholder="Paste URL here"
            required
          />
          <button  className="shorten-button" type="submit" disabled={isLoading} >
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
      <a href="https://github.com/jubinjacob03/shortify_url-shortner-aws_lambda/blob/main/converter/README.md" className="ctaa"><i class="ri-external-link-line"></i>Learn More</a>
      </form>
      </div>

      <div className="banner-img">
        <img src={banner_image} alt="SHORTIFY-banner" />
      </div>
      <div  className="result-box" style={{ display: shortenedUrl || error ? 'block' : 'none' }}> 
      {shortenedUrl && (
            <p  className="result"><strong><i class="ri-link"></i> Shortified URL : </strong><a className="result-url" href={shortenedUrl} target="_blank" rel="noopener noreferrer" >{shortenedUrl}</a></p>

        )}
        {error && <p className="result" style={{ color: '#f7f30c',fontSize:'20px', textAlign: 'center' }}><i class="ri-alert-line"></i> {error}</p>}
        </div>
    </section>
    <div class="icons">
      <a href="https://github.com/jubinjacob03/shortify_url-shortner-aws_lambda/"><i class="ri-github-line"></i></a>
      <a href="https://aws.amazon.com/lambda/"><i class="ri-cloud-line"></i></a>
      <a href="https://tinyurl.com/app/features/how-tinyurl-works"><i class="ri-function-line"></i></a>
    </div>
    </>
  );
}

export default UrlShortener;
