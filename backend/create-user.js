const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function main() {
  console.log('Connecting to DB to create user...');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    const hashedPassword = await bcrypt.hash('8092821953s', 10);
    
    // Check if exists
    const existing = await prisma.user.findUnique({
      where: { email: 'welin1924@gmail.com' }
    });
    
    if (existing) {
      console.log('User already exists. Updating password...');
      await prisma.user.update({
        where: { email: 'welin1924@gmail.com' },
        data: { password: hashedPassword, name: 'Welin' }
      });
      console.log('User updated successfully!');
    } else {
      await prisma.user.create({
        data: {
          email: 'welin1924@gmail.com',
          password: hashedPassword,
          name: 'Welin',
          role: 'ADMIN',
        },
      });
      console.log('User created successfully!');
    }
  } catch (e) {
    console.error('Error:', e);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
}

main();
