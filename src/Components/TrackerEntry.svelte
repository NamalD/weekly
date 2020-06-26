<script>
  export let value;
  export let unsetValue = "-";
  export let entryOptions;
  export let setValue;

  let dropdownIsActive = false;

  const toggleDropdownActive = () => (dropdownIsActive = !dropdownIsActive);

  const hideDropdown = () => (dropdownIsActive = false);
</script>

<div
  class="dropdown {dropdownIsActive ? 'is-active' : null}"
  on:click={toggleDropdownActive}
  on:mouseleave={hideDropdown}>
  <div class="dropdown-trigger">
    <button
      class="button {value ? 'is-success' : null}"
      aria-haspopup="true"
      aria-controls="dropdown-menu">
      {value ? value : unsetValue}
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      {#each entryOptions as entryOption}
        <a href="#/" class="dropdown-item" on:click={setValue(entryOption)}>
          {entryOption ? entryOption : 'None'}
        </a>
      {/each}
    </div>
  </div>
</div>
