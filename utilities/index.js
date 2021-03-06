export const generateRandomColor = () => {
    try {
        return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    } catch (error) {
        console.error(error);
    }
}

export const shuffleArray = (array) => {
    try {
        array.sort(() => Math.random() - 0.5);
    } catch (error) {
        console.error(error);
    }
};

export const sleep = (ms) => {
    try {
        return new Promise((resolve) => setTimeout(resolve, ms))
    } catch (error) {
        console.error(error);
    }
};

export const validateName = (firstName, lastName) => {
    try {
        const rule = /[a-zA-Z]/g;
        if (rule.test(firstName) === false || rule.test(lastName) === false) return false;
        else return !!firstName && !!lastName;
    } catch (error) {
        console.error(error);
    }
};

export const generateRandomNumberInRange = (minimum, maximum) => {
    try {
        const randomNumberInRange = Math.floor(Math.random() * (maximum - minimum) + 1) + minimum;
        return randomNumberInRange;
    } catch (error) {
        console.error(error);
    }
}

export const reverseString = (string) => {
    try {
        return string.split("").reverse().join("");
    } catch (error) {
        console.error(error);
    }
}

export const getRandomElement = (array) => {
    try {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    } catch (error) {
        console.error(error);
    }
}

export const getTime = () => {
    try {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        if (seconds) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;

        const time = hours + " : " + minutes + ":" + seconds;
        return time;
    } catch (error) {
        console.error(error);
    }
}
