import { NextRequest, NextResponse } from "next/server";
//route文件不能在page目录下
export async function GET(request: NextRequest) {
    const { url } = request;
    return NextResponse.json({ url });
}
