import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


// import { checkSubscription } from "@/lib/subscription";
// import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_AI_TOOL_API_KEY,
});


console.log("这是-=-=OPENAI_AI_TOOL_API_KEY:",process.env.OPENAI_AI_TOOL_API_KEY)

  export async function POST(
    req: Request
  ) {
    try {
      const { userId } = auth();
      const body = await req.json();
      const { messages  } = body;
  
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
    //   if (!configuration.apiKey) {
    //     return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    //   }
  
      if (!messages) {
        return new NextResponse("Messages are required", { status: 400 });
      }
  
    //   const freeTrial = await checkApiLimit();
    //   const isPro = await checkSubscription();
  
    //   if (!freeTrial && !isPro) {
    //     return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    //   }
  console.log("messages",messages)
      const response = await openai.chat.completions.create({
        model: "text-davinci-003",
        messages: [{"role": "user", "content": "Hello!"}],
      });
  
    //   if (!isPro) {
    //     await incrementApiLimit();
    //   }
    console.log(response.choices[0].message.content);
      return NextResponse.json(response.choices[0].message);
    } catch (error) {
      console.log('[CONVERSATION_ERROR]', error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  };