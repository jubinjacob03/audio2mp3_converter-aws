from pydub import AudioSegment
from tempfile import NamedTemporaryFile

def local_test():
    # Mock event object
    event = {
        'audio': 'C:/Users/jrjub/Downloads/Music/blues2.wav'  # Replace with the actual path
    }
    
    # Call the lambda handler with the mock event
    result = lambda_handler(event, None)
    
    # Save the output audio to a file
    with open('output.mp3', 'wb') as f:
        f.write(result['body'])

def lambda_handler(event, context):
    # Get the uploaded audio file from the event
    audio_file = event['audio']

    # Perform audio transcoding
    audio = AudioSegment.from_file(audio_file)
    
    # Convert to desired format (e.g., MP3)
    with NamedTemporaryFile(delete=False) as tmp_file:
        output_audio = audio.export(tmp_file, format="mp3").read()

    # Return the transcoded audio
    return {
        'statusCode': 200,
        'body': output_audio
    }

# Run the local test
local_test()
