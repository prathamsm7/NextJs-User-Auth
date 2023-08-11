import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {password, email } = reqBody;

    const user = await User.findOne({email})

    if(!user){
        return NextResponse.json(
            { error: "User Not Registerd" },
            { status: 400 }
          );
    }

    const tokenData = {
        id:user._id,
        email:user.email,
        username:user.username
    }

    // const token = await  

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
