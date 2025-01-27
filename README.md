# UI SDK

A simple, modern React component library built with Next.js and Tailwind CSS.

## Usage via CDN

First, include React and the SDK in your HTML:

```html
<!-- Include React -->
<script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>

<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Include our SDK (after building and running npm run serve) -->
<script src="http://localhost:3001/index.iife.js"></script>
```

Then you can use the components directly:

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

  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
</script>
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the SDK: `npm run build`
4. Serve locally: `npm run serve`
5. The SDK will be available at `http://localhost:3001/index.iife.js`

## Components

### Button

A customizable button component with different variants and sizes.

Props:
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `children`: React.ReactNode
- `onClick`: () => void

## License

MIT
