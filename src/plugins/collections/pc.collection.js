import { registerCollection } from '../../../_core/plugin/AsyncComponentInstaller';

// registerCollection( require( '../../components/@theme/sample/sample.collection.ts' ).default );
registerCollection( require( '../../components/main.collection.js' ).default );
// registerCollection( require( '../../components/unishop/ecommerce/commerce.collection.js' ).default );
registerCollection( require( '../../common/common.colletion.js' ).default );
