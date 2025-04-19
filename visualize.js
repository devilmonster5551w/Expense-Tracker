// Sample data for visualization
const sampleData = {
    expenses: {
        week: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [150, 200, 180, 250, 300, 400, 350]
        },
        month: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            data: [1200, 1500, 1800, 2000]
        },
        year: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [5000, 6000, 5500, 7000, 6500, 8000, 7500, 9000, 8500, 10000, 9500, 11000]
        }
    },
    categories: {
        labels: ['Food', 'Transport', 'Shopping', 'Entertainment', 'Bills', 'Others'],
        data: [30, 20, 15, 10, 15, 10]
    }
};

// Chart instances
let charts = {
    distribution: null,
    trends: null,
    comparison: null,
    breakdown: null
};

// Initialize charts
function initCharts() {
    // Distribution Chart (Pie/Doughnut)
    const distributionCtx = document.getElementById('distributionChart').getContext('2d');
    charts.distribution = new Chart(distributionCtx, {
        type: 'pie',
        data: {
            labels: sampleData.categories.labels,
            datasets: [{
                data: sampleData.categories.data,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Trends Chart (Line/Bar)
    const trendsCtx = document.getElementById('trendsChart').getContext('2d');
    charts.trends = new Chart(trendsCtx, {
        type: 'line',
        data: {
            labels: sampleData.expenses.week.labels,
            datasets: [{
                label: 'Expenses',
                data: sampleData.expenses.week.data,
                borderColor: '#4CAF50',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Comparison Chart (Bar/Line)
    const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
    charts.comparison = new Chart(comparisonCtx, {
        type: 'bar',
        data: {
            labels: sampleData.expenses.week.labels,
            datasets: [{
                label: 'Income',
                data: [200, 250, 300, 350, 400, 450, 500],
                backgroundColor: '#4CAF50'
            }, {
                label: 'Expenses',
                data: sampleData.expenses.week.data,
                backgroundColor: '#FF6384'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Breakdown Chart (Radar/Polar)
    const breakdownCtx = document.getElementById('breakdownChart').getContext('2d');
    charts.breakdown = new Chart(breakdownCtx, {
        type: 'radar',
        data: {
            labels: sampleData.categories.labels,
            datasets: [{
                label: 'Current Month',
                data: sampleData.categories.data,
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderColor: '#4CAF50'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Update charts based on time filter
function updateCharts(timeFrame) {
    const data = sampleData.expenses[timeFrame];
    
    // Update trends chart
    charts.trends.data.labels = data.labels;
    charts.trends.data.datasets[0].data = data.data;
    charts.trends.update();

    // Update comparison chart
    charts.comparison.data.labels = data.labels;
    charts.comparison.data.datasets[1].data = data.data;
    charts.comparison.update();
}

// Toggle chart types
function toggleChartType(chartId, newType) {
    const chart = charts[chartId];
    if (chart) {
        chart.config.type = newType;
        chart.update();
    }
}

// Update insights
function updateInsights(timeFrame) {
    const data = sampleData.expenses[timeFrame].data;
    const highest = Math.max(...data);
    const lowest = Math.min(...data);
    const total = data.reduce((a, b) => a + b, 0);
    const avg = total / data.length;
    
    document.getElementById('highestSpending').textContent = `$${highest}`;
    document.getElementById('lowestSpending').textContent = `$${lowest}`;
    document.getElementById('savingsRate').textContent = '25%';
    document.getElementById('trendComparison').textContent = '↑ 15%';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    
    // Time filter buttons
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateCharts(btn.dataset.timeframe);
            updateInsights(btn.dataset.timeframe);
        });
    });

    // Chart type toggle buttons
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const chartId = btn.dataset.chart;
            const newType = btn.dataset.type;
            document.querySelectorAll(`[data-chart="${chartId}"]`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            toggleChartType(chartId, newType);
        });
    });

    // Export and share buttons
    document.getElementById('exportBtn').addEventListener('click', () => {
        // Implement export functionality
        alert('Exporting data...');
    });

    document.getElementById('shareBtn').addEventListener('click', () => {
        // Implement share functionality
        alert('Sharing insights...');
    });
});
