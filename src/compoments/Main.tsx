import Line from './Line'
import { useAtomValue } from 'jotai'
import { valuesAtom } from '../jotai/global'

const Main = () => {
  const values = useAtomValue(valuesAtom)

  return (
    <main className=" bg-black text-white flex flex-col flex-1 pt-10">
      {values.map((value, index) => (
        <Line
          key={index}
          index={index}
          value={value}
          activeLine={index === values.length - 1 ? true : false}
        />
      ))}
    </main>
  )
}

export default Main
