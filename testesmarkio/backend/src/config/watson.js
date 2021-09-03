const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'Y_CghSeR4C5Tw8HLyT84YKkCTvCn-QjD5SLX0PtzqrG-',
  }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/56567cf8-37c6-4188-bc73-9cf60955e291',
  disableSslVerification: true
}); 

module.exports = textToSpeech;