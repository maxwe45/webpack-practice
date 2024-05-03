import _ from 'lodash';

function component () {
    const element = document.createElement('div');

    element.textContent = 'Cody';

    return element;
}

document.body.appendChild(component());