<script>
import DashboardV1 from '../colorAdmin/components/Dashboard-v1.vue'
import DashboardV2 from '../colorAdmin/components/Dashboard-v2.vue'
import DashboardV3 from '../colorAdmin/components/Dashboard-v3.vue'
import EmailInbox from '../colorAdmin/components/Email-inbox.vue'
import EmailCompose from '../colorAdmin/components/Email-compose.vue'
import EmailDetail from '../colorAdmin/components/Email-detail.vue'
import Widgets from '../colorAdmin/components/Widgets.vue'
import UIGeneral from '../pages/admin/general/UI-general.vue'
import UITypography from '../colorAdmin/components/UI-typography.vue'
import UITabsAccordion from '../colorAdmin/components/UI-tabs-accordion.vue'
import UIModalNotification from '../colorAdmin/components/UI-modal-notification.vue'
import UIWidgetBoxes from '../colorAdmin/components/UI-widget-boxes.vue'
import UIMediaObject from '../colorAdmin/components/UI-media-object.vue'
import UIButtons from '../colorAdmin/components/UI-buttons.vue'
import UIIcons from '../colorAdmin/components/UI-icons.vue'
import UISimpleLineIcons from '../colorAdmin/components/UI-simple-line-icons.vue'
import UIIonicons from '../colorAdmin/components/UI-ionicons.vue'
import UILanguageBarIcon from '../colorAdmin/components/UI-language-bar-icon.vue'
import UISocialButtons from '../colorAdmin/components/UI-social-buttons.vue'
import Bootstrap4 from '../colorAdmin/components/Bootstrap-4.vue'
import FormElements from '../colorAdmin/components/Form-elements.vue'
import FormPlugins from '../colorAdmin/components/Form-plugins.vue'
import TableBasic from '../colorAdmin/components/Table-basic.vue'
import TableData from '../colorAdmin/components/Table-data.vue'
import ChartJs from '../colorAdmin/components/Chart-js.vue'
import ChartD3 from '../colorAdmin/components/Chart-d3.vue'
import ChartApex from '../colorAdmin/components/Chart-apex.vue'
import Calendar from '../colorAdmin/components/Calendar.vue'
import Map from '../colorAdmin/components/Map.vue'
import Gallery from '../colorAdmin/components/Gallery.vue'
import PageBlank from '../colorAdmin/components/Page-blank.vue'
import PageWithFooter from '../colorAdmin/components/Page-with-footer.vue'
import PageWithoutSidebar from '../colorAdmin/components/Page-without-sidebar.vue'
import PageWithRightSidebar from '../colorAdmin/components/Page-with-right-sidebar.vue'
import PageWithMinifiedSidebar from '../colorAdmin/components/Page-with-minified-sidebar.vue'
import PageWithTwoSidebar from '../colorAdmin/components/Page-with-two-sidebar.vue'
import PageFullHeight from '../colorAdmin/components/Page-full-height.vue'
import PageWithWideSidebar from '../colorAdmin/components/Page-with-wide-sidebar.vue'
import PageWithLightSidebar from '../colorAdmin/components/Page-with-light-sidebar.vue'
import PageWithMegaMenu from '../colorAdmin/components/Page-with-mega-menu.vue'
import PageWithTopMenu from '../colorAdmin/components/Page-with-top-menu.vue'
import PageWithBoxedLayout from '../colorAdmin/components/Page-with-boxed-layout.vue'
import PageWithMixedMenu from '../colorAdmin/components/Page-with-mixed-menu.vue'
import PageBoxedLayoutWithMixedMenu from '../colorAdmin/components/Page-boxed-layout-with-mixed-menu.vue'
import PageWithTransparentSidebar from '../colorAdmin/components/Page-with-transparent-sidebar.vue'
import PageWithSearchSidebar from '../colorAdmin/components/Page-with-search-sidebar.vue'
import ExtraTimeline from '../colorAdmin/components/Extra-timeline.vue'
import ExtraComingSoon from '../colorAdmin/components/Extra-coming-soon.vue'
import ExtraSearch from '../colorAdmin/components/Extra-search.vue'
import ExtraInvoice from '../colorAdmin/components/Extra-invoice.vue'
import ExtraError from '../colorAdmin/components/Extra-error.vue'
import ExtraProfile from '../colorAdmin/components/Extra-profile.vue'
import ExtraScrumBoard from '../colorAdmin/components/Extra-scrum-board.vue'
import ExtraCookieAcceptanceBanner from '../colorAdmin/components/Extra-cookie-acceptance-banner.vue'
import UserLoginV1 from '../colorAdmin/components/User-login-v1.vue'
import UserLoginV2 from '../colorAdmin/components/User-login-v2.vue'
import UserLoginV3 from '../colorAdmin/components/User-login-v3.vue'
import UserRegisterV3 from '../colorAdmin/components/User-register-v3.vue'
import HelperCss from '../colorAdmin/components/Helper-css'

const routes = [
  { path: '/dashboard/v1', component: DashboardV1 },
  { path: '/dashboard/v2', component: DashboardV2 },
  { path: '/dashboard/v3', component: DashboardV3 },
  { path: '/email/inbox', component: EmailInbox },
  { path: '/email/compose', component: EmailCompose },
  { path: '/email/detail', component: EmailDetail },
  { path: '/widgets', component: Widgets },
  { path: '/admin/general', component: UIGeneral },
  { path: '/ui/typography', component: UITypography },
  { path: '/ui/tabs-accordions', component: UITabsAccordion },
  { path: '/ui/modal-notification', component: UIModalNotification },
  { path: '/ui/widget-boxes', component: UIWidgetBoxes },
  { path: '/ui/media-object', component: UIMediaObject },
  { path: '/ui/buttons', component: UIButtons },
  { path: '/ui/icons', component: UIIcons },
  { path: '/ui/simple-line-icons', component: UISimpleLineIcons },
  { path: '/ui/ionicons', component: UIIonicons },
  { path: '/ui/language-bar-icon', component: UILanguageBarIcon },
  { path: '/ui/social-buttons', component: UISocialButtons },
  { path: '/bootstrap-4', component: Bootstrap4 },
  { path: '/form/elements', component: FormElements },
  { path: '/form/plugins', component: FormPlugins },
  { path: '/table/basic', component: TableBasic },
  { path: '/table/data', component: TableData },
  { path: '/chart/js', component: ChartJs },
  { path: '/chart/d3', component: ChartD3 },
  { path: '/chart/apex', component: ChartApex },
  { path: '/calendar', component: Calendar },
  { path: '/map', component: Map },
  { path: '/page-option/blank', component: PageBlank },
  { path: '/page-option/with-footer', component: PageWithFooter },
  { path: '/page-option/without-sidebar', component: PageWithoutSidebar },
  { path: '/page-option/with-right-sidebar', component: PageWithRightSidebar },
  { path: '/page-option/with-minified-sidebar', component: PageWithMinifiedSidebar },
  { path: '/page-option/with-two-sidebar', component: PageWithTwoSidebar },
  { path: '/page-option/full-height', component: PageFullHeight },
  { path: '/page-option/with-wide-sidebar', component: PageWithWideSidebar },
  { path: '/page-option/with-light-sidebar', component: PageWithLightSidebar },
  { path: '/page-option/with-mega-menu', component: PageWithMegaMenu },
  { path: '/page-option/with-top-menu', component: PageWithTopMenu },
  { path: '/page-option/with-boxed-layout', component: PageWithBoxedLayout },
  { path: '/page-option/with-mixed-menu', component: PageWithMixedMenu },
  { path: '/page-option/boxed-layout-with-mixed-menu', component: PageBoxedLayoutWithMixedMenu },
  { path: '/page-option/with-transparent-sidebar', component: PageWithTransparentSidebar },
  { path: '/page-option/with-search-sidebar', component: PageWithSearchSidebar },
  { path: '/gallery', component: Gallery },
  { path: '/extra/timeline', component: ExtraTimeline },
  { path: '/extra/coming-soon', component: ExtraComingSoon },
  { path: '/extra/search', component: ExtraSearch },
  { path: '/extra/invoice', component: ExtraInvoice },
  { path: '/extra/error', component: ExtraError },
  { path: '/extra/profile', component: ExtraProfile },
  { path: '/extra/scrum-board', component: ExtraScrumBoard },
  { path: '/extra/cookie-acceptance-banner', component: ExtraCookieAcceptanceBanner },
  { path: '/user/login-v1', component: UserLoginV1 },
  { path: '/user/login-v2', component: UserLoginV2 },
  { path: '/user/login-v3', component: UserLoginV3 },
  { path: '/user/register-v3', component: UserRegisterV3 },
  { path: '/helper/css', component: HelperCss }
]

export default routes;
</script>
