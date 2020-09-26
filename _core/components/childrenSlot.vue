<template>
	<div
		data-system-property-type="children"
		style="width:100%;"
		class="children-slot"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.children-slot {
	width: inherit;
	height: inherit;
}
</style>
