import { initializeDateInputs, updateEndDateMin, updateStartDateMax } from './dateHandling.js';
import { fetchCryptoData } from './api.js';
import { displayChart } from './chart.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDateInputs();
    document.getElementById('startDate').addEventListener('change', updateEndDateMin);
    document.getElementById('endDate').addEventListener('change', updateStartDateMax);

    document.getElementById('fetchButton').addEventListener('click', async () => {
        const crypto = document.getElementById('cryptoSelect').value;
        const currency = document.getElementById('currencySelect').value
        const startDateInput = document.getElementById('startDate').value;
        const endDateInput = document.getElementById('endDate').value;

        if (!startDateInput || !endDateInput) {
            alert('Please select both start date and end date.');
            return;
        }

        const startDate = new Date(startDateInput).getTime() / 1000;
        const endDate = new Date(endDateInput).getTime() / 1000;

        if (startDate >= endDate) {
            alert('Start date must be earlier than end date.');
            return;
        }

        try {
            const data = await fetchCryptoData(crypto, currency, startDate, endDate);
            const dates = data.prices.map(price => new Date(price[0]));
            const prices = data.prices.map(price => price[1]);

            if (dates.length === 0 || prices.length === 0) {
                console.error('No data available for the selected range.');
                return;
            }

            displayChart(dates, prices, currency);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
