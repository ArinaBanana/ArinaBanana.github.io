const getDir = (deg) => {
    let remainder = deg % 360;

    if (Math.sign(remainder) === -1) {
        remainder += 360;
    }

    if (remainder === 0) {
        return `S`;
    } else if (remainder === 90) {
        return `W`;
    } else if (remainder === 180) {
        return `N`;
    } else if (remainder === 270) {
        return `E`;
    }
}
