import { NextRequest, NextResponse } from "next/server";
import { sleep } from "@/common/util";
import { MessageRequestBody } from "@/types/chat";
import client from "@/lib/openai";
//route文件不能在page目录下
export async function POST(request: NextRequest) {
    const { messages, model } = (await request.json()) as MessageRequestBody;
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
        async start(controller) {
            const events = await client.streamChatCompletions(
                model,
                [{ role: "system", content: "You are Chatgpt" }, ...messages],
                {
                    maxTokens: 1024,
                }
            );
            for await (const event of events) {
                for (const choice of event.choices) {
                    const delta = choice.delta?.content;
                    if (delta) {
                        controller.enqueue(encoder.encode(delta));
                    }
                }
            }

            // const messageText = messages[messages.length - 1].content;
            // for (let i = 0; i < messageText.length; i++) {
            //     await sleep(10);
            //     controller.enqueue(encoder.encode(messageText[i]));
            // }
            // controller.close();
            controller.close();
        },
    });
    return new Response(stream);
}
