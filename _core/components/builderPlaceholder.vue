<template>
	<div class="component-placeholder" data-system-ghost='true' :style="style" v-if="$isEditor()">
		<div class="text">
			{{ title || 'Setting Me' }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		width: String,
		height: String,
	},

	computed: {
		style() {
			// if ( !this.$isEditor() ) {
			//   return { display: 'none' }
			// }

			return {
				width: this.width,
				height: this.height,
			}
		},
	},
}
</script>

<style scoped>
.component-placeholder {
	border: 3px dashed #2c8bd4b8;
	border-radius: 10px;
	background-color: #82c8ff24;
	color: #fff;
	text-align: center;
	display: block;
}

.component-placeholder:before {
	content: ' ';
	height: 100%;
	display: inline-block;
	width: 0;
	vertical-align: middle;
}

.component-placeholder .text {
	display: inline-block;
	font-size: 24px;
	text-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
	color: #065796;
	vertical-align: middle;
}
</style>
