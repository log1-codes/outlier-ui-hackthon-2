import { Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for reports
const reports = [
  {
    id: "1",
    title: "Q1 Sales Report",
    department: "Sales",
    date: "2023-04-01",
    size: "2.4 MB",
    type: "PDF",
  },
  {
    id: "2",
    title: "User Engagement Analysis",
    department: "Marketing",
    date: "2023-03-28",
    size: "1.8 MB",
    type: "PDF",
  },
  {
    id: "3",
    title: "Financial Statement",
    department: "Finance",
    date: "2023-03-25",
    size: "3.2 MB",
    type: "XLSX",
  },
  {
    id: "4",
    title: "Customer Satisfaction Survey",
    department: "Customer Support",
    date: "2023-03-20",
    size: "1.5 MB",
    type: "PDF",
  },
  {
    id: "5",
    title: "Product Performance Metrics",
    department: "Product",
    date: "2023-03-15",
    size: "2.1 MB",
    type: "PDF",
  },
  {
    id: "6",
    title: "Website Traffic Analysis",
    department: "Marketing",
    date: "2023-03-10",
    size: "1.9 MB",
    type: "PDF",
  },
  {
    id: "7",
    title: "Employee Performance Review",
    department: "HR",
    date: "2023-03-05",
    size: "2.7 MB",
    type: "DOCX",
  },
  {
    id: "8",
    title: "Inventory Status Report",
    department: "Operations",
    date: "2023-03-01",
    size: "1.6 MB",
    type: "XLSX",
  },
]

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Reports</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reports..."
              className="w-full rounded-md border pl-8 sm:w-64 lg:w-80"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>All Reports</CardTitle>
              <CardDescription>View and download all available reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{report.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.department}</Badge>
                      </TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>{report.size}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            report.type === "PDF"
                              ? "bg-red-100 text-red-800 hover:bg-red-100"
                              : report.type === "XLSX"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }
                          variant="secondary"
                        >
                          {report.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
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
        </TabsContent>
        <TabsContent value="sales" className="mt-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Sales Reports</CardTitle>
              <CardDescription>View and download sales department reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports
                    .filter((report) => report.department === "Sales")
                    .map((report) => (
                      <TableRow key={report.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{report.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{report.department}</Badge>
                        </TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>{report.size}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              report.type === "PDF"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : report.type === "XLSX"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            }
                            variant="secondary"
                          >
                            {report.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="marketing" className="mt-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Marketing Reports</CardTitle>
              <CardDescription>View and download marketing department reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports
                    .filter((report) => report.department === "Marketing")
                    .map((report) => (
                      <TableRow key={report.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{report.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{report.department}</Badge>
                        </TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>{report.size}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              report.type === "PDF"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : report.type === "XLSX"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            }
                            variant="secondary"
                          >
                            {report.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="finance" className="mt-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Finance Reports</CardTitle>
              <CardDescription>View and download finance department reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports
                    .filter((report) => report.department === "Finance")
                    .map((report) => (
                      <TableRow key={report.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{report.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{report.department}</Badge>
                        </TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>{report.size}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              report.type === "PDF"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : report.type === "XLSX"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            }
                            variant="secondary"
                          >
                            {report.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
