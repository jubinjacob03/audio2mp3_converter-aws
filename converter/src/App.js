import React, { useState,useEffect } from "react";
import axios from "axios";
import urlShortenerImg from "./banner-main-alt.png";
import urlicon from "./url-icon.png";
import clipart1 from "./clipart1.png";
import clipart2 from "./clipart2.png";
import card1 from "./card1.png";
import card2 from "./card2.png";
import Box from "@mui/material/Box";
import "./App.css";
import "./App.css";

function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // State to manage alert message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://ipjesjo0va.execute-api.ap-southeast-2.amazonaws.com/url-shortner",
        originalUrl, // Sending the original URL as part of the request body
        {
          headers: {
            "Content-Type": "text/plain", // Set content type to application/json
          },
        }
      );
      setShortenedUrl(response.data.shortenedUrl); // Assuming the shortened URL is in the response data
    } catch (error) {
      console.error(error);
      setError("Error shortening URL");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAboutClick = () => {
    setAlertMessage("This project leverages AWS Lambda, a serverless computing service, for seamless integration of frontend with backend functionality. By utilizing AWS Lambda and TinyURL PHP it efficiently shorten URLs, optimizing resource usage and enhancing user experience. Overall this project was a work to understand AWS Lambda serverless computing and how its integration works with frontend :)");
     // Set alert message
    setShowAlert(true); // Show alert
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
         {showAlert && (
        <div className="alert">
          <span>{alertMessage}</span>
        </div>
      )}
    <header>
      <a href="#" class="logo">
        SHORTIFY
      </a>
      <ul class="navlist">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#" onClick={handleAboutClick}>About</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
      <div class="ri-amazon-line" id="menu-icon"></div>
    </header>
    <section class="hero">
      <div className="hero-text">
        <h5>Free URL Shortener</h5>
        <h4>Shorten any url on the go <i class="ri-flashlight-line"></i></h4>
        <h1>URL Shortener</h1>
        <p style={{letterSpacing:'1.25px'}}>This project seamlessly merges AWS Lambda with TinyURL PHP, offering a dynamic solution for swiftly shortening URLs tailored to your requirements.</p>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            id="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            style={{ width: '80%', marginBottom: '20px', padding: '10px', fontSize: '1em', border: '2px solid #ccc', borderRadius: '5px', transition: 'border-color 0.3s', textAlign: 'center',
           }}
            placeholder="Paste URL here"
            required
          />
          <button type="submit" disabled={isLoading} >
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
      <a href="#" class="ctaa"><i class="ri-external-link-line"></i>Learn More</a>
      </form>
      </div>

      <div className="hero-img">
        <img src={urlShortenerImg} alt="URL Shortener" />
      </div>
      {shortenedUrl && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <p  class="result"><strong><i class="ri-link"></i> Shortened URL : </strong><a className="result-url" href={shortenedUrl} target="_blank" rel="noopener noreferrer" >{shortenedUrl}</a></p>
          </div>
        )}
        {error && <p style={{ color: '#f7f30c',fontSize:'20px', textAlign: 'center' }}><i class="ri-alert-line"></i> {error}</p>}
    </section>
    <div class="icons">
      <a href="#"><i class="ri-github-line"></i></a>
      <a href="#"><i class="ri-cloud-line"></i></a>
      <a href="#"><i class="ri-function-line"></i></a>
    </div>
    <div class="scroll-down">
      <a href="#">
        <i class="ri-arrow-down-s-line"></i>
      </a>
    </div>
    </>
  );
}

export default UrlShortener;
