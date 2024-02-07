/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '~/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const updatedAt = new Date().toISOString()

  const databaseVersionResult = (await prisma.$queryRawUnsafe(
    `SHOW server_version;`,
  )) as any
  const databaseVersionValue = databaseVersionResult[0].server_version

  const databaseMaxConnectionsResult = (await prisma.$queryRawUnsafe(
    `SHOW max_connections;`,
  )) as any
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult[0].max_connections

  const databaseName = process.env.POSTGRES_DB
  console.log('databaseName', databaseName)

  const databaseOpenedConnectionsResult = (await prisma.$queryRawUnsafe(
    `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;`,
    databaseName,
  )) as any
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult[0].count

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  })
}
