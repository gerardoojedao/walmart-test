export const getFormattedPrice = (value) => {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0}).format(value)
};

export const getFormatterPercent = (value) => {
    return value.toLocaleString("es", {style: "percent"})
}
