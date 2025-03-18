import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
  `postgresql://store_owner:npg_4eIvYJA3LlXZ@ep-steep-cake-a88xd5i7-pooler.eastus2.azure.neon.tech/store?sslmode=require`
);
// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely

// postgresql://neondb_owner:npg_NW8olSOGfx5E@ep-dawn-meadow-a83i0d05-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
