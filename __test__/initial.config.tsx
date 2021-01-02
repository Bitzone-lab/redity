import ReactDOM from 'react-dom'

export function displayDOM() {
    let container: HTMLDivElement | null = null
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        if (container) {
            document.body.removeChild(container)
        }
        container = null
    })

    return function (renderer: JSX.Element) {
        ReactDOM.render(renderer, container)
    }
}
