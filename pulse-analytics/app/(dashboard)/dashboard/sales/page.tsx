import { ArrowDown, ArrowUp, Calendar, ChevronDown, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Chart } from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Mock data for sales trends
const salesTrendsData = [
  { name: "Jan", online: 4000, offline: 2400 },
  { name: "Feb", online: 3000, offline: 1398 },
  { name: "Mar", online: 2000, offline: 9800 },
  { name: "Apr", online: 2780, offline: 3908 },
  { name: "May", online: 1890, offline: 4800 },
  { name: "Jun", online: 2390, offline: 3800 },
  { name: "Jul", online: 3490, offline: 4300 },
]

// Mock data for product sales
const productSalesData = [
  { name: "Product A", sales: 4000 },
  { name: "Product B", sales: 3000 },
  { name: "Product C", sales: 2000 },
  { name: "Product D", sales: 2780 },
  { name: "Product E", sales: 1890 },
]

// Mock data for recent sales
const recentSales = [
  {
    id: "1",
    product: "Premium Plan",
    customer: "John Doe",
    date: "2023-04-01",
    amount: "$99.00",
    status: "Completed",
  },
  {
    id: "2",
    product: "Basic Plan",
    customer: "Jane Smith",
    date: "2023-04-02",
    amount: "$49.00",
    status: "Pending",
  },
  {
    id: "3",
    product: "Enterprise Plan",
    customer: "Robert Johnson",
    date: "2023-04-03",
    amount: "$299.00",
    status: "Completed",
  },
  {
    id: "4",
    product: "Basic Plan",
    customer: "Emily Davis",
    date: "2023-04-04",
    amount: "$49.00",
    status: "Failed",
  },
  {
    id: "5",
    product: "Premium Plan",
    customer: "Michael Wilson",
    date: "2023-04-05",
    amount: "$99.00",
    status: "Completed",
  },
  {
    id: "6",
    product: "Enterprise Plan",
    customer: "Sarah Brown",
    date: "2023-04-06",
    amount: "$299.00",
    status: "Completed",
  },
  {
    id: "7",
    product: "Premium Plan",
    customer: "David Miller",
    date: "2023-04-07",
    amount: "$99.00",
    status: "Pending",
  },
]

export default function SalesPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Sales</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>Apr 1 - Apr 30, 2023</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              <span>+20.1% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Online Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$32,891.20</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              <span>+15.3% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Offline Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,340.69</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              <span>+5.8% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-sm text-red-500">
              <ArrowDown className="mr-1 h-4 w-4" />
              <span>-0.5% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Sales Trends</CardTitle>
            <CardDescription>Comparison of online vs offline sales</CardDescription>
          </CardHeader>
          <CardContent>
            <Chart>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="online" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="offline" stroke="#60a5fa" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Chart>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Product Sales</CardTitle>
            <CardDescription>Sales by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <Chart>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={productSalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </CardContent>
        </Card>
      </div>

      {/* Recent Sales */}
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>Recent customer purchases</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto">
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Completed</DropdownMenuItem>
              <DropdownMenuItem>Pending</DropdownMenuItem>
              <DropdownMenuItem>Failed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSales.map((sale) => (
                <TableRow key={sale.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{sale.product}</TableCell>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>{sale.amount}</TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        sale.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : sale.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {sale.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
