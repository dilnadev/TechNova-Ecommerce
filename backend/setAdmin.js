import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URL);

// List all users
const users = await User.find({}, 'name email role');
console.log('\n=== All Users ===');
users.forEach(u => console.log(`  ${u.email}  |  role: ${u.role || 'user'}  |  id: ${u._id}`));

// Set admin — change this email to yours
const ADMIN_EMAIL = process.argv[2];

if (!ADMIN_EMAIL) {
  console.log('\nUsage: node setAdmin.js your@email.com\n');
} else {
  const result = await User.findOneAndUpdate(
    { email: ADMIN_EMAIL },
    { role: 'admin' },
    { new: true }
  );
  if (result) {
    console.log(`\n✅  ${result.email} is now an admin!\n`);
  } else {
    console.log(`\n❌  No user found with email: ${ADMIN_EMAIL}\n`);
  }
}

await mongoose.disconnect();
