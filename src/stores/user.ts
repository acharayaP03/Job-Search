import {defineStore} from 'pinia'
import {reactive, ref, toRefs} from 'vue'

export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS'
export const ADD_SELECTED_JOB_TYPES = 'ADD_SELECTED_JOB_TYPES'
export const ADD_SELECTED_DEGREE_TYPE = 'ADD_SELECTED_DEGREE_TYPE'
export const CLEAR_USER_JOB_SELECTIONS = 'CLEAR_USER_JOB_SELECTIONS'
export interface UserState {
  isLoggedIn: boolean
  selectedOrganizations: string[]
  selectedJobTypes: string[]
  selectedDegreeType: string[]
}

export const useUserStore = defineStore('user', () => {
  const state: UserState = reactive({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegreeType: []
  })

  const {isLoggedIn, selectedOrganizations, selectedJobTypes, selectedDegreeType} = toRefs(state)

  const LOGIN_USER = () => {
    state.isLoggedIn = true
  }

  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
    state.selectedOrganizations = organizations
  }
  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    state.selectedJobTypes = jobTypes
  }
  const ADD_SELECTED_DEGREE_TYPE = (degree: string[]) => {
    state.selectedDegreeType = degree
  }
  const CLEAR_USER_JOB_SELECTIONS = () => {
    state.selectedDegreeType = []
    state.selectedJobTypes = []
    state.selectedOrganizations = []
  }

  return {
    isLoggedIn,
    selectedOrganizations,
    selectedJobTypes,
    selectedDegreeType,
    LOGIN_USER,
    ADD_SELECTED_ORGANIZATIONS,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_DEGREE_TYPE,
    CLEAR_USER_JOB_SELECTIONS
  }
})
