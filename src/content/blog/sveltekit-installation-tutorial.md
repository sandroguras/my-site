---
listName: "SvelteKit Setup Made Simple: A Beginner's Guide"
title: "SvelteKit Setup Made Simple:<br />A Beginner's Guide"
subtitle: 'Unlock the power of SvelteKit by mastering the setup process in this beginner-friendly guide.'
cover:
  src: '/images/blog/svelteKit-setup-made-simple-cover.webp'
  alt: 'SvelteKit Setup Made Simple article cover image'
  width: 1500
  height: 639
thumb:
  src: '/images/blog/svelteKit-setup-made-simple-thumb.webp'
  alt: 'SvelteKit Setup Made Simple article thumbnail'
  width: 600
  height: 314
openGraph: 'images/opengraphs/blog-og-setup-made-simple.jpg'
category: 'SvelteKit'
date: '2024-04-27'
excerpt: 'Learn how to install and start a new SvelteKit project in minutes with this beginner-friendly guide.'
---

## Introduction

After working extensively with SvelteKit, I'm convinced it's one of the most accessible and satisfying JavaScript frameworks currently on the market. To help popularize this robust framework, I decided to create this learning series to guide you through its ins and outs by exploring its fundamentals.

In this inaugural chapter, we'll focus on setting up SvelteKit and equipping you with the tools to start building your projects. I'll guide you through the essential steps of installing SvelteKit and configuring your development environment. No experience with Svelte or SvelteKit is required — just a basic understanding of JavaScript, HTML, and CSS will suffice.

In the upcoming chapters, we'll delve into SvelteKit, exploring page crafting, form handling, API endpoints, and data integration. We'll also cover routing, navigation, performance optimization, and deployment. We'll unlock SvelteKit's potential to build dynamic and interactive web applications. Each chapter builds upon the knowledge gained from the previous ones, ensuring a smooth and progressive learning experience.

By the end of this series, you'll have gained the skills and confidence to create your own SvelteKit projects and harness the full potential of this incredible framework. In fact, this very site was built using SvelteKit, showcasing its versatility and effectiveness.

So, let's embark on this exciting SvelteKit learning adventure together, starting with the crucial setup process in this first chapter!

## What is SvelteKit?

SvelteKit is a robust web framework built on top of Svelte, a compiler that transforms Svelte code into highly optimized, vanilla JavaScript. Unlike other JavaScript frameworks, Svelte has a compile step that enables it to produce efficient and lean code.

SvelteKit extends Svelte's capabilities by providing comprehensive tools for building web applications. It offers features like routing, layouts, and content fetching, making it easy to create entire web pages or apps. SvelteKit is highly adaptable, supporting various architectures such as Single Page Applications (SPA), Multi-page Applications (MPA), Server-side Rendering (SSR), and Static Site Generation (SSG).

SvelteKit's versatility and performance make it an excellent choice for building modern, efficient, and maintainable web projects, and It consistently ranks highest in developer satisfaction surveys. In this tutorial, we'll use SvelteKit in server-side rendering mode to create a front-facing website.

> The web is not in great health. A lot of things that we use in the digital world on the day-to-day basis are just broken. And I want to do my bit to try and reverse that trend.
>
> — Rich Harris, Creator of Svelte

## Prerequisites

Before we begin the tutorial, ensure you have NPM (Node Package Manager) installed on your computer. NPM is a popular JavaScript package manager and is required to install and manage the dependencies for our SvelteKit project.

If you don't have NPM installed, you can download and install Node.js from the official website ([https://nodejs.org](https://nodejs.org)). NPM is included with Node.js, so installing Node.js will also install NPM on your system.

To check if you have NPM installed, open your terminal or command prompt and run the following command:

```bash
npm -v
```

If NPM is installed, it will display the version number. If not, please visit the [Node.js website](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and follow the installation instructions for your operating system.

Once you have NPM set up, you'll be ready to follow along with the tutorial and install the necessary packages for your SvelteKit project.

## Let's Get Started!

To begin the installation process, in your terminal, type the following command and press Enter:

```bash
npm create svelte@latest my-app
```

When you run the command to create a new SvelteKit project using the create-svelte package, you might see a prompt asking for permission to install the package and its dependencies. The prompt displays the specific version of create-svelte that will be installed (e.g., 6.1.2).

```bash
Need to install the following packages:
  create-svelte@6.1.2
Ok to proceed? (y)
```

To proceed with the installation, simply press "y" and then Enter. This will download and install the necessary packages, allowing you to set up your new SvelteKit.

```bash
┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ○ SvelteKit demo app
│  ● Skeleton project
│  ○ Library project
└
```

After which you will be presented with a list of options

1. SvelteKit demo app: This project showcases the fundamental features of SvelteKit. It's a great choice if you want to explore and learn through a pre-built educational project.
2. Skeleton project: This is blank, clean scaffolding with a basic setup, ideal for starting a new SvelteKit app from scratch. It provides a minimal foundation for building your own custom application.
3. Library project: This template is designed for creating standalone components that are meant to be distributed (e.g., as an NPM package) and used in other applications. It's suitable for developing reusable components or libraries.

For this tutorial, let's choose the "Skeleton project". This will give us a clean slate to work with as we learn and build our SvelteKit application from the ground up.

```bash
◆  Add type checking with TypeScript?
│  ○ Yes, using JavaScript with JSDoc comments
│  ● Yes, using TypeScript syntax
│  ○ No
└
```

We get another three options to choose from.

These options allow you to choose the project's type-annotation system.

1. Yes, using JavaScript with JSDoc comments: uses JavaScript with JSDoc annotations for type checking
2. Yes, using TypeScript syntax: uses TypeScript directly.
3. No: will result in using vanilla JavaScript without any type checking.

In this tutorial, I will utilize TypeScript as it has become a standard for web development. Don't worry if you are unfamiliar with it, I will explain the barebones as we go.

Choose "Yes, using TypeScript syntax".

```bash
◆  Select additional options (use arrow keys/space bar)
│  ◻ Add ESLint for code linting
│  ☒ Add Prettier for code formatting
│  ◻ Add Playwright for browser testing
│  ◻ Add Vitest for unit testing
│  ◻ Try the Svelte 5 preview (unstable!)
└
```

Now, you will see five optional packages that can be selected:

These options allow you to choose additional packages for linting and testing. There's also an option to try the Svelte 5 preview. All these are optional, and we can press Enter to skip all of them. Alternatively, you can use the up/down arrow keys and the space bar to select the packages you want to include.

For this tutorial, select "Add Prettier for code formatting" press Space and then Enter.

After this configuration step, all that is left to do is input these four commands in the terminal one by one:

```bash
1: cd my-app
2: npm install
3: git init && git add -A && git commit -m "Initial commit"
4: npm run dev -- --open
```

1. cd my-app: this command changes the current directory to the newly created "my-app" directory. The cd (change directory) command is used to navigate to the project folder where your SvelteKit application resides.
2. npm install: installs all the dependencies listed in the package.json file of your SvelteKit project. These dependencies include the necessary packages and libraries required for your application to function properly. It retrieves these packages from the npm (Node Package Manager) registry and stores them in the node_modules directory within your project.
3. git init && git add -A && git commit -m "Initial commit": Initializes a new Git repository in your project directory. Stages all the changes in your project for the initial commit. Creates the initial commit with the message "Initial commit". This saves the current state of your project in the Git repository, marking it as a significant milestone.
4. npm run dev -- --open: this command starts the development server for your SvelteKit application. The --open flag automatically opens your default web browser to the local development server URL, allowing you to view your project in the browser.

Your browser should launch on the _http://localhost:5173/_, which is a development site running in your system

## Conclusion

Great job! You've successfully installed SvelteKit and are ready for your first project. The installation process was a breeze, wasn't it? And the good news is, it only gets better from here!

In the next lesson, we will shake things up a bit. Instead of following the conventional development process, we will deploy your site first and then start developing it. That's right, you read that correctly! Continuous deployment is incredibly simple with a JavaScript framework like SvelteKit, allowing us to flip the script on the usual workflow.

But here's the best part: by deploying your site first, you can share the changes with your clients in real time as you make them. No more waiting until the end of the development cycle to showcase your progress. Your clients can see the updates and provide feedback immediately, making the process more collaborative and efficient.

See you in the next lesson!
