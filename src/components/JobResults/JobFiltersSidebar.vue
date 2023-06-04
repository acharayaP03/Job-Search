<template>
  <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" button-type="secondary" />
        </div>
      </div>
      <collapsible-accordion>
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
    </section>
  </div>
</template>

<script>
import { CollapsibleAccordion, ActionButton } from '@/components/Shared'

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    CollapsibleAccordion
  }
}
</script>