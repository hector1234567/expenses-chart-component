const data = JSON.parse(JSON.stringify([
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]));

const chart = document.querySelector('.chart');

const maxAmount = data.reduce((acc, elem) => elem.amount > acc ? elem.amount : acc, 0);

data.forEach((elem) => {
    const height = elem.amount * 16.5 / maxAmount;
    chart.insertAdjacentHTML('beforeend', `
    <div class="day${elem.amount === maxAmount ? ' max' : ''}">
      <div class="day__label">$${elem.amount}</div>
      <div class="day__bar" style="height: ${height}rem;"></div>
      <div class="day__name">${elem.day}</div>
    </div>
    `)
}); 