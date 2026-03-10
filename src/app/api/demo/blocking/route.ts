import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {

    const result = await generateText({
        model: google("gemini-2.5-flash"),
        prompt: "Write a story about a cat",
        experimental_telemetry:{
            isEnabled: true,
            recordInputs: true,
            recordOutputs: true,
        }
    });

    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
    });
}