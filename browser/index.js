export const setLocation = (location) => {
    try {
        window.location.href = location;
    } catch (error) {
        console.error(error);
    }
};

export const refresh = () => {
    try {
        window.location.reload(true);
    } catch (error) {
        console.error(error);
    }
}

export const scrollTop = () => {
    try {
        window.scrollTo(0, 0);
    } catch (error) {
        console.error(error);
    }
};

export const goBack = () => {
    try {
        history.back();
    } catch (error) {
        console.error(error);
    }
}

export const getSelection = () => {
    try {
        return window.getSelection().toString();
    } catch (error) {
        console.error(error);
    }
}

export const getCurrentPath = () => {
    try {
        return window.location.pathname;
    } catch (error) {
        console.error(error);
    }
}

export const useTabIndex = () => {
    try {
        document.addEventListener("keydown", (event) => {
            if (event.key === 13) document.activeElement.click();
        });
    } catch (error) {
        console.error(error);
    }
}

export const getPrefferedTheme = () => {
    try {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch (error) {
        console.error(error);
    }
}

export const getOffset = (element) => {
    try {
        const box = element.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset - document.documentElement.clientTop,
            left: box.left + window.pageXOffset - document.documentElement.clientLeft
        };
    } catch (error) {
        console.error(error);
    }
}

export const doesExist = (element) => {
    try {
        if (typeof (element) !== 'undefined' && element != null) return true;
        else return false;
    } catch (error) {
        console.error(error);
    }
}

export const fadeOut = (element, ms) => {
    try {
        if (!ms) return;
        element.style.transition = `opacity ${ms} ms`;
        element.addEventListener('transitionend', () => element.style.display = 'none', false);
        element.style.opacity = '0';
    } catch (error) {
        console.error(error);
    }
}

export const fadeIn = (element, ms) => {
    try {
        element.style.opacity = 0;
        if (!ms) {
            element.style.opacity = 1;
            return;
        }
        let opacity = 0;
        const timer = setInterval(() => {
            opacity += 50 / ms;
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 1;
            }
            element.style.opacity = opacity;
        }, 50);
    } catch (error) {
        console.error(error);
    }
}

