const LoadingHelper = {
  setLoading(loadingContainer) {
    loadingContainer.classList.remove('loading');
    document.body.style.opacity = '0.85';
  },

  clearLoading(loadingContaier) {
    loadingContaier.classList.add('loading');
    document.body.style.opacity = '1';
  },
};

export default LoadingHelper;
