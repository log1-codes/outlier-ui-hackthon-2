import { Filter, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chart } from "@/components/ui/chart"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

// Mock data for user engagement
const userEngagementData = [
  { name: "Very Active", value: 400, color: "#3b82f6" },
  { name: "Active", value: 300, color: "#60a5fa" },
  { name: "Occasional", value: 200, color: "#93c5fd" },
  { name: "Inactive", value: 100, color: "#bfdbfe" },
]

// Mock data for top users
const topUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    interactions: 245,
    lastActive: "2023-04-01",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    interactions: 198,
    lastActive: "2023-04-02",
    status: "Active",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    interactions: 187,
    lastActive: "2023-03-28",
    status: "Active",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    interactions: 156,
    lastActive: "2023-03-30",
    status: "Active",
  },
  {
    id: "5",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    interactions: 142,
    lastActive: "2023-03-25",
    status: "Inactive",
  },
  {
    id: "6",
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    interactions: 135,
    lastActive: "2023-03-29",
    status: "Active",
  },
  {
    id: "7",
    name: "David Miller",
    email: "david.miller@example.com",
    interactions: 128,
    lastActive: "2023-03-20",
    status: "Inactive",
  },
  {
    id: "8",
    name: "Lisa Taylor",
    email: "lisa.taylor@example.com",
    interactions: 112,
    lastActive: "2023-03-31",
    status: "Active",
  },
]

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">User Analytics</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users..."
              className="w-full rounded-md border pl-8 sm:w-64 lg:w-80"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>User Engagement</CardTitle>
            <CardDescription>Distribution of user activity levels</CardDescription>
          </CardHeader>
          <CardContent>
            <Chart>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={userEngagementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {userEngagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Top Active Users</CardTitle>
            <CardDescription>Users with highest interaction counts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topUsers.slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="text-sm font-medium">{user.interactions} interactions</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Complete list of system users</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Interactions</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topUsers.map((user) => (
                    <TableRow key={user.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.interactions}</TableCell>
                      <TableCell>{user.lastActive}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="active" className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Interactions</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topUsers
                    .filter((user) => user.status === "Active")
                    .map((user) => (
                      <TableRow key={user.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.interactions}</TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <div className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            {user.status}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="inactive" className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Interactions</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topUsers
                    .filter((user) => user.status === "Inactive")
                    .map((user) => (
                      <TableRow key={user.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.interactions}</TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <div className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                            {user.status}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
