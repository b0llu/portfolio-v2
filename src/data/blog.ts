export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building a Modern Portfolio with React and TypeScript",
    slug: "building-modern-portfolio",
    date: "2024-03-30",
    summary: "A deep dive into creating a modern developer portfolio using React, TypeScript, and Framer Motion",
    content: "# Building a Modern Portfolio\n\nIn this post, I'll share my experience...",
    tags: [],
    readTime: "5 min read"
  }
  // Add more blog posts here
]; 