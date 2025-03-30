export interface Project {
  name: string;
  period: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  projects?: Project[];
}

export const experiences: Experience[] = [
  {
    company: "Copods Design Technology Solutions",
    role: "Software Engineer",
    period: "Aug 2022 - Present · 2 yrs 7 mos",
    location: "Pune, Maharashtra, India",
    highlights: [
      "Developed dynamic UIs with Vue and React, enhancing user experiences across various projects.",
      "Created a library of web components with Stencil to enhance UI development efficiency.",
      "Deployed micro frontends via cloud storage and content delivery networks, utilizing AWS S3 and CloudFront for optimal performance.",
      "Innovated a JSON-driven UI framework with React to boost interactivity and responsiveness.",
      "Developed AI-driven projects to convert documents into structured learning materials and to generate multimedia content.",
      "Conducted end-to-end testing with Cypress, ensuring platform reliability and functionality.",
      "Led the development of key features across projects, guiding teams to successful implementations."
    ],
    projects: [
      {
        name: "Environmental Sustainability Platform",
        period: "October 2022 – February 2023",
        highlights: [
          "Built interactive dashboards using React, Highcharts, and AGGrid to support real-time sustainability analytics.",
          "Integrated AGGrid for advanced dataset management, enhancing sorting, filtering, and searching functionalities.",
          "Developed isolated, reusable Storybook components to maintain UI consistency across the platform.",
          "Optimized rendering performance with React.memo and React callbacks, improving load times and responsiveness."
        ]
      },
      {
        name: "B2B SaaS Growth Integration Platform",
        period: "April 2023 – September 2023",
        highlights: [
          "Implemented a scalable microfrontend architecture using Apollo GraphQL, React Router, and Webpack Module Federation.",
          "Built a JSON-driven headless UI for real-time adaptability, enabling backend-defined UI changes.",
          "Developed a reusable StencilJS component library to ensure consistency and flexibility in UI design.",
          "Optimized large JSON state management with chunked rendering for smooth user interactions.",
          "Engineered a high-performance rendering solution for React Flow workflows to ensure seamless real-time updates."
        ]
      },
      {
        name: "AgriTech Platform",
        period: "October 2023 – April 2024",
        highlights: [
          "Designed and implemented robust GraphQL APIs for secure and efficient data exchanges.",
          "Integrated third-party regulatory software and external services to enhance platform compliance and capabilities.",
          "Implemented jsPDF with AutoTable for automated, formatted PDF report generation.",
          "Created an error logging system using Discord webhooks for real-time developer notifications.",
          "Developed delivery service API integration for seamless logistics operations."
        ]
      },
      {
        name: "Enterprise Mobile Cloud Solution",
        period: "July 2024 – Present",
        highlights: [
          "Developed a comprehensive design system for the entire product using Storybook.",
          "Built flow diagrams for network visualization using React Flow, improving data clarity.",
          "Enhanced table functionalities with TanStack Table (React Table) and Material-UI for advanced data presentation.",
          "Integrated Google Maps API for interactive radio coverage area visualization.",
          "Optimized performance with React.memo and React callbacks to reduce latency and enhance UX."
        ]
      }
    ]
  }
]; 