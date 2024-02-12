"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export async function registerUser(prevState: any, formData: FormData) {
  const schema = z.object({
    username: z.string().min(1),
    name: z.string().min(1),
    email: z.string().min(1),
    password: z.string().min(1),
  });
  const data = schema.parse({
    username: formData.get("username"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  console.log(data);

  try {
    const result = await sql`
      SELECT * FROM whitelist WHERE email = ${data.email}
    `;

    if (result && result.rowCount > 0) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      await sql`
        INSERT INTO users(username, name, email, password, title, permissions)
        VALUES (${data.username}, ${data.name}, ${
        data.email
      }, ${hashedPassword}, ${"Team Member"}, USER)
      `;
      revalidatePath("/");
      return { message: "success" };
    } else {
      return { message: `provided email is not on the whitelist` };
    }
  } catch (error) {
    console.log(error);
    return { message: `email already exists` };
  }
}
