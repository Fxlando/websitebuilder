# 3D Interactive Avatar Component

A React component that displays 3D avatars with Xbox 360-style interactive behavior using Three.js. Perfect for showcasing Mixamo characters with animations.

## Features

- 🎮 **Xbox 360 Style Interaction**: Hover to wake up, click to interact
- 🎬 **Animation Support**: Play/pause and switch between multiple animations
- 🎥 **Camera Controls**: Orbit, zoom, and pan with mouse/touch
- 💡 **Professional Lighting**: Ambient, directional, and point lighting with shadows
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Customizable**: Easy to style and integrate

## Installation

The component uses Three.js which is already installed:

```bash
npm install three @types/three
```

## Basic Usage

```tsx
import InteractiveAvatar from '@/components/InteractiveAvatar';

function MyComponent() {
  return (
    <InteractiveAvatar 
      modelPath="/models/your-character.glb"
      width={400} 
      height={400}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelPath` | `string` | `undefined` | Path to your GLB/FBX file |
| `width` | `number` | `400` | Width of the avatar container |
| `height` | `number` | `400` | Height of the avatar container |
| `className` | `string` | `''` | Additional CSS classes |

## Getting Mixamo Models

### Step 1: Create Your Character
1. Go to [Mixamo.com](https://www.mixamo.com)
2. Choose a character or upload your own
3. Customize the appearance as needed

### Step 2: Add Animations
1. Select animations like:
   - **Idle** - Default standing animation
   - **Walk** - Walking cycle
   - **Run** - Running animation
   - **Wave** - Hand wave gesture
   - **Dance** - Fun dance moves
   - **Jump** - Jumping animation

### Step 3: Download
1. Click "Download" for each animation
2. Choose **GLB** format (recommended)
3. Make sure "Skin" is selected for the character mesh
4. Download all animations you want to use

### Step 4: Combine Animations (Optional)
For multiple animations in one file:
1. Use Blender or similar 3D software
2. Import your character GLB
3. Import animation GLB files
4. Combine into a single GLB with multiple animations
5. Export as GLB

## File Structure

```
public/
  models/
    your-character.glb    # Your Mixamo character
    character-with-animations.glb  # Combined file
```

## Advanced Usage

### Custom Styling

```tsx
<InteractiveAvatar 
  modelPath="/models/character.glb"
  width={500} 
  height={500}
  className="rounded-lg shadow-2xl border-2 border-orange-500"
/>
```

### Multiple Avatars

```tsx
<div className="grid grid-cols-2 gap-4">
  <InteractiveAvatar 
    modelPath="/models/character1.glb"
    width={300} 
    height={300}
  />
  <InteractiveAvatar 
    modelPath="/models/character2.glb"
    width={300} 
    height={300}
  />
</div>
```

## Animation Controls

The component automatically provides:
- **Play/Pause Button**: Toggle animation playback
- **Animation Selector**: Switch between multiple animations (if available)
- **Hover Effects**: Scale and glow effects on hover
- **Click Interactions**: Trigger excitement animations

## Troubleshooting

### Model Not Loading
- Check file path is correct
- Ensure GLB file is in `public/models/` folder
- Verify file is not corrupted
- Check browser console for errors

### No Animations
- Make sure GLB file includes animations
- Check that animations are properly rigged
- Verify animation names are accessible

### Performance Issues
- Reduce model polygon count
- Optimize textures
- Use lower resolution on mobile
- Consider using LOD (Level of Detail)

## Customization

### Changing Colors
Edit the component to modify:
- Background color (`scene.background`)
- Lighting colors
- Material colors

### Adding Effects
You can add:
- Particle systems
- Post-processing effects
- Custom shaders
- Sound effects

### Camera Settings
Modify camera behavior:
- Field of view
- Position and limits
- Orbit controls sensitivity

## Browser Support

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited)

## Performance Tips

1. **Optimize Models**: Use low-poly models for web
2. **Compress Textures**: Use compressed texture formats
3. **LOD System**: Implement level of detail for distance
4. **Culling**: Only render visible objects
5. **Pause When Hidden**: Stop animations when not visible

## Examples

### Simple Avatar
```tsx
<InteractiveAvatar modelPath="/models/character.glb" />
```

### Styled Avatar
```tsx
<InteractiveAvatar 
  modelPath="/models/character.glb"
  width={600}
  height={400}
  className="rounded-xl shadow-2xl"
/>
```

### Multiple Animations
The component automatically detects and lists all animations in your GLB file. Users can switch between them using the dropdown menu.

## Contributing

Feel free to enhance the component with:
- More animation controls
- Custom shaders
- Particle effects
- Sound integration
- VR support

## License

This component is part of the BLOBSY project and follows the same license terms. 