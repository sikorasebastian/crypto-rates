export function initializeDateInputs() {
    const today = new Date().toISOString().split('T')[0];
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const oneYearAgoDate = oneYearAgo.toISOString().split('T')[0];

    document.getElementById('startDate').setAttribute('max', today);
    document.getElementById('startDate').setAttribute('min', oneYearAgoDate);
    document.getElementById('endDate').setAttribute('max', today);
    document.getElementById('endDate').setAttribute('min', oneYearAgoDate);
}

export function updateEndDateMin() {
    const startDate = document.getElementById('startDate').value;
    document.getElementById('endDate').min = startDate;
}

export function updateStartDateMax() {
    const endDate = document.getElementById('endDate').value;
    document.getElementById('startDate').max = endDate;
}
