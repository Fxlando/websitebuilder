# 3D Models Directory

Place your Mixamo GLB/FBX files in this directory.

## File Structure

```
public/models/
├── README.md                    # This file
├── your-character.glb          # Your Mixamo character (example)
├── character-with-animations.glb # Combined animations (example)
└── ...
```

## How to Add Your Models

1. **Download from Mixamo**: Get your character as GLB format
2. **Place in this folder**: Copy your .glb file here
3. **Update component**: Use the path in your React component

## Example Usage

```tsx
<InteractiveAvatar 
  modelPath="/models/your-character.glb"
  width={400} 
  height={400}
/>
```

## Supported Formats

- ✅ **GLB** (recommended) - Single file with textures
- ✅ **GLTF** - JSON-based format
- ⚠️ **FBX** - Requires additional loader

## Tips

- Use descriptive filenames
- Keep file sizes reasonable (< 10MB for web)
- Optimize models for web performance
- Include multiple animations in one file when possible 