export const scrollIntoView = ({currentTarget}) => {
    const scrollToElement = document.querySelector(
        currentTarget.getAttribute('href')
    );

    if (!scrollToElement) return;

    scrollToElement.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
}

export const fadeOutOverlay = ({currentTarget}) => {
    currentTarget.style.display = "none";
    // currentTarget.style.opacity = 0;
    // currentTarget.style.height = 0;
    currentTarget.style.overflow = "hidden";
}