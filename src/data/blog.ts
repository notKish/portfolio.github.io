export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Ripple TS Framework',
    date: '2024-01-15',
    excerpt: 'Learn how to build modern web applications with Ripple, a TypeScript-first framework that combines the best of React, Solid, and Svelte.',
    content: `# Getting Started with Ripple TS Framework

Ripple is a revolutionary TypeScript UI framework that combines the best parts of React, Solid, and Svelte into one elegant package. In this post, we'll explore how to get started building modern web applications.

## Why Ripple?

Ripple offers several key advantages:

- **Performance**: Fine-grain rendering with industry-leading performance
- **TypeScript-first**: Full TypeScript integration with type checking
- **JSX-like syntax**: Familiar templating with Ripple-specific enhancements
- **Reactive state**: Built-in reactivity with \`track\` and \`@\` reactive syntax

## Installation

\`\`\`bash
npx degit Ripple-TS/ripple/templates/basic my-app
cd my-app
npm i && npm run dev
\`\`\`

## Creating Your First Component

\`\`\`ripple
component Greeting(props: { name: string }) {
  <div>{"Hello, "}{props.name}{"!"}</div>
}
\`\`\`

That's it! You've created your first Ripple component. The framework handles reactivity automatically, making state management simple and intuitive.

## Reactive State

One of Ripple's standout features is its reactive state management:

\`\`\`ripple
import { track } from 'ripple';

component Counter() {
  let count = track(0);
  
  <div>
    <p>{"Count: "}{@count}</p>
    <button onClick={() => @count++}>{"Increment"}</button>
  </div>
}
\`\`\`

## Next Steps

Ready to dive deeper? Check out the [official documentation](https://ripplejs.com) to learn more about advanced features like effects, context, and reactive collections.

Happy coding! 🚀`
  },
  {
    id: '2',
    title: 'Building Responsive UIs with Modern CSS',
    date: '2024-01-10',
    excerpt: 'Explore modern CSS techniques for creating beautiful, responsive user interfaces that work across all devices.',
    content: `# Building Responsive UIs with Modern CSS

Creating responsive user interfaces has never been easier thanks to modern CSS features. Let's explore some powerful techniques.

## CSS Grid and Flexbox

Modern layout is powered by CSS Grid and Flexbox:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Container Queries

Container queries allow us to style elements based on their container size:

\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

## Custom Properties

CSS custom properties enable dynamic theming:

\`\`\`css
:root {
  --primary-color: #667eea;
  --spacing: 1rem;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
}
\`\`\`

These techniques form the foundation of modern, responsive design.`
  },
  {
    id: '3',
    title: 'TypeScript Tips for Better Development',
    date: '2024-01-05',
    excerpt: 'Discover TypeScript features and patterns that can improve your development workflow and code quality.',
    content: `# TypeScript Tips for Better Development

TypeScript brings type safety to JavaScript, but knowing the right patterns can dramatically improve your development experience.

## Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
// ✅ Good - TypeScript infers the type
const items = [1, 2, 3];

// ❌ Unnecessary - redundant type annotation
const items: number[] = [1, 2, 3];
\`\`\`

## Utility Types

TypeScript provides powerful utility types:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Create a type with only certain properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Create a type with all properties optional
type PartialUser = Partial<User>;
\`\`\`

## Discriminated Unions

Use discriminated unions for type-safe state management:

\`\`\`typescript
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: string };
type ErrorState = { status: 'error'; error: string };

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return state.data;
    case 'error':
      return state.error;
  }
}
\`\`\`

These patterns help write more maintainable and type-safe code.`
  }
];

