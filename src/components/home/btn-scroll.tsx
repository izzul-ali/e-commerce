import { BiArrowToTop } from 'react-icons/bi'
import { useScrollToTop } from '~/hooks/useScrollToTop'

export default function ScrollToTop() {
  return (
    <button
      aria-label="scroll-top"
      onClick={() => useScrollToTop()}
      className="absolute bottom-5 right-4 bg-violet-600 p-1 rounded-full"
    >
      <BiArrowToTop className="w-6 h-6 md:w-7 md:h-7 fill-white" />
    </button>
  )
}
