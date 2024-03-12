from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer

def lambda_handler(event, context):
  # Get the text to be summarized from the event (assuming 'text' is the key)
  text = event['text']

  # Preprocess the text (optional)
  # ... (e.g., remove stop words, clean punctuation)

  # Parse the text
  parser = PlaintextParser.from_string(text, Tokenizer('english'))

  # Summarize the text using LexRank
  summarizer = LexRankSummarizer()
  summary = summarizer(parser.document, sentences=3)  # Extract 3 sentences

  # Join the summary sentences into a single string
  summary_text = ' '.join([str(sentence) for sentence in summary])

  # Return the summarized text
  return {
      'statusCode': 200,
      'body': summary_text
  }
