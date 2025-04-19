document.addEventListener('DOMContentLoaded', function() {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Keyword-based categories
    const categories = {
        groceries: ["grocery", "supermarket", "food"],
        utilities: ["utility", "electricity", "water", "internet"],
        rent: ["rent"],
        dining: ["restaurant", "dining", "cafe"],
        entertainment: ["movie", "entertainment", "concert"],
        travel: ["travel", "flight", "hotel"]
    };

    const categorizedTransactions = storedTransactions.map(transaction => {
        for (let category in categories) {
            if (categories[category].some(keyword => transaction.text.toLowerCase().includes(keyword))) {
                return { ...transaction, category: category.charAt(0).toUpperCase() + category.slice(1) };
            }
        }
        return { ...transaction, category: "Other" };
    });

    const categoryList = document.getElementById('categorized-transactions');
    categorizedTransactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.text}: $${transaction.amount} - Category: ${transaction.category}`;
        categoryList.appendChild(li);
    });

    // Aggregate data for chart
    const spendingByCategory = categorizedTransactions.reduce((acc, transaction) => {
        acc[transaction.category] = (acc[transaction.category] || 0) + Math.abs(transaction.amount);
        return acc;
    }, {});

    const categoryLabels = Object.keys(spendingByCategory);
    const categoryAmounts = Object.values(spendingByCategory);

    // Display Spending Breakdown Chart
    const ctx = document.getElementById('categoryBreakdownChart').getContext('2d');
    const categoryBreakdownChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categoryLabels,
            datasets: [{
                data: categoryAmounts,
                backgroundColor: categoryLabels.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`),
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
                        }
                    }
                }
            }
        }
    });
});
