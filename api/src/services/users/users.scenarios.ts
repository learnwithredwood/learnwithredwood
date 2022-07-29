import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String344214', salt: 'foo', hashedPassword: 'bar' } },
    two: { data: { email: 'String1831896', salt: 'foo', hashedPassword: 'bar'  } },
  },
})

export type StandardScenario = typeof standard
