import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import OpenAI from "openai";
// const client = new OpenAIClient(
//     process.env.AZURE_ENDPOINT!,
//     new AzureKeyCredential(process.env.AZURE_APR_KEY!)
// );
// export default client;

const client = new OpenAI({
    apiKey: process.env.AZURE_API_KEY!, // This is the default and can be omitted
});
export default client;
