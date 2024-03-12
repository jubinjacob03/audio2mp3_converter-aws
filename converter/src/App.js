import React, { useState } from 'react';
import axios from 'axios';

function ImageConversion() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [convertedImageData, setConvertedImageData] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDownloadLink(null); // Clear download link when a new image is selected
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      // Handle validation errors
      return;
    }

    setProcessing(true);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await axios.post('/api/convert-image', formData, { // Adjust API endpoint
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setConvertedImageData(response.data.convertedImageData);
      setDownloadLink(URL.createObjectURL(response.data)); // Create download link
    } catch (error) {
      console.error(error);
      // Handle errors appropriately (e.g., display error message to user)
    } finally {
      setProcessing(false);
    }
  };

  const handleRemoval = () => {
    setSelectedFile(null);
    setConvertedImageData(null);
    setDownloadLink(null);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleRemoval} disabled={!selectedFile}>Remove Image</button>
      <button onClick={handleSubmit} disabled={processing || !selectedFile}>
        {processing ? 'Converting...' : 'Convert Image'}
      </button>
      {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Image" />}
      {convertedImageData && (
        <div>
          <h2>Converted Image</h2>
          <img
            src={`data:image/jpeg;base64,${convertedImageData}`} // Adjust content type if needed
            alt="Converted Image"
          />
          {downloadLink && <a href={downloadLink} download="converted_image.jpg">Download</a>}
        </div>
      )}
    </div>
  );
}

export default ImageConversion;
