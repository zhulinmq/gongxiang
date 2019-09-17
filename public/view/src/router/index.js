import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main"
import CompanyProfile from "@/components/pages/CompanyProfile"
import Login from "@/components/pages/Login"
import Register from "@/components/pages/Register"
import EditPassword from "@/components/pages/EditPassword"
import Password from "@/components/pages/Password"
import DiscountRecord from "@/components/pages/DiscountRecord"
import EditProfile from "@/components/pages/EditProfile"
import AccountSecurity from "@/components/pages/AccountSecurity"
import MyBenefits from "@/components/pages/MyBenefits"
import BankCards from "@/components/pages/BankCards"
import AddBankCards from "@/components/pages/AddBankCards"

import CashWithdrawal from "@/components/pages/CashWithdrawal"

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/cashWithdrawal',
        name: 'cashWithdrawal',
        component: CashWithdrawal
    }, {
        path: '/addBankCards',
        name: 'addBankCards',
        component: AddBankCards
    }, {
        path: '/bankCards',
        name: 'bankCards',
        component: BankCards
    }, {
        path: '/myBenefits',
        name: 'myBenefits',
        component: MyBenefits
    }, {
        path: '/accountSecurity',
        name: 'accountSecurity',
        component: AccountSecurity
    }, {
        path: '/editProfile',
        name: 'editProfile',
        component: EditProfile
    }, {
        path: '/main',
        name: 'main',
        component: Main
    }, {
        path: '/',
        name: 'login',
        component: Login
    }, {
        path: '/companyProfile',
        name: 'companyProfile',
        component: CompanyProfile
    }, {
        path: '/register',
        name: 'register',
        component: Register
    }, {
        path: '/editPassword',
        name: 'editPassword',
        component: EditPassword
    }, {
        path: '/password',
        name: 'password',
        component: Password
    }, {
        path: '/discountRecord',
        name: 'discountRecord',
        component: DiscountRecord
    }]
})