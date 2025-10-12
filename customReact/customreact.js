function customRander(rElement, container) {
    const domElement = document.createElement(rElement.type);
    domElement.innerHTML = rElement.children;
    domElement.setAttribute('href', rElement.props.href);
    domElement.setAttribute('target', rElement.props.target);

    container.appendChild(domElement);
}

const rElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Google Link'
};

const mainContainer = document.querySelector('#root');

customRander(rElement, mainContainer);