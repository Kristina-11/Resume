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
