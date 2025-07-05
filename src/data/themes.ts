export interface UiTheme {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  uiStyle: string;
  prompt: string;
  relatedThemes: string[];
  model: string;
  techStack: string[];
  previewUrl: string;
  // New fields for external links
  externalUrl?: string; // 外部网站链接
  githubUrl?: string; // GitHub 代码模板链接
  figmaUrl?: string; // Figma 设计模板链接
  demoUrl?: string; // 在线演示链接
}

export interface DesignStyle {
  id: string;
  name: string;
  shortName: string; // For easier identification
  description: string;
  characteristics: string[];
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
  };
  fontFamily: string[];
  category: 'modern' | 'experimental' | 'classic' | 'playful' | 'enterprise'; // For future categorization
  examples: ComponentExample[];
  isDefault?: boolean; // Mark default style
}

export interface ComponentExample {
  id: string;
  name: string;
  description: string;
  category: 'button' | 'card' | 'form' | 'navigation' | 'layout' | 'data-display';
  complexity: 'basic' | 'intermediate' | 'advanced';
}

export const uiThemes: UiTheme[] = [
  {
    id: "sketchbook-gallery",
    title: "Sketchbook Gallery",
    description: "Image gallery and showcase with a sketchbook aesthetic",
    imageUrl: "/themes/sketchbook-gallery/sketchbook-gallery.png",
    category: "gallery",
    uiStyle: "skeuomorphic",
    prompt: "Design an image gallery interface with a skeuomorphic sketchbook aesthetic featuring photo collections, artwork showcases, and image detail views that appear within a realistic artist's sketchbook or portfolio, inspired by Unsplash's clean gallery presentation but transformed with realistic paper textures. Use high-detail paper texture backgrounds with visible grain, slight discoloration, and occasional ruled lines, and a naturalistic color palette that emphasizes the artwork while using muted, paper-like tones (cream, soft gray, gentle tan) for the interface elements. Create engaging page-turn animations between gallery sections with realistic paper physics including page curl, slight transparency, and proper shadowing (similar to Flipboard's classic navigation but more detailed), while implementing zoom effects that mimic a magnifying glass or loupe tool. Design gallery thumbnails to appear as if they're attached to pages with corner mounts, washi tape, or paper clips, navigation elements that look like physical notebook tabs or bookmark ribbons (like Moleskine's physical notebook dividers), and filtering controls that resemble hand-labeled dividers. Include meta information for images as handwritten notes beside the artwork, captions that look like pencil annotations, and loading states visualized as sketches being drawn in real-time. Structure the gallery with intentional organization that mimics how an artist might arrange their physical portfolio, with clear visual pathways between related works and intuitive navigation between collections. The layout should maintain consistent margins like a real sketchbook with intentional alignment irregularities, creating an immersive browsing experience that balances artistic presentation with intuitive gallery navigation, making users feel like they're flipping through a treasured art collection rather than browsing a digital gallery.",
    relatedThemes: ["artistic-blog", "doodle-portfolio"],
    model: "Claude 3.7 Sonnet",
    techStack: ["Tailwind CSS", "PhotoSwipe", "GSAP", "Paper.js"],
    previewUrl: "/themes/sketchbook-gallery/index.html",
    externalUrl: "https://unsplash.com",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
    figmaUrl: "https://www.figma.com/community/file/example-gallery",
    demoUrl: "https://sketchbook-gallery-demo.vercel.app"
  },
  {
    id: "sketchy-dashboard",
    title: "Sketchy Dashboard",
    description: "A hand-drawn dashboard interface with playful widgets and doodle-style graphs",
    imageUrl: "/themes/sketchy-dashboard/sketchy-dashboard.png", 
    category: "dashboard",
    uiStyle: "sketch",
    prompt: "Design a playful dashboard interface with a hand-drawn sketch style featuring widgets, charts, and statistics panels that appear manually illustrated, similar to Dribble's sketch UI designs but more functional. Use notebook paper or light parchment textures for backgrounds and a muted color palette (soft blues, light grays, gentle yellows) with vibrant accent colors for important metrics and call-to-action elements. Include subtle animations where elements wobble slightly or appear to be drawn in real-time when loaded (like Framer's drawing animations), and create hover effects that mimic highlighting with markers or colored pencils. Design navigation elements to look like hand-drawn tabs or bookmarks, statistics widgets with sketchy border frames, and graphs with pencil-line styling inspired by FigJam's playful interface elements. Ensure numeric displays use a casual handwriting typography while maintaining readability. Arrange content in a card-based layout with intentional alignment irregularities to enhance the hand-drawn feel, while maintaining a clear information hierarchy like Notion dashboards. The overall experience should evoke a sense of creative playfulness while delivering professional data visualization functionality, making complex metrics feel approachable and engaging for users who might otherwise find data intimidating.",
    relatedThemes: ["notebook-app", "creative-planner"],
    model: "Deepseek V3",
    techStack: ["Tailwind CSS", "Shadcn UI", "Chart.js", "Framer Motion"],
    previewUrl: "/themes/sketchy-dashboard/index.html"
  },
  {
    id: "creative-planner",
    title: "Creative Planner",
    description: "A colorful calendar and task planner with playful illustrative elements",
    imageUrl: "/themes/creative-planner/creative-planner.png",
    category: "productivity",
    uiStyle: "sketch",
    prompt: "Design a creative planner interface with a hand-drawn sketch style featuring calendar views (inspired by Google Calendar's layout but with a playful twist), task lists, and goal trackers that look like they've been illustrated by hand. Use a soft, textured paper background with subtle grid patterns and a pastel color palette (mint greens, soft pinks, light lavenders, pale yellows) with selective bright accents for important dates and priority tasks. Implement playful animations where completed tasks are crossed out with an animated pencil stroke (similar to Todoist's completion animations but more illustrative), new items appear with a drawing animation, and calendar pages flip with a paper-turning effect. Design navigation elements as colorful tabbed dividers (like Trello's board tabs but hand-drawn), date selectors with hand-drawn calendar icons, task items with sketched checkbox circles, and status indicators as doodled stars or flags. Include decorative elements like hand-drawn arrows, small illustrations for categories, and sketched highlight effects around important items. Structure the interface with clearly defined zones for different planning horizons (day, week, month) with visual cues to help users understand their relationship, and ensure primary actions (add task, complete, reschedule) stand out with special illustrative treatments. The layout should feel like an open planner with clear sections while maintaining a cohesive, creative aesthetic that encourages engagement and personalization, creating an experience that makes productivity feel like a creative and enjoyable activity rather than a chore.",
    relatedThemes: ["sketchy-dashboard", "notebook-app"],
    model: "Claude 3.7 Sonnet",
    techStack: ["Tailwind CSS", "FullCalendar", "Anime.js", "Radix UI"],
    previewUrl: "/themes/creative-planner/index.html",
    externalUrl: "https://notion.so",
    githubUrl: "https://github.com/vercel/next.js",
    demoUrl: "https://creative-planner-demo.vercel.app"
  },
  {
    id: "doodle-portfolio",
    title: "Doodle Portfolio",
    description: "Portfolio website template with a sketch aesthetic and playful interactions",
    imageUrl: "/themes/doodle-portfolio/doodle-portfolio.png",
    category: "portfolio",
    uiStyle: "google material design",
    prompt: "Design a portfolio website interface following Google Material Design principles while incorporating playful sketch elements. Use Material Design's elevation system with subtle shadows to create depth, and implement the standard 8dp grid system for consistent spacing. Follow Material's color system with a primary and secondary color palette, ensuring accessibility with proper contrast ratios. Include Material Design components like cards with rounded corners (8dp radius) for project showcases, floating action buttons for primary actions, and a top app bar with the standard elevation shadow. Implement Material motion principles for transitions and micro-interactions, using standard easing curves (0.4, 0.0, 0.2, 1) for natural movement. Design navigation using Material's bottom navigation bar or navigation drawer patterns, with clear iconography following Material Design guidelines. For the sketch aesthetic touches, add subtle hand-drawn decorative elements within the Material Design framework - like custom illustrated icons that follow Material's 24dp grid, or decorative backgrounds that respect Material's layering system. Use Material's typography scale (Roboto or the system default) for main text, while allowing custom hand-drawn elements for decorative headings or accents. The layout should follow Material Design's responsive grid system, maintaining proper hierarchy and spacing while incorporating playful illustrated elements in a way that enhances rather than conflicts with Material Design principles. Include Material's standard touch feedback ripples and state changes, ensuring all interactive elements follow Material's accessibility guidelines. The final result should feel like a professional Material Design implementation with thoughtful, playful sketch elements that add personality without compromising the established Material Design patterns and behaviors.",
    relatedThemes: ["artistic-blog", "doodle-commerce"],
    model: "Claude 3.7 Sonnet",
    techStack: ["Tailwind CSS", "Three.js", "GSAP", "Rough.js"],
    previewUrl: "/themes/doodle-portfolio/index.html"
  },
  {
    id: "notebook-web-app",
    title: "Notebook App",
    description: "Digital notebook interface with realistic page textures and pen effects",
    imageUrl: "/themes/notebook-web-app/notebook-web-app.png",
    category: "productivity",
    uiStyle: "skeuomorphic",
    prompt: "Design a digital notebook interface with a skeuomorphic approach featuring content sections that resemble real paper pages with ruled lines, margin markers, and subtle paper grain textures, similar to the original Apple Notes app but with more rich detail. Use a realistic color palette of whites and cream papers with blue or gray ruled lines, red margin indicators, and black/blue ink effects for text content. Create page-turning animations between sections that mimic real notebook behavior (like Flipboard's classic page turns), with subtle page bend physics and paper sounds. Design interactive elements that resemble physical notebook components – tabs as colored notebook dividers (like Evernote's notebook structure), bookmarks as actual ribbon markers, to-do lists with checkboxes that look hand-drawn, and attachments that appear pinned with paperclips or taped to the page. Include a subtle drop shadow that makes pages feel three-dimensional, and implement a handwriting-style cursor effect when users edit content similar to Notability. Structure the information hierarchy with clear visual distinction between notes, sections, and notebooks, with primary actions (create, edit, delete) represented as physical tools like pens and erasers. The layout should maintain a consistent notebook metaphor with proper margins, headers that look like labeled tabs, and an overall composition that balances authentic notebook aesthetics with digital usability, creating an immersive environment that encourages focused note-taking and organization.",
    relatedThemes: ["sketchy-dashboard", "creative-planner"],
    model: "Claude 3.5 Sonnet",
    techStack: ["Tailwind CSS", "React DnD", "Framer Motion", "Paper.js"],
    previewUrl: "/themes/notebook-web-app/index.html",
    externalUrl: "https://www.notion.so",
    githubUrl: "https://github.com/microsoft/fluentui",
    demoUrl: "https://notebook-app-demo.vercel.app"
  },
  {
    id: "artistic-blog",
    title: "Artistic Blog",
    description: "Blog layout with artistic framing, hand-drawn elements and markers",
    imageUrl: "/themes/artistic-blog/artistic-blog.png",
    category: "blog",
    uiStyle: "artistic",
    prompt: "Design a blog interface with an artistic, mixed-media style featuring post layouts, category sections, and comment areas that resemble a creative journal or scrapbook, drawing inspiration from Medium's clean reading experience but with an artistic overlay. Use textured backgrounds that mimic watercolor paper or canvas with subtle artistic mediums, and a sophisticated color palette inspired by artist materials (ink blacks, watercolor blues, pencil grays) with strategic color pops for featured content or calls-to-action. Implement subtle animations where page elements gently float in or reveal with a brush stroke effect (similar to Webflow's reveal animations but with artistic styling), and design hover states that resemble artistic highlighting or underlining. Create post containers that look like individually framed artworks with varied border styles (torn paper edges, paint strokes, sketch lines), navigation elements styled as artist's tabs or bookmarks (inspired by Notion's simple but effective sidebar), and category indicators that resemble color swatches or medium types. Design reading progress indicators as paintbrush strokes and include decorative elements like splatter effects, artistic doodles, and hand-drawn dividers between content sections. Structure content with a clear reading flow that maintains the artistic aesthetic without sacrificing readability, with special attention to typography that pairs artistic headings with highly readable body text (similar to Substack's balance of style and function). The layout should have intentional asymmetry and varied framing to create visual interest while maintaining a gallery-like reading experience, creating an immersive environment that makes the content feel like curated art pieces while keeping the reading experience smooth and engaging.",
    relatedThemes: ["doodle-portfolio", "sketchbook-gallery"],
    model: "Claude 3.7 Sonnet",
    techStack: ["Tailwind CSS", "Next.js", "MDX", "Rough.js"],
    previewUrl: "/themes/artistic-blog/index.html"
  },

  {
    id: "doodle-commerce",
    title: "Doodle Commerce",
    description: "E-commerce template with a playful hand-drawn aesthetic",
    imageUrl: "/themes/doodle-commerce/doodle-commerce.png",
    category: "e-commerce",
    uiStyle: "apple style",
    prompt: "Design an e-commerce interface following Apple's Human Interface Guidelines while incorporating playful sketch elements. Implement Apple's signature design principles of clarity, deference, and depth using frosted glass effects (SF Symbols backdrop blur) for navigation bars and overlays. Use Apple's SF Pro font family for typography, with large bold headlines and clean body text. Follow Apple's spacing and layout guidelines with generous whitespace and precise dynamic type scaling. Implement Apple's spring-based animation system for fluid transitions and micro-interactions, using natural deceleration curves. Design product cards with subtle shadows and rounded corners (SF rounded style), incorporating Apple's card-based design patterns for product showcases. Use Apple's standard system colors as a base palette, complemented by custom accent colors that maintain accessibility standards. Include Apple-style gesture interactions like smooth swipe transitions between product views and pull-to-refresh animations. For the playful elements, integrate hand-drawn accents and illustrations that complement Apple's minimal aesthetic - such as custom illustrated SF Symbols alternatives, or decorative backgrounds that respect Apple's layering system. Navigation should follow Apple's tab bar patterns with clean iconography, while search and filtering use Apple's search bar and sheet presentations. Shopping cart and checkout flows should use Apple's sheet and modal presentation styles with standard iOS/macOS form elements. The layout should adapt seamlessly between platforms using Apple's recommended responsive patterns, maintaining consistent information hierarchy. Include haptic feedback patterns for interactive elements on touch devices. The final design should feel like a premium Apple ecosystem app with thoughtfully integrated playful elements that enhance but don't overshadow Apple's refined, minimal aesthetic.",
    relatedThemes: ["doodle-portfolio", "creative-planner"],
    model: "Claude 3.7 Sonnet",
    techStack: ["Tailwind CSS", "Shadcn UI", "React Hook Form", "Framer Motion"],
    previewUrl: "/themes/doodle-commerce/index.html",
    externalUrl: "https://www.apple.com/app-store/",
    githubUrl: "https://github.com/shadcn-ui/ui",
    figmaUrl: "https://www.figma.com/community/file/apple-design-system",
    demoUrl: "https://doodle-commerce-demo.vercel.app"
  },
  {
    id: "sketch-chat",
    title: "Sketch Chat",
    description: "Messaging interface with speech bubbles and hand-drawn elements",
    imageUrl: "/themes/sketch-chat/sketch-chat.png",
    category: "social",
    uiStyle: "minimalist",
    prompt: "Design a messaging interface with a minimalist sketch-inspired aesthetic featuring conversation threads, message bubbles, and user interactions styled with clean hand-drawn elements, inspired by Slack's functional layout but with a subtle illustrative approach. Use subtle lined or dotted paper textures for backgrounds without overwhelming the content, and a restrained color palette focused on whites and light neutrals with distinct colors only for user identification, status indicators, and important actions. Create smooth animations where message bubbles appear with a quick drawing effect around their borders (similar to how WhatsApp messages appear but with a sketched reveal), typing indicators that mimic pencil dots being added sequentially, and subtle bounce effects for new messages. Design message containers as speech bubbles with slightly irregular, hand-drawn outlines, user avatars with sketch-style portrait frames or simple doodle representations (like how Discord uses avatars but with sketch styling), and status indicators using minimalist hand-drawn symbols (checkmarks, clocks, etc.). Include reactions as small sketch emoticons or simple drawn symbols, file attachments that look like paper clips or sketched documents, and input areas that resemble notebook lines with drawing-style send buttons. Structure the conversation flow with clear visual distinction between sent and received messages, and ensure that conversation threads maintain visual coherence even with multiple participants. The overall layout should maintain plenty of white space with clean organization of conversation threads, creating a messaging experience that feels personal and creative while remaining highly functional and easy to scan quickly, making digital communication feel more human and expressive without sacrificing efficiency.",
    relatedThemes: ["notebook-app", "creative-planner"],
    model: "Deepseek V3",
    techStack: ["Tailwind CSS", "Socket.io", "Rough.js", "Lottie"],
    previewUrl: "/themes/sketch-chat/index.html"
  }
];

export const categories = Array.from(new Set(uiThemes.map(theme => theme.category)));
export const uiStyles = Array.from(new Set(uiThemes.map(theme => theme.uiStyle)));

export function getThemeById(id: string): UiTheme | undefined {
  return uiThemes.find(theme => theme.id === id);
}

export function getRelatedThemes(theme: UiTheme): UiTheme[] {
  return theme.relatedThemes
    .map(id => uiThemes.find(t => t.id === id))
    .filter((t): t is UiTheme => t !== undefined);
}

export const designStyles: DesignStyle[] = [
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    shortName: "Modern",
    description: "现代简约设计风格，类似Vercel和shadcn/ui的设计语言，强调简洁、优雅和功能性。",
    characteristics: [
      "简洁的线条和间距",
      "微妙的阴影和圆角",
      "优雅的字体排版",
      "清晰的视觉层次",
      "现代化的配色方案"
    ],
    colorScheme: {
      primary: "#18181B",
      secondary: "#F4F4F5", 
      accent: "#3B82F6",
      background: "#FFFFFF",
      foreground: "#09090B",
      muted: "#F4F4F5"
    },
    fontFamily: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
    category: "modern",
    isDefault: true,
    examples: [
      { id: "modern-button", name: "按钮组件", description: "现代简约的按钮设计", category: "button", complexity: "basic" },
      { id: "modern-card", name: "卡片组件", description: "简洁优雅的卡片布局", category: "card", complexity: "intermediate" },
      { id: "modern-form", name: "表单组件", description: "现代化的表单设计", category: "form", complexity: "advanced" },
      { id: "modern-navigation", name: "导航组件", description: "简洁的导航栏设计", category: "navigation", complexity: "intermediate" },
      { id: "modern-layout", name: "布局组件", description: "现代化的页面布局", category: "layout", complexity: "advanced" },
      { id: "modern-display", name: "数据展示", description: "清晰的数据展示组件", category: "data-display", complexity: "intermediate" }
    ]
  },
  {
    id: "neobrutalism",
    name: "Neobrutalism",
    shortName: "Brutal",
    description: "新野兽派设计风格，以粗糙的边框、强烈的阴影和大胆的色彩为特征，注重功能性和可访问性。",
    characteristics: [
      "粗糙的边框和强烈的阴影",
      "大胆的色彩对比",
      "简洁的几何形状",
      "强调可用性而非装饰性",
      "黑色边框和大胆的颜色"
    ],
    colorScheme: {
      primary: "#000000",
      secondary: "#FFFFFF", 
      accent: "#FF6B6B",
      background: "#FFFFFF",
      foreground: "#000000",
      muted: "#F5F5F5"
    },
    fontFamily: ["JetBrains Mono", "monospace"],
    category: "experimental",
    examples: [
      { id: "neobrutalism-button", name: "按钮组件", description: "粗糙边框的按钮设计", category: "button", complexity: "basic" },
      { id: "neobrutalism-card", name: "卡片组件", description: "强烈阴影的卡片布局", category: "card", complexity: "intermediate" },
      { id: "neobrutalism-form", name: "表单组件", description: "简洁实用的表单设计", category: "form", complexity: "advanced" },
      { id: "neobrutalism-navigation", name: "导航组件", description: "清晰的导航栏设计", category: "navigation", complexity: "intermediate" },
      { id: "neobrutalism-layout", name: "布局组件", description: "网格化的页面布局", category: "layout", complexity: "advanced" },
      { id: "neobrutalism-display", name: "数据展示", description: "直观的数据展示组件", category: "data-display", complexity: "intermediate" }
    ]
  },
  {
    id: "bento-grid",
    name: "Bento Grid Design",
    shortName: "Bento",
    description: "便当盒设计风格，受日式便当盒启发的网格布局设计，强调有序的分割和均衡的空间分配。",
    characteristics: [
      "整齐的网格布局",
      "清晰的分割线",
      "均衡的空间分配",
      "简洁的色彩搭配",
      "强调内容的有序性"
    ],
    colorScheme: {
      primary: "#2E3440",
      secondary: "#D8DEE9",
      accent: "#88C0D0",
      background: "#ECEFF4",
      foreground: "#2E3440",
      muted: "#E5E9F0"
    },
    fontFamily: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
    category: "modern",
    examples: [
      { id: "bento-button", name: "按钮组件", description: "整齐排列的按钮设计", category: "button", complexity: "basic" },
      { id: "bento-card", name: "卡片组件", description: "网格化的卡片布局", category: "card", complexity: "intermediate" },
      { id: "bento-form", name: "表单组件", description: "有序的表单布局", category: "form", complexity: "advanced" },
      { id: "bento-navigation", name: "导航组件", description: "网格化的导航设计", category: "navigation", complexity: "intermediate" },
      { id: "bento-layout", name: "布局组件", description: "便当盒式的页面布局", category: "layout", complexity: "advanced" },
      { id: "bento-display", name: "数据展示", description: "网格化的数据展示", category: "data-display", complexity: "intermediate" }
    ]
  },
  {
    id: "apple-design",
    name: "Apple Design Language",
    shortName: "Apple",
    description: "苹果设计语言，简约、精致、注重细节的设计风格，强调内容优先和直观的用户体验。",
    characteristics: [
      "简约的设计语言",
      "精致的细节处理",
      "柔和的阴影和圆角",
      "强调内容优先",
      "高品质的视觉效果"
    ],
    colorScheme: {
      primary: "#007AFF",
      secondary: "#F2F2F7",
      accent: "#30D158",
      background: "#FFFFFF",
      foreground: "#000000",
      muted: "#F2F2F7"
    },
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Helvetica Neue", "sans-serif"],
    category: "classic",
    examples: [
      { id: "apple-button", name: "按钮组件", description: "精致的按钮设计", category: "button", complexity: "basic" },
      { id: "apple-card", name: "卡片组件", description: "优雅的卡片布局", category: "card", complexity: "intermediate" },
      { id: "apple-form", name: "表单组件", description: "简约的表单设计", category: "form", complexity: "advanced" },
      { id: "apple-navigation", name: "导航组件", description: "清晰的导航栏", category: "navigation", complexity: "intermediate" },
      { id: "apple-layout", name: "布局组件", description: "极简的页面布局", category: "layout", complexity: "advanced" },
      { id: "apple-display", name: "数据展示", description: "精美的数据展示", category: "data-display", complexity: "intermediate" }
    ]
  },
  {
    id: "material-design",
    name: "Material Design",
    shortName: "Material",
    description: "Google Material Design，基于纸张和墨水的隐喻，强调层次感和物理定律的设计系统。",
    characteristics: [
      "基于纸张和墨水的隐喻",
      "明确的层次结构",
      "响应式的交互",
      "一致的设计系统",
      "强调可访问性"
    ],
    colorScheme: {
      primary: "#6200EA",
      secondary: "#03DAC6",
      accent: "#FF5722",
      background: "#FFFFFF",
      foreground: "#000000",
      muted: "#F5F5F5"
    },
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    category: "enterprise",
    examples: [
      { id: "material-button", name: "按钮组件", description: "Material风格的按钮", category: "button", complexity: "basic" },
      { id: "material-card", name: "卡片组件", description: "Material卡片设计", category: "card", complexity: "intermediate" },
      { id: "material-form", name: "表单组件", description: "Material表单组件", category: "form", complexity: "advanced" },
      { id: "material-navigation", name: "导航组件", description: "Material导航设计", category: "navigation", complexity: "intermediate" },
      { id: "material-layout", name: "布局组件", description: "Material布局系统", category: "layout", complexity: "advanced" },
      { id: "material-display", name: "数据展示", description: "Material数据展示", category: "data-display", complexity: "intermediate" }
    ]
  }
];

export const componentCategories = [
  { id: 'button', name: '按钮', description: '各种按钮样式和交互' },
  { id: 'card', name: '卡片', description: '内容展示卡片组件' },
  { id: 'form', name: '表单', description: '表单输入和验证组件' },
  { id: 'navigation', name: '导航', description: '导航栏和菜单组件' },
  { id: 'layout', name: '布局', description: '页面布局和容器组件' },
  { id: 'data-display', name: '数据展示', description: '图表和数据可视化组件' }
];

export const styleCategories = [
  { id: 'modern', name: '现代风格', description: '现代化的设计语言' },
  { id: 'experimental', name: '实验性', description: '前卫和实验性的设计' },
  { id: 'classic', name: '经典风格', description: '经过时间验证的设计风格' },
  { id: 'playful', name: '趣味风格', description: '富有创意和趣味性的设计' },
  { id: 'enterprise', name: '企业级', description: '适合企业和商业环境的设计' }
];

// Utility functions
export function getDesignStyleById(id: string): DesignStyle | undefined {
  return designStyles.find(style => style.id === id);
}

export function getDefaultDesignStyle(): DesignStyle {
  return designStyles.find(style => style.isDefault) || designStyles[0];
}

export function getComponentsByCategory(category: string): ComponentExample[] {
  return designStyles.flatMap(style => 
    style.examples.filter(example => example.category === category)
  );
}

export function getStylesByCategory(category: string): DesignStyle[] {
  return designStyles.filter(style => 
    style.examples.some(example => example.category === category)
  );
}

export function getStylesByCategoryType(categoryType: string): DesignStyle[] {
  return designStyles.filter(style => style.category === categoryType);
}

// For future expansion - placeholder for loading additional styles
export async function loadAdditionalStyles(): Promise<DesignStyle[]> {
  // This function will be used to load the remaining 200+ styles
  // For now, return empty array
  return [];
}
