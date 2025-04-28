document.addEventListener('DOMContentLoaded', function() {
  const shareButton = document.querySelector('.article-preview__share-button');
  const sharePopup = document.querySelector('.article-preview__share-popup');
  
  shareButton.addEventListener('click', function() {
    // Toggle active class on button and popup
    shareButton.classList.toggle('active');
    sharePopup.classList.toggle('active');
    
    // Update ARIA attributes for accessibility
    const isExpanded = shareButton.classList.contains('active');
    shareButton.setAttribute('aria-expanded', isExpanded);
    sharePopup.setAttribute('aria-hidden', !isExpanded);
  });
  
  // Close popup when clicking outside
  document.addEventListener('click', function(event) {
    if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
      shareButton.classList.remove('active');
      sharePopup.classList.remove('active');
      shareButton.setAttribute('aria-expanded', 'false');
      sharePopup.setAttribute('aria-hidden', 'true');
    }
  });
});