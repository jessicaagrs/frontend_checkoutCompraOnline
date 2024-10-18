function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}

function maskForInputCard(value: string) {
    const newValue = value
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2");

    return newValue.slice(0, 19);
}

function maskForInputExpirationDate(value: string) {
    const newValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");

    return newValue.slice(0, 5);
}

function maskForInputCodeCvv(value: string) {
    const newValue = value.replace(/\D/g, "");

    return newValue.slice(0, 3);
}

export { formatCurrency, maskForInputCard, maskForInputCodeCvv, maskForInputExpirationDate };

