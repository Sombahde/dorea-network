// Dorea Network — Pilot seed data
// Creates one community + one admin/pastor account for initial setup

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const db = new PrismaClient()

async function main() {
  console.log('Seeding Dorea pilot database…')

  const community = await db.community.upsert({
    where: { invite_code: 'grace2024' },
    update: {},
    create: {
      name: 'Grace Community Church',
      invite_code: 'grace2024',
      status: 'active',
    },
  })

  console.log(`Community: ${community.name} (invite code: ${community.invite_code})`)

  const passwordHash = await bcrypt.hash('pastor2024', 12)

  const pastor = await db.member.upsert({
    where: { email: 'pastor@grace.church' },
    update: {},
    create: {
      community_id: community.id,
      first_name: 'Pastor',
      last_name: 'Admin',
      email: 'pastor@grace.church',
      password_hash: passwordHash,
      role: 'pastor',
      onboarding_accepted: true,
    },
  })

  console.log(`Pastor account: ${pastor.email} / password: pastor2024`)
  console.log()
  console.log('Ready. Share invite code "grace2024" with community members.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
