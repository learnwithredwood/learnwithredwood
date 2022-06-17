import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AuditCreateArgs>({
  audit: {
    one: {
      data: { log: 'String', user: { create: { email: 'String9030299' } } },
    },
    two: {
      data: { log: 'String', user: { create: { email: 'String2467093' } } },
    },
  },
})

export type StandardScenario = typeof standard
