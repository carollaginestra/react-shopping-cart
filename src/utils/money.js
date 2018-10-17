const defaultFormatCurrenctOptions = {
    style: 'currency',
    currency: 'BRL',
};

export const formatCurrency = (
    number = 0,
    locale = 'pt-BR',
    options = defaultFormatCurrenctOptions,
) => {
    return Intl.NumberFormat(locale, options).format(number);
};
