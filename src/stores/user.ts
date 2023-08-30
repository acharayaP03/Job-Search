import {defineStore} from 'pinia'
import { ref } from 'vue';

export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS'
export const ADD_SELECTED_JOB_TYPES = 'ADD_SELECTED_JOB_TYPES';
export const ADD_SELECTED_DEGREE_TYPE = 'ADD_SELECTED_DEGREE_TYPE'
export const CLEAR_USER_JOB_SELECTIONS = 'CLEAR_USER_JOB_SELECTIONS'
export interface UserState {
  isLoggedIn: boolean
  selectedOrganizations: string[]
  selectedJobTypes: string[],
  selectedDegreeType: string[]
}


export const useUserStore = defineStore("user", () =>{
  const isLoggedIn = ref(false);
  const selectedOrganizations = ref<string[]>([]);
  const selectedJobTypes = ref<string[]>([]);
  const selectedDegreeType = ref<string[]>([]);


  const LOGIN_USER = () => {
    isLoggedIn.value = true;
  }

  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) =>{
    selectedOrganizations.value = organizations
  }
  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
   selectedJobTypes.value = jobTypes
  }
  const ADD_SELECTED_DEGREE_TYPE = (degree: string[]) => {
    selectedDegreeType.value = degree
  }
  const CLEAR_USER_JOB_SELECTIONS = () => {
    selectedDegreeType.value = [];
    selectedJobTypes.value =[]
    selectedOrganizations.value =[]
  }

  return {
    isLoggedIn, selectedOrganizations, selectedJobTypes,selectedDegreeType, LOGIN_USER, ADD_SELECTED_ORGANIZATIONS, ADD_SELECTED_JOB_TYPES, ADD_SELECTED_DEGREE_TYPE, CLEAR_USER_JOB_SELECTIONS
  }
})

