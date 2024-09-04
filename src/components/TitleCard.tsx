import { Reorder, useMotionValue } from 'framer-motion'
import useAnimationCard from './hooks/useAnimationCard'

interface TitleCardInterface {
  title: string
}

const TitleCard = ({ title }: TitleCardInterface) => {
  const y = useMotionValue(0)
  const boxShadow = useAnimationCard(y)

  return (
    <Reorder.Item value={title} id={title} style={{ boxShadow, y }}>
      <div className='p bg-slate-800 rounded mb-3 min-h-36 shadow-md'>
        <div className='p-4'>
          <h3 className='text-lg font-bold mt-2 mb-4'>{title}</h3>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default TitleCard
