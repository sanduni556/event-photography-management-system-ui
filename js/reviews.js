// Reviews Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const reviewForm = document.getElementById('reviewForm');
    const ratingSelect = document.getElementById('ratingSelect');
    const reviewTextarea = document.getElementById('reviewText');
    
    // Action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    
    // Initialize page
    initializeReviewsPage();
    
    function initializeReviewsPage() {
        // Set up form submission
        if (reviewForm) {
            reviewForm.addEventListener('submit', handleReviewSubmission);
        }
        
        // Set up rating selection
        if (ratingSelect) {
            ratingSelect.addEventListener('change', handleRatingChange);
        }
        
        // Set up action buttons (like/dislike)
        actionButtons.forEach(button => {
            button.addEventListener('click', handleActionButtonClick);
        });
        
        // Navigation buttons
        setupNavigationButtons();
    }
    
    function handleReviewSubmission(event) {
        event.preventDefault();
        
        const rating = ratingSelect.value;
        const reviewText = reviewTextarea.value.trim();
        
        // Validation
        if (!rating) {
            showNotification('Please select a rating', 'error');
            ratingSelect.focus();
            return;
        }
        
        if (!reviewText) {
            showNotification('Please write a review', 'error');
            reviewTextarea.focus();
            return;
        }
        
        if (reviewText.length < 10) {
            showNotification('Review must be at least 10 characters long', 'error');
            reviewTextarea.focus();
            return;
        }
        
        // Submit review (placeholder for API integration)
        submitReview({
            rating: parseInt(rating),
            review: reviewText,
            timestamp: new Date().toISOString()
        });
    }
    
    function submitReview(reviewData) {
        // Show loading state
        const submitBtn = document.querySelector('.submit-review-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset form
            reviewForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showNotification('Thank you for your review! It will be published after approval.', 'success');
            
            // Optionally add the review to the page immediately
            // addReviewToList(reviewData);
            
        }, 1500);
        
        // In a real application, you would make an API call here:
        /*
        fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getAuthToken()
            },
            body: JSON.stringify(reviewData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            reviewForm.reset();
            showNotification('Review submitted successfully!', 'success');
        })
        .catch(error => {
            // Handle error
            showNotification('Error submitting review. Please try again.', 'error');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
        */
    }
    
    function handleRatingChange(event) {
        const rating = event.target.value;
        console.log('Rating selected:', rating);
        
        // You could add visual feedback here
        // For example, change the border color of the select
        if (rating) {
            ratingSelect.style.borderColor = 'var(--interactive-success-green)';
        }
    }
    
    function handleActionButtonClick(event) {
        event.preventDefault();
        const button = event.currentTarget;
        const action = button.dataset.action;
        const countSpan = button.querySelector('.action-count');
        const currentCount = parseInt(countSpan.textContent);
        
        // Toggle active state
        const isActive = button.classList.contains('active');
        
        if (isActive) {
            // Remove active state
            button.classList.remove('active');
            countSpan.textContent = currentCount - 1;
        } else {
            // Add active state
            button.classList.add('active');
            countSpan.textContent = currentCount + 1;
            
            // If this is a like/dislike, remove the opposite state
            const reviewItem = button.closest('.review-item');
            const oppositeAction = action === 'like' ? 'dislike' : 'like';
            const oppositeButton = reviewItem.querySelector(`[data-action="${oppositeAction}"]`);
            
            if (oppositeButton && oppositeButton.classList.contains('active')) {
                oppositeButton.classList.remove('active');
                const oppositeCount = oppositeButton.querySelector('.action-count');
                oppositeCount.textContent = parseInt(oppositeCount.textContent) - 1;
            }
        }
        
        // In a real application, you would make an API call here:
        /*
        const reviewId = getReviewId(button);
        updateReviewAction(reviewId, action, !isActive);
        */
        
        console.log(`${action} button clicked, new count: ${countSpan.textContent}`);
    }
    
    function setupNavigationButtons() {
        // My Bookings
        const myBookingsLink = document.getElementById('myBookingsLink');
        if (myBookingsLink) {
            myBookingsLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Navigate to My Bookings');
                // window.location.href = 'my-bookings.html';
            });
        }
        
        // My Albums
        const myAlbumsLink = document.getElementById('myAlbumsLink');
        if (myAlbumsLink) {
            myAlbumsLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Navigate to My Albums');
                // window.location.href = 'my-albums.html';
            });
        }
        
        // Book Event
        const bookEventBtn = document.getElementById('bookEventBtn');
        if (bookEventBtn) {
            bookEventBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Navigate to Book Event');
                // window.location.href = 'book-event.html';
            });
        }
        
        // Logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    console.log('User logout');
                    // Perform logout logic
                    // window.location.href = 'index.html';
                }
            });
        }
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show position-fixed`;
        notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Utility function to add a new review to the list (for immediate feedback)
    function addReviewToList(reviewData) {
        const reviewsList = document.querySelector('.reviews-list');
        const newReviewHTML = createReviewHTML(reviewData);
        
        // Add to the beginning of the list
        reviewsList.insertAdjacentHTML('afterbegin', newReviewHTML);
        
        // Add event listeners to the new review's action buttons
        const newReview = reviewsList.firstElementChild;
        const newActionButtons = newReview.querySelectorAll('.action-btn');
        newActionButtons.forEach(button => {
            button.addEventListener('click', handleActionButtonClick);
        });
    }
    
    function createReviewHTML(reviewData) {
        const stars = generateStarsHTML(reviewData.rating);
        const date = new Date(reviewData.timestamp).toLocaleDateString();
        
        return `
            <div class="review-item">
                <div class="review-header">
                    <div class="reviewer-info">
                        <img src="img/default-avatar.jpg" alt="You" class="reviewer-avatar">
                        <div class="reviewer-details">
                            <h5 class="reviewer-name">You</h5>
                            <span class="review-date">${date}</span>
                        </div>
                    </div>
                </div>
                
                <div class="review-rating">
                    <div class="stars">${stars}</div>
                </div>
                
                <p class="review-content">${reviewData.review}</p>
                
                <div class="review-actions">
                    <button class="action-btn like-btn" data-action="like">
                        <i class="far fa-thumbs-up"></i>
                        <span class="action-count">0</span>
                    </button>
                    <button class="action-btn dislike-btn" data-action="dislike">
                        <i class="far fa-thumbs-down"></i>
                        <span class="action-count">0</span>
                    </button>
                </div>
            </div>
        `;
    }
    
    function generateStarsHTML(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '<i class="fas fa-star star-filled"></i>';
            } else {
                starsHTML += '<i class="far fa-star star-empty"></i>';
            }
        }
        return starsHTML;
    }
});

// Additional utility functions for API integration
function getAuthToken() {
    // Get authentication token from localStorage or sessionStorage
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
}

function getReviewId(buttonElement) {
    // Extract review ID from the review item
    const reviewItem = buttonElement.closest('.review-item');
    return reviewItem.dataset.reviewId || null;
}

function updateReviewAction(reviewId, action, isActive) {
    // Make API call to update review like/dislike
    /*
    fetch(`/api/reviews/${reviewId}/actions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAuthToken()
        },
        body: JSON.stringify({
            action: action,
            active: isActive
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Action updated:', data);
    })
    .catch(error => {
        console.error('Error updating action:', error);
    });
    */
}