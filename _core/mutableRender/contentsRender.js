import DefaultEditable from './DefaultEditable';
import applicationConfig from '../../config';
import EditablePageParams from '../common/editablePageParams';
import { actionTypes } from '../store/page';

export default {
	...DefaultEditable,
	methods: {
		...DefaultEditable.methods
	}
};
