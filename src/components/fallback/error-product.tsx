import { BiErrorCircle } from 'react-icons/bi'

export default function ErrorProduct() {
  return (
    <div className="h-56 w-full col-span-3 bg-white flex flex-col items-center justify-center text-red-500 rounded gap-y-1">
      <span>
        <BiErrorCircle className="w-7 h-fit" />
      </span>
      <p className="text-base text-center">Gagal memuat daftar produk</p>
    </div>
  )
}
