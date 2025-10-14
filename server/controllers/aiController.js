// aiController.js - COMPLETE CODE FOR HUGGING FACE CHAT COMPLETION (JSON CLEANING IMPROVED)

const { HfInference } = require("@huggingface/inference");

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

const HUGGINGFACE_MODEL = "mistralai/Mistral-7B-Instruct-v0.2"; 

const generateProjectIdeas = async (req, res) => {
    const { technologies } = req.body;
    console.log('AI Controller: Received request to generate ideas for technologies:', technologies);

    if (!technologies || technologies.length === 0) {
        console.warn('AI Controller: No technologies selected.');
        return res.status(400).json({ message: 'Please select at least one technology.' });
    }

    const userPrompt = `Generate 3 beginner-friendly project ideas for an engineering student. The projects must use the following technologies: ${technologies.join(', ')}.`;
    
    console.log('AI Controller: Generated user prompt for Hugging Face:', userPrompt);

    try {
        const completion = await hf.chatCompletion({
            model: HUGGINGFACE_MODEL,
            messages: [
                { role: "system", content: "You are a helpful assistant that only responds with a JSON array of objects. Do not include any introductory or concluding text, markdown fences (like ```json), or conversational wrappers outside the JSON array. Each object in the array should represent a project idea. For each project idea, provide a title (string), a one-sentence description (string), and a list of 2-3 key features to build (array of strings), strictly adhering to the specified JSON array format." },
                { role: "user", content: userPrompt }
            ],
            max_tokens: 1500,
            temperature: 0.7,
        });

        const generatedText = completion.choices?.[0]?.message?.content;

        if (!generatedText) {
            console.error('AI Controller ERROR: Hugging Face model returned no content in its chat completion response. Full API response:', JSON.stringify(completion));
            return res.status(500).json({ message: 'AI model returned an empty response or an unexpected format.' });
        }

        console.log('AI Controller: Raw Hugging Face response content (snippet):\n', generatedText.substring(0, 500) + (generatedText.length > 500 ? '...' : ''));

        let projectIdeas = [];
        let cleanedJsonString = generatedText; // Start with raw generated text

        try {
            // --- IMPROVED JSON CLEANING ---
            // 1. Remove markdown fences (```json, ```)
            cleanedJsonString = cleanedJsonString.replace(/```json\n?|```\n?/g, '').trim();

            // 2. Try to find the first '[' and last ']' to extract the pure JSON array.
            const firstBracket = cleanedJsonString.indexOf('[');
            const lastBracket = cleanedJsonString.lastIndexOf(']');

            if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
                cleanedJsonString = cleanedJsonString.substring(firstBracket, lastBracket + 1);
            } else {
                // If brackets aren't found or are malformed, log and proceed with original cleaned string
                console.warn('AI Controller WARNING: Could not find valid JSON array delimiters. Attempting to parse raw cleaned string.');
            }
            // 3. One more trim just in case
            cleanedJsonString = cleanedJsonString.trim();

            projectIdeas = JSON.parse(cleanedJsonString);
            console.log('AI Controller: Successfully parsed project ideas JSON after robust cleaning.');
            res.status(200).json(projectIdeas);
        } catch (parseError) {
            console.error("\n--- AI Controller ERROR: Failed to parse project ideas JSON from Hugging Face model output ---");
            console.error("  Error details:", parseError.message);
            console.error("  Raw Hugging Face generated text that caused error:\n", generatedText);
            console.error("  Attempted to parse this cleaned string:\n", cleanedJsonString);
            console.error("-----------------------------------------------------------------------------------\n");
            res.status(500).json({ message: 'Hugging Face model returned malformed data. Please try again or refine the prompt.' });
        }

    } catch (error) {
        console.error('\n--- AI Controller ERROR: Hugging Face API Request Failed ---');
        console.error('  Error details:', error.message);
        
        let userMessage = 'An error occurred while communicating with the AI model.';
        if (error.status === 401 || error.message.includes('401')) {
            userMessage = 'Hugging Face API token invalid. Please check your HUGGINGFACE_API_KEY.';
        } else if (error.status === 429 || error.message.includes('429')) {
            userMessage = 'Too many requests to Hugging Face (rate limit). Please wait a moment and try again.';
        } else if (error.name === 'AbortError' || error.message.includes('Timeout')) {
            userMessage = 'Hugging Face model took too long to respond. Please try again.';
        } else if (error.message.includes('model is currently loading')) {
             userMessage = 'Hugging Face model is loading. Please try again in a few seconds.';
        }
        res.status(500).json({ message: userMessage });
    }
};

module.exports = { generateProjectIdeas };