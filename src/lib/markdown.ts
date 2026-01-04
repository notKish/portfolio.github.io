import { marked } from 'marked';

// Configure marked to use highlight.js for syntax highlighting
marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function(code: string, lang: string) {
    const hljs = (window as any).hljs;
    if (!hljs) {
      return code;
    }
    
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {
        return code;
      }
    }
    
    // Try auto-detection if no language specified
    try {
      return hljs.highlightAuto(code).value;
    } catch (e) {
      return code;
    }
  }
} as any); // Type assertion to allow highlight option

export function renderMarkdown(markdown: string): string {
  const result = marked(markdown);
  // marked can return Promise<string> in async mode, but we're using sync mode
  // Type assertion since we know marked returns string in sync mode
  return result as string;
}

