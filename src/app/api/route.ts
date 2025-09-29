import { NextResponse, NextRequest } from "next/server";

const data = [
    { id: 1, name: "Course 1", description: "Description for Course 1" },
    { id: 2, name: "Course 2", description: "Description for Course 2" },
    { id: 3, name: "Course 3", description: "Description for Course 3" },
];

export async function GET(request: NextRequest) {
    const { searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if (id){
     return NextResponse.json({ data });
    }
    return NextResponse.json({ message: 'Data tidak ada' });
    
}