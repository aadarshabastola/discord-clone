import { auth } from "@clerk/nextjs";
import { db } from "./db";
import { profile } from "console";

export const currentProfile = async () => {
    const { userId } = auth()

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