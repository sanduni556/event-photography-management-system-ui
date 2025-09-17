// Dashboard JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle switches functionality
    const toggleSwitches = document.querySelectorAll('.toggle-input');
    
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const row = this.closest('.review-row');
            const reviewerName = row.querySelector('.reviewer-name').textContent;
            
            if (this.checked) {
                console.log(`Review by ${reviewerName} is now public`);
                // Here you would typically make an API call to update the status
            } else {
                console.log(`Review by ${reviewerName} is now private`);
                // Here you would typically make an API call to update the status
            }
        });
    });
    
    // View button functionality
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('.review-row');
            const reviewerName = row.querySelector('.reviewer-name').textContent;
            const reviewText = row.querySelector('.review-text').textContent;
            
            // Here you would typically open a modal or navigate to a detailed view
            alert(`Viewing review by ${reviewerName}:\n\n"${reviewText}"`);
        });
    });
    
    // Mobile sidebar toggle (for future mobile implementation)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 991.98) {
                if (!sidebar.contains(event.target) && !mobileToggle.contains(event.target)) {
                    sidebar.classList.remove('show');
                }
            }
        });
    }
    
    // Notification button functionality
    const notificationBtn = document.querySelector('.notification-btn');
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            // Here you would typically show a notifications dropdown
            console.log('Notifications clicked');
        });
    }
    
    // Initialize tooltips if needed (Bootstrap 5)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Function to update review status (placeholder for API integration)
function updateReviewStatus(reviewId, isPublic) {
    // This would typically make an AJAX call to your backend
    console.log(`Updating review ${reviewId} to ${isPublic ? 'public' : 'private'}`);
    
    // Example API call structure:
    /*
    fetch(`/api/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            isPublic: isPublic
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Review status updated:', data);
    })
    .catch(error => {
        console.error('Error updating review status:', error);
    });
    */
}

// Function to view review details (placeholder)
function viewReviewDetails(reviewId) {
    // This would typically fetch full review details and show in a modal
    console.log(`Viewing details for review ${reviewId}`);
    
    // Example implementation:
    /*
    fetch(`/api/reviews/${reviewId}`)
    .then(response => response.json())
    .then(data => {
        // Show review details in a modal
        showReviewModal(data);
    })
    .catch(error => {
        console.error('Error fetching review details:', error);
    });
    */
}