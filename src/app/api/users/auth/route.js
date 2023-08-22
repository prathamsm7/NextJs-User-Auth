import { connect } from "@/dbConfig/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    const userId = await getTokenData(request);

    const user = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json({ message: "User Found", data: user });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
