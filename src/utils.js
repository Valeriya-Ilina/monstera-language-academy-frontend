// copied from https://medium.com/@gatilin222/controlling-body-styles-in-react-applications-ddfa4ac65d81
export function applyBackgroundImage() {
    document.body.classList.add('background-image');
}

export function clearBackgroundImage() {
    document.body.classList.remove('background-image');
}
