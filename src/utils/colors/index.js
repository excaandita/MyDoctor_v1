const mainColor = {
    green1: '#0BCAD4',
    dark1: '#112340',
    grey1: '#7D8797',

}

export const colors = {
    primary: mainColor.green1,
    secondary: mainColor.dark1,
    white: 'white',
    black: 'black',
    text: {
        default: mainColor.dark1,
        secondary: mainColor.grey1
    },
    button: {
        primary: {
            background: colors.primary,
            text: colors.white
        },
        secondary: {
            background: colors.white,
            text: colors.black
        }
    }
};