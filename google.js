<script>
const analyzeBtn = document.querySelector('.btn-analyze');

analyzeBtn.addEventListener('click', async function () {
    // Get the text input from your textarea
    const text = document.querySelector('#text-input textarea').value;

    // Call your backend API
    const response = await fetch("https://deepfake-api-xxxx-uc.a.run.app/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: text })
    });

    // Parse the prediction result
    const result = await response.json();

    // Show result in your frontend
    const resultsSection = document.querySelector('.results-section');
    resultsSection.style.display = 'block';
    resultsSection.innerHTML = `
        <h3>Prediction:</h3>
        <p><strong>${result.prediction}</strong></p>
    `;
});
</script>
