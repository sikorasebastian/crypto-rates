const apiUrl = 'https://api.coingecko.com/api/v3/coins/';

export async function fetchCryptoData(crypto, currency, startDate, endDate) {
    const url = `${apiUrl}${crypto}/market_chart/range?vs_currency=${currency}&from=${startDate}&to=${endDate}`;
    console.log(`Fetching data from: ${url}`);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
