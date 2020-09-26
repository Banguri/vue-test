<template>
  <b-tabs pills nav-class="" content-class="p-15">
    <b-tab active>
      <template slot="title">
        <span class="d-sm-none">Tab 1</span>
        <span class="d-sm-block d-none">영업계약정보</span>
      </template>
      <configurationForm :goList="goList" :SiteID="SiteID" />
    </b-tab>
    <b-tab>
      <template slot="title">
        <span class="d-sm-none">Tab 2</span>
        <span class="d-sm-block d-none">사이트 설정 정보</span>
      </template>
      <settingForm :goList="goList" :SiteID="SiteID" />
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: "CustomTab",
};
</script>
