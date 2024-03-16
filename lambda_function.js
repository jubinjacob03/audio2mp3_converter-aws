import AWS from 'aws-sdk'; // Future use of DynamoDB
import axios from 'axios'; // Use Axios to make HTTP requests

const handler = async (event, context) => { // Define the main handler function
    const origin = 'http://localhost:3000'; // Replace with your frontend URL for CORS
  const headers = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST', // Specifying allowed methods (e.g., GET, POST)
    'Access-Control-Allow-Headers': 'Content-Type', // Specifying allowed headers
  };
  try {
    const originalUrl = event.body || event.queryStringParameters.url; // Extract the original URL from the request body or query string

    // Check if originalUrl is defined
    if (!originalUrl) {
      return {
        statusCode: 400,
        body: 'Missing URL in request body'  // Return an error if originalUrl is not defined
      };
    }

    const tinyUrl = await shortenUrlWithTinyURL(originalUrl);  // Call the function to shorten the URL


    return {
      statusCode: 200,
      body: JSON.stringify({ shortenedUrl: tinyUrl })  // Return the shortened URL
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })  // Return an error if an exception is caught
    };
  }
};

const shortenUrlWithTinyURL = async (originalUrl) => {  // Define the function to shorten the URL
  try {
    const response = await axios.post('http://tinyurl.com/api-create.php', {  // Send a POST request to TinyURL's API
      url: originalUrl
    });

    return response.data; // TinyURL's API directly returns the shortened URL
  } catch (error) {
    console.error('Error shortening URL with TinyURL:', error);
    throw error; // Re-throw the error for handling in the main handler
  }
};

export { handler };  // Export the handler function
