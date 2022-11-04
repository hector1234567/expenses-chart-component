const chart = document.querySelector('.chart');

fetch('data.json').then(res => res.json())
.then(data => {
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
})
.catch(e => alert('Error'));