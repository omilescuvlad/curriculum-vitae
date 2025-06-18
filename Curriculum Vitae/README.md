# 📄 Curriculum Vitae - Vlad Omilescu

A modern, responsive personal portfolio website built with React and Vite, showcasing professional experience, skills, and projects.

## ✨ Features

### 🎨 **Modern Design**
- Clean and professional layout
- Responsive design that works on all devices
- Smooth animations using Framer Motion
- Modern CSS with CSS Modules

### 📱 **Responsive Layout**
- Mobile-first approach
- Adaptive sidebar and main content
- Optimized for desktop, tablet, and mobile

### 🎯 **Interactive Portfolio**
- Filterable project showcase
- Animated project cards
- Direct links to GitHub repositories
- Technology tags for each project

### 📄 **Professional Sections**
- **Personal Information**: Contact details and social links
- **Skills**: Technical skills with proficiency levels
- **Languages**: Language proficiency indicators
- **Education**: Academic background and certifications
- **Experience**: Professional work history
- **Projects**: Interactive portfolio with filtering
- **Interests**: Personal interests and hobbies

### 🚀 **Performance**
- Built with Vite for fast development and build times
- Optimized bundle size
- Smooth page transitions

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: CSS Modules
- **Animations**: Framer Motion 11.0.0
- **Development**: ESLint for code quality
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/curriculum-vitae.git
   cd curriculum-vitae
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment & Hosting

### **Deploy to Vercel (Recommended)**

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

3. **Add Custom Domain**
   - In your Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add `omilescuvlad.com` and `www.omilescuvlad.com`
   - Follow the DNS configuration instructions

### **Alternative: Netlify**

1. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Add Custom Domain**
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain: `omilescuvlad.com`
   - Configure DNS records as instructed

### **DNS Configuration**

Add these records to your domain provider:

```
Type: A
Name: @
Value: [Your hosting provider's IP]

Type: CNAME  
Name: www
Value: [your-app.vercel.app] or [your-app.netlify.app]
```

## 📁 Project Structure

```
curriculum-vitae/
├── public/
│   ├── CV_OmilescuVlad.pdf    # PDF version of CV
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                 # Main application component
│   ├── App.module.css          # Main styles
│   ├── Portfolio.jsx           # Portfolio component
│   ├── Portfolio.module.css    # Portfolio styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel deployment config
└── eslint.config.js            # ESLint configuration
```

## 🎨 Customization

### Adding New Projects
Edit `src/Portfolio.jsx` and add new projects to the `PROJECTS` array:

```javascript
const PROJECTS = [
  {
    title: 'Your Project',
    desc: 'Project description',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/username/project',
    demo: 'https://demo-link.com', // Optional
  },
  // ... more projects
];
```

### Updating Personal Information
Modify the content in `src/App.jsx` to update:
- Personal details
- Skills and languages
- Education and experience
- Contact information

### Styling
- Main styles: `src/App.module.css`
- Portfolio styles: `src/Portfolio.module.css`
- Global styles: `src/index.css`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Features in Detail

### Portfolio Filtering
- Filter projects by technology tags
- Smooth animations when switching filters
- "All" option to show all projects

### Professional Sections
- **Skills**: Organized by category with proficiency indicators
- **Languages**: Visual language proficiency levels
- **Education**: Academic achievements and certifications
- **Experience**: Detailed work history with responsibilities
- **Interests**: Personal interests and hobbies

### Download CV
- Direct download link to PDF version
- Styled download button with hover effects

## 📞 Contact

- **Name**: Vlad Omilescu
- **GitHub**: [@omilescuvlad](https://github.com/omilescuvlad)
- **Email**: vlad.omilescu@gmail.com
- **Website**: [omilescuvlad.com](https://omilescuvlad.com)
