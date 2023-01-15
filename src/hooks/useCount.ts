import { Dispatch, SetStateAction, useCallback } from 'react'

const useCount = (setCount: Dispatch<SetStateAction<number>>) => {
  const handleInputCount = useCallback((countInput: number, stok: number) => {
    if (countInput >= stok) {
      setCount(stok)
      return
    }

    setCount(countInput)
  }, [])

  const handleIncrementCount = () => {
    setCount((prev) => {
      if (Number.isNaN(prev)) {
        return (prev = 1)
      }
      return prev + 1
    })
  }

  const handleDecrementCount = () => {
    setCount((prev) => prev - 1)
  }

  const calculatePrice = (price: number, orderCount: number) => {
    const total = price * orderCount
    return total
  }

  return {
    handleInputCount,
    handleIncrementCount,
    handleDecrementCount,
    calculatePrice
  }
}

export default useCount
