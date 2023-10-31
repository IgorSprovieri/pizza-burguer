import { db } from "..";

export const createTables = async () => {
  try {
    await db.query(
      "CREATE TABLE sections ( id SERIAL PRIMARY KEY, title TEXT, iconUrl TEXT, invertIconUrl TEXT )",
      []
    );

    console.log("Sections table created");

    await db.query(
      "CREATE TABLE items ( id SERIAL PRIMARY KEY, sectionId INT, name TEXT, price TEXT, imageUrl TEXT, description TEXT, CONSTRAINT fk_sections FOREIGN KEY (sectionId) REFERENCES sections (id) ON DELETE SET NULL )",
      []
    );

    console.log("Items table created");

    await db.query(
      "CREATE TABLE advertisings ( id SERIAL PRIMARY KEY, src TEXT )",
      []
    );

    console.log("Advertisings table created");

    return;
  } catch (error) {
    console.log(error);
  }
};

createTables();
