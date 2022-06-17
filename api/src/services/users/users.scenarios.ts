import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String344214' } },
    two: { data: { email: 'String1831896' } },
  },
})

export type StandardScenario = typeof standard
