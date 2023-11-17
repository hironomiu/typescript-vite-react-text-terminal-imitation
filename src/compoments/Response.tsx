import { commands } from '../commands'

const Response = (props: { value: string }) => {
  const trimedValue = props.value.trimStart()
  if (trimedValue.length === 0) return <></>

  if (commands.get(trimedValue))
    return <div className="successed-command">{commands.get(trimedValue)}</div>

  if (trimedValue.split(' ')[0] === 'echo') {
    return <div className="successed-command">{trimedValue.split(' ')[1]}</div>
  }
  return <div>command not found: {trimedValue}</div>
}

export default Response
