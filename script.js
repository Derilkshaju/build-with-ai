const imageInput = document.getElementById('imageInput');
const uploadBtn = document.getElementById('uploadBtn');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const loadingSection = document.getElementById('loading');
const resultsSection = document.getElementById('results');

const wasteTypeSpan = document.getElementById('wasteType');
const wasteImpactSpan = document.getElementById('wasteImpact');
const wasteDisposalSpan = document.getElementById('wasteDisposal');
const resetBtn = document.getElementById('resetBtn');

const wasteData = [
    {
        type: 'Plastic',
        impact: 'Can take up to 500 years to decompose, breaking down into microplastics that harm wildlife.',
        disposal: 'Rinse if necessary and place in the blue recycling bin. Do not bag recyclables.'
    },
    {
        type: 'Paper',
        impact: 'Decomposes in 2-6 weeks. Recycling paper saves trees and reduces water usage by 60%.',
        disposal: 'Keep dry and place in the blue recycling bin. Shredded paper should be composted.'
    },
    {
        type: 'Organic',
        impact: 'When sent to landfills, produces methane gas (a potent greenhouse gas).',
        disposal: 'Place in the green compost bin. Can be used to create nutrient-rich soil.'
    },
    {
        type: 'Metal',
        impact: 'Highly durable but extremely energy-intensive to mine and produce from raw ore.',
        disposal: 'Rinse out food residue and place in the blue recycling bin. Most metal is infinitely recyclable.'
    },
    {
        type: 'E-waste',
        impact: 'Contains toxic heavy metals (lead, mercury) that can leak into groundwater if landfilled.',
        disposal: 'Do NOT throw in trash. Take to a specialized e-waste collection center or drop-off event.'
    }
];

uploadBtn.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Show preview
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            imagePreview.classList.remove('hidden');
            uploadBtn.classList.add('hidden');
            
            // Start "Scanning"
            startScan();
        };
        reader.readAsDataURL(file);
    }
});

function startScan() {
    loadingSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    
    // Simulate API delay
    setTimeout(() => {
        const randomResult = wasteData[Math.floor(Math.random() * wasteData.length)];
        
        wasteTypeSpan.textContent = randomResult.type;
        wasteImpactSpan.textContent = randomResult.impact;
        wasteDisposalSpan.textContent = randomResult.disposal;
        
        loadingSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        
    }, 2000);
}

resetBtn.addEventListener('click', () => {
    imageInput.value = '';
    previewImg.src = '';
    imagePreview.classList.add('hidden');
    resultsSection.classList.add('hidden');
    uploadBtn.classList.remove('hidden');
});
