/**
 * Projects data for the showcase portfolio.
 * Each project has: id, title, description, url, image, tags, category
 * Categories: "frontend" | "fullstack" | "ai"
 */

// Social / profile links (used in nav and footer)
const githubLink = "https://github.com/iamrahul25";
const linkedinLink = "https://www.linkedin.com/in/iamrahul25";

const projectsData = [
    {
        id: "proj-1",
        title: "Pin-it",
        description: "Civic issue reporting platform where users can pin and report local issues on a map. Built for community engagement and transparent municipal feedback.",
        url: "https://pin-it-jade.vercel.app/",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        category: "fullstack"
    },
    {
        id: "proj-2",
        title: "Habit Maker",
        description: "Daily habit tracker and todo app to build better routines. Track streaks, set goals, and stay consistent with a clean, focused interface.",
        url: "https://todo-daily-rahul.netlify.app/",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Firebase"],
        category: "fullstack"
    },
    {
        id: "proj-3",
        title: "Task Prioritizer",
        description: "Smart task management tool that helps you prioritize and focus on what matters. Organize, rank, and complete tasks with clarity.",
        url: "https://task-prioritizer.vercel.app/",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Firebase"],
        category: "fullstack"
    },
    {
        id: "proj-4",
        title: "Any Connect",
        description: "Real-time video chat application with WebRTC for peer-to-peer calls. Join rooms, share your screen, and connect with others instantly.",
        url: "https://anyconnectfrontend.vercel.app/",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
        tags: ["MERN", "Socket.io", "WebRTC"],
        category: "fullstack"
    }
];
