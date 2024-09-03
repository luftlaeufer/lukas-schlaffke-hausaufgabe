import { useEffect, useRef } from 'react'

interface DescriptionInterface {
  description: string | null | undefined
}

const Description = ({ description }: DescriptionInterface) => {
  const htmlRef = useRef<HTMLDivElement>(null)

  // remove style from html
  useEffect(() => {
    htmlRef.current
      ?.querySelectorAll('p span')
      ?.forEach((element) => element.removeAttribute('style'))
  }, [])

  return (
    <div
      className='text-slate-400 text-xl font-light'
      ref={htmlRef}
      dangerouslySetInnerHTML={{
        __html: description ?? '',
      }}
    />
  )
}

export default Description
