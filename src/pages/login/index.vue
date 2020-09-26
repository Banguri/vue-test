<template>
  <!-- begin login -->
  <div class="login login-v1">
    <!-- begin login-container -->
    <div class="login-container">
      <!-- begin login-header -->
      <div class="login-header">
        <div class="brand">
          <span class="logo"></span> <b>LG BOS</b>
          <small>responsive bootstrap 4 admin template</small>
        </div>
        <div class="icon">
          <i class="fa fa-lock"></i>
        </div>
      </div>
      <!-- end login-header -->
      <!-- begin login-body -->
      <div class="login-body">
        <!-- begin login-content -->
        <div class="login-content">
          <form v-on:submit="checkForm" method="POST" class="margin-bottom-0">
            <div class="form-group m-b-20">
              <input
                id="id"
                v-model="queryParmas.id"
                type="text"
                class="form-control form-control-lg inverse-mode"
                placeholder="ID"
                required
              />
            </div>
            <div class="form-group m-b-20">
              <input
                id="pw"
                v-model="queryParmas.password"
                type="password"
                class="form-control form-control-lg inverse-mode"
                placeholder="Password"
                required
              />
            </div>
            <div class="login-buttons">
              <button type="submit" class="btn btn-success btn-block btn-lg">
                Sign
              </button>
              <button type="submit" class="btn btn-success btn-block btn-lg">
                password find
              </button>
            </div>
          </form>
        </div>
        <!-- end login-content -->
      </div>
      <!-- end login-body -->
    </div>
    <!-- end login-container -->
  </div>
  <!-- end login -->
</template>

<script>
import PageOptions from "../../config/PageOptions.vue";
import UserApi from "../../common/api/UserApi";
import API from "../../fetchSheets/apiList";
import crypto from "crypto";
import { getToken } from "@@/_core/store/sessionService";

export default {
  layout: "login",
  data() {
    return {
      queryParmas: {
        id: "",
        password: "",
        keepLogin: "",
      },
    };
  },
  created() {
    PageOptions.pageEmpty = true;
  },
  beforeRouteLeave(to, from, next) {
    PageOptions.pageEmpty = false;
    next();
  },
  methods: {
    checkForm: async function(e) {
      e.preventDefault();
      const userApi = new UserApi(this);
      const { queryParmas } = this;

      const res = await userApi.login(queryParmas);

      if (res.data.hasOwnProperty("result")) {
        const { result, resultMessage } = res.data;
        if (result === "200") {
          // 라우팅이 변경 되면서 router middleware JWT 갱신
          this.$router.push("/");
        } else {
          alert(resultMessage);
        }
      }
    },
  },
};
</script>
