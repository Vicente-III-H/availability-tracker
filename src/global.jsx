export const clampNumber = (number, min, max) => {
    if (number < min) { number = min }
    if (number > max) { number = max }
    return number;
};

export const weekdayAbbreviation = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export function createStateObject(state, setState) {
    return {
        current: state,
        set: setState
    }
};

export const faceNames = [
    "default",
    "surprised",
    "relaxed",
    "confident",
    "happy"
];

export const FaceEnum = Object.freeze((() => {
    const names = [
        "Default",
        "Surprised",
        "Relaxed",
        "Confident",
        "Happy",
        "Strange",
        "SideEyeing"
    ]

    const enums = {};
    for (let i = 0; i < names.length; i++) {
        enums[names[i]] = i;
    }

    const next = (faceEnum = 0) => {
        if (faceEnum >= names.length - 1) {
            return 0;
        }
        return faceEnum + 1;
    };

    return {
        ...enums,
        next
    };
})());

export function FaceIcon({ faceEnum, size }) {
    switch (faceEnum) {
        case FaceEnum.Default:
            return (
                <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.55912 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <ellipse cx="151.376" cy="196.961" rx="20.5" ry="20" transform="rotate(-9 151.376 196.961)" fill="black"/>
                    <circle cx="251.882" cy="185.882" r="20" transform="rotate(-9 251.882 185.882)" fill="black"/>
                    <path d="M150.493 265.95C150.493 265.95 176.161 276.95 204.993 274.95C232.595 273.035 251.994 256.45 251.994 256.45" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                </svg>
            )
        case FaceEnum.Surprised:
            return (
                <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.55913 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <ellipse cx="151.376" cy="191.961" rx="20.5" ry="20" transform="rotate(-9 151.376 191.961)" fill="black"/>
                    <circle cx="251.882" cy="180.882" r="20" transform="rotate(-9 251.882 180.882)" fill="black"/>
                    <path d="M209.5 234C224.3 234 236 245.804 236 260C236 274.196 224.3 286 209.5 286C194.7 286 183 274.196 183 260C183 245.804 194.7 234 209.5 234Z" stroke="black" strokeWidth="28"/>
                </svg>
            )
        case FaceEnum.Relaxed:
            return (
                <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.5591 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M149 200L113 211" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M257 197L292 202" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M188 231.5C188 231.5 199.001 251.043 211.5 248C222.49 245.324 227 229 227 229" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                </svg>
            )
        case FaceEnum.Confident:
            return (
                <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.5591 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <ellipse cx="149.376" cy="211.961" rx="20.5" ry="20" transform="rotate(-9 149.376 211.961)" fill="black"/>
                    <circle cx="258.882" cy="204.882" r="20" transform="rotate(-9 258.882 204.882)" fill="black"/>
                    <path d="M130 177L163 182" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M246 176.5L275.5 169" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M154 271C154 271 163.5 286 201 286C238.5 286 255.5 275.5 255.5 275.5" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                </svg>
            )
        case FaceEnum.Happy:
            return (
                <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.5591 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M117.073 200.307C117.073 200.307 118.574 174.715 140.463 172.027C162.352 169.339 168.189 194.03 168.189 194.03" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M243.759 188.749C243.759 188.749 246.597 163.271 268.597 161.733C290.597 160.194 295.134 185.157 295.134 185.157" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M248.427 238L168.012 243.723C168.012 243.723 165.966 308.142 215.906 302.67C260.844 297.746 248.427 238 248.427 238Z" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case FaceEnum.Strange:
            return (
                <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.5591 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M83 202.5C83 202.5 97.822 181 129.5 181C161.178 181 172 202.5 172 202.5" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                    <ellipse cx="25.4445" cy="23.3481" rx="25.4445" ry="23.3481" transform="matrix(0.989153 -0.146887 0.166569 0.98603 99 193.975)" fill="black"/>
                    <path d="M234 203C234 203 248.822 181.5 280.5 181.5C312.178 181.5 323 203 323 203" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                    <ellipse cx="25.4445" cy="23.3481" rx="25.4445" ry="23.3481" transform="matrix(0.989153 -0.146887 0.166569 0.98603 250 194.475)" fill="black"/>
                    <path d="M148 273.5C148 273.5 169.5 285 200.5 285C231.5 285 253 273.5 253 273.5" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case FaceEnum.SideEyeing:
            return (
                <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.5591 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M83 202.5C83 202.5 97.822 181 129.5 181C161.178 181 172 202.5 172 202.5" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                    <ellipse cx="25.4445" cy="23.3481" rx="25.4445" ry="23.3481" transform="matrix(0.989153 -0.146887 0.166569 0.98603 87 192.475)" fill="black"/>
                    <path d="M234 202.5C234 202.5 248.822 181 280.5 181C312.178 181 323 202.5 323 202.5" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                    <ellipse cx="25.4445" cy="23.3481" rx="25.4445" ry="23.3481" transform="matrix(0.989153 -0.146887 0.166569 0.98603 238 192.475)" fill="black"/>
                    <path d="M148 273.5C148 273.5 169.5 285 200.5 285C231.5 285 253 273.5 253 273.5" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        default:
            return <></>
    }
}