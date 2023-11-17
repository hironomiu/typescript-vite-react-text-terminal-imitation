import { useAtomValue } from 'jotai'
import { promptAtom } from '../jotai/global'

const Prompt = () => {
  const prompt = useAtomValue(promptAtom)

  return (
    <>
      <span>{prompt}</span>
    </>
  )
}

export default Prompt
