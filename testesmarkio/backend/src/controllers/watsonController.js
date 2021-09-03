const textToSpeech = require('../config/watson');

module.exports = {
    textToAudio: async (req,res) => {
        const { comentario } = req.body;
        const response = await textToSpeech.synthesize({
            text: comentario,
            accept:'audio/wav',
            voice:'pt-BR_IsabelaV3Voice'
        })
        const buffer = await textToSpeech.repairWavHeaderStream(response.result);
        const bufferString64 = buffer.toString('base64');
        res.json({ audio: bufferString64 });
    }
};