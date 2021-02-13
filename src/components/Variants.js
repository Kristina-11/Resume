export const containerVariants = {
    hidden: {
        x: '-200vw',
        opacity: 0
    },
    visible: {
        x: '0',
        opacity: 1,
        transition: {
            duration: 1,
            type: 'spring',
            bounce: 0.2,
            when: 'beforeChildren'
        }
    },
    exit: {
        x: '-200vw',
        transition: {
            duration: 1
        }
    }
}

export const NameVariants = {
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: {
            duration: 1.5
        }
    },
    hidden: { opacity: 0, x: -500 },
}

export const PositionVariants = {
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 1.5
        }
    },
    hidden: { opacity: 0, x: 1000 },
}
