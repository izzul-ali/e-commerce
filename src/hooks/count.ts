import { Dispatch, SetStateAction } from 'react'

const useCount = (setCount: Dispatch<SetStateAction<number>>, stok: number) => {
  const handleChange = (countInput: number) => {
    if (countInput >= stok) {
      setCount(stok)
      return
    }

    if (countInput < 1) {
      setCount(1)
      return
    }

    setCount(countInput)
  }

  const handleIncrementCount = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecrementCount = () => {
    setCount((prev) => prev - 1)
  }

  return {
    handleChange,
    handleIncrementCount,
    handleDecrementCount
  }
}

export default useCount
