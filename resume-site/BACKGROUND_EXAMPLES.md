# Dynamic Background Examples

I've created 5 different animated background options for your portfolio. Here's how to use each one:

## Available Backgrounds

### 1. **GalaxyBackground** (Currently Active) 🌌
- **File**: `src/app/components/ui/GalaxyBackground.tsx`
- **Description**: Starry galaxy sky with twinkling stars, swirling nebula clouds, and milky way effect
- **Performance**: Good (Canvas-based)
- **Best for**: Dark, atmospheric, epic aesthetic (inspired by Attack on Titan skies)
- **Features**: 
  - 300+ twinkling stars
  - Animated nebula clouds
  - Bright stars with cross patterns
  - Swirling galaxy/milky way gradient
  - Smooth, continuous animation

### 2. **AnimatedGradient**
- **File**: `src/app/components/ui/AnimatedGradient.tsx`
- **Description**: Smooth, animated gradient orbs that float around the screen
- **Performance**: Excellent (CSS-only)
- **Best for**: Clean, professional look

### 3. **ParticleBackground**
- **File**: `src/app/components/ui/ParticleBackground.tsx`
- **Description**: Interactive particle system with connected nodes
- **Performance**: Good (Canvas-based)
- **Best for**: Modern, tech-focused aesthetic

### 4. **MeshGradient**
- **File**: `src/app/components/ui/MeshGradient.tsx`
- **Description**: Animated mesh gradient with smooth color transitions
- **Performance**: Excellent (CSS-only)
- **Best for**: Vibrant, colorful design

### 5. **FloatingShapes**
- **File**: `src/app/components/ui/FloatingShapes.tsx`
- **Description**: Floating geometric shapes and blobs
- **Performance**: Excellent (CSS-only)
- **Best for**: Playful, creative portfolios

## How to Switch Backgrounds

In `src/app/layout.tsx`, replace the import and component:

### To use GalaxyBackground (current):
```tsx
import GalaxyBackground from './components/ui/GalaxyBackground';
// ... in body:
<GalaxyBackground />
```

### To use AnimatedGradient:
```tsx
import AnimatedGradient from './components/ui/AnimatedGradient';
// ... in body:
<AnimatedGradient />
```

### To use ParticleBackground:
```tsx
import ParticleBackground from './components/ui/ParticleBackground';
// ... in body:
<ParticleBackground />
```

### To use MeshGradient:
```tsx
import MeshGradient from './components/ui/MeshGradient';
// ... in body:
<MeshGradient />
```

### To use FloatingShapes:
```tsx
import FloatingShapes from './components/ui/FloatingShapes';
// ... in body:
<FloatingShapes />
```

## Customization

You can customize colors, animation speeds, and particle counts by editing the respective component files. 

### GalaxyBackground Customization:
- **Star count**: Change `starCount` variable (default: 300)
- **Bright stars**: Change `brightStars` count (default: 20)
- **Colors**: Modify the gradient color stops in `drawGalaxy()` function
- **Animation speed**: Adjust `time` increment rate (default: 16)
- **Nebula clouds**: Modify the cloud generation loop (default: 5 clouds)
- **Twinkle speed**: Adjust `twinkleSpeed` values for stars

**Note**: GalaxyBackground is designed for dark mode. If using other backgrounds, you may need to adjust text colors and section backgrounds in `page.tsx`.

## Performance Notes

- **CSS-only backgrounds** (AnimatedGradient, MeshGradient, FloatingShapes) are the most performant
- **Canvas-based** (ParticleBackground) uses more resources but offers more interactivity
- All backgrounds use `-z-10` to stay behind content and `pointer-events-none` where appropriate

## Combining Backgrounds

You can combine backgrounds by importing multiple components, but be mindful of performance and visual clarity. For example:

```tsx
<AnimatedGradient />
<FloatingShapes />
```

