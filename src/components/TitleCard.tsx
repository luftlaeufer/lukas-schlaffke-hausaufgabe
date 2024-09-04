import { Reorder } from 'framer-motion'
import { useState } from 'react'

interface TitleCardInterface {
  title: string
}

const TitleCard = ({ title }: TitleCardInterface) => {
  const [isMoving, setIsMoving] = useState(false)

  return (
    <Reorder.Item value={title} id={title}>
      <div>
        <div
          onMouseDownCapture={() => setIsMoving(true)}
          onMouseUp={() => setIsMoving(false)}
          className={`relative bg-slate-800 rounded mb-3 min-h-16 p-4 pr-20 flex sm:justify-center items-center hover:bg-slate-700 ${
            isMoving ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          <h3 className='text-lg font-bold'>{title}</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-6 absolute right-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default TitleCard
