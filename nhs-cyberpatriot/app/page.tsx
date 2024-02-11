"use client";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export default async function Page() {
  const searchParams = useSearchParams();
  const user = searchParams.get("user");
  const { rows } = await sql`SELECT * from users`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.username}
        </div>
      ))}
    </div>
  );
}
