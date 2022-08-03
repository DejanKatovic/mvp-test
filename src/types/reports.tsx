export interface IProject {
  projectId: string
  userIds: string[]
  rule: string
  gatewayIds: string[]
  structure: string
  industry: string
  website: string
  description: string
  image: string
  name: string
}

export interface IProjectsResult {
  code: string
  data: IProject[]
  error: string | null
}
