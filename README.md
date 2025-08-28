# Feng Xu (Andy) - Personal Portfolio Website

A modern, interactive personal portfolio website showcasing professional experience, projects, and skills in content creation tools and product management.

## ✨ Features

- **Modern Design**: Dark tech mode with glassmorphism effects and cyber blue accents
- **Responsive Layout**: Optimized for all devices with CSS Grid and Flexbox
- **Interactive Elements**: 
  - Hover effects on skill tags with achievement tooltips
  - Project modal with detailed case studies
  - Smooth scroll animations and micro-interactions
- **Professional Content**: Structured experience sections with company logos
- **Project Showcase**: Video demos with interactive modal views
- **Skills Visualization**: Visual toolbox with proficiency indicators
- **Contact Form**: Professional contact section with personalized messaging

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cursor-learning
   ```

2. **Start local server**
   ```bash
   python3 -m http.server 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript interactivity
├── assets/
│   ├── avatar.jpg      # Profile photo
│   ├── favicon.svg     # Site icon
│   ├── logos/          # Company and tool logos
│   ├── projects/       # Project demo videos
│   └── resume.pdf      # Resume document
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#18181B` (Dark gray)
- **Card Background**: `rgba(30, 30, 30, 0.7)` (Glassmorphism)
- **Accent Color**: `#00A3FF` (Cyber Blue)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#EAEAEA` (Light gray)
- **Text Muted**: `#A0A0A0` (Medium gray)

### Typography
- **Headings**: Inter (700-800 weight)
- **Body Text**: Sora (400 weight)
- **Line Height**: 1.7 for optimal readability

### Layout
- **Hero Section**: 65% text / 35% photo grid layout
- **Experience**: Timeline with company logos and structured content
- **Projects**: Interactive cards with video previews
- **Skills**: Visual toolbox with hover effects

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (main)
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Connect your GitHub repository to Netlify
2. Build command: Leave empty (static site)
3. Publish directory: `.` (root)
4. Deploy automatically on every push

### Option 3: Vercel (Free)
1. Import your GitHub repository to Vercel
2. Framework preset: Other
3. Build command: Leave empty
4. Output directory: `.`
5. Deploy with zero configuration

### Option 4: Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Configure your domain to point to the hosting

## 📚 Development Guidelines

Before starting any development work, please read our comprehensive development guidelines:

**[📖 DEVELOPMENT_GUIDELINES.md](./DEVELOPMENT_GUIDELINES.md)**

This document contains:
- Standard problem-solving workflows
- Technical solution selection principles
- Validation mechanisms and checklists
- Common problem solutions library
- Code quality standards
- Error handling strategies

**⚠️ Important**: Following these guidelines helps avoid common pitfalls and ensures high-quality solutions.

## 🔧 Customization

### Content Updates
- **Profile**: Update `assets/avatar.jpg` and personal information in `index.html`
- **Experience**: Modify experience entries in the Experience section
- **Projects**: Add new project videos to `assets/projects/` and update `script.js`
- **Skills**: Update skill tags and tool logos in the My Toolbox section

### Styling Changes
- **Colors**: Modify CSS variables in `styles.css`
- **Layout**: Adjust grid templates and spacing variables
- **Animations**: Customize keyframes and transition effects

### Adding New Features
- **Sections**: Add new HTML sections following the existing structure
- **Interactions**: Extend `script.js` with new event handlers
- **Responsiveness**: Add media queries for new breakpoints

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Variables, ES6+ JavaScript

## 🚀 Performance

- **Optimized Assets**: Compressed images and videos
- **Efficient CSS**: Minimal CSS with smart selectors
- **Lightweight JS**: Vanilla JavaScript without heavy frameworks
- **Fast Loading**: Optimized for sub-2 second load times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **LinkedIn**: [Feng Xu (Andy)](https://www.linkedin.com/in/feng-xu-510ba026a/)
- **Email**: Available through the contact form on the website

---

Built with ❤️ using modern web technologies for the best user experience.

