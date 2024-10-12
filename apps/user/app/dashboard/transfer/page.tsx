import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
import { Input } from '@repo/ui/components/ui/input'
import { Button } from '@repo/ui/components/ui/button'
import {Label} from '@repo/ui/components/ui/label'

export default function Transfer() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transfer Funds</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>New Transfer</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Input id="recipient" placeholder="Enter recipient's name or account" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" placeholder="Enter amount" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Input id="description" placeholder="Enter transfer description" />
            </div>
            <Button className="w-full">Send Transfer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
