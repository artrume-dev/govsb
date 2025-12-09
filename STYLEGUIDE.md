# VISIBI Style Guide for Developers

## Table of Contents
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Border Radius](#border-radius)
5. [Shadows](#shadows)
6. [Components](#components)
7. [Layout](#layout)
8. [Patterns](#patterns)

---

## Color System

### Semantic Colors (HSL Format)

All colors use CSS custom properties defined in [frontend/src/index.css](frontend/src/index.css).

#### Light Mode
```css
--background: 0 0% 100%          /* #FFFFFF */
--foreground: 240 10% 3.9%       /* #09090B */
--card: 0 0% 100%                /* #FFFFFF */
--card-foreground: 240 10% 3.9% /* #09090B */
--popover: 0 0% 100%             /* #FFFFFF */
--popover-foreground: 240 10% 3.9% /* #09090B */
--primary: 240 5.9% 10%          /* #18181B */
--primary-foreground: 0 0% 98%   /* #FAFAFA */
--secondary: 240 4.8% 95.9%      /* #F4F4F5 */
--secondary-foreground: 240 5.9% 10% /* #18181B */
--muted: 240 4.8% 95.9%          /* #F4F4F5 */
--muted-foreground: 240 3.8% 46.1% /* #71717A */
--accent: 240 4.8% 95.9%         /* #F4F4F5 */
--accent-foreground: 240 5.9% 10% /* #18181B */
--destructive: 0 84.2% 60.2%     /* #EF4444 */
--destructive-foreground: 0 0% 98% /* #FAFAFA */
--border: 240 5.9% 90%           /* #E4E4E7 */
--input: 240 5.9% 90%            /* #E4E4E7 */
--ring: 240 5.9% 10%             /* #18181B */
```

#### Dark Mode
```css
--background: 240 10% 3.9%       /* #09090B */
--foreground: 0 0% 98%           /* #FAFAFA */
--card: 240 10% 3.9%             /* #09090B */
--card-foreground: 0 0% 98%      /* #FAFAFA */
--popover: 240 10% 3.9%          /* #09090B */
--popover-foreground: 0 0% 98%   /* #FAFAFA */
--primary: 0 0% 98%              /* #FAFAFA */
--primary-foreground: 240 5.9% 10% /* #18181B */
--secondary: 240 3.7% 15.9%      /* #27272A */
--secondary-foreground: 0 0% 98% /* #FAFAFA */
--muted: 240 3.7% 15.9%          /* #27272A */
--muted-foreground: 240 5% 64.9% /* #A1A1AA */
--accent: 240 3.7% 15.9%         /* #27272A */
--accent-foreground: 0 0% 98%    /* #FAFAFA */
--destructive: 0 62.8% 30.6%     /* #991B1B */
--destructive-foreground: 0 0% 98% /* #FAFAFA */
--border: 240 3.7% 15.9%         /* #27272A */
--input: 240 3.7% 15.9%          /* #27272A */
--ring: 240 4.9% 83.9%           /* #D4D4D8 */
```

### Usage in Tailwind

```jsx
// Use semantic color names
<div className="bg-background text-foreground">
<button className="bg-primary text-primary-foreground">
<div className="border border-border">
```

### Pattern Background

Special pattern for decorative backgrounds:

```css
--pattern-fg: #1d4ed81A  /* Blue with 10% opacity */
```

```jsx
<div className="line-pattern pattern-background">
  {/* Diagonal line pattern */}
</div>
```

---

## Typography

### Font Families

Defined in [frontend/tailwind.config.js](frontend/tailwind.config.js:17-20).

```javascript
fontFamily: {
  'space-mono': ['"Space Mono"', 'monospace'],
  'inter': ['"Inter"', 'sans-serif'],
  'open-sans': ['"Open Sans"', 'sans-serif'],
}
```

### Font Usage

```jsx
// Headings (default for h2)
<h2 className="font-space-mono">Heading Text</h2>

// Body text
<p className="font-inter">Body text content</p>
<p className="font-open-sans">Alternative body text</p>

// Code/Monospace
<code className="font-space-mono">const code = true</code>
```

### Font Sizes (Tailwind Default)

```jsx
text-xs     // 0.75rem (12px)
text-sm     // 0.875rem (14px)
text-base   // 1rem (16px)
text-lg     // 1.125rem (18px)
text-xl     // 1.25rem (20px)
text-2xl    // 1.5rem (24px)
text-3xl    // 1.875rem (30px)
text-4xl    // 2.25rem (36px)
text-5xl    // 3rem (48px)
```

### Font Weights

```jsx
font-normal    // 400
font-medium    // 500
font-semibold  // 600
font-bold      // 700
```

---

## Spacing

### Padding & Margin Scale (Tailwind Default)

```jsx
p-0   // 0px
p-1   // 0.25rem (4px)
p-2   // 0.5rem (8px)
p-3   // 0.75rem (12px)
p-4   // 1rem (16px)
p-6   // 1.5rem (24px)
p-8   // 2rem (32px)
p-10  // 2.5rem (40px)
p-12  // 3rem (48px)
p-16  // 4rem (64px)
p-20  // 5rem (80px)
p-24  // 6rem (96px)
```

### Common Spacing Patterns

```jsx
// Card padding
<div className="p-6">

// Section spacing
<section className="py-12 px-4">

// Gap between elements
<div className="space-y-4">  // Vertical spacing
<div className="space-x-2">  // Horizontal spacing

// Grid/Flex gaps
<div className="gap-4">
```

---

## Border Radius

Defined in [frontend/tailwind.config.js](frontend/tailwind.config.js:57-61).

```javascript
--radius: 0.5rem  // 8px base radius

borderRadius: {
  lg: "var(--radius)",           // 0.5rem (8px)
  md: "calc(var(--radius) - 2px)", // 0.375rem (6px)
  sm: "calc(var(--radius) - 4px)", // 0.25rem (4px)
}
```

### Usage

```jsx
rounded-sm   // 0.25rem (4px)
rounded-md   // 0.375rem (6px)
rounded-lg   // 0.5rem (8px)
rounded-full // 9999px (full circle)
```

---

## Shadows

### Tailwind Default Shadows

```jsx
shadow-sm    // Small shadow for subtle elevation
shadow       // Default shadow
shadow-md    // Medium shadow for cards
shadow-lg    // Large shadow for modals
shadow-xl    // Extra large shadow
shadow-2xl   // Maximum shadow
```

### Usage Examples

```jsx
// Cards
<div className="shadow-md">

// Buttons (on hover)
<button className="hover:shadow-lg">

// Modals/Popovers
<div className="shadow-xl">
```

---

## Components

### Button Variants

Defined in [frontend/src/components/ui/button.jsx](frontend/src/components/ui/button.jsx:6-33).

```jsx
// Default (Primary)
<Button variant="default">Primary Action</Button>

// Destructive (Danger)
<Button variant="destructive">Delete</Button>

// Outline
<Button variant="outline">Secondary</Button>

// Secondary
<Button variant="secondary">Alternative</Button>

// Ghost
<Button variant="ghost">Subtle Action</Button>

// Link
<Button variant="link">Link Style</Button>
```

### Button Sizes

```jsx
<Button size="sm">Small</Button>      // h-9 px-3
<Button size="default">Default</Button> // h-10 px-4 py-2
<Button size="lg">Large</Button>      // h-11 px-8
<Button size="icon">🔍</Button>       // h-10 w-10
```

### Button States

```jsx
// Disabled
<Button disabled>Cannot Click</Button>

// Focus ring
// Automatically applied: ring-offset-2, ring-2, ring-ring

// Hover effects
// Automatically applied per variant
```

### Card Component

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

---

## Layout

### Container

Defined in [frontend/tailwind.config.js](frontend/tailwind.config.js:9-14).

```javascript
container: {
  center: true,
  padding: "2rem",
  screens: {
    "2xl": "1400px",
  },
}
```

### Usage

```jsx
<div className="container">
  {/* Centered, max-width 1400px, 2rem padding */}
</div>
```

### Responsive Breakpoints

```jsx
sm:   // 640px
md:   // 768px
lg:   // 1024px
xl:   // 1280px
2xl:  // 1400px (custom)
```

### Grid Patterns

```jsx
// 12-column grid
<div className="grid grid-cols-12 gap-4">

// Responsive columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Auto-fit grid
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
```

### Flexbox Patterns

```jsx
// Center content
<div className="flex items-center justify-center">

// Space between
<div className="flex justify-between items-center">

// Column layout
<div className="flex flex-col gap-4">
```

---

## Patterns

### Focus States

All interactive elements should use ring-based focus:

```jsx
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
```

### Disabled States

```jsx
disabled:pointer-events-none
disabled:opacity-50
```

### Hover States

```jsx
// Buttons
hover:bg-primary/90

// Links
hover:underline

// Cards
hover:shadow-lg
```

### Transitions

```jsx
transition-colors    // For color changes
transition-all       // For multiple properties
transition-transform // For transforms

// Duration
duration-150
duration-200
duration-300
```

### Dark Mode

Toggle dark mode using the `dark` class on root element:

```jsx
<html className="dark">

// Then use dark: prefix
<div className="bg-white dark:bg-gray-900">
<p className="text-gray-900 dark:text-white">
```

---

## Animations

Defined in [frontend/tailwind.config.js](frontend/tailwind.config.js:62-75).

```javascript
keyframes: {
  "accordion-down": {
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
  },
}
```

### Usage

```jsx
<div className="animate-accordion-down">
<div className="animate-accordion-up">
```

---

## Best Practices

### Do's

- Use semantic color variables (`bg-primary`, `text-foreground`)
- Maintain consistent spacing using the spacing scale
- Use the defined button variants instead of custom styles
- Apply focus states to all interactive elements
- Test components in both light and dark modes
- Use the container class for page-level layouts
- Prefer Tailwind utilities over custom CSS

### Don'ts

- Don't use arbitrary values unless absolutely necessary
- Don't mix spacing scales (stick to 4px increments)
- Don't create custom colors outside the design system
- Don't skip accessibility features (focus rings, aria labels)
- Don't use inline styles
- Don't create duplicate component variants

---

## File References

- Tailwind Config: [frontend/tailwind.config.js](frontend/tailwind.config.js)
- CSS Variables: [frontend/src/index.css](frontend/src/index.css)
- Button Component: [frontend/src/components/ui/button.jsx](frontend/src/components/ui/button.jsx)
- Card Component: [frontend/src/components/ui/card.jsx](frontend/src/components/ui/card.jsx)
- Badge Component: [frontend/src/components/ui/badge.jsx](frontend/src/components/ui/badge.jsx)
- Alert Component: [frontend/src/components/ui/alert.jsx](frontend/src/components/ui/alert.jsx)

---

## Quick Reference

### Common Component Patterns

```jsx
// Primary CTA Button
<Button size="lg" className="shadow-md">
  Get Started
</Button>

// Info Card
<Card className="shadow-md hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle className="font-space-mono">Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>

// Form Input
<Input
  className="border-input focus-visible:ring-ring"
  placeholder="Enter text..."
/>

// Icon Button
<Button size="icon" variant="ghost">
  <Icon />
</Button>
```

---

**Last Updated:** December 2025
**Version:** 1.0
