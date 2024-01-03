import { getAuth } from "@clerk/nextjs/server";
import { db } from "./db";
import { profile } from "console";
import { NextApiRequest } from "next";

export const currentProfilePages = async (req: NextApiRequest) => {
    const { userId } = getAuth(req)

    if (!userId) {
        return null;
    }

    const profile = db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}