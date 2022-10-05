import { Runner } from "../typings"

type Props = {
  runner: Runner
}

const RunnerCard = ({ runner }: Props) => {
  return (
    <div>{runner.firstName}</div>
  )
}

export default RunnerCard