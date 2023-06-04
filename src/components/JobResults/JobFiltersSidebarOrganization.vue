<template>
  <collapsible-accordion heading="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input type="checkbox" id="vueTube" class="mr-3">
            <label for="vueTube">Vue tube</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="vue and me" class="mr-3">
            <label for="vue and me">Vue and me</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="Et Vue Brute" class="mr-3">
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="Vue and half men" class="mr-3">
            <label for="Vue and half men">Vue and half men</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { CollapsibleAccordion } from '@/components/Shared'
export default {
  name: "JobFiltersSidebarOraganization",
  components:{
    CollapsibleAccordion
  }
}
</script>
