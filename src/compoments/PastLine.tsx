import Response from './Response'

const PastLine = (props: { value: string }) => {
  return (
    <>
      <span>{props.value}</span>
      <Response value={props.value} />
    </>
  )
}

export default PastLine
