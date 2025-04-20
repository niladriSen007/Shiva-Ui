"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useState, useRef, ReactNode } from "react"
import {
  Copy,
  Check,
  ArrowRight,
  Terminal,
  Code,
  Package,
  Sparkles,
} from "lucide-react"

interface InstallStepProps {
  number: number
  title: string
  code: string
  description: string
}

const InstallStep = ({
  number,
  title,
  code,
  description,
}: InstallStepProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative mb-10"
    >
      <div className="absolute -left-12 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#0000FF] to-[#00FF00] text-xl font-bold text-white shadow-lg">
        {number}
      </div>
      <div className="ml-10 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60 dark:shadow-none">
        <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="relative overflow-hidden rounded-lg bg-neutral-900 p-4 dark:bg-gradient-to-b from-blue-500/10 to-green-900/20">
          <div className="absolute right-2 top-2">
            <button
              onClick={handleCopy}
              className="rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <pre className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-700">
            <code className="text-sm text-neutral-200">{code}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  )
}

interface ComponentCardProps {
  title: string
  description: string
  href: string
  icon: React.ElementType
  gradient: string
}

const ComponentCard = ({
  title,
  description,
  href,
  icon: Icon,
  gradient,
}: ComponentCardProps) => {
  return (
    <Link href={href} className="group">
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative overflow-hidden rounded-xl p-0.5 ${gradient}`}
      >
        <div className="absolute inset-0 bg-[length:400%_400%] blur-xl opacity-50 transition-all group-hover:opacity-100 animate-glow"></div>
        <div className="relative rounded-[10px] bg-white p-6 dark:bg-neutral-900">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <Icon className="h-6 w-6 text-neutral-900 dark:text-white" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-900 dark:text-white dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-[#0000FF] transition-all group-hover:translate-x-1 dark:text-purple-400">
            Explore <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

interface TextGradientProps {
  children: ReactNode
  className?: string
}

const TextGradient = ({ children, className = "" }: TextGradientProps) => (
  <span
    className={`bg-gradient-to-b from-[#0000FF] to-[#00FF00] bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
)

const IntroContainer = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <div ref={ref} className="relative">
      {/* Hero section with animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform-gpu">
          <div className="h-[310px] w-[640px] rounded-full bg-gradient-to-b from-[#0000FF]/40 to-[#00FF00]/20 blur-[100px]" />
        </div>
      </div>

      <div className="relative -mt-8 space-y-16 pb-20">
        {/* Main header with animated intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative pt-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <div className="relative mb-2 inline-block">
              <motion.div
                className="absolute -top-1 right-0 h-8 w-8 rounded-full bg-[#0000FF] blur-xl"
                animate={{
                  x: [0, 10, 0, -10, 0],
                  y: [0, -10, 0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -left-2 bottom-1 h-6 w-6 rounded-full bg-[#0000FF] blur-xl"
                animate={{
                  x: [0, -10, 0, 10, 0],
                  y: [0, 10, 0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-6xl">
                <TextGradient>Shiva UI</TextGradient> Documentation
              </h1>
            </div>
            <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
              A collection of beautiful, animated UI components built with
              Tailwind CSS and Framer Motion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link href="/docs/installation">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br cursor-pointer from-[#0000FF]/90 to-[#00FF00]/40 px-8 py-2.5 z-10 font-medium text-white shadow-md transition-all hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Get Started{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>
            <Link
              href="https://github.com/niladriSen007/Shiva-Ui"
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-8 py-2.5 font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Getting Started Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-3xl"
        >
          <motion.div
            style={{ y }}
            className="absolute -right-10 -top-6 h-20 w-20 rounded-full bg-purple-400/10 blur-xl"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
            className="absolute -left-10 top-20 h-16 w-16 rounded-full bg-blue-400/10 blur-xl"
          />

          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-blue-900/20">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Getting Started
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert">
            <p>
              <TextGradient className="font-semibold">Shiva UI</TextGradient> is
              a collection of beautifully designed, accessible, and customizable
              UI components built with Tailwind CSS and Framer Motion. These
              components are designed to help you build modern, responsive, and
              interactive user interfaces for your web applications with minimal
              effort.
            </p>
          </div>
        </motion.div>

        {/* Installation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-3xl space-y-6"
        >
          <div className="mb-8 flex items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
              <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Installation
            </h2>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400">
            Follow these simple steps to get started with Shiva UI in your
            Next.js project:
          </p>

          <div className="relative mt-10 pl-8">
            <div className="absolute left-4 top-0 bottom-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-600" />

            <InstallStep
              number={1}
              title="Create a new Next.js project"
              code="npx create-next-app@latest my-app --typescript --tailwind --eslint"
              description="Start by creating a new Next.js project with TypeScript, Tailwind CSS, and ESLint already configured."
            />

            <InstallStep
              number={2}
              title="Install dependencies"
              code="npm install framer-motion clsx tailwind-merge"
              description="Install the required dependencies for Shiva UI components."
            />

            <InstallStep
              number={3}
              title="Set up the utils file"
              code={`// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
              description="Create a utility function for merging Tailwind CSS classes conditionally."
            />

            <InstallStep
              number={4}
              title="Start using Shiva UI components"
              code={`// app/page.tsx
import { MacBookScroll } from "@/components/ui/macbook-scroll";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <MacBookScroll />
    </main>
  );
}`}
              description="Import and use any Shiva UI component in your application."
            />
          </div>
        </motion.div>

        {/* Featured Components Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="mb-10 flex items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/20">
              <Package className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Featured Components
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ComponentCard
              title="MacBook Scroll"
              description="An interactive MacBook component that animates on scroll, providing a stunning 3D effect."
              href="/docs/macbook-scroll"
              icon={Code}
              gradient="bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
            />

            <ComponentCard
              title="Text Animate"
              description="Beautiful text animations with various effects like fade-in, blur, and slide."
              href="/docs/text-animate"
              icon={Code}
              gradient="bg-gradient-to-br from-blue-500/20 to-teal-500/20"
            />

            <ComponentCard
              title="Aurora Text"
              description="Text with mesmerizing aurora gradient animations that flow continuously."
              href="/docs/aurora-text"
              icon={Code}
              gradient="bg-gradient-to-br from-pink-500/20 to-orange-500/20"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default IntroContainer
