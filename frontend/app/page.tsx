"use client";

import Link from "next/link";
import {Globe} from "@/components/Globe";
import {
    BarChart3,
    AlertTriangle,
    Activity,
    Database,
    Menu,
    X,
    Github,
    Twitter,
    Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
import { DataCharts } from "@/components/DataCharts";
import { useState } from "react";

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 px-8">
            <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur p-2">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">Herald</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-slate-300 hover:text-white"
                        >
                            Features
                        </Link>
                        <Link
                            href="#map"
                            className="text-sm font-medium text-slate-300 hover:text-white"
                        >
                            Risk Map
                        </Link>
                        <Link
                            href="#data"
                            className="text-sm font-medium text-slate-300 hover:text-white"
                        >
                            Data Insights
                        </Link>
                    </nav>
                    <MobileNav />
                </div>
            </header>
            <main className="flex-1">
                <section className="mb-30">
                    <div className="container">
                        <div className="flex justify-between items-top">
                            <div className="flex flex-col justify-center space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    Predict Epidemic Outbreaks Before They
                                    Happen
                                </h1>
                                <p className="max-w-[600px] text-slate-400 md:text-xl">
                                    Our AI-powered platform analyzes global data
                                    to predict outbreaks and provide risk
                                    assessments, helping you make informed
                                    decisions about travel and safety.
                                </p>
                            </div>
                            
                            <Globe />
                        </div>
                    </div>
                </section>

                <section id="map" className="py-20 bg-slate-900">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-flex items-center rounded-lg bg-blue-950/50 px-3 py-1 text-sm text-blue-400">
                                    Global Risk Assessment
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                    Interactive World Risk Map
                                </h2>
                                <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Explore our interactive map showing
                                    real-time COVID-19 risk levels across
                                    different countries and regions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-20">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-flex items-center rounded-lg bg-blue-950/50 px-3 py-1 text-sm text-blue-400">
                                    <Activity className="mr-1 h-3 w-3" />
                                    Key Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                    Powerful Prediction Tools
                                </h2>
                                <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our platform combines AI, big data, and
                                    epidemiological models to provide accurate
                                    predictions and insights.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
                            <Card className="bg-slate-900 border-slate-800 text-slate-50">
                                <CardHeader>
                                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-950 text-blue-400">
                                        <AlertTriangle className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-white mt-4">
                                        Outbreak Prediction
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-slate-400">
                                        AI-powered algorithms that predict
                                        potential outbreaks up to 14 days in
                                        advance with high accuracy.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-900 border-slate-800 text-slate-50">
                                <CardHeader>
                                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-950 text-blue-400"></div>
                                    <CardTitle className="text-white mt-4">
                                        Risk Assessment
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-slate-400">
                                        Detailed risk profiles for countries and
                                        regions based on multiple data points
                                        and variables.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-900 border-slate-800 text-slate-50">
                                <CardHeader>
                                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-950 text-blue-400">
                                        <Database className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-white mt-4">
                                        Real-time Data
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-slate-400">
                                        Continuously updated data from trusted
                                        global sources, processed and analyzed
                                        in real-time.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-900 border-slate-800 text-slate-50">
                                <CardHeader>
                                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-950 text-blue-400">
                                        <BarChart3 className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-white mt-4">
                                        Custom Alerts
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-slate-400">
                                        Personalized notifications and alerts
                                        based on your location and travel plans.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section id="data" className="py-20 bg-slate-900">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-flex items-center rounded-lg bg-blue-950/50 px-3 py-1 text-sm text-blue-400">
                                    <BarChart3 className="mr-1 h-3 w-3" />
                                    Data Visualization
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                    Interactive Data Insights
                                </h2>
                                <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Explore comprehensive data visualizations
                                    that help you understand COVID-19 trends and
                                    patterns.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 rounded-lg border border-slate-800 bg-slate-950 p-4">
                            <DataCharts />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-slate-800 bg-slate-950 py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-2 lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xl font-bold text-white">
                                    CovidInsight
                                </span>
                            </div>
                            <p className="text-sm text-slate-400 mb-4 max-w-[300px]">
                                Providing accurate COVID-19 predictions and risk
                                assessments to help you stay safe and informed.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="#"
                                    className="text-slate-400 hover:text-white"
                                >
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-slate-400 hover:text-white"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-slate-400 hover:text-white"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-medium text-white">
                                Product
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        API
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Integrations
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-medium text-white">
                                Resources
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-medium text-white">
                                Company
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                        <p>
                            © {new Date().getFullYear()} CovidInsight. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-50"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </Button>
            {isOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-slate-950 p-6">
                    <nav className="flex flex-col gap-6">
                        <Link
                            href="#features"
                            className="text-lg font-medium text-slate-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#map"
                            className="text-lg font-medium text-slate-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Risk Map
                        </Link>
                        <Link
                            href="#data"
                            className="text-lg font-medium text-slate-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Data Insights
                        </Link>
                        <Link
                            href="#testimonials"
                            className="text-lg font-medium text-slate-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Testimonials
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}
