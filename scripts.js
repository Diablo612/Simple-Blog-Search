//fake data
const mockResults = [
    { title: "Tech Trends 2024", category: "technology", content: "Discover the latest in tech innovations." },
    { title: "Healthy Living", category: "lifestyle", content: "Tips for maintaining a balanced life." },
    { title: "Learn Python Fast", category: "education", content: "An easy guide to mastering Python." },
    { title: "The Future of AI", category: "technology", content: "How AI is shaping our future." },
    { title: "Work-Life Balance", category: "lifestyle", content: "Achieve harmony in your personal and professional life." },
    { title: "Exploring Quantum Computing", category: "technology", content: "Understand the basics of quantum computing." },
    { title: "Mindfulness Meditation", category: "lifestyle", content: "Benefits of staying present and mindful." },
    { title: "Top 10 Coding Practices", category: "education", content: "Tips to write clean and efficient code." },
    { title: "Blockchain Beyond Bitcoin", category: "technology", content: "Exploring other applications of blockchain technology." },
    { title: "Sustainable Living Tips", category: "lifestyle", content: "Simple steps for an eco-friendly lifestyle." },
    { title: "AI in Everyday Life", category: "technology", content: "How AI is improving daily tasks and decisions." },
    { title: "Productivity Hacks", category: "lifestyle", content: "Get more done in less time with these tips." },
    { title: "The Basics of Data Structures", category: "education", content: "Learn the foundations of data organization." },
    { title: "The Rise of Electric Vehicles", category: "technology", content: "How EVs are transforming transportation." },
    { title: "Home Fitness Routines", category: "lifestyle", content: "Stay fit without leaving your house." },
    { title: "The Importance of Cybersecurity", category: "technology", content: "Protect your data and privacy online." },
    { title: "Healthy Meal Planning", category: "lifestyle", content: "Plan meals that are nutritious and easy to make." },
    { title: "Web Development 101", category: "education", content: "A beginner's guide to building websites." },
    { title: "The Power of 5G Networks", category: "technology", content: "What 5G means for the future of connectivity." },
    { title: "Creative DIY Projects", category: "lifestyle", content: "Fun and simple projects to try at home." },
];

//DOM elements
const searchBox = document.getElementById('searchBox');
const filter = document.getElementById('filter');
const searchButton = document.getElementById('searchButton');
const resultsSection = document.getElementById('results');

//Display all elements
document.addEventListener('DOMContentLoaded', () => {
    displayResults(mockResults);
});

//Search logic
searchButton.addEventListener('click', () => {
    const query = searchBox.value.toLowerCase();
    const selectedCategory = filter.value;

    const filteredResults = mockResults.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesQuery && matchesCategory;
    });

    displayResults(filteredResults);
});


// Function to display results
function displayResults(results) {
    resultsSection.innerHTML = '';
    if (results.length === 0) {
        resultsSection.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <h3>${result.title}</h3>
            <p><strong>Category:</strong> ${result.category}</p>
            <p>${result.content}</p>
        `;
        resultsSection.appendChild(resultItem);
    });
    
}
