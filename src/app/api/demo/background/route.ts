import {inngest} from "@/inngest/client";

export async function POST(req: Request) {
    await inngest.send({
        name: "demo/generate",
        data: {}
    });
    
    return Response.json({status:"Started"})
}

