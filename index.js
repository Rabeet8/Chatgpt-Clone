//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

//Acquiring the configuration from openAi
//setting the configuration to organization
const { Configuration, OpenAIApi } = require("openai");
const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')

const configuration = new Configuration({
    organization: "org-sJY0pb2zHk225uL6KG7nPekI",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();



const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async(req,res)=>{
    const {message} = req.body;
   console.log(message, "message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      console.log()
      res.json({
        // data:response.data
        message:response.data.choices[0].text,
      })
});



// app.get('/models', async(req,res)=>{
//   const response = await openai.listEngines();
//   console.log(response.data.data);
//   res.json({
//     models: response.data.data
//   })
  
// });




app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`);
});