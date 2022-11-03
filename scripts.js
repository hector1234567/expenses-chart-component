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

const today = new Date().getDay() - 1;
const maxAmount = data.reduce((acc, elem) => elem.amount > acc ? elem.amount : acc, 0);

data.forEach((elem, index) => {
    const height = elem.amount * 165 / maxAmount;
    chart.insertAdjacentHTML('beforeend', `
    <div class="day${index === today ? ' today' : ''}">
      <div class="day__label">$${elem.amount}</div>
      <div class="day__bar" style="height: ${height}px;"></div>
      <div class="day__name">${elem.day}</div>
    </div>
    `)
}); 