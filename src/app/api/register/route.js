import { NextResponse } from "next/server";
import dbconnect from "../../../db/dbconnect"
import User from "../../../model/user";

dbconnect();

export async function POST(req, res) {
    try {
        const { name, email, mobile } = await req.json();

        if(!name || !email || !mobile) {
            return NextResponse.json({ error: "All fields are required" }, { status: 404 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        const numberRegex = /^\d{10}$/;
        if (!numberRegex.test(mobile)) {
            return NextResponse.json({ error: "Invalid mobile format" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Email already exists" }, { status: 401 });
        }

        const existingMobile = await User.findOne({ phone_no: mobile });
        if(existingMobile) {
            return NextResponse.json({ error: "Mobile number already exists" }, { status: 402 });
        }

        const user = await new User({ name, email, phone_no: mobile }).save();
        
        const token = `EVOLVE_${user.serial}`;

        return  NextResponse.json({ message: "User created successfully", token, email: user.email }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}