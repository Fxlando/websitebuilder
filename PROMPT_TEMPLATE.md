# 🎯 Comprehensive Prompt Template

## **Method 1: Design System + JSON Template**

### **Step 1: Design JSON Creation Prompt**
```
Analyze this design image and create a comprehensive JSON design system that includes:

1. **Color Palette**: Extract all colors used, including primary, secondary, accent, and neutral colors
2. **Typography**: Font families, sizes, weights, and line heights
3. **Spacing System**: Consistent spacing values (xs, sm, md, lg, xl, 2xl, etc.)
4. **Component Patterns**: Button styles, card designs, form elements
5. **Animation Specifications**: Hover effects, transitions, keyframes
6. **Layout Structure**: Grid systems, container widths, responsive breakpoints
7. **Visual Effects**: Shadows, gradients, glass morphism, blur effects

Format the output as a structured JSON object that can be used to recreate this design consistently across different components and pages.

Design Image: [INSERT YOUR DESIGN IMAGE HERE]
```

### **Step 2: Front-End App Template Prompt**
```
# Front-End App Template

## Project Overview:
- **App Name**: [Your App Name]
- **Purpose**: [Brief description of what the app does]
- **Target Users**: [Who will use this app]

## Required Pages:
- [List all pages your app needs]
- [Include authentication pages if needed]
- [Add admin/management pages if required]

## User Roles & Permissions:
- **Guest Users**: [What can they do?]
- **Authenticated Users**: [What can they do?]
- **Admin Users**: [What can they do?]
- **Authentication Method**: [Email/password, OAuth, etc.]

## Shared Components:
- **Navigation**: [Header, sidebar, breadcrumbs]
- **Layout**: [Container, grid system, responsive design]
- **UI Elements**: [Buttons, forms, modals, tooltips]
- **Feedback**: [Loading states, error messages, success notifications]

## Technical Requirements:
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: [Context, Redux, Zustand, etc.]
- **API Integration**: [REST, GraphQL, etc.]
- **Performance**: [Lazy loading, image optimization, etc.]

## Design Requirements:
- **Follow design-system.json strictly**
- **Implement glass morphism effects where appropriate**
- **Use specified color palette consistently**
- **Apply typography system throughout**
- **Ensure responsive design for all screen sizes**
- **Add smooth animations and micro-interactions**

## Additional Features:
- [List any specific features or functionality]
- [Include accessibility requirements]
- [Specify SEO requirements]
- [Add analytics tracking if needed]

Please fill out this template completely and provide a comprehensive plan for building this front-end application.
```

### **Step 3: Implementation Prompt**
```
Build the front-end app in this Next.js app and for the design strictly follow the design-system.json that I provided.

Requirements:
1. Create all required pages with proper routing
2. Implement authentication system if specified
3. Build all shared components with consistent styling
4. Add smooth animations and micro-interactions
5. Ensure responsive design works on all devices
6. Optimize for performance and accessibility
7. Follow the design system specifications exactly

Use the design-system.json file for all styling decisions and component patterns.
```

## **Method 2: Browser MCP Structure Cloning**

### **Browser MCP Setup Prompt**
```
I want to clone the structure and functionality of this website: [WEBSITE_URL]

Please explore the website thoroughly and:

1. **Analyze the Architecture**:
   - Break down the page structure
   - Identify navigation patterns
   - Map out user flows
   - Document component hierarchy

2. **Extract Functionality**:
   - List all interactive elements
   - Identify form handling
   - Document API calls and data flow
   - Note any special features or animations

3. **Understand Styling**:
   - Analyze color schemes
   - Document typography choices
   - Identify layout patterns
   - Note responsive design approaches

4. **Create Implementation Plan**:
   - Suggest framework (Next.js recommended)
   - Plan component structure
   - Outline routing strategy
   - Specify state management needs

Please provide a detailed analysis and implementation plan for recreating this website's structure and functionality.
```

### **Structure Clone Implementation Prompt**
```
Based on the Browser MCP analysis, create a functional clone of the website with the following requirements:

Framework: Next.js with TypeScript and Tailwind CSS

Requirements:
1. **Exact Functionality**: Maintain all interactive features
2. **Responsive Design**: Work perfectly on all screen sizes
3. **Performance Optimized**: Fast loading and smooth interactions
4. **Accessibility**: Meet WCAG standards
5. **Custom Styling**: Apply our design system on top of the structure

Focus on:
- Preserving user interactions and flows
- Maintaining the same information architecture
- Implementing all form functionality
- Adding proper error handling
- Ensuring smooth animations and transitions

Use the analysis provided to create an accurate, functional clone.
```

## **Method 3: StageWise Precision Editing**

### **StageWise Element Selection Prompt**
```
Element Details:
- **Location**: [Exact file path and line numbers]
- **Current State**: [What the element looks like now]
- **Element Type**: [Button, card, text, etc.]
- **Context**: [What section/page it's in]

Desired Changes:
- **Specific Modifications**: [Exactly what you want changed]
- **Styling Updates**: [Color, size, spacing, etc.]
- **Animation Requirements**: [Hover effects, transitions, etc.]
- **Behavior Changes**: [Click handlers, form validation, etc.]

Example:
"Update the restart button in the game component to have a proper hover animation with scale effect and make it consistent with the yellow theme used throughout the UI. The button should have rounded corners, proper padding, and a subtle shadow effect."
```

## **Advanced Implementation Prompts**

### **Premium Component Integration**
```
Add the following premium components to enhance the user experience:

1. **TiltedCard Component**: 
   - 3D tilt effect on hover
   - Intensity: 8 degrees
   - Smooth transitions
   - Apply to all feature cards

2. **FloatingElement Component**:
   - Subtle floating animations
   - Duration: 3 seconds
   - Apply to background elements

3. **Glass Morphism Effects**:
   - Backdrop blur: 20px
   - Background opacity: 0.1
   - Border: 1px solid rgba(255,255,255,0.2)
   - Apply to modal overlays and cards

4. **Gradient Text Effects**:
   - Primary gradient for headings
   - Animated gradient for special text
   - Apply to hero section and CTAs

Implement these components while maintaining the existing design system and ensuring smooth performance.
```

### **Animation and Micro-interactions**
```
Add the following animations and micro-interactions:

1. **Page Transitions**:
   - Fade in/out between pages
   - Smooth scroll to sections
   - Loading states for dynamic content

2. **Hover Effects**:
   - Scale animations on buttons (1.05x)
   - Color transitions on links
   - Shadow effects on cards

3. **Scroll Animations**:
   - Stagger reveal for lists
   - Parallax effects for backgrounds
   - Fade in elements as they enter viewport

4. **Form Interactions**:
   - Focus states with glow effects
   - Validation feedback animations
   - Success/error state transitions

Ensure all animations are:
- Performance optimized (60fps)
- Respect user preferences (reduced motion)
- Accessible and meaningful
- Consistent with the design system
```

### **Responsive Design Implementation**
```
Implement comprehensive responsive design with the following breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Requirements:
1. **Mobile-First Approach**: Start with mobile design
2. **Touch-Friendly**: Minimum 44px touch targets
3. **Readable Typography**: Scale text appropriately
4. **Optimized Images**: Responsive image handling
5. **Navigation**: Collapsible menu for mobile
6. **Content Layout**: Stack elements on mobile
7. **Performance**: Optimize for slower connections

Focus on:
- Maintaining functionality across all devices
- Ensuring accessibility on mobile
- Optimizing loading times
- Providing consistent user experience
```

## **Quality Assurance Prompts**

### **Performance Optimization**
```
Optimize the website for performance with the following requirements:

1. **Loading Speed**:
   - First Contentful Paint < 1.5s
   - Largest Contentful Paint < 2.5s
   - Cumulative Layout Shift < 0.1

2. **Image Optimization**:
   - Use WebP format where supported
   - Implement lazy loading
   - Provide appropriate sizes for different screens

3. **Code Splitting**:
   - Lazy load non-critical components
   - Split routes for faster navigation
   - Optimize bundle size

4. **Caching Strategy**:
   - Implement proper cache headers
   - Use service worker for offline support
   - Optimize API calls

5. **Animation Performance**:
   - Use transform and opacity for animations
   - Avoid layout thrashing
   - Implement will-change for complex animations

Please implement these optimizations while maintaining the design quality.
```

### **Accessibility Implementation**
```
Implement comprehensive accessibility features:

1. **Semantic HTML**:
   - Proper heading hierarchy
   - Meaningful alt text for images
   - ARIA labels where needed

2. **Keyboard Navigation**:
   - All interactive elements keyboard accessible
   - Visible focus indicators
   - Logical tab order

3. **Screen Reader Support**:
   - Descriptive link text
   - Form labels and error messages
   - Status announcements

4. **Color and Contrast**:
   - WCAG AA contrast ratios
   - Color not the only indicator
   - High contrast mode support

5. **Motion and Animation**:
   - Respect prefers-reduced-motion
   - Provide pause/stop controls
   - Ensure animations don't cause seizures

Please implement these accessibility features throughout the application.
```

## **Usage Instructions**

1. **Copy the appropriate prompt template**
2. **Fill in your specific requirements**
3. **Provide the design-system.json file**
4. **Give the prompt to Cursor**
5. **Review and refine the implementation**
6. **Test thoroughly across devices**

This template ensures you get professional, functional code that actually works! 