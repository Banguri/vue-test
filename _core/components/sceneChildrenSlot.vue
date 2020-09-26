<script>
import get from 'lodash/get'

const fadeTypes = [
	'right', // 옆으로
	'top', // 위로
	'crossFade', // 겹치며 페이드인/아웃
	'no-effect',
]

export default {
	props: {
		transitionType: {
			type: Object,
			default: () => ({
				value: 'no-effect',
				label: '없음',
			}),
		},
	},

	data() {
		return {
			currentSceneIndex: 0,
		}
	},

	computed: {
		sceneCount() {
			return this.$slots.default.length
		},
	},

	mounted() {
		this.$el.__system = {
			actions: {
				next: this.next,
				prev: this.prev,
			},
		}
	},

	methods: {
		sceneStyle_right(sceneIndex) {
			return {}
		},
		sceneStyle_top(sceneIndex) {
			return {}
		},
		sceneStyle_crossFade(sceneIndex) {
			return {}
		},
		sceneStyle_no_effect(sceneIndex) {
			return {}
		},
		sceneStyle(sceneIndex) {
			switch (this.transitionType.value) {
				case 'no-effect':
					return this.sceneStyle_no_effect(sceneIndex)
				case 'sceneStyle_right':
					return this.sceneStyle_right(sceneIndex)
				case 'sceneStyle_top':
					return this.sceneStyle_top(sceneIndex)
				case 'sceneStyle_crossFade':
				default:
					return this.sceneStyle_crossFade(sceneIndex)
			}
		},

		renderScene(createElement, i, scene) {
			return createElement(
				'div',
				{
					class: 'scene',
					style: this.sceneStyle(i),
				},
				[scene]
			)
		},

		next() {
			let nextIndex = this.currentSceneIndex + 1
			if (this.sceneCount <= nextIndex) {
				nextIndex = 0
			}

			this.currentSceneIndex = nextIndex
		},

		prev() {
			let nextIndex = this.currentSceneIndex - 1
			if (nextIndex < 0) {
				nextIndex = this.sceneCount - 1
			}

			this.currentSceneIndex = nextIndex
		},

		jumpTo() {},
	},

	render(createElement) {
		let slots = get(this.$slots, 'default', [])

		return createElement(
			'div',
			{
				class: {
					'scene-children-container': true,
					['transition-' + this.transitionType.value]: true,
				},
				attrs: {
					'data-system-property-type': 'scene-children',

					'data-system-handles': JSON.stringify([
						{
							handleName: 'scene-control',
							actions: [
								{
									actionKey: 'next',
									actionNameKey: 'next',
								},
								{
									actionKey: 'prev',
									actionNameKey: 'prev',
								},
							],
						},
					]),
				},
				style: {
					width: '100%',
					height: '100%',
				},
			},
			slots.map((vnode, i) => this.renderScene(createElement, i, vnode))
		)
	},
}
</script>

<style scoped lang="scss">
.scene-children-container {
	width: inherit;
	height: inherit;
	overflow: hidden;

	&.vertical-array {
		word-break: keep-all;
	}

	.scene {
		width: 100%;
		height: 100%;
		display: inline-block;
		background-color: #000;
	}
}
</style>
