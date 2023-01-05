import { BiArrowToTop } from 'react-icons/bi'
import { useScrollToTop } from '~/hooks/useScrollToTop'

export default function ScrollToTop() {
  return (
    <button
      aria-label="scroll-top"
      onClick={() => useScrollToTop()}
      className="absolute bottom-0 right-0 bg-violet-600 p-2 rounded-full"
    >
      <BiArrowToTop className="w-7 h-7 md:w-7 md:h-7 fill-white" />
    </button>
  )
}
