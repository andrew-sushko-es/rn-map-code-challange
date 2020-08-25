import { showMessage } from "react-native-flash-message";

export const MESSAGE_TYPES = {
    ERROR: 'error'
}

const getColorsByType = (type, theme) => {
    const colorsByType = {
        [MESSAGE_TYPES.ERROR]: {
            backgroundColor: theme.colors.error,
            color: theme.colors.primaryText
        },
        default: {}
    }
    return colorsByType[type] || colorsByType.default
}

export const showFlashMessage = (message, type, theme) => {
    showMessage({
        message,
        type,
        ...getColorsByType(type, theme)
    })
}