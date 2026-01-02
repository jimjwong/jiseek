# Jiseek Website

A boutique education, training, and consultancy brand enabling individuals and organizations to leverage data, digital tools, and mindful, ethical approaches to transformation.

## Technology Stack

- **Frontend:** React 19, TypeScript, Vite
- **Backend:** Express.js, Node.js
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI
- **Package Manager:** pnpm

## Deployment

This project is configured for deployment on **Coolify** using **Nixpacks**.

### Coolify Configuration

The project includes:
- `.nixpacks.toml` - Nixpacks configuration for automated builds
- `.dockerignore` - Files to exclude from Docker builds

### Environment Variables

Required environment variables for production:
```
NODE_ENV=production
PORT=3000
```

### Build Configuration

**Install Command:**
```bash
pnpm install --frozen-lockfile
```

**Build Command:**
```bash
pnpm build
```

**Start Command:**
```bash
node dist/index.js
```

**Port:** `3000`

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```

### Build Output

- Client build: `dist/public/`
- Server build: `dist/index.js`

## Features

- Responsive design for all devices
- SEO optimized
- Modern UI with smooth animations
- Privacy-focused testimonials
- SSL-ready for production deployment

## License

MIT

