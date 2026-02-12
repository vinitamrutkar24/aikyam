// Tracking Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const trackingForm = document.getElementById('trackingForm');
    const trackingResult = document.getElementById('trackingResult');

    if (trackingForm) {
        trackingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const trackingNumber = document.getElementById('trackingNumber').value.trim();

            if (trackingNumber) {
                // Show loading state
                const submitBtn = trackingForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
                submitBtn.disabled = true;

                // Simulate API call (replace with actual API integration)
                setTimeout(() => {
                    displayTrackingResult(trackingNumber);
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;

                    // Scroll to result
                    trackingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 1500);
            }
        });
    }
});

function displayTrackingResult(trackingNumber) {
    const resultDiv = document.getElementById('trackingResult');

    // Demo data - replace with actual API response
    const demoData = {
        trackingNumber: trackingNumber,
        status: 'In Transit',
        origin: 'Shanghai, China',
        destination: 'Navi Mumbai, India',
        eta: 'January 25, 2026',
        timeline: [
            { date: '2026-01-10', location: 'Shanghai Port', event: 'Container loaded on vessel', status: 'completed' },
            { date: '2026-01-12', location: 'At Sea', event: 'Departed Shanghai', status: 'completed' },
            { date: '2026-01-17', location: 'At Sea', event: 'In transit to destination', status: 'current' },
            { date: '2026-01-23', location: 'JNPT Port', event: 'Expected arrival at port', status: 'pending' },
            { date: '2026-01-25', location: 'Navi Mumbai', event: 'Estimated delivery', status: 'pending' }
        ]
    };

    // Update result fields
    document.getElementById('resultTrackingNumber').textContent = demoData.trackingNumber;
    document.getElementById('resultStatus').textContent = demoData.status;
    document.getElementById('resultOrigin').textContent = demoData.origin;
    document.getElementById('resultDestination').textContent = demoData.destination;
    document.getElementById('resultETA').textContent = demoData.eta;

    // Build timeline
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    demoData.timeline.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${item.status}`;
        timelineItem.innerHTML = `
            <div class="timeline-marker">
                <i class="fas ${item.status === 'completed' ? 'fa-check-circle' : item.status === 'current' ? 'fa-circle' : 'fa-circle-notch'}"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-location">${item.location}</div>
                <div class="timeline-event">${item.event}</div>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });

    // Show result
    resultDiv.style.display = 'block';
}
