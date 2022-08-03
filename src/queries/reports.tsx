import { useQuery } from "@tanstack/react-query"
import { AxiosResponse, AxiosError } from "axios"

import { getApiClient } from "src/modules/axios"
import { useGetMutation } from "src/modules/mutation"
import { IProjectsResult } from "src/types/reports"

const getAllProjects = () => {
  return getApiClient().get("/projects")
}

export const useGetAllProjects = () => {
  return useQuery<AxiosResponse<IProjectsResult>, AxiosError>(["projects"], () => getAllProjects())
}
