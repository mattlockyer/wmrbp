import { render } from 'preact';

import { AppProvider } from './state/app.js';
import { App } from './components/App'

render(
    <AppProvider>
        <App />
    </AppProvider>, 
    document.body
)
