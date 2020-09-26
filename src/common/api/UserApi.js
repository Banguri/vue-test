import {updateSession} from '@@/_core/store/sessionService';
import crypto from 'crypto';
import API from '../../fetchSheets/apiList';
import pageiList from '../../fetchSheets/pageiList';
import BaseRepository  from './BaseRepository';
import {Vue} from "vue-property-decorator";


const pages = [
    'checkout',
    'my-account',
    'cart-list',
    'order-traking',
    'mpg/mypage',
];
export default class UserApi{

    constructor(prop) {
      this.prop = prop;
    }

    async logOut(isNonCheckPage) {
        const result = await this.prop.$fetch({
            api: {
                path: `/mng/signOut`,
            },
        });
        const baseRepository = new BaseRepository(this);
        if (baseRepository.checkRequestSucceeded(result,"200")) {
            localStorage.setItem('isLogout', 'true');
            await this.authJwtWithUpdateSession();
            if (!isNonCheckPage) {
                console.log('checkPage !!');
                this.checkPage();
            }
        } else {
            return 'API went wrong';
        }
    }

    checkPage() {
        const page = this.prop.$router.currentRoute.path.replace('/', '').trim();
        this.prop.$router.push(pageiList.LoginPage.path);
        // if (this.prop.pages.includes(page)) {
        //     this.prop.$router.push({path: '/main'});
        // } else {
        //     location.reload();
        // }
    }
    //
    // export
    //
    // async function
    //
    async authJwtWithUpdateSession() {
      // const result = await this.prop.$fetch({
        //     api: {
        //         path: API.SESSION.url,
        //         method: API.SESSION.method,
        //         withCredentials: true,
        //     },
        // });
        // if (result.status !== 200) {
        //     throw new Error('Network status is corrupted');
        // }
        // console.log('jwt result', result);
        // await updateSession(this.prop.$store.dispatch, result);
        // return result;
    }
    //
    // export
    //
    // async function
    //
    // initPassword(data) {
    //     try {
    //         const formData = cloneDeep(data);
    //         const res = await this.$fetch({
    //             api: {
    //                 path: '/svc/customerApi/initPassword',
    //                 method: 'post',
    //             },
    //             data: {
    //                 customerId: formData.customerId,
    //                 name: formData.name,
    //                 cellPhone: formData.cellPhone,
    //             },
    //         });
    //         if (res.data.result === '200') {
    //             this.$toast.success({
    //                 message: res.data.resultMessage,
    //                 position: 'top right',
    //                 timeOut: 5000,
    //             });
    //         } else {
    //             this.$toast.error({
    //                 message: res.data.resultMessage,
    //                 position: 'top right',
    //                 timeOut: 5000,
    //             });
    //         }
    //     } catch (e) {
    //         console.log(e);
    //         throw e;
    //     }
    // }
    //
    //
    // export
    // function
    //
    // changePassword(formData) {
    //     const oldPassword = this.$get(formData, 'oldPassword', '');
    //     const newPassword = this.$get(formData, 'newPassword', '');
    //     const customerId = this.$get(formData, 'customerId', '');
    //     return this.$fetch({
    //         api: {
    //             path: API.RESET_PASSWORD.url,
    //             method: API.RESET_PASSWORD.method,
    //         },
    //         data: {
    //             customerId: customerId,
    //             oldPassword: crypto
    //                 .createHash('sha512')
    //                 .update(oldPassword)
    //                 .digest('base64'),
    //             newPassword: crypto
    //                 .createHash('sha512')
    //                 .update(newPassword)
    //                 .digest('base64'),
    //         },
    //     });
    // }
    //
    // export
    // function
    //
    // resetPassword(formData) {
    //     const customerId = this.$get(formData, 'customerId', '');
    //     const newPassword = this.$get(formData, 'newPassword', '');
    //     return this.$fetch({
    //         api: {
    //             path: API.RESET_PASSWORD.url,
    //             method: API.RESET_PASSWORD.method,
    //         },
    //         data: {
    //             customerId: customerId,
    //             newPassword: crypto
    //                 .createHash('sha512')
    //                 .update(newPassword)
    //                 .digest('base64'),
    //         },
    //     });
    // }
    //
    // export
    // function
    //
    // confirmPassword(password) {
    //     return this.$fetch({
    //         api: {
    //             path: API.PASSWORD_CONFIRM.url,
    //             method: API.PASSWORD_CONFIRM.method,
    //         },
    //         data: {
    //             password: crypto
    //                 .createHash('sha512')
    //                 .update(password)
    //                 .digest('base64'),
    //         },
    //     });
    // }
    //
    // export
    // function
    //
    // changeUserInfo(formData) {
    //     return this.$fetch({
    //         api: {
    //             path: API.CUSTOMER_UPDATE.url,
    //             method: API.CUSTOMER_UPDATE.method,
    //         },
    //         query: {
    //             customerNo: this.$store.state.session.user.customer.customerNo,
    //         },
    //         data: formData,
    //     });
    // }
    //
    // export
    //
    //  function
    //
    async login({ id, password, keepLogin }) {
      const res = await this.prop.$fetch({
        api: {
          path: API.LOGIN.url,
          method: API.LOGIN.method,
        },
        data: {
          id,
          password: crypto
            .createHash("sha512")
            .update(password)
            .digest("base64"),
          keepLogin: keepLogin,
        },
      });
      
      return res;
    }
    //
    //
    // export
    //
    // async function
    //
    // customerCreate(data) {
    //     try {
    //         const res = await this.$fetch({
    //             api: {
    //                 path: API.CUSTOMER_CREATE.url,
    //                 method: API.CUSTOMER_CREATE.method,
    //             },
    //             data: data,
    //         });
    //         return res;
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // }
    //
    // export
    //
    // async function
    //
    // sessionLogin(session) {
    //     const res = await this.$fetch({
    //         api: {
    //             path: API.SESSION_LOGIN.url,
    //             method: API.SESSION_LOGIN.method,
    //         },
    //         data: {
    //             key: session,
    //         },
    //     });
    //     const result = this.$get(res, 'data.result', '');
    //     if (result === '200') {
    //         await this.authJwtWithUpdateSession();
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    //
    //
    // export
    // function
    //
    // loginWithAppToken(tokenId) {
    //     return this.$fetch({
    //         api: {
    //             path: API.LOGIN_APP_TOKEN.url,
    //             method: API.LOGIN_APP_TOKEN.method,
    //         },
    //         data: {
    //             tokenId: tokenId,
    //         },
    //     });
    // }
    //
    // export
    //
    // async function
    //
    // getUserProfile() {
    //     const data = await this.$fetch({
    //         api: {
    //             path: API.CUSTOMER_READ.url,
    //             method: API.CUSTOMER_READ.method,
    //         },
    //         query: {},
    //     });
    //     return data;
    // }
    //
    //
    // export
    //
    // async function
    //
    // findPassword({
    //                  authorizationDI = '',
    //                  name = '',
    //                  customerId = '',
    //                  cellPhone = '',
    //              }) {
    //     try {
    //         const {data} = await this.$$fetch({
    //             api: {
    //                 path: API.FIND_PASSWORD.url,
    //                 method: API.FIND_PASSWORD.method,
    //             },
    //             query: {
    //                 authorizationDI: authorizationDI,
    //                 name: name,
    //                 customerId: customerId,
    //                 cellPhone: cellPhone,
    //             },
    //         });
    //
    //         return data;
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // }
}

