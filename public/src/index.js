import { render } from 'preact';

import { Test } from './test'

export function App() {
	return <>
        <Test {...{
            message: 'Hello World!'
        }} />
    </>
}

render(<App />, document.body);