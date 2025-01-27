# Avantos UI SDK

A simple, modern React component library built with Next.js and Tailwind CSS.

## Quick Start with CDN

Add the following scripts to your HTML:

```html
<!-- Include React 18 -->
<script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>

<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Include Avantos UI SDK -->
<script src="https://cdn.jsdelivr.net/gh/csbnapses/ui-sdk@main/dist/index.global.js"></script>
```

Then use the components:

```html
<div id="root"></div>
<script>
    const { Button } = AvantosSdk;
    
    const App = () => {
        return React.createElement(Button, {
            variant: 'primary',
            size: 'medium',
            onClick: () => alert('Clicked!')
        }, 'Click me');
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App));
</script>
```

## Installation via npm (Alternative)

```bash
npm install @avantos/ui-sdk
```

```jsx
import { Button } from '@avantos/ui-sdk';

function App() {
  return (
    <Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
```

## Components

### Button

A customizable button component with different variants and sizes.

Props:
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `children`: React.ReactNode
- `onClick`: () => void

Example:
```jsx
<Button 
  variant="primary" 
  size="medium" 
  onClick={() => console.log('clicked')}
>
  Click me
</Button>
```

Variants:
- `primary`: Blue button with white text
- `secondary`: Gray button with dark text

Sizes:
- `small`: Compact size
- `medium`: Default size
- `large`: Large size

## Development

1. Clone the repository:
```bash
git clone https://github.com/csbnapses/ui-sdk.git
cd ui-sdk
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build the package:
```bash
npm run build
```

5. Test locally:
```bash
npm run serve
```

## CDN URLs

The SDK is available through multiple CDN providers:

1. jsDelivr (Recommended):
```html
<script src="https://cdn.jsdelivr.net/gh/csbnapses/ui-sdk@main/dist/index.global.js"></script>
```

2. UNPKG (After npm publish):
```html
<script src="https://unpkg.com/@avantos/ui-sdk@latest/dist/index.global.js"></script>
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 18+
- Includes Tailwind CSS for styling

## License

MIT
