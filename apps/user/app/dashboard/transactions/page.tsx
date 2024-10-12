import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@repo/ui/components/ui/table'

const transactions = [
  { id: 1, date: '2023-05-01', description: 'Payment to John Doe', amount: -500.00, status: 'Completed' },
  { id: 2, date: '2023-05-02', description: 'Deposit from Work Inc.', amount: 2500.00, status: 'Completed' },
  { id: 3, date: '2023-05-03', description: 'Online Purchase', amount: -75.50, status: 'Pending' },
  { id: 4, date: '2023-05-04', description: 'Transfer from Savings', amount: 1000.00, status: 'Completed' },
  { id: 5, date: '2023-05-05', description: 'Utility Bill Payment', amount: -150.00, status: 'Scheduled' },
]

export default function Transactions() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className={transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
