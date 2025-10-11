import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './AdminAnalyticsPage.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminAnalyticsPage = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [timeRange, setTimeRange] = useState(30);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch('/api/analytics', { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    setAnalytics(data);
                } else {
                    navigate('/roadmap');
                }
            } catch (error) {
                console.error("Failed to fetch analytics data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, [navigate]);

    const prepareUserChartData = () => {
        const userGrowth = analytics?.userGrowth || [];
        const dailyActive = analytics?.dailyActiveUsers || [];

        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - timeRange);

        const newUsersMap = new Map(userGrowth.map(d => [d._id, d.count]));
        const activeUsersMap = new Map(dailyActive.map(d => [d._id, d.count]));
        
        const allDates = new Set([...userGrowth.map(d => d._id), ...dailyActive.map(d => d._id)]);
        
        const labels = Array.from(allDates)
            .map(dateStr => new Date(dateStr))
            .filter(date => date >= startDate && date <= endDate)
            .sort((a, b) => a - b)
            .map(date => date.toISOString().split('T')[0]);

        return {
            labels,
            datasets: [
                {
                    label: 'New Users',
                    data: labels.map(label => newUsersMap.get(label) || 0),
                    borderColor: '#3498db',
                    tension: 0.1,
                },
                {
                    label: 'Daily Active Users',
                    data: labels.map(label => activeUsersMap.get(label) || 0),
                    borderColor: '#2ecc71',
                    tension: 0.1,
                },
            ],
        };
    };

    if (loading) {
        return <div className="loading-container">Loading Analytics...</div>;
    }
    
    if (!analytics) {
         return <div className="loading-container">Could not load analytics data. Please try again.</div>;
    }
    
    const userChartData = prepareUserChartData();

    const integerChartOptions = {
        responsive: true,
        plugins: { legend: { labels: { color: '#e0e0e0' } } },
        scales: {
            x: { ticks: { color: '#e0e0e0' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
            y: {
                beginAtZero: true,
                ticks: { color: '#e0e0e0', precision: 0 },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        }
    };
    
    const roadmapPopularityData = {
        labels: (analytics.roadmapPopularity || []).map(r => r.name),
        datasets: [{
            label: 'Total Views',
            data: (analytics.roadmapPopularity || []).map(r => r.viewCount),
            backgroundColor: 'rgba(142, 68, 173, 0.6)',
        }],
    };

    const clubPopularityData = {
         labels: (analytics.clubPopularity || []).map(c => c.name),
        datasets: [{
            label: 'Total Views',
            data: (analytics.clubPopularity || []).map(c => c.viewCount),
            backgroundColor: 'rgba(231, 76, 60, 0.6)',
        }],
    };

    // --- NEW: Helper function to check if chart has data ---
    const hasData = (chartData) => chartData && chartData.labels && chartData.labels.length > 0;

    return (
        <div className="analytics-container">
            <Link to="/admin" className="back-link">← Back to Admin Panel</Link>
            <h1>Analytics Dashboard</h1>

            <div className="stats-overview">
                <div className="stat-card">
                    <h2>Total Users</h2>
                    <p>{analytics.totalUsers || 0}</p>
                </div>
            </div>

            <div className="chart-grid">
                <div className="chart-card">
                    <h3>User Activity</h3>
                    <div className="slider-container">
                        <label htmlFor="timeRange">Time Range: Last {timeRange} days</label>
                        <input type="range" id="timeRange" min="7" max="365" value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="time-slider" />
                    </div>
                    {hasData(userChartData) ? (
                        <Line options={integerChartOptions} data={userChartData} />
                    ) : (
                        <div className="no-data-message">No user activity data for this time range.</div>
                    )}
                </div>
                <div className="chart-card">
                    <h3>Roadmap Popularity</h3>
                     {hasData(roadmapPopularityData) ? (
                        <Bar options={integerChartOptions} data={roadmapPopularityData} />
                     ) : (
                        <div className="no-data-message">No roadmap view data available yet.</div>
                     )}
                </div>
                 <div className="chart-card">
                    <h3>Club Popularity</h3>
                     {hasData(clubPopularityData) ? (
                        <Bar options={integerChartOptions} data={clubPopularityData} />
                     ) : (
                        <div className="no-data-message">No club view data available yet.</div>
                     )}
                </div>
            </div>
        </div>
    );
};

export default AdminAnalyticsPage;

