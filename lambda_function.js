const sharp = require('sharp');
// Handler function to be exported - Sharp Library

async function handler(event, context) {  // async function with Event and Context - ( parameters passed by AWS Lambda )
  try {
    if (event.body && event.body.blob) { // Checks for Image data in request body
      
      const imageBuffer = await sharp(await event.body.blob()) // Access image data from request body
        .toFormat('jpeg') // Desired format
        .toBuffer();  // Convert to Buffer

      const base64Image = imageBuffer.toString('base64'); // Convert to Base64

      return {
        statusCode: 200,
        body: JSON.stringify({ convertedImageData: base64Image }), // Return Base64 Image Data
      };
    } else {
      // No image data provided, return a 400 Bad Request response
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No image data provided' }),
      };
    }
  } catch (error) {
    console.error(error);
    // Catch any other errors during conversion, return a 500 Internal Server Error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Image conversion failed' }),
    };
  }
}

module.exports = {
  handler,
};
// Export the handler function