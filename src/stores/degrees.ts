import { defineStore } from "pinia";
import { ref, computed } from 'vue';
import type {Degree} from "@/api/types";
import getDegrees from "@/api/getDegree";

export const useDegreesStore = defineStore("degrees", () => {
    const degrees = ref<Degree[]>([]);

    const FETCH_DEGREES = async () => {
        const receivedDegrees = await getDegrees();
        degrees.value = receivedDegrees
    }

    const UNIQUE_DEGREES = computed(() => degrees.value.map( (degree) => degree.degree))
    return { degrees, FETCH_DEGREES, UNIQUE_DEGREES }
})