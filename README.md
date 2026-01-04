# Developer Portfolio Website

A modern, responsive portfolio website built with Ripple TS Framework featuring a homepage with portfolio content and a markdown-enabled blog section.

## Features

- 🏠 **Homepage** - Showcase your skills, projects, and contact information
- 📝 **Blog Section** - Markdown-supported blog posts
- 🎨 **Creative Design** - Simple, modern design system with gradient backgrounds and smooth animations
- 📱 **Responsive** - Fully responsive design that works on all devices
- ⚡ **Performance** - Built with Ripple TS for fine-grained reactivity and optimal performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/
  │   └── Navigation.ripple      # Navigation component
  ├── pages/
  │   ├── Home.ripple            # Homepage with portfolio
  │   ├── Blog.ripple            # Blog listing page
  │   └── BlogPost.ripple        # Individual blog post page
  ├── lib/
  │   └── markdown.ts            # Markdown rendering utility
  ├── data/
  │   └── blog.ts                # Blog posts data
  ├── App.ripple                 # Main app component with routing
  └── index.ts                   # Entry point
```

## Customization

### Adding Blog Posts

Edit `src/data/blog.ts` to add new blog posts:

```typescript
{
  id: '4',
  title: 'Your Post Title',
  date: '2024-01-20',
  excerpt: 'Brief description of your post',
  content: `# Your Post Title\n\nYour markdown content here...`
}
```

### Customizing Portfolio

Edit `src/pages/Home.ripple` to customize:
- Skills list
- Featured projects
- Contact information
- Hero section content

## Technologies

- [Ripple TS](https://ripplejs.com) - TypeScript UI framework
- [Vite](https://vitejs.dev) - Build tool
- [Marked](https://marked.js.org) - Markdown parser
- TypeScript - Type safety

## License

MIT

