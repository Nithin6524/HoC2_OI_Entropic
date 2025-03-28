"use client";

import {
    LineChart,
    BarChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";

// Sample data for demonstration
const caseData = [
    { name: "Jan", cases: 4000, predictions: 4400 },
    { name: "Feb", cases: 3000, predictions: 3200 },
    { name: "Mar", cases: 2000, predictions: 2100 },
    { name: "Apr", cases: 2780, predictions: 2900 },
    { name: "May", cases: 1890, predictions: 2000 },
    { name: "Jun", cases: 2390, predictions: 2500 },
    { name: "Jul", cases: 3490, predictions: 3700 },
];

const riskData = [
    { name: "USA", current: 65, predicted: 72 },
    { name: "UK", current: 59, predicted: 63 },
    { name: "Germany", current: 48, predicted: 51 },
    { name: "France", current: 52, predicted: 57 },
    { name: "Italy", current: 47, predicted: 50 },
    { name: "Spain", current: 55, predicted: 60 },
    { name: "Japan", current: 42, predicted: 45 },
];

const variantData = [
    { name: "Alpha", percentage: 10 },
    { name: "Beta", percentage: 5 },
    { name: "Gamma", percentage: 8 },
    { name: "Delta", percentage: 22 },
    { name: "Omicron", percentage: 55 },
];

export function DataCharts() {
    return (
        <Tabs defaultValue="cases" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-900">
                <TabsTrigger value="cases">Case Trends</TabsTrigger>
                <TabsTrigger value="risk">Risk Levels</TabsTrigger>
                <TabsTrigger value="variants">Variant Distribution</TabsTrigger>
            </TabsList>
            <TabsContent value="cases" className="mt-4">
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-white">
                            COVID-19 Case Trends & Predictions
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Actual case numbers compared to AI predictions over
                            time
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={caseData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#334155"
                                    />
                                    <XAxis dataKey="name" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#0f172a",
                                            borderColor: "#334155",
                                            color: "#f8fafc",
                                        }}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="cases"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                        name="Actual Cases"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="predictions"
                                        stroke="#a855f7"
                                        strokeWidth={2}
                                        strokeDasharray="5 5"
                                        name="Predicted Cases"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="risk" className="mt-4">
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Country Risk Assessment
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Current risk levels and 14-day predictions by
                            country
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={riskData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#334155"
                                    />
                                    <XAxis dataKey="name" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#0f172a",
                                            borderColor: "#334155",
                                            color: "#f8fafc",
                                        }}
                                    />
                                    <Legend />
                                    <Bar
                                        dataKey="current"
                                        fill="#3b82f6"
                                        name="Current Risk Level"
                                    />
                                    <Bar
                                        dataKey="predicted"
                                        fill="#a855f7"
                                        name="Predicted Risk Level"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="variants" className="mt-4">
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Variant Distribution
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Current distribution of COVID-19 variants worldwide
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={variantData}
                                    layout="vertical"
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#334155"
                                    />
                                    <XAxis type="number" stroke="#94a3b8" />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        stroke="#94a3b8"
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#0f172a",
                                            borderColor: "#334155",
                                            color: "#f8fafc",
                                        }}
                                        formatter={(value) => [
                                            `${value}%`,
                                            "Percentage",
                                        ]}
                                    />
                                    <Bar
                                        dataKey="percentage"
                                        fill="#3b82f6"
                                        name="Percentage"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

export default DataCharts;