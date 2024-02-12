const { db } = require("@vercel/postgres");
const {
  users,
  checklists,
  study_materials,
  whitelist
} = require("../app/lib/placeholder-data");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const usersTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                permissions TEXT NOT NULL,
                title TEXT NOT NULL
            );
        `;

    console.log(`created users table`);
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
                INSERT INTO users (username, name, email, password, permissions, title)
                VALUES (${user.username}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.permissions}, ${user.title})
              `;
      })
    );
    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      usersTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedWhitelist(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const whitelistTable = await client.sql`
            CREATE TABLE IF NOT EXISTS whitelist (
              email TEXT NOT NULL UNIQUE
            );
        `;

    console.log(`created users table`);
    const insertedWhitelist = await Promise.all(
      whitelist.map(async (email) => {
        return client.sql`
                INSERT INTO whitelist (email)
                VALUES (${email.email})
              `;
      })
    );
    console.log(`Seeded ${insertedWhitelist.length} whitelist`);

    return {
      whitelistTable,
      whitelist: insertedWhitelist,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedStudy(client) {
  try {
    const smTable = await client.sql`
            CREATE TABLE IF NOT EXISTS study_materials (
                id SERIAL PRIMARY KEY,
                category VARCHAR(255) NOT NULL,
                title VARCHAR(255) NOT NULL,
                url VARCHAR(255) NOT NULL
            );
            `;

    console.log("created study_materials table.");
    const insertedStudy = await Promise.all(
      study_materials.map(async (study_material) => {
        return client.sql`
                INSERT INTO study_materials(category, title, url)
                VALUES (${study_material.category}, ${study_material.title}, ${study_material.url})
                `;
      })
    );
    console.log(`seeded ${insertedStudy.length} study materials`);

    return {
      smTable,
      study_materials: insertedStudy,
    };
  } catch (error) {
    console.log(`Error seeding users into db: ${error}`)
    throw error
  }
}

async function seedChecklists(client) {
    try {
      const checklistTable = await client.sql`
              CREATE TABLE IF NOT EXISTS checklists (
                  id SERIAL PRIMARY KEY,
                  category VARCHAR(255) NOT NULL,
                  title VARCHAR(255) NOT NULL,
                  url VARCHAR(255) NOT NULL,
                  date TEXT NOT NULL
              );
              `;
  
      console.log("created checklists table.");
      const insertedChecklists = await Promise.all(
        checklists.map(async (checklist) => {
          return client.sql`
                  INSERT INTO checklists(category, title, url, date)
                  VALUES (${checklist.category}, ${checklist.title}, ${checklist.url}, ${checklist.date})
                  `;
        })
      );
      console.log(`seeded ${insertedChecklists.length} checklists`);
  
      return {
        checklistTable,
        checklists: insertedChecklists,
      };
    } catch (error) {
      console.log(`Error seeding users into db: ${error}`)
      throw error
    }
  }

  async function main() {
    const client = await db.connect();
  
    await seedUsers(client);
    await seedStudy(client);
    await seedChecklists(client);
    await seedWhitelist(client)
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  