function component(children) {
    const element = document.createElement('div');

    element.innerHTML = `Server says: ${children}`

    return element;
}

document.body.appendChild(component(""))