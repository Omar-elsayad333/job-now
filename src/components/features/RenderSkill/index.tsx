// Types
import type { IChipProps } from '../../ui/Chip/types'

// Components
import Chip from '../../ui/Chip'

// Containers
import useRednerSkill from './useRenderSkill'

interface IProps extends IChipProps {
  skillId: string
}

const RenderSkill: React.FC<IProps> = ({ skillId, ...props }) => {
  const { loading, skill } = useRednerSkill(skillId)

  return <Chip {...props}>{loading ? 'loading...' : skill && skill.name}</Chip>
}

export default RenderSkill
