import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const audits = () => {
  return db.audit.findMany()
}

export const audit = ({ id }: Prisma.AuditWhereUniqueInput) => {
  return db.audit.findUnique({
    where: { id },
  })
}

interface CreateAuditArgs {
  input: Prisma.AuditCreateInput
}

export const createAudit = ({ input }: CreateAuditArgs) => {
  return db.audit.create({
    data: input,
  })
}

interface UpdateAuditArgs extends Prisma.AuditWhereUniqueInput {
  input: Prisma.AuditUpdateInput
}

export const updateAudit = ({ id, input }: UpdateAuditArgs) => {
  return db.audit.update({
    data: input,
    where: { id },
  })
}

export const deleteAudit = ({ id }: Prisma.AuditWhereUniqueInput) => {
  return db.audit.delete({
    where: { id },
  })
}

export const Audit = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof audit>>) =>
    db.audit.findUnique({ where: { id: root.id } }).user(),
}
