export const useScrollToTop = () => {
  if (window) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return
  }
}
