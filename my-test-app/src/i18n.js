import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {
      welcome: "Welcome to The Management System",
      role: "Role",
      fetchData: "Fetch Data",
      loading: "Loading...",
      errorFetching: "Error fetching data.",
      navbar: {
        title: "Management System",
        home: "Home",
        sales: "Sales",
        inventory: "Inventory",
        stocks: "Stocks",
        statistics: "Statistics",
        logout: "LogOut",
      },
      stock: {
        statisticsTitle: "Stock Statistics",
        chartTitle: "Stock Quantities by Type",
        overviewTitle: "Stock Overview",
        quantity: "Quantity",
        units: "units",
        rawMaterial: "Raw Material",
        finishedProduct: "Finished Product",
        packaging: "Packaging",
      },
      stocks: {
        title: "Stock Entry",
        itemCode: "Item Code",
        itemType: "Item Type",
        selectType: "Select type",
        quantity: "Quantity",
        date: "Date",
        submit: "Submit",
        successMessage: "Stock entry submitted successfully!",
        rawMaterial: "Raw Material",
        finishedProduct: "Finished Product",
        packaging: "Packaging",
      },
      login: {
        title: "Electric Co. Login",
        username: "Username",
        password: "Password",
        button: "Login",
        invalidCredentials: "Invalid username or password.",
      },
    },
  },
  zh: {
    translation: {
      welcome: "欢迎使用管理系统",
      role: "角色",
      fetchData: "获取数据",
      loading: "加载中...",
      errorFetching: "获取数据出错。",
      navbar: {
        title: "管理系统",
        home: "主页",
        sales: "销售",
        inventory: "库存",
        stocks: "存货",
        statistics: "统计",
        logout: "登出",
      },
      stock: {
        statisticsTitle: "库存统计",
        chartTitle: "按类型划分的库存数量",
        overviewTitle: "库存概览",
        quantity: "数量",
        units: "单位",
        rawMaterial: "原材料",
        finishedProduct: "成品",
        packaging: "包装材料",
      },
      stocks: {
        title: "库存录入",
        itemCode: "物料编码",
        itemType: "物料类型",
        selectType: "选择类型",
        quantity: "数量",
        date: "日期",
        submit: "提交",
        successMessage: "库存提交成功！",
        rawMaterial: "原材料",
        finishedProduct: "成品",
        packaging: "包装材料",
      },
      login: {
        title: "电力公司登录",
        username: "用户名",
        password: "密码",
        button: "登录",
        invalidCredentials: "用户名或密码无效。",
      },
    },
  },
};




  

i18n
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    lng:"en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
