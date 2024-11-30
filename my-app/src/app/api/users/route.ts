import connectMongoDB from "@/libs/mongodb";
import { User } from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 5);
    await connectMongoDB();
    await User.create({ username: username, password: hashedPassword});
    return NextResponse.json({ message: "Item added successfully" }, {status: 201})
}
