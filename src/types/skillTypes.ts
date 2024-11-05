export interface ISkill {
  id: string
  type: string
  attributes: {
    name: string
    type: string
    level: string
    importance: string
  }
  relationships: {
    jobs: { id: string }[]
    skills: { id: string }[]
  }
}

export interface INormalizeSkillState {
  name: string
  type: string
  level: string
  importance: string
  jobsRelationships?: string[]
  skillsRelationships?: string[]
}

export interface ISkillsState {
  byId: Record<string, INormalizeSkillState>
  allIds: string[]
}
