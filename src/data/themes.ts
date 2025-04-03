
export interface UiTheme {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  prompt: string;
  relatedThemes: string[];
}

export const uiThemes: UiTheme[] = [
  {
    id: "sketchy-dashboard",
    title: "Sketchy Dashboard",
    description: "A hand-drawn dashboard interface with playful widgets and doodle-style graphs",
    imageUrl: "/themes/sketchy-dashboard.png", 
    category: "dashboard",
    prompt: "Create a playful dashboard UI with hand-drawn widgets, sketchy charts, and notebook paper backgrounds. Use a muted color palette with occasional pops of color for important metrics. Add subtle hover animations that make elements feel like they're being highlighted with a marker.",
    relatedThemes: ["notebook-app", "creative-planner"]
  },
  {
    id: "notebook-app",
    title: "Notebook App",
    description: "Digital notebook interface with realistic page textures and pen effects",
    imageUrl: "/themes/notebook-app.png",
    category: "productivity",
    prompt: "Design a digital notebook interface with realistic paper textures, ruled lines, and handwriting-style typography. Include page-turning animations, margin doodles, and interactive elements that mimic sticky notes and paperclips. The palette should be mainly whites and light blues with accent colors used sparingly.",
    relatedThemes: ["sketchy-dashboard", "creative-planner"]
  },
  {
    id: "creative-planner",
    title: "Creative Planner",
    description: "A colorful calendar and task planner with playful illustrative elements",
    imageUrl: "/themes/creative-planner.png",
    category: "productivity",
    prompt: "Design a creative planner interface with calendar and task management features, featuring colorful hand-drawn decorative elements like stars, arrows, and checkmarks. Use a soft color palette with pastel highlighter colors. Include wobbling hover effects and pencil-drawing animations when elements appear.",
    relatedThemes: ["sketchy-dashboard", "notebook-app"]
  },
  {
    id: "doodle-portfolio",
    title: "Doodle Portfolio",
    description: "Portfolio website template with a sketch aesthetic and playful interactions",
    imageUrl: "/themes/doodle-portfolio.png",
    category: "portfolio",
    prompt: "Create a portfolio website design with hand-drawn frames for project showcases, doodled navigation elements, and a sketchy aesthetic throughout. Use paper texture backgrounds and design elements like paperclips and tape to showcase portfolio items. Incorporate subtle animations that make elements look like they're being actively drawn.",
    relatedThemes: ["artistic-blog", "doodle-commerce"]
  },
  {
    id: "artistic-blog",
    title: "Artistic Blog",
    description: "Blog layout with artistic framing, hand-drawn elements and markers",
    imageUrl: "/themes/artistic-blog.png",
    category: "blog",
    prompt: "Design a blog interface with artistic elements like hand-drawn post frames, sketch-style category buttons, and playful decorative elements. Feature a layout that resembles a scrapbook or artist's journal with varying frame styles and decorative elements. Use soft paper textures and a muted color palette with selective highlight colors.",
    relatedThemes: ["doodle-portfolio", "sketchbook-gallery"]
  },
  {
    id: "sketchbook-gallery",
    title: "Sketchbook Gallery",
    description: "Image gallery and showcase with a sketchbook aesthetic",
    imageUrl: "/themes/sketchbook-gallery.png",
    category: "gallery",
    prompt: "Create an image gallery interface designed to look like pages from an artist's sketchbook. Include hand-drawn frames around images, notebook paper textures in the background, and doodle elements as decorations. Design the navigation to look like notebook tabs, and add page-turning animations for transitions.",
    relatedThemes: ["artistic-blog", "doodle-portfolio"]
  },
  {
    id: "doodle-commerce",
    title: "Doodle Commerce",
    description: "E-commerce template with a playful hand-drawn aesthetic",
    imageUrl: "/themes/doodle-commerce.png",
    category: "e-commerce",
    prompt: "Design an e-commerce interface with a playful hand-drawn style, featuring sketchy product frames, doodled buttons and icons, and notebook-style product descriptions. Create a shopping cart that looks like a drawn bag or basket, and design the checkout process with paper form aesthetics. Use a soft color palette with highlight colors for calls to action.",
    relatedThemes: ["doodle-portfolio", "creative-planner"]
  },
  {
    id: "sketch-chat",
    title: "Sketch Chat",
    description: "Messaging interface with speech bubbles and hand-drawn elements",
    imageUrl: "/themes/sketch-chat.png",
    category: "social",
    prompt: "Create a messaging interface with speech bubbles that look hand-drawn, sketch-style avatars, and notebook paper backgrounds. Design status indicators and reactions as doodles, and include playful animations for message delivery. Use a light color palette with accent colors to distinguish between users.",
    relatedThemes: ["notebook-app", "creative-planner"]
  }
];

export const categories = Array.from(new Set(uiThemes.map(theme => theme.category)));

export function getThemeById(id: string): UiTheme | undefined {
  return uiThemes.find(theme => theme.id === id);
}

export function getRelatedThemes(theme: UiTheme): UiTheme[] {
  return theme.relatedThemes
    .map(id => uiThemes.find(t => t.id === id))
    .filter((t): t is UiTheme => t !== undefined);
}
